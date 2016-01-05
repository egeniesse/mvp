var mongoose = require('mongoose');

var PartBillSchema = new mongoose.Schema({
	amountOwed : Number,
	userName : String,
	leaderName : String,
	billName : String,
	paidStatus : String,
});

module.exports = mongoose.model('PartBill', PartBillSchema);
