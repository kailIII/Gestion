'use strict';

describe('Controller: IniciativasCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var IniciativasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IniciativasCtrl = $controller('IniciativasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
