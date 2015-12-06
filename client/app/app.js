'use strict';

angular.module('nicolasCoutinFrApp', [
  'nicolasCoutinFrApp.auth',
  'nicolasCoutinFrApp.admin',
  'nicolasCoutinFrApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
