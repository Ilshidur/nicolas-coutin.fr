'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('ProjectsCtrl', function ($scope, projects) {
    $scope.message = 'Hello';
    $scope.projects = projects.data;
  });
