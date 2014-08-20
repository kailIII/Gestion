'use strict';

angular.module('gestionApp')
  .controller('ActualizarproyectoCtrl',
		 function($scope) {
		 $scope.listas={}
		 $scope.listas.saludProyecto=['Saludable','En alerta','Critico']
	
		 });