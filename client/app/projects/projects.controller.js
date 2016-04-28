'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('ProjectsCtrl', function ($scope, projects, otherProjects) {
    $scope.projects = projects.data;
    $scope.otherProjects = otherProjects.data;
  });
