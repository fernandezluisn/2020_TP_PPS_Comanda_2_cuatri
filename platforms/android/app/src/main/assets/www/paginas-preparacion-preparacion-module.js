(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-preparacion-preparacion-module"],{

/***/ "./src/app/paginas/preparacion/preparacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/preparacion/preparacion.module.ts ***!
  \***********************************************************/
/*! exports provided: PreparacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparacionPageModule", function() { return PreparacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preparacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preparacion.page */ "./src/app/paginas/preparacion/preparacion.page.ts");







var routes = [
    {
        path: '',
        component: _preparacion_page__WEBPACK_IMPORTED_MODULE_6__["PreparacionPage"]
    }
];
var PreparacionPageModule = /** @class */ (function () {
    function PreparacionPageModule() {
    }
    PreparacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preparacion_page__WEBPACK_IMPORTED_MODULE_6__["PreparacionPage"]]
        })
    ], PreparacionPageModule);
    return PreparacionPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/preparacion/preparacion.page.html":
/*!***********************************************************!*\
  !*** ./src/app/paginas/preparacion/preparacion.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Productos a preparar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"dark\"> \r\n\r\n  <br>\r\n  <ion-list-header lines=\"inset\" color=\"dark\">\r\n    <ion-label>Productos</ion-label>\r\n  </ion-list-header>\r\n<div *ngFor=\"let pedidosProd of this.pedidosProdlista\">\r\n\r\n  <ion-item color=\"dark\" *ngIf=\"pedidosProd.tipoProducto == 'bebida' && this.usuario.perfil == 'bar' && pedidosProd.estado =='confirmado'\">\r\n    <ion-label style=\"color:black\" >Comida: {{pedidosProd.nombreProducto}}  Cantidad: {{pedidosProd.cantidad}}</ion-label>\r\n    <ion-button fill=\"outline\" (click)=\"prepararProducto(pedidosProd)\">Preparar</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item color=\"dark\" *ngIf=\"pedidosProd.tipoProducto == 'comida' && this.usuario.perfil == 'cocina' && pedidosProd.estado =='confirmado'\">\r\n    <ion-label style=\"color:black\" >Bebida: {{pedidosProd.nombreProducto}}  Cantidad: {{pedidosProd.cantidad}}</ion-label>\r\n    <ion-button fill=\"outline\" (click)=\"prepararProducto(pedidosProd)\">Preparar</ion-button>\r\n  </ion-item>\r\n</div>\r\n<div *ngIf=\"pedidosProdlista.length === 0\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label >Sin productos a preparar.</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n<ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n  <ion-icon name=\"power\"></ion-icon>\r\n</ion-button>\r\n\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/paginas/preparacion/preparacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/paginas/preparacion/preparacion.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcHJlcGFyYWNpb24vcHJlcGFyYWNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/preparacion/preparacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/paginas/preparacion/preparacion.page.ts ***!
  \*********************************************************/
/*! exports provided: PreparacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparacionPage", function() { return PreparacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");







var PreparacionPage = /** @class */ (function () {
    function PreparacionPage(clienteService, fcmService, spinnerService, alertService, pedidosService) {
        this.clienteService = clienteService;
        this.fcmService = fcmService;
        this.spinnerService = spinnerService;
        this.alertService = alertService;
        this.pedidosService = pedidosService;
        this.pedidosProdlista = [];
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    PreparacionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.clienteService.obtenerCliente(this.usuario.uid).subscribe(function (resp) {
            resp.forEach(function (user) {
                console.log(user.estado);
                var id = _this.usuario.id;
                _this.usuario = user;
                _this.usuario.id = id;
            });
        });
        console.log(this.usuario);
        this.pedidosService.getPedidoProductos().subscribe(function (pedidos) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(pedidos);
                this.pedidosProdlista = pedidos;
                return [2 /*return*/];
            });
        }); });
        console.log(this.pedidosProdlista);
    };
    PreparacionPage.prototype.prepararProducto = function (pedido) {
        pedido.estado = "listo";
        this.pedidosService.updatePedidoProducto(pedido.id, pedido);
        this.fcmService.enviarMensaje("Producto Listo", "nuevo producto listo", "notificacionMozo");
    };
    PreparacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preparacion',
            template: __webpack_require__(/*! ./preparacion.page.html */ "./src/app/paginas/preparacion/preparacion.page.html"),
            styles: [__webpack_require__(/*! ./preparacion.page.scss */ "./src/app/paginas/preparacion/preparacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_3__["FcmService"], src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_6__["PedidosService"]])
    ], PreparacionPage);
    return PreparacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-preparacion-preparacion-module.js.map