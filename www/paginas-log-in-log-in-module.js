(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-log-in-log-in-module"],{

/***/ "./src/app/paginas/log-in/log-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paginas/log-in/log-in.module.ts ***!
  \*************************************************/
/*! exports provided: LogInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageModule", function() { return LogInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in.page */ "./src/app/paginas/log-in/log-in.page.ts");







var routes = [
    {
        path: '',
        component: _log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]
    }
];
var LogInPageModule = /** @class */ (function () {
    function LogInPageModule() {
    }
    LogInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_log_in_page__WEBPACK_IMPORTED_MODULE_6__["LogInPage"]]
        })
    ], LogInPageModule);
    return LogInPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/log-in/log-in.page.html":
/*!*************************************************!*\
  !*** ./src/app/paginas/log-in/log-in.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n\t<div class=\"login-header  ion-padding\">\r\n\r\n\t\t<img class=\"logo-img\" src=\"assets/img/logo.png\">\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content >\r\n\r\n  <div text-center>\r\n    <h3 style=\"color: black\">\t        \r\n    Iniciar  Sesión</h3>  \t  \r\n    <br>\r\n  </div>\r\n  \r\n    <ion-card-content >\r\n      <ion-card style=\"width: 100%;position: relative;\">\r\n        <ion-item  shape=\"round\">\r\n          <ion-label position=\"floating\">\r\n            <ion-text>\r\n              <h4>\r\n                Correo electrónico\r\n              </h4>\r\n            </ion-text>\r\n\r\n          </ion-label>\r\n          <ion-input clear-input type='text' [(ngModel)]='email'></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item  shape=\"round\">\r\n          <ion-label position=\"floating\">\r\n            <ion-text>\r\n              <h4>\r\n                Contraseña\r\n              </h4>\r\n            </ion-text>\r\n\r\n          </ion-label>\r\n          <ion-input clearInput type='password' [(ngModel)]='password'></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n\r\n        <ion-label>\r\n          <ion-button expand=\"full\" (click)='OnSubmitLogIn()' shape=\"round\" color='primary'>\r\n            Entrar\r\n          </ion-button>\r\n        </ion-label>\r\n\r\n          <ion-label style=\"margin-top:16px\">\r\n            <ion-button expand=\"full\" (click)='Registrarse()' shape=\"round\" color='success'>\r\n              Registrarme\r\n            </ion-button>\r\n          </ion-label>\r\n      \r\n        <ion-fab vertical=\"bottom\" horizontal=\"start\" >\r\n            <ion-fab-button color=\"primary\">\r\n              <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"top\">\r\n              <ion-fab-button color=\"success\">\r\n                <h3 (click)=\"Rellenar('socio@comanda.com','123456')\">Ad</h3>\r\n              </ion-fab-button>\r\n              <ion-fab-button color=\"dark\">\r\n                <h3 (click)='Rellenar(\"supervisor@comanda.com\",\"123456\")'>S</h3>\r\n              </ion-fab-button>\r\n            </ion-fab-list>\r\n          </ion-fab>\r\n\r\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" >\r\n              <ion-fab-button color=\"success\">\r\n                <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-list side=\"top\">\r\n                \r\n                <ion-fab-button color=\"warning\">\r\n                  <h3 (click)=\"loginAnonimo()\">An</h3>\r\n                </ion-fab-button>\r\n                <ion-fab-button color=\"primary\">\r\n                  <h3 (click)='Rellenar(\"pruebas@pruebas.com\",\"pruebas\")'>C1</h3>\r\n                </ion-fab-button>\r\n                <ion-fab-button color=\"danger\">\r\n                    <h3 (click)='Rellenar(\"cliente2@cliente.com\",\"123456\")'>C2</h3>\r\n                </ion-fab-button>\r\n                \r\n              </ion-fab-list>\r\n            </ion-fab>\r\n\r\n            <ion-fab vertical=\"bottom\" horizontal=\"center\" >\r\n                <ion-fab-button>\r\n                  <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n                </ion-fab-button>\r\n                <ion-fab-list side=\"top\">\r\n                  <ion-fab-button color=\"tertiary\">\r\n                    <h3 (click)='Rellenar(\"metre@metre.com\",\"elmetre\")'>Me</h3>\r\n                  </ion-fab-button>\r\n                  <ion-fab-button color=\"medium\">\r\n                      <h3 (click)='Rellenar(\"perez@email.com\",\"123456\")'>Mo</h3>\r\n                    </ion-fab-button>\r\n                  <ion-fab-button color=\"secondary\">\r\n                    <h3 (click)='Rellenar(\"bartender@comanda.com\",\"123456\")'>B</h3>\r\n                  </ion-fab-button>\r\n                  <ion-fab-button color=\"success\">\r\n                      <h3 (click)='Rellenar(\"cocinero@comanda.com\",\"123456\")'>Co</h3>\r\n                    </ion-fab-button>\r\n                  <ion-fab-button color=\"warning\">\r\n                    <h3 (click)='Rellenar(\"delivery@email.com\",\"123456\")'>D</h3>\r\n                  </ion-fab-button>\r\n                  \r\n                </ion-fab-list>\r\n              </ion-fab>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n    </ion-card-content>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/log-in/log-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/paginas/log-in/log-in.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  display: absolute;\n  width: 45%;\n  height: 49%;\n  border-radius: 49%;\n  float: right; }\n\n.text {\n  position: absolute;\n  vertical-align: middle; }\n\n.container {\n  line-height: 100%; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  width: 300px;\n  height: 160px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5;\n  height: 190px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9sb2ctaW4vRTpcXERlc2Nhcmdhc1xcbWFzdGVyNS9zcmNcXGFwcFxccGFnaW5hc1xcbG9nLWluXFxsb2ctaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxVQUFTO0VBQ1QsY0FDRCxFQUFBOztBQUVBO0VBQ0ksY0FBYTtFQUNiLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFHaEI7RUFDSSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2xvZy1pbi9sb2ctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gIGRpc3BsYXk6IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgaGVpZ2h0OiA0OSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDklO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2NvbHVtbkNlbnRlcntcclxuICB3aWR0aDo1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG9cclxuIH1cclxuIFxyXG4gLmxvZ28taW1ne1xyXG4gICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICB3aWR0aDozMDBweDtcclxuICAgICBoZWlnaHQ6MTYwcHg7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1oZWFkZXJ7XHJcbiAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVjb2xvcik7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3IgOiNBNTk5QjU7XHJcbiAgICAgaGVpZ2h0OjE5MHB4O1xyXG5cclxuIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/log-in/log-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/paginas/log-in/log-in.page.ts ***!
  \***********************************************/
