'use strict';

/**
 * @ngdoc overview
 * @name hewanlucuApp
 * @description
 * # hewanlucuApp
 *
 * Main module of the application.
 */
angular
  .module('hewanlucuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularModalService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
