(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-pedidos-listos-pedidos-listos-module"],{

/***/ "./src/app/paginas/pedidos-listos/pedidos-listos.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/pedidos-listos/pedidos-listos.module.ts ***!
  \*****************************************************************/
/*! exports provided: PedidosListosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosListosPageModule", function() { return PedidosListosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pedidos_listos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedidos-listos.page */ "./src/app/paginas/pedidos-listos/pedidos-listos.page.ts");







var routes = [
    {
        path: '',
        component: _pedidos_listos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosListosPage"]
    }
];
var PedidosListosPageModule = /** @class */ (function () {
    function PedidosListosPageModule() {
    }
    PedidosListosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pedidos_listos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosListosPage"]]
        })
    ], PedidosListosPageModule);
    return PedidosListosPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/pedidos-listos/pedidos-listos.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/pedidos-listos/pedidos-listos.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Pedidos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"dark\"> \r\n\r\n  <br>\r\n  <ion-list-header lines=\"inset\" color=\"dark\">\r\n    <ion-label>Estado de Pedidos</ion-label>\r\n  </ion-list-header>\r\n<div *ngFor=\"let pedido of this.pedidosMostrar\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label style=\"color:black\" >Pedido de {{pedido.usuario}} En  {{pedido.Mesa}} Se encuentra en estado: {{pedido.estado}}</ion-label>\r\n    <ion-button fill=\"outline\" (click)=\"servir(pedido)\" *ngIf=\"pedido.estado=='listo'\">Servir</ion-button>\r\n  </ion-item>\r\n</div>\r\n<div *ngIf=\"pedidosMostrar.length === 0\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label >Sin Pedidos pendientes.</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n<ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n  <ion-icon name=\"power\"></ion-icon>\r\n</ion-button>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.AltaCliente()' >Alta Cliente</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/paginas/pedidos-listos/pedidos-listos.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/pedidos-listos/pedidos-listos.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcGVkaWRvcy1saXN0b3MvcGVkaWRvcy1saXN0b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/pedidos-listos/pedidos-listos.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/pedidos-listos/pedidos-listos.page.ts ***!
  \***************************************************************/
/*! exports provided: PedidosListosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosListosPage", function() { return PedidosListosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");








var PedidosListosPage = /** @class */ (function () {
    function PedidosListosPage(fcmService, router, pedidoService, spinnerService, alertService, mesaService) {
        this.fcmService = fcmService;
        this.router = router;
        this.pedidoService = pedidoService;
        this.spinnerService = spinnerService;
        this.alertService = alertService;
        this.mesaService = mesaService;
        this.pedidosMostrar = [];
    }
    PedidosListosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidoService.getPedidos().subscribe(function (pedidos) {
            pedidos.forEach(function (pedido) {
                if (pedido.estado != "sconfirmar" && pedido.estado != "cerrado" && pedido.estado != "entregado") {
                    var conPendientes = 0;
                    pedido.estado = "listo";
                    _this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(function (pedidosProducto) {
                        console.log(pedidosProducto);
                        // pedido.productos = pedidosProducto;
                        pedidosProducto.forEach(function (element) {
                            console.log(element);
                            if (element.estado != "listo")
                                conPendientes = 1;
                        });
                        console.log("termine" + conPendientes);
                        if (conPendientes != 0)
                            pedido.estado = "En Preparacion";
                    });
                    _this.pedidosMostrar.push(pedido);
                }
            });
        });
    };
    PedidosListosPage.prototype.servir = function (pedido) {
        pedido.estado = "entregado";
        this.pedidoService.updatePedido(pedido.id, pedido);
        this.spinnerService.showSpinner();
        this.alertService.mensaje("", "Se ha entregado el pedido!");
        this.spinnerService.hideSpinner();
        this.router.navigate(['/home-mozo']);
    };
    PedidosListosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedidos-listos',
            template: __webpack_require__(/*! ./pedidos-listos.page.html */ "./src/app/paginas/pedidos-listos/pedidos-listos.page.html"),
            styles: [__webpack_require__(/*! ./pedidos-listos.page.scss */ "./src/app/paginas/pedidos-listos/pedidos-listos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_2__["FcmService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"],
            src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"]])
    ], PedidosListosPage);
    return PedidosListosPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-pedidos-listos-pedidos-listos-module.js.map