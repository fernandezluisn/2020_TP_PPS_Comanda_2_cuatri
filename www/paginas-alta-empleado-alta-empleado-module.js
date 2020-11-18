(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-alta-empleado-alta-empleado-module"],{

/***/ "./src/app/paginas/alta-empleado/alta-empleado.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-empleado/alta-empleado.module.ts ***!
  \***************************************************************/
/*! exports provided: AltaEmpleadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaEmpleadoPageModule", function() { return AltaEmpleadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alta_empleado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alta-empleado.page */ "./src/app/paginas/alta-empleado/alta-empleado.page.ts");







var routes = [
    {
        path: '',
        component: _alta_empleado_page__WEBPACK_IMPORTED_MODULE_6__["AltaEmpleadoPage"]
    }
];
var AltaEmpleadoPageModule = /** @class */ (function () {
    function AltaEmpleadoPageModule() {
    }
    AltaEmpleadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alta_empleado_page__WEBPACK_IMPORTED_MODULE_6__["AltaEmpleadoPage"]]
        })
    ], AltaEmpleadoPageModule);
    return AltaEmpleadoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/alta-empleado/alta-empleado.page.html":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-empleado/alta-empleado.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"danger\">Dar de alta un empleados</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Nombre:</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"empleado.nombre\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Apellido:</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"empleado.apellido\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Correo:</ion-label>\r\n    <ion-input inputmode=\"email\" [(ngModel)]=\"empleado.mail\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Contraseña:</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">DNI:</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"empleado.dni\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">CUIL:</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"empleado.cuil\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Tipo:</ion-label>\r\n    <ion-select [(ngModel)]=\"empleado.perfil\" placeholder=\"perfil\">\r\n      <ion-select-option value=\"cocina\">Cocina</ion-select-option>\r\n      <ion-select-option value=\"bar\">Bar</ion-select-option>\r\n      <ion-select-option value=\"mozo\">Mozo</ion-select-option>\r\n      <ion-select-option value=\"metre\">Metre</ion-select-option>\r\n      <ion-select-option value=\"delivery\">Delivery</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Foto: </ion-label>\r\n    <ion-label *ngIf=\"empleado.foto == ''\">Sin subir</ion-label>\r\n    <ion-label *ngIf=\"empleado.foto != ''\">Subida</ion-label>\r\n    <ion-thumbnail  *ngIf=\"empleado.foto != ''\">\r\n      <ion-img [src]=\"empleado.foto\"></ion-img>\r\n    </ion-thumbnail>\r\n  </ion-item>\r\n  <br>\r\n  <h3 *ngIf=\"faltan\" class=\"error\">Faltan datos en el registro!</h3>\r\n  <h3 *ngIf=\"faltaFoto\" class=\"error\">Falta subir foto de usuario!</h3>\r\n  <h3 *ngIf=\"emailmal\" class=\"error\">Ingrese correo válido!</h3>\r\n  <br>\r\n  \r\n \r\n  <ion-button (click)=\"this.tomarDatosDNI()\" expand=\"full\" color=\"primary\">\r\n    Escanear DNI\r\n  </ion-button>\r\n    <ion-button (click)=\"SacarFoto()\" color=\"primary\" expand=\"block\">\r\n      Sacar foto\r\n    </ion-button>\r\n    <ion-button (click)=\"Ingresar()\" color=\"danger\" expand=\"block\">\r\n      Guardar usuario\r\n    </ion-button>\r\n    <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n      <ion-icon name=\"power\"></ion-icon>\r\n    </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/alta-empleado/alta-empleado.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/paginas/alta-empleado/alta-empleado.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  text-align: center;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hbHRhLWVtcGxlYWRvL0M6XFxVc2Vyc1xccmF1bC56YW1vcmFcXEFubmd1bGFyXFwyMDIwX1RQX1BQUy9zcmNcXGFwcFxccGFnaW5hc1xcYWx0YS1lbXBsZWFkb1xcYWx0YS1lbXBsZWFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hbHRhLWVtcGxlYWRvL2FsdGEtZW1wbGVhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/paginas/alta-empleado/alta-empleado.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/alta-empleado/alta-empleado.page.ts ***!
  \*************************************************************/
