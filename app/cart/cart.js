'use strict';

var myApp_Cart_Module = angular.module('myApp.cart', ['ngRoute'])

myApp_Cart_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl'
  });
}])

myApp_Cart_Module.controller('CartCtrl', ['$scope',function($scope) {
	$scope.cart = $scope.moltin.Cart.Contents();
}]);