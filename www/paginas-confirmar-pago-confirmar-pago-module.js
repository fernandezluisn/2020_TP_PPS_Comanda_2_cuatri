(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-confirmar-pago-confirmar-pago-module"],{

/***/ "./src/app/paginas/confirmar-pago/confirmar-pago.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/confirmar-pago/confirmar-pago.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmarPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarPagoPageModule", function() { return ConfirmarPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmar_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmar-pago.page */ "./src/app/paginas/confirmar-pago/confirmar-pago.page.ts");







var routes = [
    {
        path: '',
        component: _confirmar_pago_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarPagoPage"]
    }
];
var ConfirmarPagoPageModule = /** @class */ (function () {
    function ConfirmarPagoPageModule() {
    }
    ConfirmarPagoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirmar_pago_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarPagoPage"]]
        })
    ], ConfirmarPagoPageModule);
    return ConfirmarPagoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/confirmar-pago/confirmar-pago.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/confirmar-pago/confirmar-pago.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Pagos a Confirmar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"dark\"> \r\n\r\n  <br>\r\n  <ion-list-header lines=\"inset\" color=\"dark\">\r\n    <ion-label>Pagos a Confirmar</ion-label>\r\n  </ion-list-header>\r\n<div *ngFor=\"let mesa of this.mesasAConfirmar\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label style=\"color:black\" *ngIf=\"mesa.estado\" >Se realizo el pago de {{mesa.pago}} pesos en la {{mesa.qrMesa}}</ion-label>\r\n    <ion-button fill=\"outline\" (click)=\"confirmarPago(mesa)\">Confimar</ion-button>\r\n  </ion-item>\r\n</div>\r\n<div *ngIf=\"mesasAConfirmar.length === 0\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label >Sin pagos a confirmar.</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n<ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n  <ion-icon name=\"power\"></ion-icon>\r\n</ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/confirmar-pago/confirmar-pago.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/confirmar-pago/confirmar-pago.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY29uZmlybWFyLXBhZ28vY29uZmlybWFyLXBhZ28ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/confirmar-pago/confirmar-pago.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/confirmar-pago/confirmar-pago.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmarPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarPagoPage", function() { return ConfirmarPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");





var ConfirmarPagoPage = /** @class */ (function () {
    function ConfirmarPagoPage(router, mesaClienteService, mesaService) {
        this.router = router;
        this.mesaClienteService = mesaClienteService;
        this.mesaService = mesaService;
        this.mesasAConfirmar = [];
    }
    ConfirmarPagoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.mesaService.getMesas().subscribe(function (mesas) {
            _this.mesas = mesas;
        });
        this.mesaClienteService.devolverListadoMesas().subscribe(function (mesas) {
            mesas.forEach(function (mesa) {
                if (mesa.estado == "PendienteConfirmarPago")
                    _this.mesasAConfirmar.push(mesa);
            });
        });
    };
    ConfirmarPagoPage.prototype.confirmarPago = function (mesaCliente) {
        var _this = this;
        mesaCliente.cerrada = true;
        mesaCliente.estado = "cerrado";
        this.mesaClienteService.actualizarMesa(mesaCliente);
        console.log(mesaCliente);
        this.mesas.forEach(function (mesa) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.mesasAConfirmar.splice(this.mesasAConfirmar.indexOf(mesaCliente), 1);
                if (mesa.id = mesaCliente.idMesa) {
                    mesa.estado = "Vacia";
                    console.log(mesa);
                    this.mesaService.actualizarMesa(mesa);
                }
                return [2 /*return*/];
            });
        }); });
    };
    ConfirmarPagoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmar-pago',
            template: __webpack_require__(/*! ./confirmar-pago.page.html */ "./src/app/paginas/confirmar-pago/confirmar-pago.page.html"),
            styles: [__webpack_require__(/*! ./confirmar-pago.page.scss */ "./src/app/paginas/confirmar-pago/confirmar-pago.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_3__["MesaClienteService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"]])
    ], ConfirmarPagoPage);
    return ConfirmarPagoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-confirmar-pago-confirmar-pago-module.js.map