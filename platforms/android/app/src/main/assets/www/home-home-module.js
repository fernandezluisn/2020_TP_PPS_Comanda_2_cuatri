(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/alta-producto\")' >Crear Producto</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/alta-mesa\")' >Alta de Mesa</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/alta-cliente\")' >Alta de cliente</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/alta-empleado\")' >Alta de empleado</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/alta-supervisor\")' >Alta de supervisor</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/home-cliente\")' >Inicio cliente</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/cuenta\")' >Cuenta</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/log-in\")' >Log In</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/hacer-pedido\")' >Hacer Pedido</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/home-mozo\")' >Home Mozo</ion-button>\r\n\r\n\r\n\r\n\r\n    <ion-button color='dark' expand=\"full\" (click)='this.Email()' >mail</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/home-comanda\")' >Inicio Comanda</ion-button>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.mover(\"/home-metre\")' >Inicio Metre</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcRGVzY2FyZ2FzXFxNYXN0ZXJQcmVcXE1hc3RlclByZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(auth, publicRouter, camera) {
        this.auth = auth;
        this.publicRouter = publicRouter;
        this.camera = camera;
        this.url = '';
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.mover = function (url) {
        console.log(url);
        this.publicRouter.navigate([url]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map