(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-admin-comercio-admin-comercio-module"],{

/***/ "./src/app/interfaces/mesa.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/mesa.ts ***!
  \************************************/
/*! exports provided: Mesa, MesasEstados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesa", function() { return Mesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesasEstados", function() { return MesasEstados; });
var Mesa = /** @class */ (function () {
    function Mesa(numero, espacios, tipo, foto, estado) {
        this.numero = numero;
        this.espacios = espacios;
        this.tipo = tipo;
        this.foto = foto;
        this.estado = estado;
    }
    return Mesa;
}());

var MesasEstados;
(function (MesasEstados) {
    MesasEstados[MesasEstados["Vacia"] = 0] = "Vacia";
    MesasEstados[MesasEstados["Ocupada"] = 1] = "Ocupada";
})(MesasEstados || (MesasEstados = {}));


/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminComercioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComercioPageModule", function() { return AdminComercioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-comercio.page */ "./src/app/paginas/admin-comercio/admin-comercio.page.ts");







var routes = [
    {
        path: '',
        component: _admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__["AdminComercioPage"]
    }
];
var AdminComercioPageModule = /** @class */ (function () {
    function AdminComercioPageModule() {
    }
    AdminComercioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__["AdminComercioPage"]]
        })
    ], AdminComercioPageModule);
    return AdminComercioPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Alta de mesas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button (click)=\"cambiar()\">Cambiar formulario</ion-button>\r\n\r\n  <ng-container *ngIf=\"alta\">\r\n\r\n   <ion-item>\r\n    <ion-label position=\"floating\">Tipo de mesa</ion-label>\r\n    <ion-select [(ngModel)]=\"this.tipoMesa\">\r\n      <ion-select-option>Vip</ion-select-option>\r\n      <ion-select-option>Discapacitados</ion-select-option>\r\n      <ion-select-option>Estandar</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>  \r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Número de mesa</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"this.numMesa\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Cantidad de comensales</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"cantidad\"></ion-input>\r\n    </ion-item>  \r\n\r\n    <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Escanear QR</ion-button>\r\n\r\n    <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto()\">Toma una foto</ion-button>\r\n    <h2 *ngIf=\"image\">Esta es la imagen que quiere subir?</h2>\r\n    <img style=\"border: 0.2rem black solid; height: 25rem; margin-left: 3rem;\" [src]=\"image\" *ngIf=\"image\" />\r\n    <ion-button (click)=\"subir()\">Subir Mesa</ion-button>\r\n    \r\n  </ng-container>\r\n\r\n\r\n  <ng-container *ngIf=\"!alta\">\r\n    \r\n\r\n    <ion-item style=\"margin-bottom:3rem;\">\r\n      <ion-label>Mesa a modificar y/o eliminar</ion-label>\r\n      <ion-select  [(ngModel)]=\"mesaElegida\" >\r\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of listaMesas\">{{item.numero}}</ion-select-option>        \r\n      </ion-select>\r\n    </ion-item >\r\n\r\n    <ng-container *ngIf=\"mesaElegida\" style=\"margin-top: 3rem;\">\r\n      <h2 style=\"margin-left: 2REM;\">MESA N°: {{mesaElegida.numero}}</h2>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Tipo de mesa</ion-label>\r\n        <ion-select [(ngModel)]=\"mesaElegida.tipo\">\r\n          <ion-select-option>Vip</ion-select-option>\r\n          <ion-select-option>Discapacitados</ion-select-option>\r\n          <ion-select-option>Estandar</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>  \r\n      \r\n       \r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Cantidad de comensales</ion-label>\r\n          <ion-input type=\"number\" [(ngModel)]=\"mesaElegida.espacios\"></ion-input>\r\n        </ion-item> \r\n\r\n      \r\n\r\n      <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Ingresar nuevo QR</ion-button>\r\n      <ion-item *ngIf=\"mesaElegida.foto\">\r\n        <ion-img [src]=\"mesaElegida.foto\"></ion-img>\r\n      </ion-item>\r\n      <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto()\">Ingresar otra foto</ion-button><br><br><br>\r\n      <ion-button (click)=\"modificar()\">Actualizar Mesa</ion-button>\r\n      <ion-button (click)=\"eliminar()\">Eliminar Mesa</ion-button>\r\n    </ng-container>\r\n  </ng-container>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbi1jb21lcmNpby9DOlxcVXNlcnNcXHJhdWwuemFtb3JhXFxBbm5ndWxhclxcMjAyMF9UUF9QUFMvc3JjXFxhcHBcXHBhZ2luYXNcXGFkbWluLWNvbWVyY2lvXFxhZG1pbi1jb21lcmNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWRtaW4tY29tZXJjaW8vYWRtaW4tY29tZXJjaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.ts ***!
  \***************************************************************/
/*! exports provided: AdminComercioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComercioPage", function() { return AdminComercioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_interfaces_mesa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/mesa */ "./src/app/interfaces/mesa.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");











