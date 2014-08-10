'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aprobarIniciativa', {
        url: '/pages/aprobarIniciativa',
        templateUrl: 'app/aprobarIniciativa/aprobarIniciativa.html',
        controller: 'AprobariniciativaCtrl'
      });
  });