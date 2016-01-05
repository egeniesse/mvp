var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var middleware = require('./components/config/middleware.js');
var routes = require('./components/config/routes.js');



var app = express();

mongoose.connect('mongodb://127.0.0.1/billSplitter');

// app.use(express.static(__dirname + './../client'));

middleware(app, express);
routes(app, express);

app.listen(8000);


module.exports = app;