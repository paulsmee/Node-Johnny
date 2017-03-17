// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {

power: function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
},

volume: function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
}
};


remotecontrol.power = power;
remotecontrol.volume = volume;



module.exports = remotecontrol
