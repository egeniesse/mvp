var billForm = angular.module('billForm', [])

.controller('sendFormCtrl', function($scope, $http, $location){
		$scope.friends = [];
		
		$scope.addFriend = function(){
			var newFriend = $('#newFriend');
			$scope.friends.push(newFriend.val());
			newFriend.val('');
		};

		$scope.submitForm = function(){
			cost = $('#billCost');
			console.log(cost.val())
			var name = $('#billName');
			var addedFriends = $scope.friends;

			var billObj = {
				totalCost : cost.val(),
				billName : name.val(),
				groupSize : addedFriends.length +1,
				friends : addedFriends,
			};

			$http.post('/bills', billObj)
				.then(function(response){
					console.log(response);
				});

			$location.path('/')

			console.log(billObj)

		};
		
	});


