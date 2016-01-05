'use strict';

var myApp_Detail_Module = angular.module('myApp.detail', ['ngRoute'])

myApp_Detail_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:itemId', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

myApp_Detail_Module.controller('DetailCtrl', ['$scope','$routeParams',function($scope,$routeParams) {
  
  // loop through products array, find product matching itemId
  console.log($scope.products);
  for ( var product in $scope.products) {
   	if ( $scope.products[product].id === $routeParams.itemId ) {
  		$scope.item=$scope.products[product];
  		break;
  	}
  }

}]);