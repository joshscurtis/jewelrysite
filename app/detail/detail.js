'use strict';

var myApp_Detail_Module = angular.module('myApp.detail', ['ngRoute','ngTouch'])

myApp_Detail_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:itemId', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

myApp_Detail_Module.controller('DetailCtrl', ['$rootScope','$routeParams','$window',function($rootScope,$routeParams,$window) {



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
      mods[m]=$rootScope.item.modifiers[m].chosen.id;
    }

    console.log($rootScope.products);

    // insert product with modifiers into cart
    $rootScope.moltin.Cart.Insert($rootScope.item.id,'1',mods,function(cart) {

      // animate the success notifcation
      $('#slidedown').toggleClass('on');
      $rootScope.moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.cartCount=items.total_items;
        $rootScope.$apply();

        $rootScope.moltin.Cart.Checkout(function(cart) {
      
          $rootScope.checkoutCart = cart;
          console.log($rootScope.checkoutCart);

        }, function(error) {
        // Something went wrong...
        });

  });

    }, function(error) {
      console.log(JSON.stringify(mods));

    });
  }


  var previousProductID;
  var nextProductID;
  var productIDArray = [];

  // loop through products array, find product matching itemId
  for ( var product in $rootScope.products) {

    productIDArray.push($rootScope.products[product].id);

   	if ( $rootScope.products[product].id === $routeParams.itemId ) {
  		$rootScope.item=$rootScope.products[product];
  	}
  }

  var currentIndex = $.inArray($routeParams.itemId,productIDArray);

  previousProductID = productIDArray[currentIndex-1];
  nextProductID = productIDArray[currentIndex+1];




  $rootScope.nextProduct = function () {
     console.log(nextProductID);
     $window.location.href="/#/detail/"+nextProductID;
  }

  $rootScope.previousProduct = function () {
     console.log(previousProductID);
     $window.location.href="/#/detail/"+previousProductID;
  }




}]);