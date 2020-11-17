(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-aceptar-pedido-aceptar-pedido-module"],{

/***/ "./src/app/paginas/aceptar-pedido/aceptar-pedido.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/aceptar-pedido/aceptar-pedido.module.ts ***!
  \*****************************************************************/
/*! exports provided: AceptarPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarPedidoPageModule", function() { return AceptarPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aceptar_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aceptar-pedido.page */ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.ts");







var routes = [
    {
        path: '',
        component: _aceptar_pedido_page__WEBPACK_IMPORTED_MODULE_6__["AceptarPedidoPage"]
    }
];
var AceptarPedidoPageModule = /** @class */ (function () {
    function AceptarPedidoPageModule() {
    }
    AceptarPedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aceptar_pedido_page__WEBPACK_IMPORTED_MODULE_6__["AceptarPedidoPage"]]
        })
    ], AceptarPedidoPageModule);
    return AceptarPedidoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/aceptar-pedido/aceptar-pedido.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Confirmar Pedidos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngFor=\"let pedido of this.pedidos\">\r\n    <ion-item lines=\"full\" *ngIf=\"pedido.estado == 'sconfirmar'\">\r\n      <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n         <b>Pedido de </b>\r\n          <b>Usuario</b>: {{this.pedido.email}}<br>\r\n  \r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button (click)=\"this.confirmarPedido(pedido)\" expand=\"full\" >Confirmar</ion-button>\r\n          <ion-button (click)=\"this.rechazarReserva(this.reserva)\" expand=\"full\" color=\"danger\" >Rechazar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/aceptar-pedido/aceptar-pedido.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWNlcHRhci1wZWRpZG8vYWNlcHRhci1wZWRpZG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/aceptar-pedido/aceptar-pedido.page.ts ***!
  \***************************************************************/
/*! exports provided: AceptarPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarPedidoPage", function() { return AceptarPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");








var AceptarPedidoPage = /** @class */ (function () {
    function AceptarPedidoPage(fcmService, router, pedidoService, spinnerService, alertService, mesaService) {
        this.fcmService = fcmService;
        this.router = router;
        this.pedidoService = pedidoService;
        this.spinnerService = spinnerService;
        this.alertService = alertService;
        this.mesaService = mesaService;
    }
    AceptarPedidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.mesaService.getMesas().subscribe(function (mesas) {
            _this.mesas = mesas;
        });
        this.pedidoService.getPedidosProductos().subscribe(function (pedidosProducto) {
            _this.pedidosProducto = pedidosProducto;
        });
        this.pedidoService.getPedidos().subscribe(function (pedidos) {
            _this.pedidos = pedidos;
            console.log(_this.pedidos);
            pedidos.forEach(function (pedido) {
                _this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(function (pedidosProducto) {
                    console.log(pedidosProducto);
                    pedido.productos = pedidosProducto;
                });
            });
        });
    };
    AceptarPedidoPage.prototype.confirmarPedido = function (pedido) {
        var _this = this;
        pedido.estado = "confirmado";
        var flagcomida = 0;
        var flagbebida = 0;
        this.pedidoService.updatePedido(pedido.id, pedido);
        //TODO -> SEND FCM POR TIPO DE PEDIDO PRODUCTO.
        this.pedidoService.getPedidosProductosPorPedido(pedido.id).then(function (pedidosProducto) {
            pedidosProducto.forEach(function (pedidoProducto) {
                pedidoProducto.estado = "confirmado";
                if (pedidoProducto.tipoProducto == "comida")
                    flagcomida == 1;
                if (pedidoProducto.tipoProducto == "comida")
                    flagbebida == 1;
                _this.pedidoService.updatePedidoProducto(pedidoProducto.id, pedidoProducto);
            });
        });
        if (flagbebida == 1)
            this.fcmService.enviarMensaje("Nuevo Producto Pendiente", "nueva bebida a preparar", "notificacionBar");
        if (flagcomida == 1)
            this.fcmService.enviarMensaje("Nuevo Producto Pendiente", "nueva comida a preparar", "notificacionCocina");
    };
    AceptarPedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aceptar-pedido',
            template: __webpack_require__(/*! ./aceptar-pedido.page.html */ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.html"),
            styles: [__webpack_require__(/*! ./aceptar-pedido.page.scss */ "./src/app/paginas/aceptar-pedido/aceptar-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_4__["FcmService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_3__["PedidosService"],
            src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"]])
    ], AceptarPedidoPage);
    return AceptarPedidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-aceptar-pedido-aceptar-pedido-module.js.map