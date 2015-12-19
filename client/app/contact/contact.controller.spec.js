'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('nicolasCoutinFrApp'));

  var ContactCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    // 1.should.equal(1);
  });
});
