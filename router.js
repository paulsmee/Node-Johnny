// This file will handle all the routing for the server

var express = require('express');
var router = express.Router();
var lightstats = require('./sensors/sensor-light');
var tempstats = require('./sensors/sensor-temp');
var servostats = require('./sensors/sensor-servo');
var remotecontrol = require('./remotes/remote-tv');

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index1.html');
  console.log("Access Detected!");
});

router.get('/get-light', function(req, res) {
  res.send(lightstats.currentLight+'');
})

router.get('/get-temp', function(req, res) {
  res.send(tempstats.currentTemp+'');
})

router.get('/wave', function(req, res) {
  console.log("got wave");
  res.send(servostats.wave());
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
