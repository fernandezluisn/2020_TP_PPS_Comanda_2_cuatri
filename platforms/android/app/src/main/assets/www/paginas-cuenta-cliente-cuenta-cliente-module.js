(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-cuenta-cliente-cuenta-cliente-module"],{

/***/ "./src/app/paginas/cuenta-cliente/cuenta-cliente.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/cuenta-cliente/cuenta-cliente.module.ts ***!
  \*****************************************************************/
/*! exports provided: CuentaClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaClientePageModule", function() { return CuentaClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cuenta_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuenta-cliente.page */ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _cuenta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["CuentaClientePage"]
    }
];
var CuentaClientePageModule = /** @class */ (function () {
    function CuentaClientePageModule() {
    }
    CuentaClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cuenta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["CuentaClientePage"]]
        })
    ], CuentaClientePageModule);
    return CuentaClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/cuenta-cliente/cuenta-cliente.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title  style=\"text-align: center;\">Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-card style=\"border: 2px solid #A599B5; text-align: center; font-size: 18px;\" *ngIf=\"id != ''\">\n    <br><br>\n    <ion-card *ngIf=\"this.pedidos.length> 0\" style=\"background-color:whitesmoke; border-radius: 20px;\">\n      <ion-card-content>\n\n\n        <table style=\"width: 100%; text-align: center;\">\n          <thead>\n            <th>Productos</th><th>Precio</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of this.pedidos\">\n              <td>{{item.email}}</td>\n              <td>{{item.precio}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <br>\n\n    <ion-item *ngIf=\"descPorcentaje\">\n      <h5>Descuento por juego: 10%</h5>\n    </ion-item>\n    <br> \n    <ng-container *ngIf=\"!esMozo\">\n      <ng-container>\n        <ion-item style=\"text-align: center;\">\n          <h1>Total sin propina: ${{total}}</h1>\n        </ion-item>\n        <ion-button *ngIf=\"!delivery\" (click)=\"darPropina()\" color=\"success\">Dar Propina</ion-button>\n      </ng-container>\n      <br>\n      <ion-item  *ngIf=\"!delivery\">\n        <h1>Total final más propina: ${{TotalMasPropina}}</h1>\n      </ion-item>\n      <br>\n      <ng-container *ngIf=\"!delivery\">\n        <ion-button (click)=\"Pagar()\" color=\"success\" expand=\"success\">Pagar</ion-button>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"esMozo && !delivery\">\n      <ion-item *ngIf=\"propina == 0 && total != 0\">\n        <h2>Falta ingresar la propina!</h2>\n      </ion-item>\n      <ng-container>\n        <ion-item>\n          <h1>Total final más propina: ${{TotalFinal}}</h1>\n        </ion-item>\n        <br>\n        <ion-button color=\"success\" expand=\"full\" (click)=\"Pagar()\">Guardar Pago</ion-button>\n      </ng-container>  \n    </ng-container>    \n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/cuenta-cliente/cuenta-cliente.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvY3VlbnRhLWNsaWVudGUvY3VlbnRhLWNsaWVudGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/cuenta-cliente/cuenta-cliente.page.ts ***!
  \***************************************************************/
/*! exports provided: CuentaClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaClientePage", function() { return CuentaClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");








var CuentaClientePage = /** @class */ (function () {
    function CuentaClientePage(router, pedidoService, alertService, spinnerService, clienteService, mesaClienteService) {
        this.router = router;
        this.pedidoService = pedidoService;
        this.alertService = alertService;
        this.spinnerService = spinnerService;
        this.clienteService = clienteService;
        this.mesaClienteService = mesaClienteService;
        this.pedidos = [];
        //TODO calcular total..
        this.total = 100;
    }
    CuentaClientePage.prototype.ngOnInit = function () {
        var _this = this;
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        if (isNaN(this.propina)) {
            console.log("es nan" + this.propina);
            this.propina = 0;
        }
        this.clienteService.obtenerCliente(this.cliente.uid).subscribe(function (resp) {
            resp.forEach(function (user) {
                console.log(user.estado);
                var id = _this.cliente.id;
                _this.cliente = user;
                _this.cliente.id = id;
                _this.pedidoService.getPedidos().subscribe(function (pedidos) {
                    console.log(pedidos);
                    console.log(user);
                    //TODO-> Confirmar que el pedido es el actual bajo su estado.
                    pedidos.forEach(function (pedido) {
                        if (pedido.email == user.mail)
                            _this.pedidos.push(pedido);
                    });
                });
                _this.mesaClienteService.devolverListadoMesas().subscribe(function (mesas) {
                    mesas.forEach(function (mesa) {
                        if (mesa.idCliente == user.id && mesa.cerrada == false) {
                            _this.propina = mesa.propina;
                            if (_this.propina == undefined)
                                _this.propina = 0;
                            _this.idMesa = mesa.id;
                            _this.mesaCliente = mesa;
                            if (_this.propina != 0)
                                _this.TotalMasPropina = _this.total * (_this.propina);
                            else
                                _this.TotalMasPropina = _this.total;
                        }
                    });
                });
            });
        });
    };
    CuentaClientePage.prototype.darPropina = function () {
        if (localStorage.getItem('Sonido') == 'true') {
            var audio = new Audio();
            audio.src = '../assets/click.m4a';
            audio.load();
            audio.play();
        }
        this.router.navigate(['propina/' + this.idMesa]);
    };
    CuentaClientePage.prototype.Pagar = function () {
        this.cliente.estado = "desconectado";
        this.clienteService.ModificarUsuario(this.cliente);
        this.mesaCliente.estado = "PendienteConfirmarPago";
        this.mesaCliente.pago = this.TotalMasPropina;
        this.mesaClienteService.actualizarMesa(this.mesaCliente);
        this.router.navigate(['log-in']);
    };
    CuentaClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cuenta-cliente',
            template: __webpack_require__(/*! ./cuenta-cliente.page.html */ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.html"),
            styles: [__webpack_require__(/*! ./cuenta-cliente.page.scss */ "./src/app/paginas/cuenta-cliente/cuenta-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_7__["MesaClienteService"]])
    ], CuentaClientePage);
    return CuentaClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-cuenta-cliente-cuenta-cliente-module.js.map