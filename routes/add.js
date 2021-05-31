var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db/db');

// let connection = mysql.createConnection({
//   host:"localhost",
//   port:"3306",
//   user:"root",
//   password:"123456",
//   database:"cook"
// });

// connection.connect();
 router.get('/', function(req, res, next) {
	 db.sql("select * from addd order by id desc",(err,rows) => {
		res.render('index',{data:rows});
	 })
 
	 router.get('/add',(req,res) =>{
		 res.render('addd')
	 })

	 
});

// router.get('/', function(req, res, next) {
//   connection.query("SELECT * from login where name = ? and ?",["王嘉尔"],(err,result,fields) => {
//       console.log(result)
//   })
//   res.render('index1');
// });


// let db = require("./about")
// router.get('/', function (request, response) {
// 	let sql="select * from add";
// 	let mydata = [];
// 	db.query(sql,(err,rows)=>{
// 		if(err){
// 			response.json({err:"chucuole"})
// 		}
// 		else{
// 			for(let em of rows)
// 			{
// 				//console.log(em);
// 				let record = [em['idid'], em['name'], em['order'], em['place']];
// 				mydata.push(record);
// 			}
// 			console.log(mydata);
// 			response.writeHead(200, {
// 				"Content-Type": "application/json"
// 			});
// 			response.write(JSON.stringify(mydata));
// 			response.end();
// 		};
// 	});
// });





module.exports = router;