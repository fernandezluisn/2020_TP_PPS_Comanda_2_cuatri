(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-alta-cliente-alta-cliente-module"],{

/***/ "./src/app/paginas/alta-cliente/alta-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: AltaClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePageModule", function() { return AltaClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alta_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alta-cliente.page */ "./src/app/paginas/alta-cliente/alta-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _alta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AltaClientePage"]
    }
];
var AltaClientePageModule = /** @class */ (function () {
    function AltaClientePageModule() {
    }
    AltaClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AltaClientePage"]]
        })
    ], AltaClientePageModule);
    return AltaClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Tipo de usuario</ion-label>\r\n    <ion-select [(ngModel)]=\"this.tipoRegistro\">\r\n      <ion-select-option>Usuario</ion-select-option>\r\n      <ion-select-option>Anónimo</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Nombre</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"this.nombreUsuario\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Usuario'\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"this.apellidoUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">DNI</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"this.dniUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Correo</ion-label>\r\n      <ion-input type=\"email\" [(ngModel)]=\"this.correoUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Clave</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"this.claveUsuario\"></ion-input>\r\n    </ion-item>\r\n  </ng-container>\r\n\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Imagen: </ion-label>\r\n    <ion-label *ngIf=\"this.urlFotoUsuario != ''\">\r\n      <ion-thumbnail>\r\n        <ion-img [src]=\"this.urlFotoUsuario\"></ion-img>\r\n      </ion-thumbnail>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"this.urlFotoUsuario == ''\"></ion-label>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"this.tomarDatosDNI()\" expand=\"full\" color=\"primary\">Escanear DNI</ion-button>\r\n  <ion-button (click)=\"this.tomarFotoUsuario()\" expand=\"full\" color=\"warning\">Cargar foto</ion-button>\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Usuario'\">\r\n    <ion-button (click)=\"this.cargarUsuario()\" expand=\"full\" color=\"success\">Registrar usuario</ion-button>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Anónimo'\">\r\n    <ion-button (click)=\"this.cargarUsuario()\" expand=\"full\" color=\"primary\">Ingresar como anónimo</ion-button>\r\n  </ng-container>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWx0YS1jbGllbnRlL2FsdGEtY2xpZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/alta-cliente/alta-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/alta-cliente/alta-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: AltaClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaClientePage", function() { return AltaClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../servicios/firestorage.service */ "./src/app/servicios/firestorage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");










