'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('CSS-contest', {
        url: '/CSS-contest',
        templateUrl: 'app/CSS-contest/CSS-contest.html',
        controller: 'CSSContestCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'CSS-contest'; }
        }
      });
  });
