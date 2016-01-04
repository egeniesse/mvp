var express = require('express');
var mongoose = require('mongoose');

var app = express();


app.listen(8000);

app.get('*', function(req, res){
	res.sendfile('./client/index.html');
});

module.exports = app;