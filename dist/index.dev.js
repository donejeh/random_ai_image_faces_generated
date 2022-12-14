"use strict";

var path = require('path');

var express = require("express");

var dotenv = require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express(); //enable body paspser

app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); //set static folder

app.use(express["static"](path.join(__dirname, 'public')));
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, function () {
  return console.log("Serve started on ".concat(port));
});