var express = require('express');
var router = express.Router();
var User = require('./bean/user');

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
  res.render('about');
});



router.post('/',(req,res) =>{
  let name = req.body.name;
  let pass = req.body.password;
  let query = 'select * from register where name ="' + name + '"and password="' + pass + '"'
  connection.query(query,(err,results,fields) =>{
    if(err) throw err;
    if(results != ""){
      res.send("登录成功");
    }else{
      res.send("登录失败");
    }
  })
});


router.post('/register',(req,res) =>{
  let user1 = new User(req.body.name,req.body.password,req.body.Email,req.body.repassword);
  let query = 'insert into register(name,password,Email,repassword) values("' +user1.name + '","' + user1.password +'","' + user1.Email +'","' + user1.repassword +'")'
  connection.query(query,(err,results,fields) =>{
    if(err) throw err;
    console.log(results);
    console.log(user1);
    res.send("注册成功")
  })
  
  // req.session.user = user1;
})


module.exports = router;