'use strict';

var myApp_Detail_Module = angular.module('myApp.detail', ['ngRoute'])

myApp_Detail_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:itemId', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

myApp_Detail_Module.controller('DetailCtrl', ['$rootScope','$routeParams',function($rootScope,$routeParams) {

  $rootScope.addToCart = function () {

    // loop through products array, find product matching itemId
    for ( var product in $rootScope.products) {
      if ( $rootScope.products[product].id === $routeParams.itemId ) {
        $rootScope.item=$rootScope.products[product];
        break;
      }
    }

    // build mods object from product object elements
    var mods = {};

    for (var m in $rootScope.item.modifiers ){
      mods[m]=$rootScope.item.modifiers[m].chosen;
    }

    // insert product with modifiers into cart
    $rootScope.moltin.Cart.Insert($rootScope.item.id,'1',mods,function(cart) {

      // animate the success notifcation
      $('#slidedown').toggleClass('on');
      $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();
      });

    }, function(error) {
      console.log(JSON.stringify(mods));

    });
  }

  // loop through products array, find product matching itemId
  for ( var product in $rootScope.products) {
   	if ( $rootScope.products[product].id === $routeParams.itemId ) {
  		$rootScope.item=$rootScope.products[product];
  		break;
  	}
  }





}]);