var express = require('express');

// Constants
var PORT = (process.env.PORT || "80");
var MESSAGE = (process.env.MESSAGE || "Hello World.");

// SIGINT handler
process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit();
});

// App
var app = express();
app.get('/', function (req, res) {
  console.log("Saying: " + MESSAGE);
  res.send(MESSAGE + '\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
