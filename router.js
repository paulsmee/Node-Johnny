// This file will handle all the routing for the server

var express = require('express');
var router = express.Router();
var stats = require('./sensor-light')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index1.html');
  console.log("Access Detected!");
});

router.get('/get-light', function(req, res) {
  res.send(stats.currentLight+'');
})

module.exports = router
