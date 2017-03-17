// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {};

function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
  remotecontrol.powerOn = powerOn;
};

function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
  remotecontrol.powerOn = volumeUp;
};

function volumeDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
  remotecontrol.powerOn = volumeDown;
};

function channelUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELUP");
  remotecontrol.powerOn = channelUp;
};

function channelDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
  remotecontrol.powerOn = channelDown;
};

function mute() {
  nodeLIRC.send("LG_AKB72915207", "mute");
  remotecontrol.powerOn = mute;
};



module.exports = remotecontrol
