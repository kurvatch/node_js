function User() {
    this.name = "";
    this.life = 60;
    this.giveLife = function(targetPlayerLife) {
        console.log("Inside giveLife function life:" + targetPlayerLife.life);
        targetPlayerLife.life += 1;
    }
}

var Chetan = new User();
Chetan.name = "Chetan";

console.log("Logging Name:" + Chetan.name);
console.log("Logging life:" + Chetan.life);

var test = new User();
test.name = "Raghu";
Chetan.giveLife(test);

console.log("Chetan's life: " + Chetan.life)
console.log("Logging Name:" + test.name);
console.log("Logging life:" + test.life);

console.log("Building Express Server");
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

console.log("Server is running");

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});