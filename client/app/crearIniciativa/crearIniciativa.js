'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crearIniciativa', {
        url: '/pages/crearIniciativa',
        templateUrl: 'app/crearIniciativa/crearIniciativa.html',
        controller: 'CreariniciativaCtrl'
      });
  });