/*! exports provided: AltaEmpleadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaEmpleadoPage", function() { return AltaEmpleadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/firestorage.service */ "./src/app/servicios/firestorage.service.ts");
/* harmony import */ var src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/error.service */ "./src/app/servicios/error.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");









var AltaEmpleadoPage = /** @class */ (function () {
    function AltaEmpleadoPage(camera, fotosService, errorHand, authService, router, barcodeScanner, alertServ) {
        this.camera = camera;
        this.fotosService = fotosService;
        this.errorHand = errorHand;
        this.authService = authService;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.alertServ = alertServ;
        this.password = '';
        this.empleado = {
            uid: '',
            nombre: '',
            apellido: '',
            dni: '',
            cuil: '',
            mail: '',
            perfil: '',
            foto: '',
            activo: true
        };
        this.password = '';
    }
    AltaEmpleadoPage.prototype.ngOnInit = function () {
    };
    AltaEmpleadoPage.prototype.tomarDatosDNI = function () {
        var _this = this;
        var options = { prompt: 'Escanee el DNI', formats: 'PDF_417' };
        this.barcodeScanner.scan(options).then(function (resultado) {
            _this.dataDNI = (resultado.text).split('@');
            _this.empleado.dni = _this.dataDNI[4].trim();
            _this.empleado.apellido = _this.dataDNI[1];
            _this.empleado.nombre = _this.dataDNI[2];
        });
    };
    AltaEmpleadoPage.prototype.SacarFoto = function () {
        var _this = this;
        var camOptions = {
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
        this.camera.getPicture(camOptions).then(function (pictureAux) {
            _this.imageData = pictureAux;
            _this.fotosService.uploadFotoToFirebase(pictureAux).then(function (imageURL) {
                _this.empleado.foto = imageURL;
            });
        }, function (error) {
            if (error === 'No Image Selected') {
                _this.errorHand.MostrarErrorSoloLower('No se sacó imágen');
            }
            else {
                _this.errorHand.MostrarErrorSoloLower('Error al sacar foto ' + error);
            }
            console.log(error);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AltaEmpleadoPage.prototype.Ingresar = function () {
        var _this = this;
        this.faltan = false;
        this.emailmal = false;
        this.faltaFoto = false;
        if (this.empleado.nombre !== '' && this.empleado.apellido !== '' &&
            this.empleado.dni !== '' && this.empleado.cuil !== '' && this.empleado.perfil !== ''
            && this.empleado.mail !== '' && this.password !== '') {
            var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if (emailRegex.test(this.empleado.mail)) {
                if (this.empleado.foto !== '') {
                    this.authService.CrearAuth(this.empleado.mail, this.password, this.empleado, this.imageData).then(function () {
                        _this.alertServ.mensaje('', 'Empleado agregado!');
                        _this.router.navigate(['/home']);
                    });
                }
                else {
                    this.faltaFoto = true;
                }
            }
            else {
                this.emailmal = true;
            }
        }
        else {
            this.faltan = true;
        }
    };
    AltaEmpleadoPage.prototype.LeerQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // alert(barcodeData.text);
            try {
                var datos = barcodeData.text.split('@');
                _this.empleado.cuil = datos[0];
                _this.empleado.apellido = datos[1];
                _this.empleado.nombre = datos[2];
                _this.empleado.dni = datos[4];
            }
            catch (err) {
                _this.errorHand.MostrarErrorSoloLower('Error: ' + err);
            }
        }).catch(function (err) {
            _this.errorHand.MostrarErrorSoloLower('Error: ' + err);
            console.log('Error', err);
        });
    };
    AltaEmpleadoPage.prototype.salir = function () {
        this.authService.LogOut();
        this.router.navigate(['log-in']);
    };
    AltaEmpleadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alta-empleado',
            template: __webpack_require__(/*! ./alta-empleado.page.html */ "./src/app/paginas/alta-empleado/alta-empleado.page.html"),
            styles: [__webpack_require__(/*! ./alta-empleado.page.scss */ "./src/app/paginas/alta-empleado/alta-empleado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], src_app_servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__["FirestorageService"],
            src_app_servicios_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"],
            src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], AltaEmpleadoPage);
    return AltaEmpleadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-alta-empleado-alta-empleado-module.js.map