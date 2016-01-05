var mongoose = require('mongoose');

var TotalBillSchema = new mongoose.Schema({
	totalCost : String,
	billName : String,
	splitCost : String,
	friends : Array
});

module.exports = mongoose.model('TotalBill', TotalBillSchema);