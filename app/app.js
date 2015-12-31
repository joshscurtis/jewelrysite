'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.jewelry',
  'myApp.detail',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
