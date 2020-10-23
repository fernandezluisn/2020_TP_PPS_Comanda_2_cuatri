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

module.exports = "\n<ion-header>\n\t<div class=\"login-header  ion-padding\">\n\n\t\t<img class=\"logo-img\" src=\"assets/img/logo.png\">\n\t</div>\n</ion-header>\n\n<ion-content >\n\n  <div text-center>\n    <h3 style=\"color: black\">\t        \n    Iniciar Sesion</h3>  \t  \n    <br>\n  </div>\n  \n    <ion-card-content >\n      <ion-card style=\"width: 100%;position: relative;\">\n        <ion-item  shape=\"round\">\n          <ion-label position=\"floating\">\n            <ion-text>\n              <h4>\n                Mail\n              </h4>\n            </ion-text>\n\n          </ion-label>\n          <ion-input clear-input type='text' [(ngModel)]='email'></ion-input>\n        </ion-item>\n\n        <ion-item  shape=\"round\">\n          <ion-label position=\"floating\">\n            <ion-text>\n              <h4>\n                Password\n              </h4>\n            </ion-text>\n\n          </ion-label>\n          <ion-input clearInput type='password' [(ngModel)]='password'></ion-input>\n        </ion-item>\n      </ion-card>\n\n\n        <ion-label>\n          <ion-button expand=\"full\" (click)='OnSubmitLogIn()' shape=\"round\" color='primary'>\n            Entrar\n          </ion-button>\n        </ion-label>\n\n          <ion-label style=\"margin-top:16px\">\n            <ion-button expand=\"full\" (click)='Registrarse()' shape=\"round\" color='success'>\n              Registrarme\n            </ion-button>\n          </ion-label>\n      \n        <ion-fab vertical=\"bottom\" horizontal=\"start\" >\n            <ion-fab-button color=\"primary\">\n              <ion-icon name=\"arrow-dropup\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"top\">\n              <ion-fab-button color=\"success\">\n                <h3 (click)=\"Rellenar('socio@comanda.com','123456')\">Ad</h3>\n              </ion-fab-button>\n              <ion-fab-button color=\"dark\">\n                <h3 (click)='Rellenar(\"supervisor1@supervisor.com\",\"123456\")'>S</h3>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" >\n              <ion-fab-button color=\"success\">\n                <ion-icon name=\"arrow-dropup\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-list side=\"top\">\n                \n                <ion-fab-button color=\"warning\">\n                  <h3 (click)=\"loginAnonimo()\">An</h3>\n                </ion-fab-button>\n                <ion-fab-button color=\"primary\">\n                  <h3 (click)='Rellenar(\"cliente@comanda.com\",\"123456\")'>C1</h3>\n                </ion-fab-button>\n                <ion-fab-button color=\"danger\">\n                    <h3 (click)='Rellenar(\"cliente2@cliente.com\",\"123456\")'>C2</h3>\n                </ion-fab-button>\n                \n              </ion-fab-list>\n            </ion-fab>\n\n            <ion-fab vertical=\"bottom\" horizontal=\"center\" >\n                <ion-fab-button>\n                  <ion-icon name=\"arrow-dropup\"></ion-icon>\n                </ion-fab-button>\n                <ion-fab-list side=\"top\">\n                  <ion-fab-button color=\"tertiary\">\n                    <h3 (click)='Rellenar(\"metre1@metre.com\",\"123456\")'>Me</h3>\n                  </ion-fab-button>\n                  <ion-fab-button color=\"medium\">\n                      <h3 (click)='Rellenar(\"perez@email.com\",\"123456\")'>Mo</h3>\n                    </ion-fab-button>\n                  <ion-fab-button color=\"secondary\">\n                    <h3 (click)='Rellenar(\"bartender@comanda.com\",\"123456\")'>B</h3>\n                  </ion-fab-button>\n                  <ion-fab-button color=\"success\">\n                      <h3 (click)='Rellenar(\"cocinero@comanda.com\",\"123456\")'>Co</h3>\n                    </ion-fab-button>\n                  <ion-fab-button color=\"warning\">\n                    <h3 (click)='Rellenar(\"delivery@email.com\",\"123456\")'>D</h3>\n                  </ion-fab-button>\n                  \n                </ion-fab-list>\n              </ion-fab>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n    </ion-card-content>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/log-in/log-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/paginas/log-in/log-in.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  display: absolute;\n  width: 45%;\n  height: 49%;\n  border-radius: 49%;\n  float: right; }\n\n.text {\n  position: absolute;\n  vertical-align: middle; }\n\n.container {\n  line-height: 100%; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  width: 300px;\n  height: 160px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5;\n  height: 190px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9sb2ctaW4vRTpcXERlc2Nhcmdhc1xcbWFzdGVyXFxtYXN0ZXIvc3JjXFxhcHBcXHBhZ2luYXNcXGxvZy1pblxcbG9nLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBUztFQUNULGNBQ0QsRUFBQTs7QUFFQTtFQUNJLGNBQWE7RUFDYixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9sb2ctaW4vbG9nLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogNDklO1xuICBib3JkZXItcmFkaXVzOiA0OSU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuI2NvbHVtbkNlbnRlcntcbiAgd2lkdGg6NTAlO1xuICBtYXJnaW46IDAgYXV0b1xuIH1cbiBcbiAubG9nby1pbWd7XG4gICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgIG1hcmdpbjowIGF1dG87XG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICB3aWR0aDozMDBweDtcbiAgICAgaGVpZ2h0OjE2MHB4O1xuIH1cbiBcbiAubG9naW4taGVhZGVye1xuICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZWNvbG9yKTtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yIDojQTU5OUI1O1xuICAgICBoZWlnaHQ6MTkwcHg7XG5cbiB9XG5cbiJdfQ== */"

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
                        console.log(this.email);
                        console.log(this.password);
                        this.auth.LogIn(this.email, this.password).then(function (res) {
                            sp.dismiss();
                            if (localStorage.getItem('Sonido') == 'true') {
                                var audio = new Audio();
                                audio.src = '../assets/inicio.mp3';
                                audio.load();
                                audio.play();
                            }
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
                            spinner: 'bubbles',
                            keyboardClose: true,
                            message: messageSpinner !== '' ? messageSpinner : undefined,
                            showBackdrop: false
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