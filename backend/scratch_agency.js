const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nivara_db'
});

const html = `<style>
    .custom-page-wrapper {
      display:flex;
      justify-content:center;
      align-items:center;
      background:#f4f4f4;
      padding: 60px 20px;
    }

    .form-container{
      background:white;
      padding:30px;
      width:350px;
      border-radius:12px;
      box-shadow:0 4px 10px rgba(0,0,0,0.1);
      margin: 0 auto;
    }

    .form-container h2{
      text-align:center;
      margin-bottom:20px;
      color:#333;
    }

    .input-group{
      margin-bottom:15px;
    }

    .input-group label{
      display:block;
      margin-bottom:6px;
      color:#555;
      font-size:14px;
    }

    .input-group input{
      width:100%;
      padding:10px;
      border:1px solid #ccc;
      border-radius:8px;
      outline:none;
      font-size:14px;
    }

    .input-group input:focus{
      border-color:#007bff;
    }

    .form-container button{
      width:100%;
      padding:12px;
      border:none;
      background:#007bff;
      color:white;
      font-size:16px;
      border-radius:8px;
      cursor:pointer;
      transition:0.3s;
    }

    .form-container button:hover{
      background:#0056b3;
    }
  </style>

  <div class="custom-page-wrapper">
    <div class="form-container">
      <h2>Login Form</h2>
      <form>
        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email">
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>`;

db.query('UPDATE pages SET content = ? WHERE slug="agency"', [html], (err, results) => {
    if (err) console.error(err);
    else console.log('Updated agency page successfully to fix CSS collapse');
    db.end();
});
