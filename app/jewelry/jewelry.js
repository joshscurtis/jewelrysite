'use strict';

angular.module('myApp.jewelry', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jewelry', {
    templateUrl: 'jewelry/jewelry.html',
    controller: 'JewelryCtrl'
  });
}])

.controller('JewelryCtrl', [function() {

}]);