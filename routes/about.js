var express = require('express');
var router = express.Router();
var User = require('./bean/user');

var mysql = require('mysql');
const { render } = require('ejs');

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
  connection.query(query,(err,results) =>{
    if(err) throw err;
    console.log(results);
    console.log(user1);
    res.send("注册成功")
  })
  
  // req.session.user = user1;
})

// ------------------------------------------------------------------------------------

router.get('/hou',(req,res)=>{
  let sql = `SELECT * FROM ADDD`
  connection.query(sql,(err,results)=>{
    if(err) throw err;
    res.render('hou',{data:results})
  })
})

//删除
router.delete('/del/:id',(req,res)=>{
  let id = req.params.id;
  connection.query(`DELETE FROM ADDD WHERE ID = ${id}`,(err,results) =>{
    if(err) throw err;
    res.send('success')
  })
})

//新增
router.get('/add1',(req,res)=>{
  res.render('add')
})

router.post('/add',(req,res)=>{
  connection.query(`INSERT INTO addd(ta_name,ta_order) VALUES('${req.body.qq}','${req.body.ww}')`,(err,results)=>{
    if(err) throw err;
    res.redirect('/about/hou')
  })
})

//改
router.get('/upa/:id',(req,res) =>{
  let id = req.params.id;
  connection.query(`SELECT * FROM ADDD WHERE ID = ${id}`,(err,results) =>{
    if(err) throw err;
    res.render('add1',{data:results})
  })
})

router.post('/upd',(req,res)=>{
  let id = req.body.id1;
  connection.query(`DELETE FROM ADDD WHERE ID = ${id}`,(err,results) =>{
    if(err) throw err;
    connection.query(`INSERT INTO addd(id,ta_name,ta_order) VALUES(${id},'${req.body.qq}','${req.body.ww}')`,(err,results)=>{
      if(err) throw err;
      res.redirect('/about/hou')
  })
})

})

//查询
router.get('/xs/:id',(req,res) =>{
  let id = req.params.id;
  connection.query(`SELECT * FROM ADDD WHERE ID = ${id}`,(err,results) =>{
    if(err) throw err
    else{
      console.log(result);
    };

  })
})

router.post('/xs',(req,res) =>{
  connection.query(`INSERT INTO addd(id,ta_name,ta_order) VALUES(${id},'${req.body.qq}','${req.body.ww}')`,(err,results)=>{
    if(err) throw err;
    res.redirect('/about/hou')
})
})



module.exports = router;