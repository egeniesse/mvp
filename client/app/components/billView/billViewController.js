var billApp = angular.module('billApp', [])


.factory('updateDb', function($http){
		return {
			postBill : function(billObj){
				var bill = 	{
					userName : 'egeniesse',
				};
				var data = JSON.stringify(bill);

				$http.get('/billsOwed', data);
			}
		};
	})

.controller('sendBillCtrl', function($scope, updateDb){
		$scope.postBill = updateDb.postBill;
		
	});




var tempObj = {
					amountOwed : 100,
					userName : 'egeniesse',
					leaderName : 'Eric',
					billName : 'subway',
					paidStatus : 'not paid'
				};