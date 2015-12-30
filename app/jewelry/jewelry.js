'use strict';

var myApp_Jewelry_Module = angular.module('myApp.jewelry', ['ngRoute'])

myApp_Jewelry_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jewelry', {
    templateUrl: 'jewelry/jewelry.html',
    controller: 'JewelryCtrl'
  });
}])

myApp_Jewelry_Module.controller('JewelryCtrl', [function() {


	var products = [
		{
			name: "bronson",
			slug: "bronson"
		},
		{
			name: "poppy",
			slug: "poppy"
		}
	];

	console.log(products);

	/*console.log('start');
	var moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
	moltin.Authenticate(function() {
  		console.log('authenticated');
  		// Make your calls here
  		var products = moltin.Product.List({status:0});
  		console.log(products[0].slug);

	});*/

}]);