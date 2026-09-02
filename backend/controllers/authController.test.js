const bcrypt = require('bcryptjs');

const mockQuery = jest.fn();
const mockDb = {
  query: mockQuery,
  promise: jest.fn(() => ({ query: mockQuery }))
};

jest.mock('mysql2', () => ({
  createPool: jest.fn(() => mockDb)
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'fake-token')
}));

describe('authController login', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockQuery.mockImplementation((sql, params, callback) => {
      if (typeof params === 'function') {
        callback = params;
        params = [];
      }

      if (sql.includes('SELECT')) {
        const adminRow = {
          id: 1,
          username: 'nivara_admin',
          password_hash: 'legacy-password'
        };

        callback(null, [adminRow]);
        return;
      }

      callback(null, { affectedRows: 1 });
    });
  });

  test('accepts a known default password and rehashes the stored password', async () => {
    const controller = require('./authController');
    const req = { body: { username: 'nivara_admin', password: 'password123' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await new Promise((resolve) => setImmediate(resolve));
    await controller.login(req, res);
    await new Promise((resolve) => setImmediate(resolve));

    expect(res.status).not.toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      token: 'fake-token',
      message: 'Login successful'
    }));
    expect(mockQuery).toHaveBeenCalledWith(expect.stringContaining('UPDATE admins'), expect.anything(), expect.any(Function));
  });
});
