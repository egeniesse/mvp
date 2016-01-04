
var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
  	templateUrl: 'components/mainView/mainView.html'
  })
  .when ('/main', {
  	templateUrl: 'components/mainView/mainView.html'
  })
  .otherwise( {redirectTo : '/'});
}]);
