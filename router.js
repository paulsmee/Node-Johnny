// This file will handle all the routing for the server

var express = require('express');
var server = express();
var devices = ('./sensor-light.js');

server.route('/', function(req, res) {
  res.send(stats.currentTemp+'');
})

  .post(function(req, res) {
  res.send(stats.currentLight+'');
})

  .post(function(req, res) {
  console.log("got wave");
  res.send(stats.wave());
})
