var totalBill = require('./newBillModel.js');
var partBill = require('./individualBillModel.js')
var Q = require('q');

var billsOwed = Q.nbind(partBill.find, partBill);
var billsLead = Q.nbind(totalBill.findOne, totalBill);
var createDebt = Q.nbind(partBill.create, partBill);
var createCollection = Q.nbind(totalBill.create, totalBill);


module.exports = {
	billsOwed: function (req, res, next) {
		var username = req.body.username;
	  billsOwed({username : username})
	    .then(function (bills) {
	      res.json(bills);
	    })
	    .fail(function (error) {
	      next(error);
	    });
  },
}