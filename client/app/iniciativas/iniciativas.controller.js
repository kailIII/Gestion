'use strict';

angular.module('gestionApp')
  .controller('IniciativasCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.lstIniciativas =[
        {
            nombreProyecto:'Proyecto 1',
            solicitante:'Moisés Bravo',
            fechaSolicitud:'10/08/2014',
            estadoIniciativa:'Aprobada',
            empresa:'KCC'
        },
        {
            nombreProyecto:'Proyecto 2',
            solicitante:'Juan Pablo Callejas',
            fechaSolicitud:'10/08/2014',
            estadoIniciativa:'Pendiente',
            empresa:'KRCC'
        },
        {
            nombreProyecto:'Proyecto 3',
            solicitante:'Carlos Rubio',
            fechaSolicitud:'10/08/2014',
            estadoIniciativa:'Rechazada',
            empresa:'KCCA'
        },
        {
            nombreProyecto:'Proyecto 4',
            solicitante:'Moisés Bravo',
            fechaSolicitud:'10/08/2014',
            estadoIniciativa:'Pendiente',
            empresa:'KHSA'
        }
    ]
  });
