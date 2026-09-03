const db = require('./config/db');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const request = require('supertest');
const app = require('./index');
const { JWT_SECRET } = require('./middleware/auth');

async function runTest() {
    console.log("🔍 Running Document API & Database Integration Test...");

    // 1. Generate valid admin token
    const token = jwt.sign({ id: 1, email: "admin@nivarahousing.com" }, JWT_SECRET, { expiresIn: '1h' });

    // 2. Query documents count
    const [initialCount] = await new Promise((resolve, reject) => {
        db.query("SELECT COUNT(*) as count FROM documents", (err, rows) => {
            if (err) reject(err); else resolve(rows);
        });
    });
    console.log(`✅ Current documents in database: ${initialCount.count}`);

    // 3. Create a dummy test PDF file
    const testPdfPath = path.join(__dirname, 'test_sample.pdf');
    fs.writeFileSync(testPdfPath, '%PDF-1.4 Mock PDF Content for Automated Testing %EOF');

    // 4. Test POST /api/documents
    const createRes = await request(app)
        .post('/api/documents')
        .set('Authorization', `Bearer ${token}`)
        .field('title', 'Automated Test Document Notice')
        .field('category', 'investor_notices')
        .field('publish_date', '2026-09-03')
        .field('extra_info', 'TestExtraInfo123')
        .attach('file', testPdfPath);

    console.log(`✅ POST /api/documents status: ${createRes.statusCode}`);
    if (createRes.statusCode !== 201) {
        console.error("❌ Failed to create document:", createRes.body);
        process.exit(1);
    }
    const createdId = createRes.body.id;
    const uploadedRelativeUrl = createRes.body.file_url;
    console.log(`   - Created Document ID: ${createdId}`);
    console.log(`   - Stored File URL: ${uploadedRelativeUrl}`);

    // Verify uploaded file exists on disk
    const uploadedDiskPath = path.join(__dirname, uploadedRelativeUrl);
    console.log(`   - File exists on disk: ${fs.existsSync(uploadedDiskPath)}`);

    // 5. Test GET /api/documents?category=investor_notices
    const getRes = await request(app).get('/api/documents?category=investor_notices');
    console.log(`✅ GET /api/documents?category=investor_notices status: ${getRes.statusCode}`);
    const found = getRes.body.find(d => d.id === createdId);
    if (!found) {
        console.error("❌ Newly created document was not returned in GET request!");
        process.exit(1);
    }
    console.log(`   - Successfully retrieved document from database: "${found.title}"`);

    // 6. Test DELETE /api/documents/:id
    const deleteRes = await request(app)
        .delete(`/api/documents/${createdId}`)
        .set('Authorization', `Bearer ${token}`);

    console.log(`✅ DELETE /api/documents/${createdId} status: ${deleteRes.statusCode}`);
    if (deleteRes.statusCode !== 200) {
        console.error("❌ Failed to delete document:", deleteRes.body);
        process.exit(1);
    }

    // 7. Verify deletion from MySQL database
    const [afterDelRows] = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM documents WHERE id = ?", [createdId], (err, rows) => {
            if (err) reject(err); else resolve([rows]);
        });
    });
    console.log(`   - Document in database after deletion: ${afterDelRows.length === 0 ? 'GONE (Confirmed)' : 'STILL PRESENT (ERROR)'}`);

    // 8. Verify deletion from disk
    const fileStillExists = fs.existsSync(uploadedDiskPath);
    console.log(`   - File on disk after deletion: ${!fileStillExists ? 'DELETED (Confirmed)' : 'STILL PRESENT (ERROR)'}`);

    // Clean up sample test PDF
    if (fs.existsSync(testPdfPath)) fs.unlinkSync(testPdfPath);

    if (afterDelRows.length === 0 && !fileStillExists) {
        console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! Full Database Storage & Admin Deletion verified.");
        process.exit(0);
    } else {
        console.error("❌ Test failed verification checks.");
        process.exit(1);
    }
}

runTest().catch(err => {
    console.error("Fatal error during test:", err);
    process.exit(1);
});
