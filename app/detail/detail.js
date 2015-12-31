'use strict';

var myApp_Detail_Module = angular.module('myApp.detail', ['ngRoute'])

myApp_Detail_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:itemId', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

myApp_Detail_Module.controller('DetailCtrl', ['$scope','$routeParams',function($scope,$routeParams) {
  
  console.log($routeParams.itemId);

  var moltin = new Moltin({publicId: 'xwXTf0jOQhpHRdbYfWpY1pKs4uO7NEGY5J8nq8AV'});
  moltin.Authenticate(function() {

    $scope.item = moltin.Product.Get(String($routeParams.itemId));


    

   

  });

}]);