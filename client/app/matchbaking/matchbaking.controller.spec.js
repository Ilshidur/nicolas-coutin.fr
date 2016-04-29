'use strict';

describe('Controller: MatchbakingCtrl', function () {

  // load the controller's module
  beforeEach(module('nicolasCoutinFrApp'));

  var MatchbakingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchbakingCtrl = $controller('MatchbakingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    // 1.should.equal(1);
  });
});
