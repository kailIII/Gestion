'use strict';

describe('Controller: ActualizarproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var ActualizarproyectoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActualizarproyectoCtrl = $controller('ActualizarproyectoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