var AdminComercioPage = /** @class */ (function () {
    function AdminComercioPage(storage, bda, camera, alertController, barcodeScanner, loadingCtrl, vibra, toast) {
        var _this = this;
        this.storage = storage;
        this.bda = bda;
        this.camera = camera;
        this.alertController = alertController;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.vibra = vibra;
        this.toast = toast;
        this.image = null;
        this.qr = "";
        this.repite = false;
        this.alta = true;
        this.mesaElegida = null;
        this.cantidad = 0;
        this.numMesa = 0;
        this.tipoMesa = "Estandar";
        this.bda.devolverListadoMesas().subscribe(function (lista) {
            _this.listaMesas = lista;
            _this.listaMesas.sort(function (a, b) { return a.numero - b.numero; });
        });
    }
    AdminComercioPage.prototype.ngOnInit = function () {
    };
    AdminComercioPage.prototype.cambiar = function () {
        if (this.alta)
            this.alta = false;
        else
            this.alta = true;
    };
    AdminComercioPage.prototype.escanear = function () {
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
    AdminComercioPage.prototype.alertar = function (mensaje) {
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
    AdminComercioPage.prototype.presentLoading = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: message,
                                spinner: "crescent",
                                duration: 2000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    AdminComercioPage.prototype.sacarFoto = function () {
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
                                _this.image = "data:image/jpeg;base64," + imageData;
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
    AdminComercioPage.prototype.subir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com, img_1, file, path, ref_1, task, err_1, f;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.repite = false;
                        this.listaMesas.forEach(function (mesa) {
                            if (mesa.numero == _this.numMesa)
                                _this.repite = true;
                        });
                        if (!(this.cantidad != 0)) return [3 /*break*/, 10];
                        if (!(!this.repite && this.qr.length > 3)) return [3 /*break*/, 8];
                        this.presentLoading("Subiendo mesa");
                        if (!this.image) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        com = this.numMesa + "mesa";
                        return [4 /*yield*/, fetch(this.image)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_1 = r;
                            }); })];
                    case 2:
                        _a.sent();
                        file = img_1;
                        path = com;
                        ref_1 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return ref_1.getDownloadURL().subscribe(function (url) {
                                _this.url1 = url;
                                var f = new src_app_interfaces_mesa__WEBPACK_IMPORTED_MODULE_6__["Mesa"](_this.numMesa, _this.cantidad, _this.tipoMesa, _this.url1, "Vacia");
                                f.qr = _this.qr;
                                _this.bda.createMesa(f);
                            }); })).subscribe()];
                    case 3:
                        _a.sent();
                        this.toast.confirmationToast("se subió la mesa.");
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.alertar(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        f = new src_app_interfaces_mesa__WEBPACK_IMPORTED_MODULE_6__["Mesa"](this.numMesa, this.cantidad, this.tipoMesa, null, "Vacia");
                        if (this.qr.length > 2) {
                            f.qr = this.qr;
                        }
                        this.bda.createMesa(f);
                        this.toast.confirmationToast("se subió la mesa.");
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.alertar("Debe elegir un número de mesa que no existe y agregarle un código qr para poder relizar el alta");
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        this.alertar("Debe ingresar una cantidad mayor a 0");
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AdminComercioPage.prototype.eliminar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading("Eliminando");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.bda.BorrarMesa(this.mesaElegida)];
                    case 2:
                        _a.sent();
                        this.toast.confirmationToast("se eliminó la mesa.");
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        this.alertar(e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.mesaElegida = null;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AdminComercioPage.prototype.modificar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var f, com, img_2, file, path, ref_2, task, err_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        f = this.mesaElegida;
                        f.numero = this.mesaElegida.numero;
                        f.espacios = this.mesaElegida.espacios;
                        f.tipo = this.mesaElegida.tipo;
                        if (!(this.mesaElegida.cantidad != 0)) return [3 /*break*/, 8];
                        this.presentLoading("Subiendo mesa");
                        if (!this.image) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        com = this.numMesa + "mesa";
                        return [4 /*yield*/, fetch(this.image)
                                .then(function (res) { return res.blob().then(function (r) {
                                img_2 = r;
                            }); })];
                    case 2:
                        _a.sent();
                        file = img_2;
                        path = com;
                        ref_2 = this.storage.ref(path);
                        task = this.storage.upload(path, file);
                        return [4 /*yield*/, task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return ref_2.getDownloadURL().subscribe(function (url) {
                                f.foto = url;
                                if (_this.qr.length > 2) {
                                    f.qr = _this.qr;
                                }
                                _this.bda.actualizarMesa(f);
                            }); })).subscribe()];
                    case 3:
                        _a.sent();
                        this.toast.confirmationToast("se subió la mesa.");
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        this.alertar(err_2);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (this.qr.length > 2) {
                            f.qr = this.qr;
                        }
                        this.bda.actualizarMesa(f);
                        this.toast.confirmationToast("se subió la mesa.");
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.alertar("Debe ingresar una cantidad mayor a 0");
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AdminComercioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-comercio',
            template: __webpack_require__(/*! ./admin-comercio.page.html */ "./src/app/paginas/admin-comercio/admin-comercio.page.html"),
            styles: [__webpack_require__(/*! ./admin-comercio.page.scss */ "./src/app/paginas/admin-comercio/admin-comercio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__["Vibration"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]])
    ], AdminComercioPage);
    return AdminComercioPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-admin-comercio-admin-comercio-module.js.map