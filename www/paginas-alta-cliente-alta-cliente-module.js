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

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Tipo de usuario</ion-label>\r\n    <ion-select [(ngModel)]=\"this.tipoRegistro\">\r\n      <ion-select-option>Usuario</ion-select-option>\r\n      <ion-select-option>Anónimo</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Nombre</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"this.nombreUsuario\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Nuevo usuario'\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"this.apellidoUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">DNI</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"this.dniUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Correo</ion-label>\r\n      <ion-input type=\"email\" [(ngModel)]=\"this.correoUsuario\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Clave</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"this.claveUsuario\"></ion-input>\r\n    </ion-item>\r\n  </ng-container>\r\n\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Imagen: </ion-label>\r\n    <ion-label *ngIf=\"this.urlFotoUsuario != ''\">\r\n      <ion-thumbnail>\r\n        <ion-img [src]=\"this.urlFotoUsuario\"></ion-img>\r\n      </ion-thumbnail>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"this.urlFotoUsuario == ''\">NaN</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"this.tomarDatosDNI()\" expand=\"full\" color=\"primary\">Datos desde código QR del DNI</ion-button>\r\n  <ion-button (click)=\"this.tomarFotoUsuario()\" expand=\"full\" color=\"warning\">Cargar foto</ion-button>\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Nuevo usuario'\">\r\n    <ion-button (click)=\"this.cargarUsuario()\" expand=\"full\" color=\"success\">Registrar usuario</ion-button>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"this.tipoRegistro == 'Anónimo'\">\r\n    <ion-button (click)=\"this.cargarUsuario()\" expand=\"full\" color=\"primary\">Ingresar como anónimo</ion-button>\r\n  </ng-container>\r\n</ion-content>"

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







var AltaClientePage = /** @class */ (function () {
    function AltaClientePage(barcodeScanner, camera, authService, firestorageService, router) {
        this.barcodeScanner = barcodeScanner;
        this.camera = camera;
        this.authService = authService;
        this.firestorageService = firestorageService;
        this.router = router;
        this.nombreUsuario = '';
        this.apellidoUsuario = '';
        this.dniUsuario = '';
        this.correoUsuario = '';
        this.claveUsuario = '';
        this.dataFotoUsuario = '';
        this.urlFotoUsuario = '';
        this.nacionalidadUsuario = '';
        this.nacimientoUsuario = '';
        this.tipoRegistro = 'Nuevo usuario';
    }
    AltaClientePage.prototype.tomarDatosDNI = function () {
        var _this = this;
        var options = { prompt: 'Escanee el DNI', formats: 'PDF_417' };
        this.barcodeScanner.scan(options).then(function (resultado) {
            _this.dataDNI = (resultado.text).split('@');
            _this.dniUsuario = _this.dataDNI[1].trim();
            _this.apellidoUsuario = _this.dataDNI[4];
            _this.nombreUsuario = _this.dataDNI[5];
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
    AltaClientePage.prototype.cargarUsuario = function () {
        var _this = this;
        if ((this.tipoRegistro === 'Anónimo' && this.nombreUsuario === '') ||
            this.tipoRegistro === 'Nuevo usuario' && (this.nombreUsuario === '' || this.apellidoUsuario === '' ||
                this.dniUsuario === '' || this.correoUsuario === '' || this.claveUsuario === '')) {
            return;
        }
        if (this.tipoRegistro === 'Nuevo usuario' && this.claveUsuario.length < 6) {
            return;
        }
        var emailRegex;
        emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (this.tipoRegistro === 'Nuevo usuario' && !emailRegex.test(this.correoUsuario)) {
            return;
        }
        if (this.urlFotoUsuario === '') {
            return;
        }
        if (this.tipoRegistro === 'Nuevo usuario') {
            this.authService.CrearAuth(this.correoUsuario, this.claveUsuario, {
                uid: '',
                foto: this.urlFotoUsuario,
                nombre: this.nombreUsuario,
                apellido: this.apellidoUsuario,
                mail: this.correoUsuario,
                dni: this.dniUsuario,
                activo: false,
                perfil: 'cliente'
            }, this.dataFotoUsuario).then(function (usuario) {
            }).catch(function (error) {
            });
        }
        else {
            this.authService.loginAnonimo({
                foto: this.urlFotoUsuario,
                nombre: this.nombreUsuario,
                perfil: 'anonimo'
            }, this.dataFotoUsuario).then(function (usuario) {
                _this.router.navigate(['/home-cliente']);
            }).catch(function (error) {
            });
        }
    };
    AltaClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-alta-cliente',
            template: __webpack_require__(/*! ./alta-cliente.page.html */ "./src/app/paginas/alta-cliente/alta-cliente.page.html"),
            styles: [__webpack_require__(/*! ./alta-cliente.page.scss */ "./src/app/paginas/alta-cliente/alta-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__["FirestorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AltaClientePage);
    return AltaClientePage;
}());



/***/ }),

/***/ "./src/app/servicios/firestorage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/firestorage.service.ts ***!
  \**************************************************/
/*! exports provided: FirestorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestorageService", function() { return FirestorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");



var FirestorageService = /** @class */ (function () {
    function FirestorageService(fireStorage) {
        this.fireStorage = fireStorage;
    }
    FirestorageService.prototype.uploadFotoToFirebase = function (dataFoto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var picName, respuesta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        picName = (new Date()).getTime().toString();
                        return [4 /*yield*/, this.fireStorage.storage.ref(picName).putString(dataFoto, 'base64', { contentType: 'image/jpeg' }).
                                then(function (uploadFoto) {
                                return uploadFoto.ref.getDownloadURL().then(function (downloadLink) {
                                    return downloadLink.toString();
                                });
                            })];
                    case 1:
                        respuesta = _a.sent();
                        return [2 /*return*/, respuesta];
                }
            });
        });
    };
    FirestorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], FirestorageService);
    return FirestorageService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-alta-cliente-alta-cliente-module.js.map