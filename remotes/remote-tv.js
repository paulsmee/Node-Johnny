// Layout for the TV remote

var nodeLIRC = require('node-lirc');

nodeLIRC.init();

const remotecontrol = {

powerOn: function powerOn() {
  nodeLIRC.send("LG_AKB72915207****", "KEY_POWER");
},

volumeUp: function volumeUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEUP");
},

volumeDown: function volumeDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_VOLUMEDOWN");
},

channelUp: function channelUp() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELUP");
},

channelDown: function channelDown() {
  nodeLIRC.send("LG_AKB72915207", "KEY_CHANNELDOWN");
},

mute: function mute() {
  nodeLIRC.send("LG_AKB72915207", "mute");
}
}

module.exports = remotecontrol
