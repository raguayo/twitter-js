const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(function(req, res, next) {
//   res.status(200);
//   console.log(req.method + ' ' + req.url + ' ' + res.statusCode);
//   next();
// })

app.use(morgan('dev'));

app.get('/', function(req,res, next){
  res.send('Welcome!');
  next();
})

app.get('/news', function(req,res, next){
  console.log('in get');
  res.send('Welcome to the news page!');
})

app.listen(3000, function() {
  console.log('Started server on port 3000');
})
