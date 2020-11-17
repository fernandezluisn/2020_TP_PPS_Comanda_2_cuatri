(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-aceptar-cliente-aceptar-cliente-module"],{

/***/ "./src/app/paginas/aceptar-cliente/aceptar-cliente.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/aceptar-cliente/aceptar-cliente.module.ts ***!
  \*******************************************************************/
/*! exports provided: AceptarClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarClientePageModule", function() { return AceptarClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aceptar_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aceptar-cliente.page */ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _aceptar_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AceptarClientePage"]
    }
];
var AceptarClientePageModule = /** @class */ (function () {
    function AceptarClientePageModule() {
    }
    AceptarClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aceptar_cliente_page__WEBPACK_IMPORTED_MODULE_6__["AceptarClientePage"]]
        })
    ], AceptarClientePageModule);
    return AceptarClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/aceptar-cliente/aceptar-cliente.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color='dark'>\r\n    <ion-title text-center>Clientes a Aceptar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-slides style=\"height: 100%\" scrollbar='true' pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide style=\"height: 100%\" *ngFor=\"let cliente of this.clientes\">\r\n      <ion-content>\r\n        <ion-item>\r\n          <ion-label>Nombre:</ion-label>\r\n          <ion-input class='input_blanco' type=\"text\" [(ngModel)]=\"cliente.nombre\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>DNI:</ion-label>\r\n          <ion-input class='input_blanco' type=\"text\" [(ngModel)]=\"cliente.dni\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-img [src]=\"cliente.foto\"></ion-img>\r\n        </ion-item>\r\n\r\n        <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n          <ion-icon name=\"power\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-footer>\r\n          <ion-toolbar>\r\n            <ion-button color='danger' class=\"mitad\" (click)='this.BorrarCliente(cliente)'>Cancelar</ion-button>\r\n            <ion-button color='success' class=\"mitad\" (click)='this.AceptarCliente(cliente)'>Aceptar Cliente</ion-button>\r\n          </ion-toolbar>\r\n        </ion-footer>\r\n      </ion-content>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/aceptar-cliente/aceptar-cliente.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvYWNlcHRhci1jbGllbnRlL2FjZXB0YXItY2xpZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/aceptar-cliente/aceptar-cliente.page.ts ***!
  \*****************************************************************/
/*! exports provided: AceptarClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarClientePage", function() { return AceptarClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AceptarClientePage = /** @class */ (function () {
    function AceptarClientePage(clienteServe, emailComposer, alert, route, auth) {
        this.clienteServe = clienteServe;
        this.emailComposer = emailComposer;
        this.alert = alert;
        this.route = route;
        this.auth = auth;
        this.clientes = [];
    }
    AceptarClientePage.prototype.ngOnInit = function () {
        var _this = this;
        this.clienteServe.GetUsuariosPorAceptar().then(function (clientes) {
            _this.clientes = clientes;
            //timer(3000).subscribe(()=>{this.TomarUsuarios();
            //})
            console.log(clientes);
        });
    };
    AceptarClientePage.prototype.TomarUsuarios = function () {
        var _this = this;
        if (this.clienteServe.getUsuario()['perfil']) {
            this.clienteServe.GetUsuariosAceptar().then(function (clientes) {
                _this.clientes = clientes;
                console.log(clientes);
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(10000).subscribe(function () { _this.TomarUsuarios(); });
            });
        }
    };
    AceptarClientePage.prototype.AceptarCliente = function (cliente) {
        cliente.activo = true;
        this.clienteServe.ModificarUsuario(cliente);
        this.SendAcceptedEmail(cliente);
        this.ngOnInit();
    };
    AceptarClientePage.prototype.SendAcceptedEmail = function (cliente) {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        this.alert.mensaje("Cliente Aceptado", "");
        var email = {
            to: cliente.mail,
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Comanda: Tu cuenta ha sido aceptada',
            body: 'Por favor accede a nuestra aplicacion para poder ingresar a tu cuenta',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email).then(function (ret) { console.log(ret); }).catch(function (err) { console.log(err); });
        this.route.navigate(['home-supervisor']);
    };
    AceptarClientePage.prototype.SendNotAcceptedEmail = function (cliente) {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
            to: cliente.mail,
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Comanda: Tu cuenta no ha sido aceptada',
            body: 'Usted no ha sido aceptado para ser cliente del restaurante.',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email).then(function (ret) { console.log(ret); }).catch(function (err) { console.log(err); });
    };
    AceptarClientePage.prototype.BorrarCliente = function (cliente) {
        this.clienteServe.BorrarUsuario(cliente);
        this.alert.mensaje("Cliente Borrado", "");
        this.ngOnInit();
        // console.log(this.clientes.findIndex(cliente))
    };
    AceptarClientePage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    AceptarClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aceptar-cliente',
            template: __webpack_require__(/*! ./aceptar-cliente.page.html */ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.html"),
            styles: [__webpack_require__(/*! ./aceptar-cliente.page.scss */ "./src/app/paginas/aceptar-cliente/aceptar-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__["EmailComposer"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AceptarClientePage);
    return AceptarClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-aceptar-cliente-aceptar-cliente-module.js.map