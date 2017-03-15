// Layout for the TV remote

var nodeLIRC = require('node-lirc');

function poweron() {
  nodeLIRC.send("LG_AKB72915207", "KEY_POWER");
}poweron();

function volumeup() {

}

function volumedown() {

}

function channelup() {

}

function channeldown() {

}

function mute() {

}



