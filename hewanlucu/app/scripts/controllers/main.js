'use strict';

/**
 * @ngdoc function
 * @name hewanlucuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hewanlucuApp
 */
angular.module('hewanlucuApp')
  .controller('MainCtrl', function ($scope, $http, ModalService) {
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
    $scope.items = [];
	$scope.after = '';
	$scope.load_text = 'LOAD MORE';
	$scope.count = 0;


	$scope.loadcount = function () {
		$scope.count = 2000;
		var url = 'http://107.161.27.119:8081/getcount/';
		$http
		.get(url)
		.success(function(data, status, headers, config) {
			$scope.count = data;
		})
		.error(function(data, status, headers, config) {
			$scope.count = 2000;
		});	
	}

	$scope.loadmongo = function () {
		$scope.load_text = "loading ...";
		var url = 'http://107.161.27.119:8081/get?n=10' + (($scope.after=='') ? '' : '&after='+$scope.after);
		$http
		.get(url)
		.success(function(data, status, headers, config) {
			if (data.length>0) {
				data = data.sort(function(a,b) { return (a['raw_created']<b['raw_created']) ? 1 : -1;});
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

	$scope.info_technologies = false
	$scope.info_about = false

	$scope.dropdown = function (_var) {
		if (_var==0)
			$scope.info_technologies = ! $scope.info_technologies
		else
		if (_var==1)
			$scope.info_about = ! $scope.info_about
	}

	$scope.showModal = function(img) {
		ModalService.showModal({
			templateUrl: "views/modal_img.html",
			controller: "ModalCtrl",
			inputs: {
				modal_img: img
			}
		}).then(function(modal) {
			modal.element.modal()
			modal.close.then(function(result) {})
		})
	}

  });
