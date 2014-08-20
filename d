[33mcommit 0d848b3a316ae48bbfbc340b19190f19e548b876[m
Author: rapazz <moises.bravo@rapazz.cl>
Date:   Tue Aug 19 18:18:29 2014 +0000

    cambios en la maqueta

[1mdiff --git a/client/app/misProyectos/misProyectos.html b/client/app/misProyectos/misProyectos.html[m
[1mindex a64e569..2007eba 100644[m
[1m--- a/client/app/misProyectos/misProyectos.html[m
[1m+++ b/client/app/misProyectos/misProyectos.html[m
[36m@@ -99,7 +99,7 @@[m
                 <td>{{store.etapa}}</td>[m
                 <td><a href="/pages/docEvaluacion" ng-show="store.etapa=='Evaluación'"><span  class="glyphicon glyphicon-list-alt" style="font-size:24px;"></span></a>[m
                     <a href="pages/crearPreEvaluacion" ng-show="store.etapa=='Pre-Evaluación'"><span class="glyphicon glyphicon-list-alt" style="font-size:24px;"></span></a>[m
[31m-                <a  ng-click="launchComplexModal()" ng-show="store.etapa=='Ejecucion'"><span  class="glyphicon glyphicon glyphicon-edit" style="font-size:24px;"></span></a>[m
[32m+[m[32m                <a  href="/pages/actualizarProyecto" ng-show="store.etapa=='Ejecucion'"><span  class="glyphicon glyphicon glyphicon-edit" style="font-size:24px;"></span></a>[m
                                     </td>[m
             </tr>[m
             </tbody>[m
[1mdiff --git a/client/index.html b/client/index.html[m
[1mindex 589807b..d421501 100644[m
[1m--- a/client/index.html[m
[1m+++ b/client/index.html[m
[36m@@ -122,6 +122,8 @@[m
           <script src="app/main/main.js"></script>[m
           <script src="app/misProyectos/misProyectos.controller.js"></script>[m
           <script src="app/misProyectos/misProyectos.js"></script>[m
[32m+[m[32m           <script src="app/actualizarProyecto/actualizarProyecto.controller.js"></script>[m
[32m+[m[32m          <script src="app/actualizarProyecto/actualizarProyecto.js"></script>[m
           <script src="app/preEvaluaciones/preEvaluaciones.controller.js"></script>[m
           <script src="app/preEvaluaciones/preEvaluaciones.js"></script>[m
           <script src="components/auth/auth.service.js"></script>[m
