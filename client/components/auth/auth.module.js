'use strict';

angular.module('nicolasCoutinFrApp.auth', [
  'nicolasCoutinFrApp.constants',
  'nicolasCoutinFrApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
