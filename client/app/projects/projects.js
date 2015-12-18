'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
