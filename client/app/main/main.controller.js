'use strict';

angular.module('gestionApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


$scope.proyecto ={}
$scope.proyecto.calendario =[{"id":"Enero","num":4},{"id":"Febrero","num":4},{"id":"Marzo","num":5},{"id":"Abril","num":5},
{"id":"Mayo","num":4},{"id":"Junio","num":4},{"id":"Julio","num":4},{"id":"Agosto","num":4},{"id":"Septiembre","num":4},
{"id":"Octubre","num":4},{"id":"Noviembre","num":4},{"id":"Diciembre","num":4}]


        $scope.chartObject = {
            "type": "PieChart",
            "displayed": true,
            "data": {
                "cols": [
                    {
                        "id": "month",
                        "label": "Month",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "laptop-id",
                        "label": "Laptop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "desktop-id",
                        "label": "Desktop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "server-id",
                        "label": "Server",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "cost-id",
                        "label": "Shipping",
                        "type": "number"
                    }
                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "Estrategico"
                            },
                            {
                                "v": 19,
                                "f": "42 Proyectos"
                            },
                            {
                                "v": 12,
                                "f": "12 Proyectos"
                            },
                            {
                                "v": 7,
                                "f": "7 servers"
                            },
                            {
                                "v": 3
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Operacional"
                            },
                            {
                                "v": 13
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)"
                            },
                            {
                                "v": 12
                            },
                            {
                                "v": 2
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Innovación"
                            },
                            {
                                "v": 24
                            },
                            {
                                "v": 5
                            },
                            {
                                "v": 11
                            },
                            {
                                "v": 6
                            }
                        ]
                    }
                ]
            },
            "options": {
                "title": "Proyectos por Tipo",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "Sales unit",
                    "gridlines": {
                        "count": 10
                    }
                },
                "hAxis": {
                    "title": "Date"
                }
            },
            "formatters": {}
        }
         $scope.chartObject4 = {
            "type": "PieChart",
            "displayed": true,
            "data": {
                "cols": [
                    {
                        "id": "month",
                        "label": "Month",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "laptop-id",
                        "label": "Laptop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "desktop-id",
                        "label": "Desktop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "server-id",
                        "label": "Server",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "cost-id",
                        "label": "Shipping",
                        "type": "number"
                    }
                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "Estrategico"
                            },
                            {
                                "v": 19,
                                "f": "42 Proyectos"
                            },
                            {
                                "v": 12,
                                "f": "12 Proyectos"
                            },
                            {
                                "v": 7,
                                "f": "7 servers"
                            },
                            {
                                "v": 3
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Operacional"
                            },
                            {
                                "v": 13
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)"
                            },
                            {
                                "v": 12
                            },
                            {
                                "v": 2
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Innovación"
                            },
                            {
                                "v": 24
                            },
                            {
                                "v": 5
                            },
                            {
                                "v": 11
                            },
                            {
                                "v": 6
                            }
                        ]
                    }
                ]
            },
            "options": {
                "title": "Proyectos por Estado",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "Sales unit",
                    "gridlines": {
                        "count": 10
                    }
                },
                "hAxis": {
                    "title": "Date"
                }
            },
            "formatters": {}
        }  
   $scope.chartObject3 = {
            "type": "PieChart",
            "displayed": true,
            "data": {
                "cols": [
                    {
                        "id": "month",
                        "label": "Month",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "laptop-id",
                        "label": "Laptop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "desktop-id",
                        "label": "Desktop",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "server-id",
                        "label": "Server",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "cost-id",
                        "label": "Shipping",
                        "type": "number"
                    }
                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "Estrategico"
                            },
                            {
                                "v": 19,
                                "f": "42 Proyectos"
                            },
                            {
                                "v": 12,
                                "f": "12 Proyectos"
                            },
                            {
                                "v": 7,
                                "f": "7 servers"
                            },
                            {
                                "v": 3
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Operacional"
                            },
                            {
                                "v": 13
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)"
                            },
                            {
                                "v": 12
                            },
                            {
                                "v": 2
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Innovación"
                            },
                            {
                                "v": 24
                            },
                            {
                                "v": 5
                            },
                            {
                                "v": 11
                            },
                            {
                                "v": 6
                            }
                        ]
                    }
                ]
            },
            "options": {
                "title": "Proyectos por Salud",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "Sales unit",
                    "gridlines": {
                        "count": 10
                    }
                },
                "hAxis": {
                    "title": "Date"
                }
            },
            "formatters": {}
        }


        $scope.chartObject2 = {
            "type": "ColumnChart",
            "displayed": true,
            "data": {
                "cols": [
                    {
                        "id": "jefe-id",
                        "label": "Jefe Proyecto",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "id-mes1",
                        "label": "Agosto",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "id-mes2",
                        "label": "Septiembre",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "id-mes3",
                        "label": "Octubre",
                        "type": "number",
                        "p": {}
                    },
                    {
                        "id": "id-mes4",
                        "label": "Noviembre",
                        "type": "number"
                    }
                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "Juan Pablo Callejas",
                                "p": {}
                            },
                            {
                                "v": 120,
                                "f": "6 Proyectos",
                                "p": {}
                            },
                            {
                                "v": 20,
                                "f": "1 Proyecto",
                                "p": {}
                            },
                            {
                                "v": 30,
                                "f": "2 proyectos",
                                "p": {}
                            },
                            {
                                "v": 4,
                                "p": {},
                                "f": ""
                            },
                            null
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Moisés Bravo",
                                "p": {}
                            },
                            {
                                "v": 13,
                                "p": {}
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)",
                                "p": {}
                            },
                            {
                                "v": 19,
                                "p": {}
                            },
                            {
                                "v": 2,
                                "p": {},
                                "f": "$2,00"
                            },
                            null
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "Jorge Fernandez",
                                "p": {}
                            },
                            {
                                "v": 24,
                                "p": {}
                            },
                            {
                                "v": 5,
                                "p": {}
                            },
                            {
                                "v": 11,
                                "p": {}
                            },
                            {
                                "v": 6,
                                "p": {},
                                "f": "$6,00"
                            },
                            null
                        ]
                    }
                ]
            },
            "options": {
                "title": "",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "HH",
                    "gridlines": {
                        "count": 6
                    }
                },
                "hAxis": {
                    "title": "Jefe Proyectos"
                },
                "tooltip": {
                    "isHtml": true
                }
            },
            "formatters": {
                "date": [
                    {
                        "columnNum": 5,
                        "formatType": "long"
                    }
                ],
                "number": [
                    {
                        "columnNum": 4,
                        "prefix": "$"
                    }
                ]
            },
            "view": {}
        }


  });