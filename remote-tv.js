// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

function poweron() {
  nodeLIRC.send("LG_AKB72915207", "KEY_POWER");
}

function volumeup() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
}volumeup();

function volumedown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
}

function channelup() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELUP");
}

function channeldown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
}

function mute() {
  nodeLIRC.send("LG_AKB72915207", "mute");
}
