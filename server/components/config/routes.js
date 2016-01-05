var bills = require('./../billConfig/billController.js');

module.exports = function(app, express) {

	app.get('/billsOwed', bills.moneyOwed);
	app.get('/mainBill', bills.moneyLentTotal);
	app.post('/lendMoney', bills.lendMoney);
	app.post('/createBill', bills.createBill);

};