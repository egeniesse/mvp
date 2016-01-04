var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();


app.listen(8000);


app.use('/', express.static(path.join(__dirname ,'../')));

module.exports = app;