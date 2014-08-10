'use strict';

describe('Controller: CreariniciativaCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var CreariniciativaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreariniciativaCtrl = $controller('CreariniciativaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
