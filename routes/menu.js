var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let connection = mysql.createConnection({
  host:"localhost",
  port:"3306",
  user:"root",
  password:"123456",
  database:"cook"
});
connection.connect(err =>{
  if(err) throw err;
  console.log("mysql 连接成功");
})


router.get('/', function(req, res, next) {
  connection.query("select * from tab_menu",function(err,results){
    console.log(results)
    res.render('menu',{data:results})
  })
 
});

module.exports = router;