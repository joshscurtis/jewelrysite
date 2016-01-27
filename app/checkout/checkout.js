'use strict';

var myApp_Checkout_Module = angular.module('myApp.checkout', ['ngRoute'])

myApp_Checkout_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'CheckoutCtrl'
  });
}])

myApp_Checkout_Module.controller('CheckoutCtrl', ['$rootScope',function($rootScope) {


  $rootScope.moltin.Cart.Checkout(function(cart) {
      
      $rootScope.checkoutCart = cart;
      console.log($rootScope.checkoutCart);

  }, function(error) {
      // Something went wrong...
  });

}]);