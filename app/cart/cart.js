'use strict';

var myApp_Cart_Module = angular.module('myApp.cart', ['ngRoute'])

myApp_Cart_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl'
  });
}])

myApp_Cart_Module.controller('CartCtrl', ['$scope',function($scope) {

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