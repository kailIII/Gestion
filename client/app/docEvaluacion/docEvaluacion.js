'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('docEvaluacion', {
        url: '/pages/docEvaluacion',
        templateUrl: 'app/docEvaluacion/docEvaluacion.html',
        controller: 'DocevaluacionCtrl'
      });
  });