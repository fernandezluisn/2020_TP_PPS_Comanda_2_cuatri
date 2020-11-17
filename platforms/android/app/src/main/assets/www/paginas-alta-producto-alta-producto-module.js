(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-alta-producto-alta-producto-module"],{

/***/ "./src/app/interfaces/producto.ts":
/*!****************************************!*\
  !*** ./src/app/interfaces/producto.ts ***!
  \****************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(nombre, descripcion, tiempo, precio, tipo, imagen1, imagen2, imagen3) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.precio = precio;
        this.tipo = tipo;
        this.foto_1 = imagen1;
        this.foto_2 = imagen2;
        this.foto_3 = imagen3;
    }
    return Producto;
}());



/***/ }),

/***/ "./src/app/paginas/alta-producto/alta-producto.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-producto/alta-producto.module.ts ***!
  \***************************************************************/
/*! exports provided: AltaProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaProductoPageModule", function() { return AltaProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alta_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alta-producto.page */ "./src/app/paginas/alta-producto/alta-producto.page.ts");







var routes = [
    {
        path: '',
        component: _alta_producto_page__WEBPACK_IMPORTED_MODULE_6__["AltaProductoPage"]
    }
];
var AltaProductoPageModule = /** @class */ (function () {
    function AltaProductoPageModule() {
    }
    AltaProductoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alta_producto_page__WEBPACK_IMPORTED_MODULE_6__["AltaProductoPage"]]
        })
    ], AltaProductoPageModule);
    return AltaProductoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/alta-producto/alta-producto.page.html":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-producto/alta-producto.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-button (click)=\"cambiar()\">Cambiar formulario</ion-button>\r\n\r\n\r\n  <ng-container *ngIf=\"alta\">\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre del producto</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Descripción del producto</ion-label>\r\n      <ion-textarea [(ngModel)]=\"descripcion\"></ion-textarea>\r\n    </ion-item>\r\n   \r\n     <ion-item>\r\n       <ion-label position=\"floating\">Cantidad de minutos de elaboración</ion-label>\r\n       <ion-input type=\"number\" [(ngModel)]=\"minutos\"></ion-input>\r\n     </ion-item>\r\n \r\n     <ion-item>\r\n      <ion-label position=\"floating\">Precio</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"precio\" placeholder=\"$$$\"></ion-input>\r\n    </ion-item>\r\n \r\n     <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Escanear QR</ion-button><br>\r\n \r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"foto1()\" *ngIf=\"!image1\">Tomar una foto</ion-button><br><br>\r\n     <ion-item *ngIf=\"image1\">\r\n      <ion-img [src]=\"image1\"></ion-img>\r\n      </ion-item>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"foto2()\" *ngIf=\"image1 && !image2\">Tomar segunda foto</ion-button>\r\n     <ion-item *ngIf=\"image2\">\r\n      <ion-img [src]=\"image2\"></ion-img>\r\n      </ion-item>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"foto3()\" *ngIf=\"image2\">Tomar tercera foto</ion-button>\r\n     <ion-item *ngIf=\"image3\">\r\n      <ion-img [src]=\"image3\"></ion-img>\r\n      </ion-item>\r\n     \r\n     <ion-button (click)=\"subir()\">Subir Producto</ion-button>\r\n     \r\n   </ng-container>\r\n\r\n\r\n   <ng-container *ngIf=\"!alta\">\r\n\r\n    <ion-item style=\"margin-bottom:3rem;\">\r\n      <ion-label>Producto a modificar y/o eliminar</ion-label>\r\n      <ion-select  [(ngModel)]=\"productoElegido\" >\r\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of listaProductos\">{{item.nombre}} ${{item.precio}}</ion-select-option>        \r\n      </ion-select>\r\n    </ion-item >\r\n    \r\n    <ng-container *ngIf=\"productoElegido\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"productoElegido.nombre\"></ion-input>\r\n      </ion-item> \r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Descripción del producto</ion-label>\r\n        <ion-textarea [(ngModel)]=\"productoElegido.descripcion\"></ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Precio</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"productoElegido.precio\"></ion-input>\r\n      </ion-item> \r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Cantidad de minutos de elaboración</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"productoElegido.minutos\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Ingresar nuevo QR</ion-button><br><br>\r\n \r\n      <ion-item *ngIf=\"productoElegido.foto_1\">\r\n        <ion-img [src]=\"productoElegido.foto_1\"></ion-img>\r\n      </ion-item>\r\n\r\n     <ion-item *ngIf=\"productoElegido.foto_2\">\r\n      <ion-img [src]=\"productoElegido.foto_2\"></ion-img>\r\n    </ion-item>\r\n     \r\n     <ion-item *ngIf=\"productoElegido.foto_3\">\r\n      <ion-img [src]=\"productoElegido.foto_3\"></ion-img>\r\n    </ion-item>\r\n\r\n      <ion-button (click)=\"modificar()\">Actualizar Producto</ion-button>\r\n      <ion-button (click)=\"eliminar()\">Eliminar Producto</ion-button>\r\n    </ng-container>\r\n\r\n   </ng-container>\r\n   <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/alta-producto/alta-producto.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-producto/alta-producto.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hbHRhLXByb2R1Y3RvL0U6XFxEZXNjYXJnYXNcXE1hc3RlclByZVxcTWFzdGVyUHJlL3NyY1xcYXBwXFxwYWdpbmFzXFxhbHRhLXByb2R1Y3RvXFxhbHRhLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hbHRhLXByb2R1Y3RvL2FsdGEtcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/alta-producto/alta-producto.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-producto/alta-producto.page.ts ***!
  \*************************************************************/
