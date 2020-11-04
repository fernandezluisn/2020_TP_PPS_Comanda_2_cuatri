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
    function Producto(nombre, descripcion, tiempo, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.precio = precio;
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>altaProducto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-button (click)=\"cambiar()\">Cambiar formulario</ion-button>\r\n\r\n\r\n  <ng-container *ngIf=\"alta\">\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre del producto</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Descripción del producto</ion-label>\r\n      <ion-textarea [(ngModel)]=\"descripcion\"></ion-textarea>\r\n    </ion-item>\r\n   \r\n     <ion-item>\r\n       <ion-label position=\"floating\">Cantidad de minutos de elaboración</ion-label>\r\n       <ion-input type=\"number\" [(ngModel)]=\"minutos\"></ion-input>\r\n     </ion-item>\r\n \r\n     <ion-item>\r\n      <ion-label position=\"floating\">Precio</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"precio\" placeholder=\"$$$\"></ion-input>\r\n    </ion-item>\r\n \r\n     <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Escanear QR</ion-button><br>\r\n \r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(1)\" *ngIf=\"!image1\">Tomar una foto</ion-button><br><br>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(2)\" *ngIf=\"image1 && !image2\">Tomar segunda foto</ion-button>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(3)\" *ngIf=\"image2\">Tomar tercera foto</ion-button>\r\n     \r\n     <ion-button (click)=\"subir()\">Subir Producto</ion-button>\r\n     \r\n   </ng-container>\r\n\r\n\r\n   <ng-container *ngIf=\"!alta\">\r\n\r\n    <ion-item style=\"margin-bottom:3rem;\">\r\n      <ion-label>Producto a modificar y/o eliminar</ion-label>\r\n      <ion-select  [(ngModel)]=\"productoElegido\" >\r\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of listaProductos\">{{item.nombre}} ${{item.precio}}</ion-select-option>        \r\n      </ion-select>\r\n    </ion-item >\r\n    \r\n    <ng-container *ngIf=\"productoElegido\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"productoElegido.nombre\"></ion-input>\r\n      </ion-item> \r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Descripción del producto</ion-label>\r\n        <ion-textarea [(ngModel)]=\"productoElegido.descripcion\"></ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Precio</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"productoElegido.precio\"></ion-input>\r\n      </ion-item> \r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Cantidad de minutos de elaboración</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"productoElegido.minutos\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Ingresar nuevo QR</ion-button><br><br>\r\n \r\n      <ion-item *ngIf=\"productoElegido.foto_1\">\r\n        <ion-img [src]=\"productoElegido.foto_1\"></ion-img>\r\n      </ion-item>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(1)\">Cambiar primera foto</ion-button><br><br>\r\n     <ion-item *ngIf=\"productoElegido.foto_2\">\r\n      <ion-img [src]=\"productoElegido.foto_2\"></ion-img>\r\n    </ion-item>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(2)\">Cambiar segunda foto</ion-button><br><br>\r\n     <ion-item *ngIf=\"productoElegido.foto_3\">\r\n      <ion-img [src]=\"productoElegido.foto_3\"></ion-img>\r\n    </ion-item>\r\n     <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto(3)\">Cambiar tercera foto</ion-button><br><br>\r\n\r\n      <ion-button (click)=\"modificar()\">Actualizar Producto</ion-button>\r\n      <ion-button (click)=\"eliminar()\">Eliminar Producto</ion-button>\r\n    </ng-container>\r\n\r\n   </ng-container>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/alta-producto/alta-producto.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-producto/alta-producto.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hbHRhLXByb2R1Y3RvL0U6XFxEZXNjYXJnYXNcXG1hc3RlclxcbWFzdGVyL3NyY1xcYXBwXFxwYWdpbmFzXFxhbHRhLXByb2R1Y3RvXFxhbHRhLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hbHRhLXByb2R1Y3RvL2FsdGEtcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_interfaces_producto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/producto */ "./src/app/interfaces/producto.ts");
/* harmony import */ var src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/productos.service */ "./src/app/servicios/productos.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");











