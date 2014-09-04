'use strict';

angular.module('gestionApp')
  .controller('MisproyectosCtrl',['$scope','createDialog', function($scope,createDialogService) {
    $scope.message = 'Hello';

        $scope.lstProyectos =[
            {
                id:'1',
                nombreProyecto:'Proyecto 1',
               estado:'nueva',
                fechaTermino:'10/08/2015',
                etapa:'Pre-Evaluación',
                empresa:'KCC',
                oneOff:'',
                oneGoing:''
            },
            {
                id:'2',
                nombreProyecto:'Proyecto 2',
                estado:'nueva',
                fechaTermino:'12/08/2015',
                etapa:'Evaluación',
                empresa:'KHSA',
                oneOff:'15000',
                oneGoing:'2500'
            },
            {
                id:'3',
                nombreProyecto:'Proyecto 3',
                estado:'nueva',
                fechaTermino:'12/08/2015',
                etapa:'Ejecucion',
                empresa:'KCCA',
                oneOff:'25000',
                oneGoing:'2500'
            }
            ]






$scope.launchComplexModal = function() {
			createDialogService('app/auditoria/auditoria.html', {
              id: 'simpleDialog',
              title: 'Auditoria Proyectos',
              backdrop: true,
              success: {label: 'Success', fn: function() {console.log('Simple modal closed');}}
            });
		};





   }]);



