var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//var methodOveride = require('method-overide');
var sassMiddleware = require('node-sass-middleware');

var routes = require('./routes/index');
var books = require('./routes/books');
var authors = require('./routes/authors');


app.use(cors())
// app.get('/books' , function (req, res, next){
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
  customValidators: {
    isUrl: function(value){
      return / [-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value);

    }
  }
}));
//app.use(methodOveride('_method'));
app.use(cookieParser());
app.use(require('node-sass-Middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/books', books);
//app.use('authors', authors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).send('File Not Found');
  next(err);
});

// error handlers
//print a stacktrace for developers
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status || 500);
  res.render("error", {
    message: err.mesasge,
    error: err
   });
 });
}

// app.use(function(err, req, res, next){
//   res.status(err.status || 500);
//   res.render("error", {
//     message: err.message,
//     error: {}
//   });
// });

module.exports = app;
