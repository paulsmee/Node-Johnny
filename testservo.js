var five = require("johnny-five");
var temporal = require("temporal");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {

  var servo = new five.Servo({
    pin: 10,
    startAt: 90
  });

temporal.queue([
   {
    delay: 5000,
    task: function() {
     console.log("Sweeping");
     servo.sweep([45, 135])
    }
   }, {
    delay: 3000,
    task: function() {
     console.log("stopping");
     servo.home();
     servo.stop();
    }
   }
 ]); 
//end
});
