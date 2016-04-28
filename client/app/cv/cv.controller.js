'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('CvCtrl', function ($scope, skills, employments) {

    $scope.skills = skills.data;
    $scope.employments = employments.data;

    $scope.getType = function (percentage) {
      if (percentage < 50) {
        return 'danger';
      } else if (percentage < 75) {
        return 'warning';
      } else {
        return 'success';
      }
    };

  });
