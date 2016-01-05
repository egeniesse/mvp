var totalBill = require('./newBillModel.js');
var friends = require('./individualBillModel.js');
var Q = require('q');
var mongoose = require('mongoose');
var allFriends = Q.nbind(friends.find, friends);
var allBills = Q.nbind(totalBill.find, totalBill);
var addFriend = Q.nbind(friends.create, friends);
var createCollection = Q.nbind(totalBill.create, totalBill);

module.exports = {
	updateBill: function (req, res, next) {
		totalBill.findOne({_id : req.body._id}, function(err, bill){
			bill.friends = req.body.friends;
			bill.save();
		}).then(function(err, result){
				res.send(result);
			});
	},
	getFriends: function (req, res, next) {

	  allFriends()
	    .then(function (bills) {
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },

  getBills : function(req, res, next) {
  	
	  allBills()
	    .then(function (bills) {
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },
  addFriend : function(req, res, next) {
  	var friend = {name :'req.body.friend'};
	  		addFriend(friend)
		  		.then(function(friend){
		  			res.send(friend);
		  		});
  },


  createBill : function(req, res, next) {
  	
  	var bill = {
  		totalCost : req.body.totalCost,
  		billName : req.body.billName,
  		splitCost : req.body.splitCost,
  		friends : req.body.friends,
  	};
  	createCollection(bill)
  		.then(function(obj){
  			res.send(obj);
  		});
  }
};







