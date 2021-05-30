var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var db = require('./db/db');
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


router.post('/',(req,res) =>{
    console.log(1);
   connection.query("insert into addd(name,'order',account) values(?,?,?)",[req.body.name,req.body.order,req.body.account],(err,rows) =>{
       if(err){
           console.log(err);
       }

       res.redirect("/")

   })
})

module.exports = router;