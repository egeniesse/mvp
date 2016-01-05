var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var middleware = require('./components/config/middleware.js');
// var routes = require('./components/config/routes.js');
var bills = require('./components/billConfig/billController.js');


var app = express();
mongoose.connect('mongodb://localhost/billSplitter');

middleware(app, express);
app.get('/billsOwed', bills.moneyOwed, function(req, res, next){
	res.send();
	next();
});
app.get('/mainBill', bills.moneyLentTotal, function(req, res, next){
	res.send();
	next();
});
app.post('/billsOwed', bills.lendMoney, function(req, res, next){
	res.send();
	next();
});
app.post('/mainBill', bills.createBill, function(req, res, next){
	res.send();
	next();
});

app.listen(8000);


module.exports = app;