'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('ProjectsCtrl', ['$scope', 'projects', function ($scope, projects) {
    $scope.projects = projects.data;
  }]);
