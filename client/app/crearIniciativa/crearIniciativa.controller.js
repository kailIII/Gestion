'use strict';

angular.module('gestionApp')
  .controller('CreariniciativaCtrl', function ($scope) {
    $scope.message = 'Hello';
$scope.listas ={}
      $scope.listas.empresa=['KCC','DCC','KRCC','KHSA','KCH','KCCA','KCCF']
        $scope.listas.departamento=['IT','Finanzas','C. Gestion']
        $scope.nombreUsuario = 'Moisés Bravo'
        $scope.fechaSolicitud='10/08/2014'
  });

