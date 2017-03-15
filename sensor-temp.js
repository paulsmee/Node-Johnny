var j5 = require("johnny-five"),

var board = new j5.Board();

const stats = {};

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

board.on("ready", function(){
  var thm = new j5.Sensor({ pin: "A0", freq: 500 });
  });

thm.on("change",  function(thmVoltage) {

    var temp = convertVoltToTemp(thmVoltage);

    stats.currentTemp = temp.tempK;
    console.log("Current TempK: ", stats.currentTemp);
  });
});

module.exports = stats
