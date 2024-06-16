const express = require("express");
const router = express.Router();
const db = require("../db");

// Search persons
router.get("/", (req, res) => {
  let sql = "SELECT * FROM persons WHERE 1=1";
  const params = [];

  if (req.query.gender) {
    sql += " AND gender = ?";
    params.push(req.query.gender);
  }
  if (req.query.city) {
    sql += " AND city = ?";
    params.push(req.query.city);
  }
  if (req.query.age) {
    sql += " AND age = ?";
    params.push(req.query.age);
  }
  if (req.query.price) {
    sql += " AND price = ?";
    params.push(req.query.price);
  }
  if (req.query.followers) {
    sql += " AND followers = ?";
    params.push(req.query.followers);
  }

  db.query(sql, params, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
