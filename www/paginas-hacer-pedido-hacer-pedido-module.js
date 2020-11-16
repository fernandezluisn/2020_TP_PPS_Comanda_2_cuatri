(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-hacer-pedido-hacer-pedido-module"],{

/***/ "./src/app/paginas/hacer-pedido/hacer-pedido.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/hacer-pedido/hacer-pedido.module.ts ***!
  \*************************************************************/
/*! exports provided: HacerPedidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HacerPedidoPageModule", function() { return HacerPedidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hacer_pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hacer-pedido.page */ "./src/app/paginas/hacer-pedido/hacer-pedido.page.ts");







var routes = [
    {
        path: '',
        component: _hacer_pedido_page__WEBPACK_IMPORTED_MODULE_6__["HacerPedidoPage"]
    }
];
var HacerPedidoPageModule = /** @class */ (function () {
    function HacerPedidoPageModule() {
    }
    HacerPedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hacer_pedido_page__WEBPACK_IMPORTED_MODULE_6__["HacerPedidoPage"]]
        })
    ], HacerPedidoPageModule);
    return HacerPedidoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/hacer-pedido/hacer-pedido.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/hacer-pedido/hacer-pedido.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Hacer Pedido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngIf=\"esMozo\">\r\n    <ion-item><ion-label>Seleccione Nro de Mesa:</ion-label></ion-item>\r\n    <ion-select [(ngModel)]=\"pedido['id_mesa_cliente']\" placeholder=\"Seleccione Nro Mesa\">\r\n      <ng-container *ngFor=\"let m of mesasClientes\">\r\n        <ion-select-option value=\"{{m.id}}\" *ngIf=\"!m.cerrada\">{{m.idMesa}}</ion-select-option>\r\n      </ng-container>\r\n    </ion-select>\r\n  </ng-container>  \r\n  <ng-container *ngIf=\"pedidosProductos.length > 0\">\r\n    <ion-item><ion-label>Pedido Actual:</ion-label></ion-item>\r\n    <table style=\"width: 100%; border: 2px solid red; text-align: center;\">\r\n      <thead><th>Producto</th><th>Precio</th> <th>Cantidad</th> <th>Borrar</th></thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let prod of pedidosProductos\">\r\n          <tr>\r\n            <ng-container *ngFor=\"let p of productos\">\r\n              <ng-container *ngIf=\"p.id == prod.id_producto\">\r\n                <td>{{p.nombre}}</td>\r\n                <td>{{p.precio}}</td>\r\n                <td>{{prod.cantidad}}</td>\r\n              </ng-container>              \r\n            </ng-container>     \r\n            <td><ion-button color=\"danger\" (click)=\"BorrarProducto(prod.id_producto)\" shape=\"round\">X</ion-button></td>       \r\n          </tr>\r\n        </ng-container>        \r\n      </tbody>\r\n    </table>\r\n  </ng-container>  \r\n  <ion-list *ngFor=\"let item of productos\">\r\n    <div style=\"width:100%;\">\r\n      <ion-item><h2>{{item.nombre}}</h2></ion-item>\r\n      <ion-item>{{item.descripcion}}</ion-item>\r\n      <div style=\"height: 100px; text-align: center;\">\r\n        <img src=\"{{item.foto_1}}\" style=\"width: 30%; height: 100%;\">\r\n        <img src=\"{{item.foto_2}}\" style=\"width: 30%; height: 100%;\">\r\n        <img src=\"{{item.foto_3}}\" style=\"width: 30%; height: 100%;\">\r\n      </div>\r\n      <br>\r\n      <ion-item>Precio: ${{item.precio}}.00</ion-item>\r\n      <ion-item>\r\n          Cantidad: &nbsp;<input type=\"number\" min=\"1\" [(ngModel)]=\"cantidad\" style=\"width: 30px;\">\r\n        <ion-button color=\"danger\" (click)=\"Agregar(item.id)\" slot=\"end\">Agregar a Pedido</ion-button>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button (click)=\"LeerQR()\" color='dark' expand=\"full\">Seleccionar por QR</ion-button>\r\n  <ion-button (click)=\"TerminarPedido()\" color='dark' expand=\"full\">Terminar Pedido</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/paginas/hacer-pedido/hacer-pedido.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/hacer-pedido/hacer-pedido.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaGFjZXItcGVkaWRvL2hhY2VyLXBlZGlkby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/hacer-pedido/hacer-pedido.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/hacer-pedido/hacer-pedido.page.ts ***!
  \***********************************************************/
/*! exports provided: HacerPedidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HacerPedidoPage", function() { return HacerPedidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/productos.service */ "./src/app/servicios/productos.service.ts");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/spiner.service */ "./src/app/servicios/spiner.service.ts");











