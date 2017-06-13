const _ = require('lodash');

var data = [];

function add(name, content) {
  data.push({
    name: name,
    content: content
  });
}

function list() {
  return _.cloneDeep(data);
}

function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add: add,
  list: list,
  find: find
};

// Sample data
const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = [ 'Kate', 'Omri', 'Gabriel', 'Joe'];
  const fakeLasts = [ 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}
