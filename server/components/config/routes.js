var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bills = require('./components/billController.js');

var app = express();

app.get('/billsOwed', bills.moneyOwed);
app.get('/mainBill', bills.moneyLentTotal);
app.post('/lendMoney', bills.lendMoney);
app.post('/createBill', bills.createBill);