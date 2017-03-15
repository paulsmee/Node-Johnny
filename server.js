// This is the base server which also routes functions to the user.

var express = require('express');
var server = express();
var morgan = require('morgan');

// !!! CHANGE HERE !!!
var stats = require('./thermistor.js')

// setup the logger
server.use(morgan('common'))

// This should route the function for the temp sensor
server.get('/get-temp', function(req, res) {
  res.send(stats.currentTemp+''); // send the value to the browser
})

// This should route the function for the light sensor
server.get('/get-light', function(req, res) {
  res.send(stats.currentLight+''); 
})

// This should route the function for the waving servo
server.get('/wave', function(req, res) {
  console.log("got wave");
  res.send(stats.wave());
})

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
