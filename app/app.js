'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.jewelry',
  'myApp.detail',
  'myApp.cart',
  'myApp.checkout',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]).
controller('myAppMainController',['$rootScope',function($rootScope){

	console.log('entering main controller');

	$rootScope.moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
	
	console.log('starting moltin auth');

  $rootScope.moltin.Authenticate();
	
  $rootScope.products = $rootScope.moltin.Product.List({status:0});
  if ( $rootScope.products.length === 0 ) {
    console.log("Somethings wrong");
  } else {
    //console.log($scope.products);
    console.log('successfully pulled products from moltin');      
  }

  $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
  });
  

}]);
