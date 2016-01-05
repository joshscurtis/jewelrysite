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
controller('myAppMainController',['$scope',function($scope){

	console.log('entering main controller');

	var moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
	
	console.log('starting moltin auth');
	
	moltin.Authenticate(function() {
  		$scope.products = moltin.Product.List({status:0});
  		if ( $scope.products.length === 0 ) {
  			console.log("Somethings wrong");
  		} else {
        	/*console.log($scope.products); */
        	console.log('successfully pulled products from moltin');			
  		}
	});

}]);
