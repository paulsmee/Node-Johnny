// This file will handle all the routing for the server

var express = require('express');
var router = express.Router();
var stats = require('./sensors/sensor-light' && './sensors/sensor-temp' && './sensors/sensor-servo' && './remotes/remote-tv');

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index1.html');
  console.log("Access Detected!");
});

router.get('/get-light', function(req, res) {
  res.send(stats.currentLight+'');
})

router.get('/get-temp', function(req, res) {
  res.send(stats.currentTemp+'');
})

router.get('/wave', function(req, res) {
  console.log("got wave");
  res.send(stats.wave());
})

router.get('/remote', function(req, res) {
  console.log("TV Power Request");
  res.send(remotecontrol.powerOn());
})

router.get('/remote', function(req, res) {
  console.log("TV Request");
  res.send(remotecontrol.volumeUp());
})

router.get('/remote', function(req, res) {
  console.log("TV Request");
  res.send(remotecontrol.volumeDown());
})

router.get('/remote', function(req, res) {
  console.log("TV Request");
  res.send(remotecontrol.channelUp());
})

router.get('/remote', function(req, res) {
  console.log("TV Request");
  res.send(remotecontrol.channelDown());
})

router.get('/remote', function(req, res) {
  console.log("TV Request");
  res.send(remotecontrol.mute());
})

module.exports = router
