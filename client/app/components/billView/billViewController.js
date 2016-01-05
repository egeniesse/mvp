var billApp = angular.module('billApp', [])


.factory('updateDb', function($http){
		return {
			allBills : function(){
				console.log('hi');
				$http.get('/bills')
					.then(function(response){
						console.log(response)
					})
				console.log(data);
			}
		};
	})

.controller('sendBillCtrl', function($scope, $http){
		$scope.bills = [];
		$scope.getBills = function(){
		console.log('hi');
		$http.get('/bills')
			.then(function(response) {
					response.data.map(function(bill) {
						$scope.bills.push(bill);
					});
						console.log(response.data);
					});
			};
		$scope.getBills();
		
	});




