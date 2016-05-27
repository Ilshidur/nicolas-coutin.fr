'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('flappy', {
        url: '/flappy',
        templateUrl: 'app/flappy/flappy.html',
        controller: 'FlappyCtrl',
        resolve: {
          // Constant title
          $title: function () { return 'Flappy bloat'; }
        }
      });
  });
