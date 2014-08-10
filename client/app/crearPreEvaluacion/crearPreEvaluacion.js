'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crearPreEvaluacion', {
        url: '/pages/crearPreEvaluacion',
        templateUrl: 'app/crearPreEvaluacion/crearPreEvaluacion.html',
        controller: 'CrearpreevaluacionCtrl'
      });
  });