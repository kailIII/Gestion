'use strict';

describe('Controller: PreevaluacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var PreevaluacionesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreevaluacionesCtrl = $controller('PreevaluacionesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
