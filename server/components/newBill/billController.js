var totalBill = require('./newBillModel.js');
var partBill = require('./individualBillModel.js')
var Q = require('q');

var billsOwed = Q.nbind(partBill.find, partBill);
var billsLend = Q.nbind(totalBill.find, totalBill);
var createDebt = Q.nbind(partBill.create, partBill);
var createCollection = Q.nbind(totalBill.create, totalBill);

module.exports = {
	moneyOwed: function (req, res, next) {
		var username = req.body.username;
	  billsOwed({username : username})
	    .then(function (bills) {
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },
  moneyLentOneBill : function(req, res, next) {
  	var leaderName = req.body.username;
	  billsOwed({leaderName : leaderName})
	    .then(function (bills) {
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
  	for (var i = 0; i < lendees.lenght; i++){
  		var lendee = {
  			amountOwed : lendees[i].owed,
  			username : lendees[i].username,
  			leaderName : lendees[i].leaderName,
  			billName : lendees[i].billName,
  			paidStatus : lendees[i].paidStatus
  		};
  		 createDebt(lendee);
  	}
  	res.json(status: 'done')
  },
  createBill : function(req, res, next) {
  	var bill = {
  		totalCost : req.totalCost,
  		groupSize : req.groupSize,
  		leaderName : req.leaderName,
  		alreadyPaid : req.alreadyPaid,
  		notPaid : req.notPaid
  	};
  	createCollection(bill);
  	res.json(status: 'done')

  }


};







