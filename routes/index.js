const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');

module.exports = function(io) {

  router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', {
      tweets: tweets,
      showForm: true
    });

  });

  router.get('/stylesheets/style.css', function(req, res) {
    //app.use('/static', express.static(path.join(__dirname, 'public')));
    console.log(path.join(__dirname, '../public/stylesheets/style.css'));
    res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;

    var list = tweetBank.find({
      name: name
    });
    res.render('index', {
      tweets: list,
      user: req.params.name
    });

  });

  router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    var list = tweetBank.find({
      id: id
    });
    console.log(list);
    res.render('index', {
      tweets: list
    });

  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', {
      name: name,
      text: text
    });
    res.redirect('/');
  });

  return router;
};
