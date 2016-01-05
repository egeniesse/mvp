var mongoose = require('mongoose');

var TotalBillSchema = new mongoose.Schema({
	totalCost : Number,
	groupSize : Number,
	alreadyPaid : Number,
	notPaid : Number
});

module.exports = mongoose.model('TotalBill', TotalBillSchema);