/*! exports provided: AltaProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaProductoPage", function() { return AltaProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_interfaces_producto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/producto */ "./src/app/interfaces/producto.ts");
/* harmony import */ var src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/productos.service */ "./src/app/servicios/productos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");














var AltaProductoPage = /** @class */ (function () {
    function AltaProductoPage(storage, camera, alertService, barcodeScanner, vibra, bda, spi, toast, route, auth) {
        var _this = this;
        this.storage = storage;
        this.camera = camera;
        this.alertService = alertService;
        this.barcodeScanner = barcodeScanner;
        this.vibra = vibra;
        this.bda = bda;
        this.spi = spi;
        this.toast = toast;
        this.route = route;
        this.auth = auth;
        this.cargarProd = false;
        this.productoElegido = null;
        this.image1 = null;
        this.image2 = null;
        this.image3 = null;
        this.url1 = null;
        this.url2 = null;
        this.url3 = null;
        this.alta = true;
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.bda.devolverListadoProductos().subscribe(function (lista) {
            _this.listaProductos = lista;
            _this.listaProductos.sort(function (a, b) { return a.precio - b.precio; });
        });
        this.nombre = "";
        this.minutos = 0;
        this.descripcion = "";
        this.precio = 0;
    }
    AltaProductoPage.prototype.ngOnInit = function () {
    };
    AltaProductoPage.prototype.escanear = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (barcodeData.format == "QR_CODE") {
                    this.qr = barcodeData.text;
                }
                else {
                    this.alertService.mensaje("Error", "El código debe ser QR");
                    this.vibra.vibrate(500);
                }
                return [2 /*return*/];
            });
        }); }).catch(function (err) {
            _this.alertService.mensaje("Error", "No se ha podido cargar el código.");
            _this.vibra.vibrate(500);
        });
    };
    AltaProductoPage.prototype.foto1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sacarFoto(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.guardarImagen1()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.foto2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sacarFoto(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.guardarImagen2()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.foto3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sacarFoto(3)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.guardarImagen3()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.sacarFoto = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spi.showSpinner();
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            targetWidth: 1000,
                            targetHeight: 1000
                        };
                        return [4 /*yield*/, this.camera.getPicture(options).then(function (imageData) {
                                if (id == 1)
                                    _this.image1 = "data:image/jpeg;base64," + imageData;
                                else if (id == 2)
                                    _this.image2 = "data:image/jpeg;base64," + imageData;
                                else
                                    _this.image3 = "data:image/jpeg;base64," + imageData;
                            }, function (err) {
                                _this.alertService.mensaje("Error", err);
                            })];
                    case 1:
                        _a.sent();
                        this.spi.hideSpinner();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.subir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var m, p;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.spi.showSpinner();
                if (this.usuario.perfil == 'bar')
                    m = "bebida";
                else
                    m = "comida";
                if (this.url1 != null && this.url2 != null && this.url3 != null) {
                    p = new src_app_interfaces_producto__WEBPACK_IMPORTED_MODULE_6__["Producto"](this.nombre, this.descripcion, this.minutos, this.precio, m, this.url1, this.url2, this.url3);
                    this.cargarProducto(p, 1);
                }
                else {
                    this.alertService.mensaje("Error", "Deben estar subidas las tres imagenes para poder cargar el producto");
                }
                this.spi.hideSpinner();
                return [2 /*return*/];
            });
        });
    };
    AltaProductoPage.prototype.cargarProducto = function (prod, modalidad) {
        if (prod.precio > 0 && prod.nombre.length > 3 && prod.tiempo > 10 && prod.descripcion.length > 20 && modalidad == 1) {
            try {
                this.bda.createProducto(prod);
                this.toast.confirmationToast("Se guardó el producto.");
            }
            catch (err) {
                this.alertService.mensaje("Error", err);
            }
        }
        else if (prod.precio > 0 && prod.nombre.length > 3 && prod.tiempo > 10 && prod.descripcion.length > 20 && modalidad == 2) {
            try {
                this.bda.actualizarProducto(prod);
                this.toast.confirmationToast("Se actualizó el producto.");
            }
            catch (err) {
                this.alertService.mensaje("Error", err);
            }
        }
        else if (prod.precio == 0) {
            this.alertService.mensaje("Error", "El precio debe ser mayor a 0");
        }
        else if (prod.nombre.length < 4) {
            this.alertService.mensaje("Error", "El nombre debe tener más de 3 caracteres");
        }
        else if (prod.tiempo < 11) {
            this.alertService.mensaje("Error", "Los productos tienen un mínimo de producción de 10 minutos");
        }
        else {
            this.alertService.mensaje("Error", "La descripción debe tener más de 20 caracteres");
        }
    };
    AltaProductoPage.prototype.guardarImagen1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com, img_1, file, path, ref_1, task, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.image1) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        com = this.nombre + this.precio + this.minutos + 1;
                        return [4 /*yield*/, fetch(this.image1)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_1 = r;
                            }); })];
                    case 2:
                        _a.sent();
                        file = img_1;
                        path = com;
                        ref_1 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return ref_1.getDownloadURL().subscribe(function (url) {
                                _this.url1 = url;
                            }); })).subscribe()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.alertService.mensaje("Error", "No está cargada la imagen 1");
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.guardarImagen2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com, img_2, file, path, ref_2, task, e_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.image2) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        com = this.nombre + this.precio + this.minutos + 2;
                        return [4 /*yield*/, fetch(this.image2)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_2 = r;
                            }); })];
                    case 2:
                        _a.sent();
                        file = img_2;
                        path = com;
                        ref_2 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return ref_2.getDownloadURL().subscribe(function (url) {
                                _this.url2 = url;
                            }); })).subscribe()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.alertService.mensaje("Error", "No está cargada la imagen 2");
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.guardarImagen3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com, img_3, file, path, ref_3, task, e_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.image3) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        com = this.nombre + this.precio + this.minutos + 3;
                        return [4 /*yield*/, fetch(this.image3)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_3 = r;
                            }); })];
                    case 2:
                        _a.sent();
                        file = img_3;
                        path = com;
                        ref_3 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return ref_3.getDownloadURL().subscribe(function (url) {
                                _this.url3 = url;
                            }); })).subscribe()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.alertService.mensaje("Error", "No está cargada la imagen 3");
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.cambiar = function () {
        if (this.alta)
            this.alta = false;
        else
            this.alta = true;
        this.image1 = null;
        this.image2 = null;
        this.image3 = null;
    };
    AltaProductoPage.prototype.eliminar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spi.showSpinner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.bda.BorrarProducto(this.productoElegido)];
                    case 2:
                        _a.sent();
                        this.toast.confirmationToast("se eliminó el producto.");
                        return [3 /*break*/, 5];
                    case 3:
                        e_4 = _a.sent();
                        this.alertService.mensaje("Error", e_4);
                        return [3 /*break*/, 5];
                    case 4:
                        this.productoElegido = null;
                        this.spi.hideSpinner();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.modificar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spi.showSpinner();
                        p = this.productoElegido;
                        p.nombre = this.productoElegido.nombre;
                        p.precio = this.productoElegido.precio;
                        p.descripcion = this.productoElegido.descripcion;
                        p.tiempo = this.productoElegido.tiempo;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.cargarProducto(p, 2)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        this.alertService.mensaje("Error", err_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.productoElegido = null;
                        this.spi.hideSpinner();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    AltaProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alta-producto',
            template: __webpack_require__(/*! ./alta-producto.page.html */ "./src/app/paginas/alta-producto/alta-producto.page.html"),
            styles: [__webpack_require__(/*! ./alta-producto.page.scss */ "./src/app/paginas/alta-producto/alta-producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"],
            src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_7__["ProductosService"],
            src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_13__["SpinnerService"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
    ], AltaProductoPage);
    return AltaProductoPage;
}());



