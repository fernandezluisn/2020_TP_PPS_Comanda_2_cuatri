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

module.exports = "<ion-content>\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"book\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Aceptar pedidos</h2>\n  </ion-card>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina-aceptados')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Mis pedidos</h2>\n  </ion-card>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-producto')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"add-circle\"></ion-icon>\n    <h2>Agregar producto</h2>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-comanda/home-comanda.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNvbWFuZGEvRTpcXERlc2Nhcmdhc1xcbWFzdGVyXFxtYXN0ZXIvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtY29tYW5kYVxcaG9tZS1jb21hbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWNvbWFuZGEvaG9tZS1jb21hbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRFTlRcblxuaW9uLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY2FyZCBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG59XG5cbi5jYXJkLXZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhcmQtaG9yaXpvbnRhbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcbn1cblxuLmljb24tdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDEzLjUlO1xufVxuXG4uaWNvbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XG59Il19 */"

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




var HomeComandaPage = /** @class */ (function () {
    function HomeComandaPage(route, platform) {
        this.route = route;
        this.platform = platform;
    }
    HomeComandaPage.prototype.ngOnInit = function () {
    };
    HomeComandaPage.prototype.Mover = function (lugar) {
        this.route.navigate([lugar]);
    };
    HomeComandaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-comanda',
            template: __webpack_require__(/*! ./home-comanda.page.html */ "./src/app/paginas/home-comanda/home-comanda.page.html"),
            styles: [__webpack_require__(/*! ./home-comanda.page.scss */ "./src/app/paginas/home-comanda/home-comanda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], HomeComandaPage);
    return HomeComandaPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-comanda-home-comanda-module.js.map