const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nivara_db'
});

const html = `<style>
    .custom-card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      background: #f4f4f4;
    }

    .my-card {
      width: 320px;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: 0.3s;
      margin: 0 auto;
    }

    .my-card:hover {
      transform: translateY(-5px);
    }

    .my-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .my-card-content {
      padding: 20px;
    }

    .my-card-content h2 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #222;
    }

    .my-card-content p {
      font-size: 15px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .my-card-content button {
      padding: 10px 18px;
      border: none;
      background: #ff4d4d;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      transition: 0.3s;
    }

    .my-card-content button:hover {
      background: #e63939;
    }
</style>

<div class="custom-card-container">
  <div class="my-card">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Card Image">
    <div class="my-card-content">
      <h2>Beautiful Card</h2>
      <p>
        This is a simple responsive card design using HTML and CSS.
        You can use it for products, profiles, blogs, or services.
      </p>
      <button>Read More</button>
    </div>
  </div>
</div>`;

db.query('UPDATE pages SET content = ? WHERE slug="rec"', [html], (err, results) => {
    if (err) console.error(err);
    else console.log('Updated rec page successfully');
    db.end();
});
