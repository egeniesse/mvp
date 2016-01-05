var totalBill = require('./newBillModel.js');
var partBill = require('./individualBillModel.js');
var Q = require('q');
var mongoose = require('mongoose');
var billsOwed = Q.nbind(partBill.find, partBill);
var billsLend = Q.nbind(totalBill.find, totalBill);
var createDebt = Q.nbind(partBill.create, partBill);
var createCollection = Q.nbind(totalBill.create, totalBill);

module.exports = {
	moneyOwed: function (req, res, next) {
		var username = req.body.username;
	  billsOwed()
	    .then(function (bills) {
	    	console.log(bills);
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },
  moneyLentTotal : function(req, res, next) {
  	var leaderName = req.body.username;
	  billsLend({leaderName : leaderName})
	    .then(function (bills) {
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },
  lendMoney : function(req, res, next) {
  	var lendees = req.body.users;
  	if(Array.isArray(lendees)){
	  	for (var i = 0; i < lendees.length; i++){
	  		var lendee = {
	  			amountOwed : lendees[i].owed,
	  			username : lendees[i].username,
	  			leaderName : lendees[i].leaderName,
	  			billName : lendees[i].billName,
	  			paidStatus : lendees[i].paidStatus
	  		};
	  		 createDebt(lendee);
	  	}
	  }
  	
  },
  createBill : function(req, res, next) {
  	console.log('this is here!', req.body)
  	var bill = {
  		totalCost : req.body.totalCost,
  		groupSize : req.body.groupSize,
  		leaderName : req.body.leaderName,
  		alreadyPaid : req.body.alreadyPaid,
  		notPaid : req.body.notPaid
  	};
  	createCollection(bill);
  	res.json({status: 'done'});
  }
};







