'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cv-old', {
        url: '/cv-old',
        templateUrl: 'app/cv-old/cv-content.html',
        controller: 'CvOldCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'Ancien CV'; }
        }
      });
  });
