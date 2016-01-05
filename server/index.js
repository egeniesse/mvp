var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var middleware = require('./components/config/middleware.js');
// var routes = require('./components/config/routes.js');
var bills = require('./components/billConfig/billController.js');


var app = express();
mongoose.connect('mongodb://localhost/billSplitter');

middleware(app, express);
app.get('/friends', bills.getFriends, function(req, res, next){
	res.send();
	next();
});
app.get('/bills', bills.getBills, function(req, res, next){
	res.send();
	next();
});
app.post('/friends', bills.addFriend, function(req, res, next){
	res.send();
	next();
});
app.post('/bills', bills.createBill, function(req, res, next){
	res.send();
	next();
});

app.listen(8000);


module.exports = app;