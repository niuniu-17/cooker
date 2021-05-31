const mysql = require("express-mysql");

const DB = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"123456",
    database:"cook"
})

DB.connect();

module.exports = DB