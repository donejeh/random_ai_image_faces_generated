"use strict";

var express = require("express");

var dotenv = require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express(); //enable body parpser

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, function () {
  return console.log("Serve start on ".concat(port));
});