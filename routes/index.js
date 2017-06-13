const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req,res){
  //app.use('/static', express.static(path.join(__dirname, 'public')));
  console.log(path.join(__dirname,'../public/stylesheets/style.css'));
  res.sendFile(path.join(__dirname,'../public/stylesheets/style.css'));
});

module.exports = router;
