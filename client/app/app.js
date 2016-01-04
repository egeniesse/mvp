
angular.module('myApp', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
  	templateUrl: 'components/mainView/mainView.html'
  });
}]);
