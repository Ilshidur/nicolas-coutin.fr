'use strict';

describe('Controller: CSSContestCtrl', function () {

  // load the controller's module
  beforeEach(module('nicolasCoutinFrApp'));

  var CSSContestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CSSContestCtrl = $controller('CSSContestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    // 1.should.equal(1);
  });
});
