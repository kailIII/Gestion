'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('misProyectos', {
        url: '/pages/misProyectos',
        templateUrl: 'app/misProyectos/misProyectos.html',
        controller: 'MisproyectosCtrl'
      });
  });