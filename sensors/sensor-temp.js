var j5 = require("johnny-five"),

tempBoard = new j5.Board();

const tempstats = {};

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

tempBoard.on("ready", function(){
  var thm = new j5.Sensor({ pin: "A0", freq: 500 });

  thm.on("change",  function(thmVoltage) {

    var temp = convertVoltToTemp(thmVoltage);

    tempstats.currentTemp = temp.tempK;
    console.log(tempstats.currentTemp)
 });

});

module.exports = tempstats
