'use strict';

var myApp_Jewelry_Module = angular.module('myApp.jewelry', ['ngRoute'])

myApp_Jewelry_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jewelry', {
    templateUrl: 'jewelry/jewelry.html',
    controller: 'JewelryCtrl'
  });
}])

myApp_Jewelry_Module.controller('JewelryCtrl', ['$scope',function($scope) {
}]);