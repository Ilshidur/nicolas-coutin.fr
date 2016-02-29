'use strict';

describe('Controller: CvOldCtrl', function () {

  // load the controller's module
  beforeEach(module('nicolasCoutinFrApp'));

  var CvOldCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CvOldCtrl = $controller('CvOldCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    // 1.should.equal(1);
  });
});
