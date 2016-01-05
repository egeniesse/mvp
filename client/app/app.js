
var app = angular.module('app', ['ngRoute', 'billApp', 'billForm']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when ('/history', {
  	templateUrl: 'app/components/billView/billView.html',
  	controller: 'sendBillCtrl'
  })
  .when('/createBill', {
  	templateUrl: 'app/components/billForm/billForm.html',
  	controller: 'sendFormCtrl'
  });
}]);
