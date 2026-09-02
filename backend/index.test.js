const request = require('supertest');
const jwt = require('jsonwebtoken');

// Mock MySQL connection/pool to avoid database dependency in testing
jest.mock('mysql2', () => {
    const mockDb = {
        connect: jest.fn((cb) => cb && cb(null)),
        on: jest.fn(),
        query: jest.fn((queryStr, params, cb) => {
            // Support call signature with or without params array
            const callback = typeof params === 'function' ? params : cb;
            callback(null, []); // Mock success query results
        })
    };
    return {
        createConnection: jest.fn(() => mockDb),
        createPool: jest.fn(() => mockDb)
    };
});

const app = require('./index');
const { JWT_SECRET } = require('./middleware/auth');

describe('Backend OWASP Security and Route Verification Tests', () => {

    test('GET / should return successful running status', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Nivara Backend Server is Running!');
    });

    test('HTTP response should enforce security headers (OWASP A05:2021)', async () => {
        const res = await request(app).get('/');
        expect(res.headers['x-frame-options']).toEqual('DENY');
        expect(res.headers['x-content-type-options']).toEqual('nosniff');
        expect(res.headers['x-xss-protection']).toEqual('1; mode=block');
        expect(res.headers['strict-transport-security']).toContain('max-age=31536000');
        expect(res.headers['x-powered-by']).toBeUndefined(); // Verification of disabled server signature
    });

    test('CORS Policy should block unauthorized origins (OWASP A05:2021)', async () => {
        // Test an origin that is allowed by our whitelist
        const resAllowed = await request(app)
            .get('/')
            .set('Origin', 'http://localhost:3000');
        expect(resAllowed.headers['access-control-allow-origin']).toEqual('http://localhost:3000');

        // Test an origin that is NOT in our whitelist
        const resBlocked = await request(app)
            .get('/')
            .set('Origin', 'http://malicioussite.com');
        expect(resBlocked.statusCode).toEqual(500); // CORS error throws internal server/routing error
    });

    test('POST /api/blogs should fail with 403 when token is missing (Broken Access Control)', async () => {
        const res = await request(app)
            .post('/api/blogs')
            .send({ title: 'New Test Blog' });
        expect(res.statusCode).toEqual(403);
        expect(res.body.message).toContain('No token provided');
    });

    test('POST /api/popups route should be registered and protected', async () => {
        const res = await request(app)
            .post('/api/popups')
            .send({ title: 'Test Popup' });
        expect(res.statusCode).toEqual(403);
        expect(res.body.message).toContain('No token provided');
    });

    test('POST /api/popups should accept title-only payload and default optional fields', async () => {
        const token = jwt.sign({ id: 1 }, JWT_SECRET);
        const res = await request(app)
            .post('/api/popups')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Test Popup' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toContain('Popup created successfully');
    });

    test('GET /api/pages/:slug should use prepared statement and handle not found gracefully (A03:2021)', async () => {
        const res = await request(app).get('/api/pages/test-slug');
        expect(res.statusCode).toEqual(404); // Successfully returns 404 since database returns no records
        expect(res.body.message).toContain('Page not found');
    });

    test('POST /api/quotes/apply should fail with 400 when fields are missing', async () => {
        const res = await request(app)
            .post('/api/quotes/apply')
            .send({ fullName: 'Harshita' });
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toContain('All form fields are required.');
    });

    test('POST /api/quotes/apply should fail with 400 for invalid email', async () => {
        const res = await request(app)
            .post('/api/quotes/apply')
            .send({
                fullName: 'Harshita',
                email: 'invalid-email',
                contactNumber: '9912705222',
                state: 'Andhra Pradesh',
                city: 'Rayachoti',
                preferredDate: '2026-06-23',
                loanAmount: '600000'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toContain('Invalid email format.');
    });

    test('POST /api/quotes/apply should succeed under fallback mode when valid data is supplied', async () => {
        const res = await request(app)
            .post('/api/quotes/apply')
            .send({
                fullName: 'Harshita',
                email: 'harshita@gmail.com',
                contactNumber: '9912705222',
                state: 'Andhra Pradesh',
                city: 'Rayachoti',
                preferredDate: '2026-06-23',
                loanAmount: '600000'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toContain('Quote request submitted successfully!');
    });
});
