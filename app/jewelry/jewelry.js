'use strict';

var myApp_Jewelry_Module = angular.module('myApp.jewelry', ['ngRoute'])

myApp_Jewelry_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jewelry', {
    templateUrl: 'jewelry/jewelry.html',
    controller: 'JewelryCtrl'
  });
}])

myApp_Jewelry_Module.controller('JewelryCtrl', ['$scope',function($scope) {

	var moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
	moltin.Authenticate(function() {
  		$scope.products = moltin.Product.List({status:0});
  		if ( $scope.products.length === 0 ) {
  			console.log("Somethings wrong");
  		} else {
        console.log($scope.products);
  			/*$('.grid').masonry();*/
  			console.log('masonry call');

  		}
	});

}]);