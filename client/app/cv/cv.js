'use strict';

// TODO: Dynamicly serve the HTML file (via https://github.com/Quantumplation/resume-server/ ?)

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cv', {
        url: '/cv',
        templateUrl: 'app/cv/cv.html',
        controller: 'CvCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'CV'; }
        }
      });
  });
