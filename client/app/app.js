
var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when ('/main', {
  	templateUrl: 'app/components/mainView/mainView.html'
  });
}]);
