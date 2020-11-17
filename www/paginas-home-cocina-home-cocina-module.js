(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-cocina-home-cocina-module"],{

/***/ "./src/app/paginas/home-cocina/home-cocina.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/home-cocina/home-cocina.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeCocinaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCocinaPageModule", function() { return HomeCocinaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_cocina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-cocina.page */ "./src/app/paginas/home-cocina/home-cocina.page.ts");







var routes = [
    {
        path: '',
        component: _home_cocina_page__WEBPACK_IMPORTED_MODULE_6__["HomeCocinaPage"]
    }
];
var HomeCocinaPageModule = /** @class */ (function () {
    function HomeCocinaPageModule() {
    }
    HomeCocinaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_cocina_page__WEBPACK_IMPORTED_MODULE_6__["HomeCocinaPage"]]
        })
    ], HomeCocinaPageModule);
    return HomeCocinaPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-cocina/home-cocina.page.html":
/*!***********************************************************!*\
  !*** ./src/app/paginas/home-cocina/home-cocina.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Cocinero</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"book\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Aceptar pedidos</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('encuesta-empleado')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"checkbox\"></ion-icon>\r\n    <h2>Ingresar encuesta</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('preparacion')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Mis Pedidos</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-producto')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"beer\"></ion-icon>\r\n    <h2>Agregar producto</h2>\r\n  </ion-card>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-cocina/home-cocina.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/paginas/home-cocina/home-cocina.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNvY2luYS9FOlxcRGVzY2FyZ2FzXFxNYXN0ZXJQcmVcXE1hc3RlclByZS9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1jb2NpbmFcXGhvbWUtY29jaW5hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWNvY2luYS9ob21lLWNvY2luYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/home-cocina/home-cocina.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/paginas/home-cocina/home-cocina.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeCocinaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCocinaPage", function() { return HomeCocinaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");





var HomeCocinaPage = /** @class */ (function () {
    function HomeCocinaPage(route, platform, auth) {
        this.route = route;
        this.platform = platform;
        this.auth = auth;
    }
    HomeCocinaPage.prototype.ngOnInit = function () {
    };
    HomeCocinaPage.prototype.Mover = function (lugar) {
        this.route.navigate([lugar]);
    };
    HomeCocinaPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    HomeCocinaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cocina',
            template: __webpack_require__(/*! ./home-cocina.page.html */ "./src/app/paginas/home-cocina/home-cocina.page.html"),
            styles: [__webpack_require__(/*! ./home-cocina.page.scss */ "./src/app/paginas/home-cocina/home-cocina.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HomeCocinaPage);
    return HomeCocinaPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-cocina-home-cocina-module.js.map