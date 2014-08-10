'use strict';

describe('Controller: AprobariniciativaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var AprobariniciativaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AprobariniciativaCtrl = $controller('AprobariniciativaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
