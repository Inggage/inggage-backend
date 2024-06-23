// const express = require("express");
// const router = express.Router();
// const db = require("../db");

// // Search persons
// router.get("/", (req, res) => {
//   let sql = "SELECT * FROM persons WHERE 1=1";
//   const params = [];

//   if (req.query.gender) {
//     sql += " AND gender = ?";
//     params.push(req.query.gender);
//   }
//   if (req.query.city) {
//     sql += " AND city = ?";
//     params.push(req.query.city);
//   }
//   if (req.query.age) {
//     sql += " AND age = ?";
//     params.push(req.query.age);
//   }
//   if (req.query.price) {
//     sql += " AND price = ?";
//     params.push(req.query.price);
//   }
//   if (req.query.followers) {
//     sql += " AND followers = ?";
//     params.push(req.query.followers);
//   }

//   db.query(sql, params, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// module.exports = router;









const express = require("express");
const router = express.Router();
const db = require("../db");

// Search persons
router.get("/", (req, res) => {
  let sql = `
    SELECT p.*, 
           JSON_ARRAYAGG(JSON_OBJECT('thumbnail', r.thumbnail, 'title', r.title, 'views', r.views, 'comments', r.comments, 'shares', r.shares)) AS reels 
    FROM persons p
    LEFT JOIN reels r ON p.id = r.person_id
    WHERE 1=1
  `;
  const params = [];

  if (req.query.name) {
    sql += " AND p.name LIKE ?";
    params.push(`%${req.query.name}%`);
  }
  if (req.query.tags) {
    sql += " AND JSON_CONTAINS(p.tags, ?)";
    params.push(`"${req.query.tags}"`);
  }
  if (req.query.platform) {
    sql += " AND p.platform = ?";
    params.push(req.query.platform);
  }
  if (req.query.followers) {
    sql += " AND p.followers = ?";
    params.push(req.query.followers);
  }

  sql += " GROUP BY p.id";

  db.query(sql, params, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
