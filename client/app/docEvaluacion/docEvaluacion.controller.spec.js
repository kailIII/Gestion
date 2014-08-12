'use strict';

describe('Controller: DocevaluacionCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var DocevaluacionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DocevaluacionCtrl = $controller('DocevaluacionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
