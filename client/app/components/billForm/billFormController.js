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

			if(cost === '' || name === '' || addedFriends.length === 0){
				alert('please finish filling out the form')
			} else {
				if(name !== ''){
					console.log('the name value is ', name)
				}
			console.log(name, addedFriends.length, cost)
			var billObj = {
				totalCost: cost,
				billName: name,
				groupSize: addedFriends.length + 1,
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


