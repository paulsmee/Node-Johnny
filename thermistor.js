var j5 = require("johnny-five"),
board, photoresistor;
var temporal = require("temporal"); // NEW var for Servo!!!!!!

var board = new j5.Board();

const stats = {

wave: function waveFunction() {

    var servo = new j5.Servo({ pin: 10, startAt: 90 });
 temporal.queue([
    {
     delay: 5000,
     task: function() {
      console.log("Waving");
      servo.sweep([45, 135]);
     }
    }, {
     delay: 3000,
     task: function() {
      console.log("Stopping");
      servo.home();
      servo.stop();
     }
    }
   ]);
}

};

function convertVoltToTemp(volt) {
 var tempK;
 tempK = 1023 / volt - 1;
 tempK = 4510 / tempK;
 tempK = tempK / 5200;
 tempK = Math.log(tempK);
 tempK = tempK / 3950;
 tempK = tempK + 1 / (23 + 273.15);
 tempK = 1 / tempK;
 tempK = tempK - 273.15;
 tempK = Math.round(tempK*10)/10;

  return {
    tempK: tempK,
  };
}

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
  var thm = new j5.Sensor({ pin: "A0", freq: 500 });
  photoresistor = new j5.Sensor({ pin: "A2", freq: 5000 });

// START NEW CODE !!!!!!!!!
  var servo = new j5.Servo({ pin: 10, startAt: 90 });
// END NEW CODE !!!!!!!!!!

  board.repl.inject({
    pot: photoresistor
  });

  photoresistor.on("data", function(light1) {
    console.log(light1);
   // var light = howMuchLight(light1); // This is no longer used
    var luxCalc = convertVoltageToLux(light1);

    stats.currentLightLux = light1; // I added this because i want a scale in my homekit app :)
    stats.currentLight = luxCalc;
    console.log("Current Lux: ", stats.currentLight);
   });

  thm.on("change",  function(thmVoltage) {

    var temp = convertVoltToTemp(thmVoltage);

    // We don't want to replace the entire currentTemp object, we just want to update the values on the object.
    // If we replaced the entire object the links to the file where this one is included would stop working.

    stats.currentTemp = temp.tempK;
    console.log("Current TempK: ", stats.currentTemp);
 });

});

module.exports = stats
