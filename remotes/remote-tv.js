// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {};

function power() {
  nodeLIRC.send("LG_AKB72915207power", "POWER");
};

function volumeUp() {
  nodeLIRC.send("LG_AKB72915207vup", "KEY_VOLUMEUP");
};

function volumeDown() {
  nodeLIRC.send("LG_AKB72915207vdown", "KEY_VOLUMEDOWN");
};

function channelUp() {
  nodeLIRC.send("LG_AKB72915207cup", "KEY_CHANNELUP");
};

function channelDown() {
  nodeLIRC.send("LG_AKB72915207cdown", "KEY_CHANNELDOWN");
};

function mute() {
  nodeLIRC.send("LG_AKB72915207mute", "MUTE");
};

remotecontrol.power = power;
remotecontrol.volumeup = volumeUp;
remotecontrol.volumedown = volumeDown;
remotecontrol.channelup = channelUp;
remotecontrol.channeldown = channelDown;
remotecontrol.mute = mute;



module.exports = remotecontrol
