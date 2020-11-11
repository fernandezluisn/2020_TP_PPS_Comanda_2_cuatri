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

module.exports = "<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"book\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Aceptar pedidos</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('bar-cocina-aceptados')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Mis pedidos</h2>\r\n  </ion-card>\r\n\r\n  \r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-comanda/home-comanda.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-comanda/home-comanda.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNvbWFuZGEvRTpcXERlc2Nhcmdhc1xcbWFzdGVyNS9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1jb21hbmRhXFxob21lLWNvbWFuZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZTtFQUNmLGNBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2hvbWUtY29tYW5kYS9ob21lLWNvbWFuZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59Il19 */"

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