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

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNvY2luYS9DOlxcVXNlcnNcXHJhdWwuemFtb3JhXFxBbm5ndWxhclxcMjAyMF9UUF9QUFMvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtY29jaW5hXFxob21lLWNvY2luYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1jb2NpbmEvaG9tZS1jb2NpbmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59Il19 */"

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