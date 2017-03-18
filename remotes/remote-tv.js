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

remotecontrol.power = powerOn;
remotecontrol.volume = volumeUp;



module.exports = remotecontrol
