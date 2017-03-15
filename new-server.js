// This is the base server which also routes functions to the user.

var express = require('express');
var server = express();
var router = require('./router.js');

server.get('/stats', function(req, res) {
  res.json(stats);
})

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log("Access Detected!");
});

var port = 8000
server.listen(port, function() {
  console.log('The server is listening on port ' + port);
});
