'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('actualizarProyecto', {
        url: '/pages/actualizarProyecto',
        templateUrl: 'app/actualizarProyecto/actualizarProyecto.html',
        controller: 'ActualizarproyectoCtrl'
      });
  });