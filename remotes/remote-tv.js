// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {

power: function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
},

volume: function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
};
};


var powerOn = powerOn();
var volumeUp = volumeUp();



remotecontrol.power = powerOn;
remotecontrol.vUp = volumeUp;



module.exports = remotecontrol
