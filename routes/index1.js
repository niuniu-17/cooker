var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let connection = mysql.createConnection({
  host:"localhost",
  port:"3306",
  user:"root",
  password:"123456",
  database:"03"
});

// router.get('/', function(req, res, next) {
//   connection.query("select * from tab_score",function(err,result,fields){
//   });
//   res.render('index',{
//     data:result
//   });
// });

router.get('/', function(req, res, next) {
  res.render('index');
});




module.exports = router;
