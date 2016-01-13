'use strict';

var myApp_Cart_Module = angular.module('myApp.cart', ['ngRoute'])

myApp_Cart_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl'
  });
}])

myApp_Cart_Module.controller('CartCtrl', ['$rootScope',function($rootScope) {
  $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
  });
  
}]);