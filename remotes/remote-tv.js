// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {};

function powerOn() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
};

remotecontrol.power = powerOn;

function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
};

remotecontrol.volume = volumeUp;



module.exports = remotecontrol
