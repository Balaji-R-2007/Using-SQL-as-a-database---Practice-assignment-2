require("dotenv").config(); 

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL as ID:", connection.threadId);
});

module.exports = connection;
