'use strict';

var myApp_Checkout_Module = angular.module('myApp.checkout', ['ngRoute'])

myApp_Checkout_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'CheckoutCtrl'
  });
}])

myApp_Checkout_Module.controller('CheckoutCtrl', ['$scope',function($scope) {

	/*var moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
	moltin.Authenticate(function() {
  		$scope.products = moltin.Product.List({status:0});
  		if ( $scope.products.length === 0 ) {
  			console.log("Somethings wrong");
  		} else {
        console.log($scope.products);
  			$('.grid').masonry();
  			console.log('masonry call');

  		}
	});*/

}]);