const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nivara_db'
});

const html = `<style>
  .custom-form-card {
    max-width: 450px;
    margin: 40px auto;
    padding: 30px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    font-family: 'Poppins', sans-serif;
    border: 1px solid #eaeaea;
  }
  .form-title {
    color: #B3191F;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .form-label {
    font-size: 14px;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }
  .form-control {
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s ease;
  }
  .form-control:focus {
    outline: none;
    border-color: #B3191F;
    box-shadow: 0 0 0 3px rgba(227, 33, 37, 0.1);
  }
  .text-muted {
    font-size: 12px;
    color: #64748b;
    margin-top: 6px;
  }
  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .checkbox-group input {
    width: 16px;
    height: 16px;
    accent-color: #B3191F;
    cursor: pointer;
  }
  .btn-submit {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #B3191F 0%, #b91825 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn-submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(227, 33, 37, 0.2);
  }
</style>

<div class="custom-form-card">
  <h2 class="form-title">Secure Login</h2>
  
  <form action="/submit-your-data" method="POST">
    <div class="form-group">
      <label class="form-label" for="email">Email address</label>
      <input type="email" id="email" class="form-control" placeholder="Enter email" required>
      <span class="text-muted">We'll never share your email with anyone else.</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="password">Password</label>
      <input type="password" id="password" class="form-control" placeholder="Password" required>
    </div>

    <div class="checkbox-group">
      <input type="checkbox" id="checkbox">
      <label class="form-label" style="margin-bottom:0; cursor:pointer;" for="checkbox">Check me out</label>
    </div>

    <button type="submit" class="btn-submit">Submit</button>
  </form>
</div>`;

db.query('UPDATE pages SET content = ? WHERE slug="agent"', [html], (err, results) => {
    if (err) console.error(err);
    else console.log('Updated db successfully using mysql2');
    db.end();
});
