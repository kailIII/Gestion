'use strict';

describe('Controller: CrearpreevaluacionCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionApp'));

  var CrearpreevaluacionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrearpreevaluacionCtrl = $controller('CrearpreevaluacionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
