'use strict';

angular.module('gestionApp')
  .controller('MisproyectosCtrl', function ($scope) {
    $scope.message = 'Hello';

        $scope.lstProyectos =[
            {
                id:'1',
                nombreProyecto:'Proyecto 1',
               estado:'nueva',
                fechaTermino:'10/08/2015',
                etapa:'En Pre-evaluación',
                empresa:'KCC',
                oneOff:'',
                oneGoing:''
            }
            ]


    });
