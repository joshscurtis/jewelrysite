'use strict';

var myApp_Cart_Module = angular.module('myApp.cart', ['ngRoute'])

myApp_Cart_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl'
  });
}])

myApp_Cart_Module.controller('CartCtrl', ['$rootScope',function($rootScope) {

  $rootScope.removeFromCart = function (id) {

  	var identifier = '';

  	// find the item's cart identifier by the id
  	for ( var item in $rootScope.cart.contents ) {
  		if ($rootScope.cart.contents[item].id === id) {
  			identifier = item;
  		}
  	}

  	// remove the item from the cart 
  	$rootScope.moltin.Cart.Remove(String(identifier), function() {
  		// refresh the cart object to reflect the change
  		$rootScope.moltin.Cart.Contents(function(items) {
  
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
    	});

  	}, function(error) {
      // Something went wrong...
  	});
  };


  $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
        console.log($rootScope.cart);
  });
  
}]);