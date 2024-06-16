const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Use your MySQL username
  password: "nasa9439725335", // Use your MySQL password
  database: "person_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

module.exports = db;
