var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var middleware = require('./components/config/middleware.js');
var bills = require('./components/billConfig/billController.js');


var app = express();
mongoose.connect('mongodb://localhost/billSplitter');

middleware(app, express);
app.get('/friends', bills.getFriends);
app.get('/bills', bills.getBills);
app.post('/friends', bills.addFriend);
app.post('/bills', bills.createBill);
app.put('/bills', bills.updateBill);

app.listen(8000);


module.exports = app;