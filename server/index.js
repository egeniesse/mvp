var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var middleware = require('./config/middleware.js');
var routes = require('./config/routes.js');



var app = express();

mongoose.connect('mongodb://127.0.0.1/billSplitter');

middleware(app, express);
routes(app, express);

app.listen(8000);



app.use('/', express.static(path.join(__dirname ,'../client')));

module.exports = app;