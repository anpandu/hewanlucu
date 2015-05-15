'use strict';

/**
 * @ngdoc function
 * @name hewanlucuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hewanlucuApp
 */
angular.module('hewanlucuApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.images = [
      'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
      'http://i.imgur.com/YY3bLP7.jpg',
      'http://i.imgur.com/9lDdLYR.jpg',
      'http://i.imgur.com/1mAzNUY.jpg',
      'https://ppcdn.500px.org/96496237/c4fed65b554428956caf9c1792fbe9ad88131b24/2048.jpg',
      'http://i.imgur.com/fYYulaI.jpg',
      'http://i.imgur.com/gVX4eUj.jpg',
      'http://i.imgur.com/P0b09BO.jpg',
      'http://i.imgur.com/Eq0Z7vm.jpg',
      'http://i.imgur.com/XxMKKi1.jpg'
    ];
    $scope.items = [
	    {
	        "id": "32dx81",
	        "title": "Our 3 day old baby chicks enjoying the warmth from my husband's coffee mug.",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/oPis3xl",
	        "img_urls": [
	            "http://i.imgur.com/oPis3xl.jpg"
	        ],
	        "ups": 6630,
	        "created": "2015-04-13T01:10:58.000Z",
	        "raw_created": 1428887458,
	        "permalink": "/r/aww/comments/32dx81/our_3_day_old_baby_chicks_enjoying_the_warmth/",
	        "num_comments": 1149
	    }
	];
	$scope.after = '';
	$scope.load_text = 'LOAD MORE';


	$scope.loadmongo = function () {
		$scope.load_text = "loading ...";
		var url = 'http://localhost:1337/reddititems/get?n=10' + (($scope.after=='') ? '' : '&after='+$scope.after);
		$http
		.get(url)
		.success(function(data, status, headers, config) {
			if (data.length>0) {
				$scope.after = data[data.length-1]['r_id'];
				data.forEach(function(e){
					$scope.items.push(e);
				});
			}
			$scope.load_text = "LOAD MORE";
		})
		.error(function(data, status, headers, config) {
			$scope.load_text = "LOAD MORE";
		});	
	}

  });
