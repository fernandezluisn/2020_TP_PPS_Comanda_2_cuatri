(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-propina-propina-module"],{

/***/ "./src/app/paginas/propina/propina.module.ts":
/*!***************************************************!*\
  !*** ./src/app/paginas/propina/propina.module.ts ***!
  \***************************************************/
/*! exports provided: PropinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaPageModule", function() { return PropinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propina.page */ "./src/app/paginas/propina/propina.page.ts");







var routes = [
    {
        path: '',
        component: _propina_page__WEBPACK_IMPORTED_MODULE_6__["PropinaPage"]
    }
];
var PropinaPageModule = /** @class */ (function () {
    function PropinaPageModule() {
    }
    PropinaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_propina_page__WEBPACK_IMPORTED_MODULE_6__["PropinaPage"]]
        })
    ], PropinaPageModule);
    return PropinaPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/propina/propina.page.html":
/*!***************************************************!*\
  !*** ./src/app/paginas/propina/propina.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Propina</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h2>¿Cuál es su grado de satisfacción con respecto a la atención del mozo?</h2>\r\n\r\n  <ion-button  color=\"dark\" size=\"small\" (click)=\"escanear()\">Cargar</ion-button>\r\n  <h1 *ngIf=\"satisfaccion\">Usted piensa que la atención ha sido {{satisfaccion}}</h1>\r\n\r\n  <ion-button  color=\"dark\" size=\"small\" (click)=\"limpiar()\">Limpiar</ion-button>\r\n\r\n  <ion-button  (click)=\"subirPropina()\">Confirmar Propina</ion-button>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/propina/propina.page.scss":
/*!***************************************************!*\
  !*** ./src/app/paginas/propina/propina.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcHJvcGluYS9wcm9waW5hLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/propina/propina.page.ts":
/*!*************************************************!*\
  !*** ./src/app/paginas/propina/propina.page.ts ***!
  \*************************************************/
/*! exports provided: PropinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaPage", function() { return PropinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");








var PropinaPage = /** @class */ (function () {
    function PropinaPage(alertController, router, bda, loadingCtrl, barcodeScanner, vibra, tomarId, auth) {
        var _this = this;
        this.alertController = alertController;
        this.router = router;
        this.bda = bda;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.vibra = vibra;
        this.tomarId = tomarId;
        this.auth = auth;
        this.satisfaccion = null;
        this.idMesaCliente = this.tomarId.snapshot.paramMap.get('idMesaCliente');
        this.bda.devolverListadoMesas().subscribe(function (lista) {
            _this.listaMEsas = lista;
            _this.listaMEsas.filter(function (mesa) {
                if (mesa.id == _this.idMesaCliente)
                    _this.mesaCliente = mesa;
            });
        });
    }
    PropinaPage.prototype.ngOnInit = function () {
    };
    PropinaPage.prototype.presentLoading = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: message,
                                spinner: "bubbles",
                                duration: 1000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    PropinaPage.prototype.cargar = function (codigo) {
        var n = 0;
        this.satisfaccion = codigo;
        if (codigo == "Excelente") {
            n = 1.2;
        }
        else if (codigo == "Muy Bien") {
            n = 1.15;
        }
        else if (codigo == "Bien") {
            n = 1.1;
        }
        else if (codigo == "Regular") {
            n = 1.05;
        }
        else if (codigo == "Malo") {
            n = 1;
        }
        return n;
    };
    PropinaPage.prototype.alertar = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            cssClass: 'danger-alert-btn',
                            header: 'Error',
                            subHeader: 'Error en la carga',
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
    PropinaPage.prototype.escanear = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (barcodeData.format == "QR_CODE") {
                    this.propina = this.cargar(barcodeData.text);
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
        //this.cargarUsu();
    };
    PropinaPage.prototype.limpiar = function () {
        this.satisfaccion = null;
    };
    PropinaPage.prototype.subirPropina = function () {
        try {
            this.presentLoading("Cargando propina");
            this.mesaCliente.propina = this.propina;
            this.bda.actualizarMesa(this.mesaCliente);
            this.router.navigate(["home-cliente"]);
        }
        catch (e) {
            this.alertar(e);
        }
    };
    PropinaPage.prototype.salir = function () {
        this.auth.LogOut();
        this.router.navigate(['log-in']);
    };
    PropinaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-propina',
            template: __webpack_require__(/*! ./propina.page.html */ "./src/app/paginas/propina/propina.page.html"),
            styles: [__webpack_require__(/*! ./propina.page.scss */ "./src/app/paginas/propina/propina.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_7__["MesaClienteService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], PropinaPage);
    return PropinaPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-propina-propina-module.js.map