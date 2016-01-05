var billApp = angular.module('billApp', [])

.controller('sendBillCtrl', function($scope, $http) {
	$scope.bills = [];
	$scope.getBills = function() {
		$http.get('/bills')
			.then(function(response) {
				response.data.map(function(bill) {
					$scope.bills.unshift(bill);
				});
				console.log(response.data);
			});
	};
	$scope.getBills();

	$scope.changeStatus = function(){
		this.friend.paid = true;
	}

});