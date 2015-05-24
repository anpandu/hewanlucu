'use strict';

/**
 * @ngdoc function
 * @name hewanlucuApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the hewanlucuApp
 */
angular.module('hewanlucuApp')
  .controller('ModalCtrl', function ($scope, modal_img) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]
    $scope.modal_img = modal_img
  })
