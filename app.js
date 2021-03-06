var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');


var indexRouter = require('./routes/add');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var indexRouter = require('./routes/add');
var listingRouter = require('./routes/listing');
var menuRouter = require('./routes/menu');
var index2Router = require('./routes/index2');
var addRouter = require('./routes/add');
var add2Router = require('./routes/add2');
var pRouter = require('./routes/p');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
// app.use('/index', indexRouter);
app.use('/listing', listingRouter);
app.use('/menu', menuRouter);
app.use('/index2', index2Router);
app.use('/add', addRouter);
app.use('/add2', add2Router);
app.use('/p', pRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log("错误"+err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