var AltaProductoPage = /** @class */ (function () {
    function AltaProductoPage(storage, camera, alertController, barcodeScanner, loadingCtrl, vibra, bda, toast) {
        var _this = this;
        this.storage = storage;
        this.camera = camera;
        this.alertController = alertController;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.vibra = vibra;
        this.bda = bda;
        this.toast = toast;
        this.productoElegido = null;
        this.image1 = null;
        this.image2 = null;
        this.image3 = null;
        this.alta = true;
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
                    this.alertar("El código debe ser QR");
                    this.vibra.vibrate(500);
                }
                return [2 /*return*/];
            });
        }); }).catch(function (err) {
            _this.alertar("No se ha podido cargar el código.");
            _this.vibra.vibrate(500);
        });
    };
    AltaProductoPage.prototype.sacarFoto = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading("Cargando imagen");
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
                                _this.alertar(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.presentLoading = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: message,
                                spinner: "crescent",
                                duration: 3500
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    AltaProductoPage.prototype.alertar = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            cssClass: 'danger-alert-btn',
                            header: 'Error',
                            message: mensaje,
                            buttons: ['OK']
                        });
                        return [4 /*yield*/, alert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.subir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading("Subiendo el producto.");
                        p = new src_app_interfaces_producto__WEBPACK_IMPORTED_MODULE_7__["Producto"](this.nombre, this.descripcion, this.minutos, this.precio);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, 10, 11]);
                        if (!(this.image1 != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.guardarImagen(1, this.image1, p)];
                    case 2:
                        p = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(this.image2 != null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.guardarImagen(2, this.image2, p)];
                    case 4:
                        p = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(this.image3 != null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.guardarImagen(3, this.image3, p)];
                    case 6:
                        p = _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.cargarProducto(p, 1)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        err_1 = _a.sent();
                        this.alertar(err_1);
                        return [3 /*break*/, 11];
                    case 10:
                        this.image1 = null;
                        this.image2 = null;
                        this.image3 = null;
                        this.nombre = "";
                        this.descripcion = "";
                        this.minutos = 0;
                        this.precio = 0;
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
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
                this.alertar(err);
            }
        }
        else if (prod.precio > 0 && prod.nombre.length > 3 && prod.tiempo > 10 && prod.descripcion.length > 20 && modalidad == 2) {
            try {
                this.bda.actualizarProducto(prod);
                this.toast.confirmationToast("Se actualizó el producto.");
            }
            catch (err) {
                this.alertar(err);
            }
        }
        else if (prod.precio == 0) {
            this.alertar("El precio debe ser mayor a 0");
        }
        else if (prod.nombre.length < 4) {
            this.alertar("El nombre debe tener más de 3 caracteres");
        }
        else if (prod.tiempo < 11) {
            this.alertar("Los productos tienen un mínimo de producción de 10 minutos");
        }
        else {
            this.alertar("La descripción debe tener más de 20 caracteres");
        }
    };
    AltaProductoPage.prototype.guardarImagen = function (numero, image, producto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com, img_1, file, path, ref_1, task, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        com = this.nombre + this.precio + numero;
                        return [4 /*yield*/, fetch(image)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_1 = r;
                            }); })];
                    case 1:
                        _a.sent();
                        file = img_1;
                        path = com;
                        ref_1 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return ref_1.getDownloadURL().subscribe(function (url) {
                                if (numero == 1)
                                    producto.foto_1 = url;
                                else if (numero == 2)
                                    producto.foto_2 = url;
                                else
                                    producto.foto_3 = url;
                            }); })).subscribe()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, producto];
                    case 3:
                        err_2 = _a.sent();
                        this.alertar(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.cambiar = function () {
        if (this.alta)
            this.alta = false;
        else
            this.alta = true;
    };
    AltaProductoPage.prototype.eliminar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading("Eliminando");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.bda.BorrarProducto(this.productoElegido)];
                    case 2:
                        _a.sent();
                        this.toast.confirmationToast("se eliminó el producto.");
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        this.alertar(e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.productoElegido = null;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage.prototype.modificar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading("Subiendo el producto.");
                        p = this.productoElegido;
                        p.nombre = this.productoElegido.nombre;
                        p.precio = this.productoElegido.precio;
                        p.descripcion = this.productoElegido.descripcion;
                        p.tiempo = this.productoElegido.tiempo;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, 10, 11]);
                        if (!(this.image1 != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.guardarImagen(1, this.image1, p)];
                    case 2:
                        p = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(this.image2 != null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.guardarImagen(2, this.image2, p)];
                    case 4:
                        p = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(this.image3 != null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.guardarImagen(3, this.image3, p)];
                    case 6:
                        p = _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.cargarProducto(p, 1)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        err_3 = _a.sent();
                        this.alertar(err_3);
                        return [3 /*break*/, 11];
                    case 10:
                        this.productoElegido = null;
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AltaProductoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alta-producto',
            template: __webpack_require__(/*! ./alta-producto.page.html */ "./src/app/paginas/alta-producto/alta-producto.page.html"),
            styles: [__webpack_require__(/*! ./alta-producto.page.scss */ "./src/app/paginas/alta-producto/alta-producto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"],
            src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_8__["ProductosService"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]])
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



/***/ })

}]);
//# sourceMappingURL=paginas-alta-producto-alta-producto-module.js.map