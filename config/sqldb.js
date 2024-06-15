const mysql = require('mysql')
const sqldb = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"inggage" 
})

module.exports = sqldb;