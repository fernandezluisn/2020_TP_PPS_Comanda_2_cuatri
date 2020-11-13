(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-comanda-home-comanda-module"],{

/***/ "./src/app/paginas/home-comanda/home-comanda.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeComandaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComandaPageModule", function() { return HomeComandaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_comanda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-comanda.page */ "./src/app/paginas/home-comanda/home-comanda.page.ts");







var routes = [
    {
        path: '',
        component: _home_comanda_page__WEBPACK_IMPORTED_MODULE_6__["HomeComandaPage"]
    }
];
var HomeComandaPageModule = /** @class */ (function () {
    function HomeComandaPageModule() {
    }
    HomeComandaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_comanda_page__WEBPACK_IMPORTED_MODULE_6__["HomeComandaPage"]]
        })
    ], HomeComandaPageModule);
    return HomeComandaPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-comanda/home-comanda.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"book\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Aceptar pedidos</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina-aceptados')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Mis pedidos</h2>\r\n  </ion-card>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-comanda/home-comanda.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNvbWFuZGEvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLWNvbWFuZGFcXGhvbWUtY29tYW5kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1jb21hbmRhL2hvbWUtY29tYW5kYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXG5cbmlvbi1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xufVxuXG4uY2FyZC12ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAzMy4zMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkLWhvcml6b250YWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdCB7XG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XG59XG5cbi5pY29uLXZlcnRpY2FsIHtcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcbn1cblxuLmljb24taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/home-comanda/home-comanda.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.page.ts ***!
  \***********************************************************/
/*! exports provided: HomeComandaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComandaPage", function() { return HomeComandaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");





var HomeComandaPage = /** @class */ (function () {
    function HomeComandaPage(route, platform, auth) {
        this.route = route;
        this.platform = platform;
        this.auth = auth;
    }
    HomeComandaPage.prototype.ngOnInit = function () {
    };
    HomeComandaPage.prototype.Mover = function (lugar) {
        this.route.navigate([lugar]);
    };
    HomeComandaPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    HomeComandaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-comanda',
            template: __webpack_require__(/*! ./home-comanda.page.html */ "./src/app/paginas/home-comanda/home-comanda.page.html"),
            styles: [__webpack_require__(/*! ./home-comanda.page.scss */ "./src/app/paginas/home-comanda/home-comanda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeComandaPage);
    return HomeComandaPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-comanda-home-comanda-module.js.map