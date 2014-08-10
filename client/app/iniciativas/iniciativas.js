'use strict';

angular.module('gestionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('iniciativas', {
        url: '/pages/iniciativas',
        templateUrl: 'app/iniciativas/iniciativas.html',
        controller: 'IniciativasCtrl'
      });
  });