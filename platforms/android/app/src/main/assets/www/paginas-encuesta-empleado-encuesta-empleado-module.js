(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-encuesta-empleado-encuesta-empleado-module"],{

/***/ "./src/app/interfaces/encuestaEmpleado.ts":
/*!************************************************!*\
  !*** ./src/app/interfaces/encuestaEmpleado.ts ***!
  \************************************************/
/*! exports provided: EncuestaEmpleado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaEmpleado", function() { return EncuestaEmpleado; });
var EncuestaEmpleado = /** @class */ (function () {
    function EncuestaEmpleado(idEmpleado, comentario, foto, demora, limpieza, fecha, fila, roturas, falta, orden) {
        this.idEmpleado = idEmpleado;
        this.comentario = comentario;
        this.foto = foto;
        this.demora = demora;
        this.limpieza = limpieza;
        this.fecha = fecha;
        this.fila = fila;
        this.roturas = roturas;
        this.falta = falta;
        this.orden = orden;
    }
    return EncuestaEmpleado;
}());



/***/ }),

/***/ "./src/app/paginas/encuesta-empleado/encuesta-empleado.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/encuesta-empleado/encuesta-empleado.module.ts ***!
  \***********************************************************************/
/*! exports provided: EncuestaEmpleadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaEmpleadoPageModule", function() { return EncuestaEmpleadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _encuesta_empleado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta-empleado.page */ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.ts");







var routes = [
    {
        path: '',
        component: _encuesta_empleado_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaEmpleadoPage"]
    }
];
var EncuestaEmpleadoPageModule = /** @class */ (function () {
    function EncuestaEmpleadoPageModule() {
    }
    EncuestaEmpleadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_encuesta_empleado_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaEmpleadoPage"]]
        })
    ], EncuestaEmpleadoPageModule);
    return EncuestaEmpleadoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/encuesta-empleado/encuesta-empleado.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>encuestaEmpleado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">En caso de desearlo aquí puede ingresar un comentario</ion-label>\r\n    <ion-textarea [(ngModel)]=\"comentario\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <ion-label>Del 1 al 5 que tan limpio está su lugar de trabajo</ion-label>\r\n  <ion-item>\r\n    <ion-range [(ngModel)]=\"this.limpieza\" pin=\"true\" snaps=\"true\" ticks=\"false\" min=\"1\" max=\"5\"\r\n      color=\"primary\">\r\n      <ion-label slot=\"start\">1</ion-label>\r\n      <ion-label slot=\"end\">5</ion-label>\r\n    </ion-range>\r\n  </ion-item>      \r\n\r\n    \r\n  \r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Marque si hay algo importante a informar</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Fila en la puerta</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"fila\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Roturas</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"roturas\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Falta de personal</ion-label>\r\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"falta\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list><br><br>\r\n\r\n\r\n  <ion-radio-group [(ngModel)]=\"demora\">\r\n    <ion-list-header>\r\n      <ion-label>Demora de la cocina</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Mucha</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Mucha\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Normal</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Poca</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Poca\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Muy Poca</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Muy poca\"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group><br><br>\r\n\r\n  <ion-label>Cuán ordenado está su lugar de trabajo</ion-label>\r\n  <ion-item>\r\n    <ion-select [(ngModel)]=\"opcion\" class=\"form-control\" style=\"width: 12rem;\">\r\n      <ion-select-option [value]=\"item\" *ngFor=\"let item of opciones\">{{item}}</ion-select-option>\r\n    </ion-select>   \r\n  </ion-item><br><br>\r\n\r\n  <ion-button color=\"dark\" size=\"small\" (click)=\"sacarFoto()\">Agregar imagen</ion-button>\r\n    <h2 *ngIf=\"image\">Esta es la imagen que quiere subir?</h2>\r\n    <img style=\"border: 0.2rem black solid; height: 25rem; margin-left: 3rem;\" [src]=\"image\" *ngIf=\"image\" /><br><br><br>\r\n\r\n\r\n    <ion-button (click)=\"subir()\">Responder</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/encuesta-empleado/encuesta-empleado.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZW5jdWVzdGEtZW1wbGVhZG8vZW5jdWVzdGEtZW1wbGVhZG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/encuesta-empleado/encuesta-empleado.page.ts ***!
  \*********************************************************************/
/*! exports provided: EncuestaEmpleadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaEmpleadoPage", function() { return EncuestaEmpleadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_interfaces_encuestaEmpleado__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/encuestaEmpleado */ "./src/app/interfaces/encuestaEmpleado.ts");
/* harmony import */ var src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/encuestas.service */ "./src/app/servicios/encuestas.service.ts");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");










var EncuestaEmpleadoPage = /** @class */ (function () {
    function EncuestaEmpleadoPage(encuestasService, camera, storage, router, alertController, loadingCtrl, vibra, toast) {
        this.encuestasService = encuestasService;
        this.camera = camera;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.vibra = vibra;
        this.toast = toast;
        this.image = null;
        this.opciones = ["Ordenado", "Desordenado", "Muy desordenado"];
        this.fila = false;
        this.roturas = false;
        this.falta = false;
        this.opcion = "Ordenado";
        this.comentario = "";
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    EncuestaEmpleadoPage.prototype.ngOnInit = function () {
    };
    EncuestaEmpleadoPage.prototype.presentLoading = function (message) {
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
    EncuestaEmpleadoPage.prototype.alertar = function (mensaje) {
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
    EncuestaEmpleadoPage.prototype.sacarFoto = function () {
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
    EncuestaEmpleadoPage.prototype.subir = function () {
        var f = new Date();
        var e = new src_app_interfaces_encuestaEmpleado__WEBPACK_IMPORTED_MODULE_7__["EncuestaEmpleado"](this.usuario.id, this.comentario, this.url1, this.demora, this.limpieza, f, this.fila, this.roturas, this.falta, this.opcion);
        try {
            this.encuestasService.addEncuestaEmpleado(e);
            this.toast.confirmationToast("Se cargó la encuesta.");
            switch (this.usuario.perfil) {
                case 'bar':
                    this.router.navigate(["home-cocina"]);
                    break;
                case 'cocina':
                    this.router.navigate(["home-cocina"]);
                    break;
                case 'mozo':
                    this.router.navigate(["home-comanda"]);
                    break;
                case 'metre':
                    this.router.navigate(["home-metre"]);
                    break;
            }
        }
        catch (err) {
            this.alertar(err);
        }
    };
    EncuestaEmpleadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encuesta-empleado',
            template: __webpack_require__(/*! ./encuesta-empleado.page.html */ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.html"),
            styles: [__webpack_require__(/*! ./encuesta-empleado.page.scss */ "./src/app/paginas/encuesta-empleado/encuesta-empleado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_8__["EncuestasService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__["Vibration"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
    ], EncuestaEmpleadoPage);
    return EncuestaEmpleadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-encuesta-empleado-encuesta-empleado-module.js.map