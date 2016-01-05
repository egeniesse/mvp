var billApp = angular.module('billApp', [])

.controller('sendBillCtrl', function($scope, $http) {
	$scope.bills = [];
	$scope.getBills = function() {
		$http.get('/bills')
			.then(function(response) {
				response.data.map(function(bill) {
					$scope.bills.unshift(bill);
				});
			});
	};
	$scope.getBills();

	$scope.changeStatus = function() {
		var billObj = this.$parent.bill;

		this.friend.paid = true;
		console.log(this.$parent.bill);
		$http.put('/bills', billObj)
			.then(function(response){
				console.log(response);
			});

	};

});