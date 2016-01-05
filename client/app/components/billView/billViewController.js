var billApp = angular.module('billApp', [])

.controller('sendBillCtrl', function($scope, $http) {
	$scope.bills = [];
	$scope.getBills = function() {
		console.log('hi');
		$http.get('/bills')
			.then(function(response) {
				response.data.map(function(bill) {
					console.log(bill)
					$scope.bills.push(bill);
				});
				console.log(response.data);
			});
	};
	$scope.getBills();

	$scope.changeStatus = function(){
		this.friend.paid = true;
		console.log(this);
	}

});