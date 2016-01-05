var billForm = angular.module('billForm', [])

.controller('sendFormCtrl', function($scope, $http, $location){
		$scope.friends = [];
		
		$scope.addFriend = function(){
			var newFriend = $('#newFriend');
			$scope.friends.push(newFriend.val());
			newFriend.val('');
		};

		$scope.submitForm = function(){
			var cost = $('#billCost').val();
			var name = $('#billName').val();
			var addedFriends = $scope.friends;
			var eachCost = (Number(cost)/(addedFriends.length + 1)).toFixed(2);
			var splitCostString = 'Everyone owes $' + eachCost;
			var costString = 'The total bill is $' + cost;
			if(cost === '' || name === '' || addedFriends.length === 0){
				alert('please finish filling out the form')
			} else {

				addedFriends= addedFriends.map(function(friend){
					return {name : friend, paid : false};
				});
				console.log(addedFriends)
			var billObj = {
				totalCost: costString,
				billName: name,
				splitCost: splitCostString,
				friends: addedFriends,
			};

			$http.post('/bills', billObj)
				.then(function(response) {
					console.log(response);
				}).then(function() {
					$location.path('/');

				});


			}
		};
		
	});


