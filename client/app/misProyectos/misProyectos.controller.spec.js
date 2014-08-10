'use strict';

describe('Controller: MisproyectosCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var MisproyectosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MisproyectosCtrl = $controller('MisproyectosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
