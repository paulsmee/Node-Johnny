var devices = ('./devices.js');
var mech = ('./mech.js');
var remote = ('./remotes');

// This should route the function for the temp sensor
server.get('/get-temp', function(req, res) {
  res.send(stats.currentTemp+'');
})

// This should route the function for the light sensor
server.get('/get-light', function(req, res) {
  res.send(stats.currentLight+'');
})

// This should route the function for the waving servo
server.get('/wave', function(req, res) {
  console.log("got wave");
  res.send(stats.wave());
})
});
