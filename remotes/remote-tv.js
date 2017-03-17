// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {},

function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
};

function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
};

var power = powerOn();
var volume = volumeUp();

remotecontrol.power = power;
remotecontrol.volume = volume;



module.exports = remotecontrol
