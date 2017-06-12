const express = require('express');
const app = express();

app.get('/', function(req,res, next){
  console.log('in get');
  res.send('Welcome!');
})

app.listen(3000, function() {
  console.log('Started server on port 3000');
})
