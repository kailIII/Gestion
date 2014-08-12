'use strict';

angular.module('gestionApp')
  .controller('DocevaluacionCtrl', function ($scope) {
    $scope.message = 'Hello';
        $scope.proyecto={}
        $scope.proyecto.etapa="Evaluación"
        $scope.proyecto.nombreDelProyecto='Proyecto 1';
        $scope.proyecto.nombreUsuario="Moisés Bravo";
        $scope.proyecto.jefeProyecto ='Moisés Bravo'
        $scope.proyecto.fechaSolicitud="10/08/2014";
        $scope.proyecto.empresa="KCC";
        $scope.proyecto.costoOnOff = "25000"
        $scope.proyecto.costoOnGoing="1500"
        $scope.proyecto.beneficios ="234000"
        $scope.proyecto.beneficiosIntangibles="No Tiene"
        $scope.proyecto.departamento="Informatica"
        $scope.proyecto.resumenEjecutivo='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        $scope.listas={}
        $scope.listas.tipoAprobador =['Gerente de Pryecto','Key User','Patrocinador']
        $scope.listas.tipoAdjunto=['Doc Pre Evaluacion','Documento de Inicio','Doc. Solicitud']
$scope.listas.tipoEntregable=['Doc Diseño','Doc Especificaciones','Doc Soporte']
        $scope.proyecto.entregables=[]

        $scope.agregar=function(){

            $scope.proyecto.entregables.push($scope.proyecto.tipoEntregable)
        }

  });

