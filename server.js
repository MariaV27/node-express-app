var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.NODE_ENV || 7000;



app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});