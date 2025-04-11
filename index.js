const express = require("express");
const db = require("./db");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: results });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
