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
  remotecontrol.volumeUp = volumeUp;
};

function volumeDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
  remotecontrol.volumeDown = volumeDown;
};

function channelUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELUP");
  remotecontrol.channelUp = channelUp;
};

function channelDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
  remotecontrol.channelDown = channelDown;
};

function mute() {
  nodeLIRC.send("LG_AKB72915207", "mute");
  remotecontrol.mute = mute;
};



module.exports = remotecontrol
