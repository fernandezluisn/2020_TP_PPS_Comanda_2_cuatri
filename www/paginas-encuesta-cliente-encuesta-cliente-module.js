(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-encuesta-cliente-encuesta-cliente-module"],{

/***/ "./src/app/paginas/encuesta-cliente/encuesta-cliente.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/encuesta-cliente/encuesta-cliente.module.ts ***!
  \*********************************************************************/
/*! exports provided: EncuestaClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaClientePageModule", function() { return EncuestaClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _encuesta_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta-cliente.page */ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _encuesta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaClientePage"]
    }
];
var EncuestaClientePageModule = /** @class */ (function () {
    function EncuestaClientePageModule() {
    }
    EncuestaClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_encuesta_cliente_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaClientePage"]]
        })
    ], EncuestaClientePageModule);
    return EncuestaClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/encuesta-cliente/encuesta-cliente.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Encuesta de satisfacción</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label>Nivel de satisfacción</ion-label>\n  <ion-item>\n    <ion-range [(ngModel)]=\"this.nivelSatisfaccion\" pin=\"true\" snaps=\"true\" ticks=\"false\" min=\"1\" max=\"10\" color=\"primary\">\n      <ion-label slot=\"start\">1</ion-label>\n      <ion-label slot=\"end\">10</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"this.amabilidad\">\n      <ion-list-header>\n        <ion-label>¿Qué tan amable fue nuestro personal?</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Muy amable</ion-label>\n        <ion-radio slot=\"start\" value=\"muy amable\" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Amable</ion-label>\n        <ion-radio slot=\"start\" value=\"amable\" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Correcto</ion-label>\n        <ion-radio slot=\"start\" value=\"correcto\"></ion-radio>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label>Poco amable</ion-label>\n        <ion-radio slot=\"start\" value=\"poco amable\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Indique qué aspectos nuestros destacaría</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>La calidad de la comida</ion-label>\n      <ion-checkbox [(ngModel)]=\"this.calidadComida\" slot=\"start\" value=\"comida\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>La calidad de la bebida</ion-label>\n      <ion-checkbox [(ngModel)]=\"this.calidadBebida\" slot=\"start\" value=\"bebida\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>La atención</ion-label>\n      <ion-checkbox [(ngModel)]=\"this.atencion\" slot=\"start\" value=\"atencion\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>La organización</ion-label>\n      <ion-checkbox [(ngModel)]=\"this.organizacion\" slot=\"start\" value=\"organizacion\"></ion-checkbox>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label>El salón y el ambiente</ion-label>\n      <ion-checkbox [(ngModel)]=\"this.salonYAmbiente\" slot=\"start\" value=\"salonyambiente\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-item>\n    <ion-label style=\"font-size: 12px;\">¿Recomendaría nuestro restaurante?</ion-label>\n    <ion-select [(ngModel)]=\"this.recomendacion\" placeholder=\"Seleccione\">\n      <ion-select-option value=\"true\">Sí</ion-select-option>\n      <ion-select-option value=\"false\">No</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Breve reseña del servicio</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"this.comentarios\" maxlength=\"40\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\" *ngIf=\"this.urlFoto1 != ''\">\n    <ion-label>Foto 1: </ion-label>\n    <ion-label>\n      <ion-thumbnail>\n        <ion-img [src]=\"this.urlFoto1\"></ion-img>\n      </ion-thumbnail>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\" *ngIf=\"this.urlFoto2 != ''\">\n    <ion-label>Foto 2: </ion-label>\n    <ion-label>\n      <ion-thumbnail>\n        <ion-img [src]=\"this.urlFoto2\"></ion-img>\n      </ion-thumbnail>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\" *ngIf=\"this.urlFoto3 != ''\">\n    <ion-label>Foto 3: </ion-label>\n    <ion-label>\n      <ion-thumbnail>\n        <ion-img [src]=\"this.urlFoto3\"></ion-img>\n      </ion-thumbnail>\n    </ion-label>\n  </ion-item>\n\n  <ion-button (click)=\"this.tomarFoto()\" expand=\"full\">Agregar foto</ion-button>\n  <ion-button (click)=\"this.enviarEncuesta()\" expand=\"full\">Enviar encuesta</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/paginas/encuesta-cliente/encuesta-cliente.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZW5jdWVzdGEtY2xpZW50ZS9lbmN1ZXN0YS1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/encuesta-cliente/encuesta-cliente.page.ts ***!
  \*******************************************************************/
/*! exports provided: EncuestaClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaClientePage", function() { return EncuestaClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/firestorage.service */ "./src/app/servicios/firestorage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/encuestas.service */ "./src/app/servicios/encuestas.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






var EncuestaClientePage = /** @class */ (function () {
    function EncuestaClientePage(encuestasService, camera, firestorageService, alert) {
        this.encuestasService = encuestasService;
        this.camera = camera;
        this.firestorageService = firestorageService;
        this.alert = alert;
        this.nivelSatisfaccion = 6;
        this.calidadComida = false;
        this.calidadBebida = false;
        this.atencion = false;
        this.organizacion = false;
        this.salonYAmbiente = false;
        this.urlFoto1 = '';
        this.urlFoto2 = '';
        this.urlFoto3 = '';
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    EncuestaClientePage.prototype.tomarFoto = function () {
        var _this = this;
        if (this.urlFoto3 !== '') {
            this.alert.mensaje('', 'No puede cargar más de 3 fotos!');
            return;
        }
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
            _this.firestorageService.uploadFotoToFirebase(imageData).then(function (imageURL) {
                if (_this.urlFoto1 === '') {
                    _this.urlFoto1 = imageURL;
                }
                else if (_this.urlFoto2 === '') {
                    _this.urlFoto2 = imageURL;
                }
                else {
                    _this.urlFoto3 = imageURL;
                }
            });
        });
    };
    EncuestaClientePage.prototype.enviarEncuesta = function () {
        var _this = this;
        this.encuestasService.addEncuesta({
            idCliente: this.usuario.id,
            nivelSatisfaccion: this.nivelSatisfaccion,
            amabilidad: this.amabilidad === undefined ? null : this.amabilidad,
            calidadComida: this.calidadComida,
            calidadBebida: this.calidadBebida,
            atencion: this.atencion,
            organizacion: this.organizacion,
            salonYAmbiente: this.salonYAmbiente,
            recomendacion: this.recomendacion === undefined ? null : this.recomendacion === 'true' ? true : false,
            comentarios: this.comentarios === undefined ? null : this.comentarios,
            foto1: this.urlFoto1,
            foto2: this.urlFoto2,
            foto3: this.urlFoto3,
            fecha: new Date()
        }).then(function () {
            _this.alert.mensaje('', 'Encuesta cargada exitosamente!');
        }).catch(function (error) { _this.alert.mensaje('ERROR', error); });
    };
    EncuestaClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-encuesta-cliente',
            template: __webpack_require__(/*! ./encuesta-cliente.page.html */ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.html"),
            styles: [__webpack_require__(/*! ./encuesta-cliente.page.scss */ "./src/app/paginas/encuesta-cliente/encuesta-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_4__["EncuestasService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_2__["FirestorageService"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], EncuestaClientePage);
    return EncuestaClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-encuesta-cliente-encuesta-cliente-module.js.map