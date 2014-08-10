'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('preEvaluaciones', {
        url: '/pages/preEvaluaciones',
        templateUrl: 'app/preEvaluaciones/preEvaluaciones.html',
        controller: 'PreevaluacionesCtrl'
      });
  });