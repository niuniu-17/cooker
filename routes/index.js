var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/register',(req,res) =>{
  res.send("dsh")
})

router.get('/', function(req, res, next) {
  res.render('index2');
});



module.exports = router;