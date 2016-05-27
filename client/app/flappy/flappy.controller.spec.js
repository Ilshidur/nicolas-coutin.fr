'use strict';

describe('Controller: FlappyCtrl', function () {

  // load the controller's module
  beforeEach(module('nicolasCoutinFrApp'));

  var FlappyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlappyCtrl = $controller('FlappyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
