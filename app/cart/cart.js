'use strict';

var myApp_Cart_Module = angular.module('myApp.cart', ['ngRoute'])

myApp_Cart_Module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'cart/cart.html',
    controller: 'CartCtrl'
  });
}])

myApp_Cart_Module.controller('CartCtrl', ['$scope',function($scope) {
	/*$scope.cartFull = $scope.moltin.Cart.Contents(function(cartFull) {
		//console.log(cartFull.contents); 
		var cartItemKeys = Object.keys(cartFull.contents);
		for ( var itemKey in cartItemKeys ) {
			//console.log(cartItemKeys[itemKey]);
			//console.log(cartFull.contents[cartItemKeys[itemKey]]);
			$scope.cart.push(cartFull.contents[cartItemKeys[itemKey]]);
		}
		console.log($scope.cart);
	});*/


	$scope.cartFull = {
		"totals": {
    "pre_discount": {
      "formatted": {
        "with_tax": "$1,200.00",
        "without_tax": "$1,000.00",
        "tax": "$200.00"
      },
      "rounded": {
        "with_tax": 1200,
        "without_tax": 1000,
        "tax": 200
      },
      "raw": {
        "with_tax": 1200,
        "without_tax": 1000,
        "tax": 200
      }
    },
    "post_discount": {
      "formatted": {
        "with_tax": "$1,200.00",
        "without_tax": "$300.00",
        "tax": "$200.00"
      },
      "rounded": {
        "with_tax": 1200,
        "without_tax": 1000,
        "tax": 200
      },
      "raw": {
        "with_tax": 1200,
        "without_tax": 1000,
        "tax": 200
      }
    }
  }
};

	

	$scope.cart = [
		{
      "id": "1151648954744570668",
      "quantity": 1,
      "order": null,
      "created_at": "2015-12-30 20:27:52",
      "updated_at": "2015-12-30 20:27:52",
      "sku": "000004",
      "title": "Skull",
      "slug": "skull",
      "sale_price": 0,
      "status": {
        "value": "Draft",
        "data": {
          "key": "0",
          "value": "Draft"
        }
      },
      "category": {
        "value": "Uncategorized",
        "data": {
          "1136589886506139899": {
            "id": "1136589886506139899",
            "order": null,
            "created_at": "2015-12-10 01:48:08",
            "updated_at": "2015-12-10 01:48:08",
            "parent": null,
            "slug": "uncategorized",
            "status": {
              "value": "Live",
              "data": {
                "key": "1",
                "value": "Live"
              }
            },
            "title": "Uncategorized",
            "description": "Products that do not fit into another category"
          }
        }
      },
      "stock_level": 10,
      "stock_status": {
        "value": "In Stock",
        "data": {
          "key": "1",
          "value": "In Stock"
        }
      },
      "description": "skull",
      "requires_shipping": {
        "value": "Yes",
        "data": {
          "key": "1",
          "value": "Yes"
        }
      },
      "weight": 0,
      "height": 0,
      "width": 0,
      "depth": 0,
      "catalog_only": {
        "value": "No",
        "data": {
          "key": "0",
          "value": "No"
        }
      },
      "tax_band": {
        "value": "Default",
        "data": {
          "id": "1136589886782963741",
          "title": "Default",
          "description": null,
          "rate": 20,
          "created_at": null,
          "updated_at": null
        }
      },
      "collection": null,
      "brand": {
        "value": "Cowboy Co. Jewelry",
        "data": {
          "id": "1149526196912915020",
          "order": null,
          "created_at": "2015-12-27 22:10:20",
          "updated_at": "2015-12-27 22:10:20",
          "slug": "cowboycojewelry",
          "status": {
            "value": "Draft",
            "data": {
              "key": "0",
              "value": "Draft"
            }
          },
          "title": "Cowboy Co. Jewelry",
          "description": "American made jewelry"
        }
      },
      "price": 300,
      "is_variation": false,
      "modifiers": [],
      "images": [],
      "pricing": {
        "formatted": {
          "with_tax": "$360.00",
          "without_tax": "$300.00",
          "tax": "$60.00"
        },
        "rounded": {
          "with_tax": 360,
          "without_tax": 300,
          "tax": 60
        },
        "raw": {
          "with_tax": 360,
          "without_tax": 300,
          "tax": 60
        }
      },
      "name": "Skull",
      "totals": {
        "pre_discount": {
          "formatted": {
            "with_tax": "$360.00",
            "without_tax": "$300.00",
            "tax": "$60.00"
          },
          "rounded": {
            "with_tax": 360,
            "without_tax": 300,
            "tax": 60
          },
          "raw": {
            "with_tax": 360,
            "without_tax": 300,
            "tax": 60
          }
        },
        "post_discount": {
          "formatted": {
            "with_tax": "$360.00",
            "without_tax": "$300.00",
            "tax": "$60.00"
          },
          "rounded": {
            "with_tax": 360,
            "without_tax": 300,
            "tax": 60
          },
          "raw": {
            "with_tax": 360,
            "without_tax": 300,
            "tax": 60
          }
        }
      }
    }

	];

}]);