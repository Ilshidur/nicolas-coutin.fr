'use strict';

angular.module('nicolasCoutinFrApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.getAge = function () {
      var birthday = new Date(1995, 1, 24); // 1 => February
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

  });
