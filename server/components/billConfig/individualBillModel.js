var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	
	username : String,
});

module.exports = mongoose.model('Friends', FriendSchema);
