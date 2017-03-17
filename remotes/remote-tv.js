// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {};

function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
};

function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
};

function volumeDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
};

function channelUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELUP");
};

function channelDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
};

function mute() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
};

var powerOn = powerOn();
var volumeUp = volumeUp();
var volumeDown = volumeDown();
var channelUp = channelUp();
var channelDown = channelDown();
var mute = mute();


remotecontrol.powerOn = powerOn;
remotecontrol.volumeUp = volumeUp;
remotecontrol.volumeDown = volumeDown;
remotecontrol.channelUp = channelUp;
remotecontrol.channelDown = channelDown;
remotecontrol.mute = mute;


module.exports = remotecontrol
