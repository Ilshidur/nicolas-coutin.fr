'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('ProjectsCtrl', function ($scope, projects) {
    $scope.projects = projects.data;
  });