var HacerPedidoPage = /** @class */ (function () {
    function HacerPedidoPage(prodServ, pedidoServ, mesaServ, authServ, router, barcodeScanner, alertServ, alertController, spiner) {
        var _this = this;
        this.prodServ = prodServ;
        this.pedidoServ = pedidoServ;
        this.mesaServ = mesaServ;
        this.authServ = authServ;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.alertServ = alertServ;
        this.alertController = alertController;
        this.spiner = spiner;
        this.direccion = false;
        this.pedido = {
            comienzo: (new Date()).toString(),
            estado: 'sconfirmar',
            id_mesa_cliente: '',
            'id-mesa': '',
            delivery: false,
            direccion: '',
            foto: '',
            email: ''
        };
        this.pedidosProductos = [];
        this.mesasClientes = [];
        this.idUsusario = '';
        this.prodServ.devolverListadoProductos().subscribe(function (data) {
            _this.productos = data;
            // console.log(data);
        });
        this.cantidad = 1;
    }
    HacerPedidoPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spiner.GetAllPageSpinner("")];
                    case 1:
                        sp = _a.sent();
                        sp.present();
                        this.idUsusario = this.authServ.getUsuario()['id'];
                        this.usuario = this.authServ.getUsuario();
                        this.pedido.foto = this.usuario['foto'];
                        this.pedido.email = this.usuario['mail'];
                        this.mesaServ.getMesas().subscribe(function (data) {
                            _this.mesasClientes = data;
                            if (_this.usuario.perfil != 'cliente' && _this.usuario.perfil != 'anonimo') {
                                _this.esMozo = true;
                            }
                            else {
                                _this.esMozo = false;
                                _this.esCliente = _this.usuario.perfil == 'cliente';
                                for (var _i = 0, _a = _this.mesasClientes; _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    if (item.idCliente === _this.idUsusario && !item.cerrada) {
                                        _this.pedido.id_mesa_cliente = item.id;
                                        break;
                                    }
                                }
                            }
                            sp.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HacerPedidoPage.prototype.Agregar = function (idProd) {
        console.log(idProd);
        if (this.cantidad > 0) {
            var pedidoProd = {
                id_pedido: this.pedido['id'],
                estado: 'sconfirmar',
                id_producto: idProd,
                id_comanda: '',
                cantidad: this.cantidad
            };
            this.pedidosProductos.push(pedidoProd);
            this.alertServ.mensaje('' + this.cantidad + ' productos', 'agregados');
        }
        console.log(this.pedidosProductos);
        this.cantidad = 1;
    };
    HacerPedidoPage.prototype.TerminarPedido = function (delivery) {
        if (delivery === void 0) { delivery = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sp, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spiner.GetAllPageSpinner("")];
                    case 1:
                        sp = _a.sent();
                        sp.present();
                        if (!delivery) {
                            this.direccion = false;
                        }
                        if (!(this.esCliente && this.pedido.id_mesa_cliente == '' && !delivery)) return [3 /*break*/, 3];
                        sp.dismiss();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Usted no tiene mesa',
                                message: ' Desea hacer un delivery?',
                                inputs: [
                                    {
                                        name: 'direccion',
                                        type: 'text',
                                        placeholder: 'Direccion del pedido'
                                    }
                                ],
                                translucent: true,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            _this.alertServ.mensaje('', 'No se hara el delivery');
                                        }
                                    }, {
                                        text: 'Aceptar',
                                        handler: function (data) {
                                            _this.pedido.direccion = data['direccion'];
                                            _this.pedido.delivery = true;
                                            _this.pedido.id_mesa_cliente = _this.usuario['id'];
                                            _this.TerminarPedido(data['direccion']);
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [2 /*return*/, alert_1.present()];
                    case 3:
                        if (this.pedidosProductos.length > 0) {
                            // console.log(this.pedido.id_mesa_cliente);
                            if ((!this.esMozo && this.pedido.direccion && this.pedido.delivery) || this.pedido.id_mesa_cliente != '') {
                                this.mesasClientes.forEach(function (mCliente) {
                                    if (mCliente.id == _this.pedido.id_mesa_cliente) {
                                        _this.pedido['id-mesa'] = mCliente.idMesa;
                                        // By Eze
                                        _this.mesaServ.getMesaPorID(mCliente.idMesa).then(function (mesas) {
                                            mesas[0].estado = 'esperando pedido';
                                            _this.mesaServ.actualizarMesa(mesas[0]);
                                        });
                                    }
                                });
                                this.pedidoServ.AddPedido(this.pedido).then(function (res) {
                                    _this.pedido['id'] = res['id'];
                                    // console.log(this.pedido);
                                    for (var _i = 0, _a = _this.pedidosProductos; _i < _a.length; _i++) {
                                        var item = _a[_i];
                                        item.id_pedido = res['id'];
                                        _this.pedidoServ.AddPedidoProducto(item).then(function (res) {
                                            console.log('agregado');
                                        });
                                    }
                                    _this.alertServ.mensaje('', 'El pedido se agregó correctamente');
                                    if (_this.usuario.perfil == 'cliente' || _this.usuario.perfil == 'anonimo') {
                                        _this.router.navigate(['/home-cliente']);
                                    }
                                    else {
                                        _this.router.navigate(['/mozo-aceptar']);
                                    }
                                });
                            }
                            else {
                                this.alertServ.mensaje('Alerta:', 'Faltan datos para generar el pedido');
                            }
                        }
                        sp.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    HacerPedidoPage.prototype.BorrarProducto = function (idProducto) {
        console.log(this.pedidosProductos);
        for (var _i = 0, _a = this.pedidosProductos; _i < _a.length; _i++) {
            var pp = _a[_i];
            if (pp.id_producto == idProducto) {
                var index = this.pedidosProductos.indexOf(pp);
                this.pedidosProductos.splice(index, 1);
                break;
            }
        }
    };
    HacerPedidoPage.prototype.LeerQR = function () {
        var _this = this;
        //MICA agrega lo de poner la cantidad
        this.barcodeScanner.scan().then(function (resultado) {
            _this.productos.forEach(function (producto) {
                if (producto.qr == resultado.text) {
                    _this.Agregar(producto.id);
                }
            });
        });
    };
    HacerPedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hacer-pedido',
            template: __webpack_require__(/*! ./hacer-pedido.page.html */ "./src/app/paginas/hacer-pedido/hacer-pedido.page.html"),
            styles: [__webpack_require__(/*! ./hacer-pedido.page.scss */ "./src/app/paginas/hacer-pedido/hacer-pedido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"], src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_3__["PedidosService"],
            src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_4__["MesasService"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"],
            src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_10__["SpinerService"]])
    ], HacerPedidoPage);
    return HacerPedidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-hacer-pedido-hacer-pedido-module.js.map