var AltaClientePage = /** @class */ (function () {
    function AltaClientePage(barcodeScanner, camera, alert, authService, firestorageService, router, spinnerService, toastService) {
        this.barcodeScanner = barcodeScanner;
        this.camera = camera;
        this.alert = alert;
        this.authService = authService;
        this.firestorageService = firestorageService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.toastService = toastService;
        this.registros = [{ id: 0, tipo: 'Usuario' }, { id: 1, tipo: 'Anónimo' }];
        this.nombreUsuario = '';
        this.apellidoUsuario = '';
        this.dniUsuario = '';
        this.correoUsuario = '';
        this.claveUsuario = '';
        this.dataFotoUsuario = '';
        this.urlFotoUsuario = '';
        this.nacionalidadUsuario = '';
        this.nacimientoUsuario = '';
        this.tipoRegistro = 'Usuario';
    }
    AltaClientePage.prototype.tomarDatosDNI = function () {
        var _this = this;
        var options = { prompt: 'Escanee el DNI', formats: 'PDF_417' };
        this.barcodeScanner.scan(options).then(function (resultado) {
            _this.dataDNI = (resultado.text).split('@');
            _this.dniUsuario = _this.dataDNI[4].trim();
            _this.apellidoUsuario = _this.dataDNI[1];
            _this.nombreUsuario = _this.dataDNI[2];
        });
    };
    AltaClientePage.prototype.tomarFotoUsuario = function () {
        var _this = this;
        var options = {
            quality: 50,
            targetWidth: 500,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.ALLMEDIA,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.dataFotoUsuario = imageData;
            _this.firestorageService.uploadFotoToFirebase(imageData).then(function (imageURL) {
                _this.urlFotoUsuario = imageURL;
            });
        });
    };
    AltaClientePage.prototype.validarSoloLetras = function (valor, nombre) {
        if (valor === undefined || valor === '' || !/^[A-Za-z\s\xF1\xD1]+$/.test(valor)) {
            if (nombre) {
                this.toastService.errorToast('Formato de nombre y/o apellido inválido');
            }
            else {
                this.toastService.errorToast('Formato de sexo inválido');
            }
            return false;
        }
        return true;
    };
    AltaClientePage.prototype.validarEmail = function (valor) {
        if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(valor)) {
            this.toastService.errorToast('Formato de email inválido');
            return false;
        }
        return true;
    };
    AltaClientePage.prototype.validarDNI = function (dni) {
        if (dni.length < 6 || dni.length > 8) {
            this.toastService.errorToast('DNI: Cantidad de dígitos inválida');
            return false;
        }
        else {
            for (var _i = 0, dni_1 = dni; _i < dni_1.length; _i++) {
                var caracter = dni_1[_i];
                if (isNaN(parseInt(caracter, 10))) {
                    this.toastService.errorToast('Formato de dni inválido');
                    return false;
                }
            }
        }
        return true;
    };
    AltaClientePage.prototype.validarContraseña = function (clave, claveConfirmada) {
        if (clave !== claveConfirmada) {
            this.toastService.errorToast('La contraseña no se confirmó correctamente');
            return false;
        }
        return true;
    };
    AltaClientePage.prototype.cargarUsuario = function () {
        var _this = this;
        if ((this.tipoRegistro === 'Anónimo' && this.nombreUsuario === '') ||
            this.tipoRegistro === 'Usuario' && (this.nombreUsuario === '' || this.apellidoUsuario === '' ||
                this.dniUsuario === '' || this.correoUsuario === '' || this.claveUsuario === '')) {
            this.alert.mensaje('', 'Debe completar todos los campos');
            return;
        }
        if (this.tipoRegistro === 'Usuario' && this.claveUsuario.length < 6) {
            this.alert.mensaje('', 'La clave debe tener al menos 6 caracteres');
            return;
        }
        var emailRegex;
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (this.tipoRegistro === 'Usuario' && !emailRegex.test(this.correoUsuario)) {
            this.alert.mensaje('', 'Debe ingresar un e-mail válido');
            return;
        }
        /*  if (this.urlFotoUsuario === '') {
            this.alert.mensaje('', 'Debe cargar una foto');
           return;
          }*/
        this.spinnerService.showSpinner();
        if (this.tipoRegistro === 'Usuario') {
            this.authService.CrearAuth(this.correoUsuario, this.claveUsuario, {
                uid: '',
                foto: this.urlFotoUsuario,
                nombre: this.nombreUsuario,
                apellido: this.apellidoUsuario,
                mail: this.correoUsuario,
                dni: this.dniUsuario,
                activo: false,
                estado: "desconectado",
                perfil: 'cliente'
            }, this.dataFotoUsuario).then(function (usuario) {
                _this.spinnerService.hideSpinner();
                _this.alert.mensaje('', 'Usuario registrado exitosamente! Va a poder ingresar a la aplicacion cuando sea aprobado por el dueño.');
                _this.router.navigate(['/log-in']);
            }).catch(function (error) {
                _this.spinnerService.hideSpinner();
                _this.alert.mensaje('', 'ERROR: ' + error);
            });
        }
        else {
            this.authService.loginAnonimo({
                foto: this.urlFotoUsuario,
                nombre: this.nombreUsuario,
                estado: "desconectado",
                perfil: 'anonimo'
            }, this.dataFotoUsuario).then(function (usuario) {
                _this.spinnerService.hideSpinner();
                _this.router.navigate(['/home-cliente']);
                _this.alert.mensaje('Bienvenido!', 'Ingresó como usuario anónimo');
            }).catch(function (error) {
                _this.spinnerService.hideSpinner();
                _this.alert.mensaje('ERROR', error);
            });
        }
    };
    AltaClientePage.prototype.salir = function () {
        this.authService.LogOut();
        this.router.navigate(['log-in']);
    };
    AltaClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-alta-cliente',
            template: __webpack_require__(/*! ./alta-cliente.page.html */ "./src/app/paginas/alta-cliente/alta-cliente.page.html"),
            styles: [__webpack_require__(/*! ./alta-cliente.page.scss */ "./src/app/paginas/alta-cliente/alta-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__["FirestorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
    ], AltaClientePage);
    return AltaClientePage;
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
//# sourceMappingURL=paginas-alta-cliente-alta-cliente-module.js.map