/*! exports provided: LogInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPage", function() { return LogInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/spiner.service */ "./src/app/servicios/spiner.service.ts");






var LogInPage = /** @class */ (function () {
    function LogInPage(publicRouter, auth, toastController, spiner) {
        this.publicRouter = publicRouter;
        this.auth = auth;
        this.toastController = toastController;
        this.spiner = spiner;
    }
    LogInPage.prototype.ngOnInit = function () {
    };
    LogInPage.prototype.OnSubmitLogIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spiner.GetAllPageSpinner("")];
                    case 1:
                        sp = _a.sent();
                        sp.present();
                        this.auth.LogIn(this.email, this.password).then(function (res) {
                            if (localStorage.getItem('Sonido') == 'true') {
                                var audio = new Audio();
                                audio.src = '../assets/inicio.mp3';
                                audio.load();
                                audio.play();
                            }
                            sp.dismiss();
                        }).catch(function (err) {
                            // alert(err)
                            console.log(err);
                        });
                        sp.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogInPage.prototype.Rellenar = function (usr, password) {
        this.email = usr;
        this.password = password;
    };
    LogInPage.prototype.Registrarse = function () {
        this.publicRouter.navigate(['alta-cliente']);
    };
    LogInPage.prototype.loginAnonimo = function () {
        localStorage.setItem('usuario', JSON.stringify({
            "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/245px-Anonymous_emblem.svg.png",
            "nombre": "Anonymous",
            "perfil": "anonimo",
            "uid": "QzCxmkSwajRVfyGgIe8M4WrohOu2",
            "id": "anonimoNoBorrar"
        }));
        this.publicRouter.navigate(['/home-cliente']);
    };
    LogInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.page.html */ "./src/app/paginas/log-in/log-in.page.html"),
            styles: [__webpack_require__(/*! ./log-in.page.scss */ "./src/app/paginas/log-in/log-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_5__["SpinerService"]])
    ], LogInPage);
    return LogInPage;
}());



/***/ }),

/***/ "./src/app/servicios/spiner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/spiner.service.ts ***!
  \*********************************************/
/*! exports provided: SpinerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinerService", function() { return SpinerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SpinerService = /** @class */ (function () {
    function SpinerService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    SpinerService.prototype.GetAllPageSpinner = function (messageSpinner) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            keyboardClose: true,
                            message: '<div class="spinner-css"><img src="assets/loading.png"></div>' + messageSpinner + '',
                            showBackdrop: false,
                            duration: 30000,
                            cssClass: 'cajaSpinner'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [2 /*return*/, loader];
                }
            });
        });
    };
    SpinerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SpinerService);
    return SpinerService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-log-in-log-in-module.js.map