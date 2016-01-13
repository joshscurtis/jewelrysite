'use strict';

var myApp_Detail_Module = angular.module('myApp.detail', ['ngRoute'])

myApp_Detail_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:itemId', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

myApp_Detail_Module.controller('DetailCtrl', ['$rootScope','$routeParams',function($rootScope,$routeParams) {
  
  $rootScope.addToCart = function (id,qty) {
    $rootScope.moltin.Cart.Insert(String($routeParams.itemId), '1', null, function(cart) {
      $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
  });
    }, function(error) {
    // Something went wrong...
    });
  }

  // loop through products array, find product matching itemId
  for ( var product in $rootScope.products) {
   	if ( $rootScope.products[product].id === $routeParams.itemId ) {
  		$rootScope.item=$rootScope.products[product];
  		break;
  	}
  }

}]);