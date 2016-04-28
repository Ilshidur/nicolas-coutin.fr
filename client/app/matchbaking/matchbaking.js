'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matchbaking', {
        url: '/matchbaking',
        templateUrl: 'app/matchbaking/matchbaking.html',
        controller: 'MatchbakingCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'matchbaking'; }
        }
      });
  });
