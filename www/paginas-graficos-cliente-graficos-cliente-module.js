(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-graficos-cliente-graficos-cliente-module"],{

/***/ "./src/app/paginas/graficos-cliente/graficos-cliente.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/graficos-cliente/graficos-cliente.module.ts ***!
  \*********************************************************************/
/*! exports provided: GraficosClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficosClientePageModule", function() { return GraficosClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _graficos_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graficos-cliente.page */ "./src/app/paginas/graficos-cliente/graficos-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _graficos_cliente_page__WEBPACK_IMPORTED_MODULE_6__["GraficosClientePage"]
    }
];
var GraficosClientePageModule = /** @class */ (function () {
    function GraficosClientePageModule() {
    }
    GraficosClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_graficos_cliente_page__WEBPACK_IMPORTED_MODULE_6__["GraficosClientePage"]]
        })
    ], GraficosClientePageModule);
    return GraficosClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/graficos-cliente/graficos-cliente.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/graficos-cliente/graficos-cliente.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Gráficos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <div>\r\n      <div style=\"display: block\">\r\n        <canvas baseChart\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 2rem;\">\r\n    <div>\r\n      <div style=\"display: block\">\r\n        <canvas baseChart\r\n          [datasets]=\"dataDemora\"\r\n          [labels]=\"demoraLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 2rem;\">\r\n    <div>\r\n      <div style=\"display: block\">\r\n        <canvas baseChart\r\n          [datasets]=\"dataOrden\"\r\n          [labels]=\"ordenLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 2rem;\">\r\n    <div>\r\n      <div style=\"display: block\">\r\n        <canvas baseChart\r\n          [datasets]=\"dataOrden\"\r\n          [labels]=\"ordenLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"margin-top: 2rem;\">\r\n    <div>\r\n      <div style=\"display: block\">\r\n        <canvas baseChart\r\n          [datasets]=\"dataNumeros\"\r\n          [labels]=\"numerosLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\">\r\n        </canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/graficos-cliente/graficos-cliente.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/graficos-cliente/graficos-cliente.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZ3JhZmljb3MtY2xpZW50ZS9ncmFmaWNvcy1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/graficos-cliente/graficos-cliente.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/graficos-cliente/graficos-cliente.page.ts ***!
  \*******************************************************************/
/*! exports provided: GraficosClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficosClientePage", function() { return GraficosClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/encuestas.service */ "./src/app/servicios/encuestas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");






var GraficosClientePage = /** @class */ (function () {
    function GraficosClientePage(service, route, auth) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.auth = auth;
        this.verdaderosFila = 0;
        this.falsosFila = 0;
        this.verdaderosFalta = 0;
        this.falsosFalta = 0;
        this.verdaderosRoturas = 0;
        this.falsosRoturas = 0;
        this.muchas = 0;
        this.normal = 0;
        this.poca = 0;
        this.mp = 0;
        this.unos = 0;
        this.dos = 0;
        this.tres = 0;
        this.cuatros = 0;
        this.cincos = 0;
        this.ordenado = 0;
        this.desorden = 0;
        this.mDesorden = 0;
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                }
            }
        };
        this.barChartLabels = ['Faltantes', 'Fila', 'Roturas'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__];
        this.barChartData = [
            { data: [this.verdaderosFalta, this.verdaderosFila, this.verdaderosRoturas], label: 'Si' },
            { data: [this.verdaderosFalta, this.verdaderosFila, this.verdaderosRoturas], label: 'No' }
        ];
        //falta limpieza y orden
        this.dataDemora = [
            { data: [this.muchas, this.normal, this.poca, this.mp], label: '' }
        ];
        this.demoraLabels = ['Mucha', 'Normal', 'Poca', "Muy poca"];
        this.dataOrden = [
            { data: [this.ordenado, this.desorden, this.mDesorden], label: '' }
        ];
        this.ordenLabels = ["Ordenado", "Desordenado", "Muy desordenado"];
        this.dataNumeros = [
            { data: [this.unos, this.dos, this.tres, this.cuatros, this.cincos], label: '' }
        ];
        this.service.GetEncuestasEmpleados().subscribe(function (lista) {
            _this.encuestasEmpleados = lista;
        });
        for (var i = 1; i < 6; i++) {
            this.numerosLabels.push[i];
        }
        this.numerosLabels.sort();
        this.encuestasEmpleados.forEach(function (elem) {
            if (elem.fila) {
                _this.verdaderosFila++;
            }
            else {
                _this.falsosFila++;
            }
            if (elem.roturas) {
                _this.verdaderosRoturas++;
            }
            else {
                _this.falsosRoturas++;
            }
            if (elem.falta) {
                _this.verdaderosFalta++;
            }
            else {
                _this.falsosFalta++;
            }
            if (elem.demora == "Mucha") {
                _this.muchas++;
            }
            else if (elem.demora == "Normal") {
                _this.normal++;
            }
            else if (elem.demora == "Poca") {
                _this.poca++;
            }
            else {
                _this.mp++;
            }
            if (elem.limpieza == 1) {
                _this.unos++;
            }
            else if (elem.limpieza == 2) {
                _this.dos++;
            }
            else if (elem.limpieza == 3) {
                _this.tres++;
            }
            else if (elem.limpieza == 4) {
                _this.cuatros++;
            }
            else {
                _this.cincos++;
            }
            if (elem.orden == "Ordenado") {
                _this.ordenado++;
            }
            else if (elem.orden == "Desordenado") {
                _this.desorden++;
            }
            else {
                _this.mDesorden++;
            }
        });
    }
    GraficosClientePage.prototype.ngOnInit = function () {
    };
    GraficosClientePage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    GraficosClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graficos-cliente',
            template: __webpack_require__(/*! ./graficos-cliente.page.html */ "./src/app/paginas/graficos-cliente/graficos-cliente.page.html"),
            styles: [__webpack_require__(/*! ./graficos-cliente.page.scss */ "./src/app/paginas/graficos-cliente/graficos-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_3__["EncuestasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], GraficosClientePage);
    return GraficosClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-graficos-cliente-graficos-cliente-module.js.map