'use strict';

angular.module('nicolasCoutinFrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        resolve: {
          // Constant title
          $title: function() { return 'Contact'; }
        }
      });
  });
