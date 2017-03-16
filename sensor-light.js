var j5 = require("johnny-five"),
board, photoresistor;

var board = new j5.Board();

const stats = {};

// This is for the math to convert voltage to lux
function convertVoltageToLux(lux) {
   var lightLux;
   var resistorVoltage;
   var ldrVoltage;
   var ldrResistance;
 resistorVoltage = lux / 1023 * 5;
 ldrVoltage = 5 - resistorVoltage;
 ldrResistance = ldrVoltage/resistorVoltage * 10000;
 lightLux = 0.04622448 * Math.pow(ldrResistance, 1.102);
 lightLux = Math.round(lightLux*10)/10;
 return lightLux;
 }

board.on("ready", function(){
  photoresistor = new j5.Sensor({ pin: "A2", freq: 5000 });

  board.repl.inject({
    pot: photoresistor
  });

    photoresistor.on("data", function(light1) {
      var luxCalc = convertVoltageToLux(light1);

      stats.currentLightLux = light1; // I added this because i want a scale in my homekit app :)
      stats.currentLight = luxCalc; // This is an accurate calculation for lux, 'light1' is just voltage.
     });
});

  module.exports = stats
