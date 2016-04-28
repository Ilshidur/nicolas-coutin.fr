'use strict';

// TODO: Show details about the projects tools

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'Projets'; },
          projects: ['$http', function($http) {
            return $http.get('/api/projects');
          }],
          otherProjects: ['$http', function($http) {
            return $http.get('/api/otherprojects');
          }]
        }
      });
  });
