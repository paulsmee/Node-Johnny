// This file will handle all the routing for the server

var express = require('express');
var router = express.Router();
var lightstats = require('./sensors/sensor-light');
var tempstats = require('./sensors/sensor-temp');
var servostats = require('./sensors/sensor-servo');
var remotecontrol = require('./remotes/remote-tv');

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/testindex.html');
  console.log("Access Detected!");
});

router.get('/sensor/light/lounge', function(req, res) {
  res.send(lightstats.currentLight+'');
})

router.get('/sensor/temp/lounge', function(req, res) {
  res.send(tempstats.currentTemp+'');
})

router.get('/actuator/servo/wave', function(req, res) {
  console.log("got wave");
  res.send(servostats.wave());
})

router.get('/remote/tv/power', function(req, res) {
  console.log("TV Power Request");
  res.send(remotecontrol.power());
})

router.get('/remote/tv/volumeup', function(req, res) {
  console.log("TV  Request");
  res.send(remotecontrol.volumeup());
})

router.get('/remote/tv/volumedown', function(req, res) {
  console.log("TV Power Request");
  res.send(remotecontrol.volumedown());
})

router.get('/remote/tv/channelup', function(req, res) {
  console.log("TV  Request");
  res.send(remotecontrol.channelup());
})

router.get('/remote/tv/channeldown', function(req, res) {
  console.log("TV Power Request");
  res.send(remotecontrol.channeldown());
})

router.get('/remote/tv/mute', function(req, res) {
  console.log("TV  Request");
  res.send(remotecontrol.mute());
})

module.exports = router
