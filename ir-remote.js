var nodeLIRC = require('node-lirc');

nodeLIRC.init();

// Get all the remotes and commands known by LIRC
console.log(nodeLIRC.remotes);

// Tell our TV to turn on
//nodeLIRC.send("LG_AKB72915207", "KEY_POWER");