/***/ }),

/***/ "./src/app/servicios/productos.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/productos.service.ts ***!
  \************************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductosService = /** @class */ (function () {
    function ProductosService(db) {
        this.db = db;
        this.productos = this.db.collection("productos").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    ProductosService.prototype.createProducto = function (producto) {
        return this.db.collection('productos').add(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, producto));
    };
    ProductosService.prototype.devolverListadoProductos = function () {
        return this.productos;
    };
    ProductosService.prototype.actualizarProducto = function (prod) {
        this.db.doc('productos' + '/' + prod.id).update(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prod));
    };
    ProductosService.prototype.BorrarProducto = function (prod) {
        this.db.doc('productos/' + prod.id).delete().then();
    };
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/servicios/spinner.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/spinner.service.ts ***!
  \**********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService(_loadingController, _toastCtrl) {
        this._loadingController = _loadingController;
        this._toastCtrl = _toastCtrl;
        this._isSpinnerShowing = false;
        this._isGoingToClose = false;
        this._timer = -1; // This is the timer, it will go from 2000 to -1
        this._timerID = null;
        // console.log('Inicializo el spinner');
        this.createSpinner();
    }
    SpinnerService.prototype.createSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._loadingController.create({
                                spinner: null,
                                keyboardClose: true,
                                message: '<div class="spinner-css"><img src="assets/loading.png"></div> Cargando...',
                                showBackdrop: false,
                                duration: 30000,
                                cssClass: 'cajaSpinner'
                            })];
                    case 1:
                        _a._currentLoading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpinnerService.prototype.showSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Muestro el spinner', this._currentLoading);
                if (this._isSpinnerShowing === false) {
                    this._currentLoading.present();
                    this._isSpinnerShowing = this.startTimer();
                }
                return [2 /*return*/];
            });
        });
    };
    SpinnerService.prototype.startTimer = function () {
        var _this = this;
        // console.log('Inicializo el conteo');
        this._timer = 2000;
        this._timerID = setInterval(function () {
            _this._timer = _this._timer - 1;
            if (_this._timer < 0) {
                // console.log('El conteo se acabÃ³.');
                _this._isGoingToClose = true;
                clearInterval(_this._timerID);
            }
        }, 1);
        return true;
    };
    SpinnerService.prototype.hideSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Intento ocultar el spinner con el timer en', this._timer);
                if (this._isSpinnerShowing) {
                    if (this._timer < 0) {
                        // console.log('El tiempo acabÃ³ y oculto el spinner');
                        this._isSpinnerShowing = this.stopAndReplaceSpinner();
                        this._isGoingToClose = false;
                    }
                    else {
                        // console.log('El tiempo NO acaba y hago un timeout para acabarlo en', this._timer);
                        clearInterval(this._timerID);
                        setTimeout(function () {
                            _this._isGoingToClose = true;
                            _this.hideSpinner();
                        }, this._timer);
                    }
                    this._timer = -1;
                }
                return [2 /*return*/];
            });
        });
    };
    SpinnerService.prototype.stopAndReplaceSpinner = function () {
        this._currentLoading.dismiss();
        this.createSpinner();
        return false;
    };
    SpinnerService.prototype.mostrarToast = function (message, timer, color, position) {
        this._toastCtrl.create({
            color: color,
            duration: timer * 1000,
            message: message,
            position: position,
        })
            .then(function (toast) {
            toast.present();
        });
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-alta-producto-alta-producto-module.js.map