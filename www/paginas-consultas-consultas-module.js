(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-consultas-consultas-module"],{

/***/ "./src/app/paginas/consultas/consultas.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/consultas/consultas.module.ts ***!
  \*******************************************************/
/*! exports provided: ConsultasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultasPageModule", function() { return ConsultasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultas.page */ "./src/app/paginas/consultas/consultas.page.ts");







var routes = [
    {
        path: '',
        component: _consultas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultasPage"]
    }
];
var ConsultasPageModule = /** @class */ (function () {
    function ConsultasPageModule() {
    }
    ConsultasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultasPage"]]
        })
    ], ConsultasPageModule);
    return ConsultasPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/consultas/consultas.page.html":
/*!*******************************************************!*\
  !*** ./src/app/paginas/consultas/consultas.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Consultas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"dark\"> \n\n  <br>\n  <ion-list-header lines=\"inset\" color=\"dark\">\n    <ion-label>Consultas de clientes</ion-label>\n  </ion-list-header>\n<div *ngFor=\"let consulta of this.consultas\">\n  <ion-item color=\"dark\">\n    <ion-label style=\"color:black\" >{{consulta.consulta}} {{consulta.mesa}}</ion-label>\n    <ion-button fill=\"outline\" (click)=\"Marcar(consulta)\">Marcar como vista</ion-button>\n  </ion-item>\n</div>\n<div *ngIf=\"this.consultas.length === 0\">\n  <ion-item color=\"dark\">\n    <ion-label >Sin consultas sin ver.</ion-label>\n  </ion-item>\n</div>\n\n<ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\n  <ion-icon name=\"power\"></ion-icon>\n</ion-button>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button color='dark' expand=\"full\" (click)='this.AltaCliente()' >Alta Cliente</ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/paginas/consultas/consultas.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/paginas/consultas/consultas.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY29uc3VsdGFzL2NvbnN1bHRhcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/consultas/consultas.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/consultas/consultas.page.ts ***!
  \*****************************************************/
/*! exports provided: ConsultasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultasPage", function() { return ConsultasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/consulta.service */ "./src/app/servicios/consulta.service.ts");




var ConsultasPage = /** @class */ (function () {
    function ConsultasPage(router, consultaService) {
        this.router = router;
        this.consultaService = consultaService;
        this.consultas = [];
    }
    ConsultasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.consultaService.getConsultas().subscribe(function (consultas) {
            _this.consultas = [];
            console.log(consultas);
            consultas.forEach(function (consulta) {
                if (consulta.estado === "Pendiente") {
                    _this.consultas.push(consulta);
                }
            });
        });
    };
    ConsultasPage.prototype.Marcar = function (consulta) {
        consulta.estado = "Vista";
        this.consultaService.updateConsulta(consulta.id, consulta);
    };
    ConsultasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultas',
            template: __webpack_require__(/*! ./consultas.page.html */ "./src/app/paginas/consultas/consultas.page.html"),
            styles: [__webpack_require__(/*! ./consultas.page.scss */ "./src/app/paginas/consultas/consultas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_consulta_service__WEBPACK_IMPORTED_MODULE_3__["ConsultaService"]])
    ], ConsultasPage);
    return ConsultasPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-consultas-consultas-module.js.map