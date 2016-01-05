var mongoose = require('mongoose');

var TotalBillSchema = new mongoose.Schema({
	totalCost : Number,
	billName : String,
	groupSize : Number,
	leaderName : String,
	alreadyPaid : Number,
	notPaid : Number
});

module.exports = mongoose.model('TotalBill', TotalBillSchema);