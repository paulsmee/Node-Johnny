var j5 = require("johnny-five");
var temporal = require("temporal");

var board = new j5.Board();

const stats = {

wave: function waveFunction() {
      var servo = new j5.Servo({ pin: 10, startAt: 90 });

 temporal.queue([
    {
     delay: 9000,
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

board.on("ready", function(){
  var servo = new j5.Servo({ pin: 10, startAt: 90 });
});

module.exports = stats
