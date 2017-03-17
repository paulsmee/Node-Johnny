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
  nodeLIRC.send("LG_AKB72915207", "mute");
};

remotecontrol.powerOn = powerOn;
remotecontrol.powerOn = volumeUp;
remotecontrol.powerOn = volumeDown;
remotecontrol.powerOn = channelUp;
remotecontrol.powerOn = channelDown;
remotecontrol.powerOn = mute;


module.exports = remotecontrol
