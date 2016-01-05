var mongoose = require('mongoose');

var TotalBillSchema = new mongoose.Schema({
	totalCost : String,
	billName : String,
	groupSize : Number,
	friends : Array
});

module.exports = mongoose.model('TotalBill', TotalBillSchema);