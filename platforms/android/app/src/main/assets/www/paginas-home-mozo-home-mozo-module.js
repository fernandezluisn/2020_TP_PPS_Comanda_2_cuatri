(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-mozo-home-mozo-module"],{

/***/ "./src/app/paginas/home-mozo/home-mozo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/home-mozo/home-mozo.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeMozoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMozoPageModule", function() { return HomeMozoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_mozo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-mozo.page */ "./src/app/paginas/home-mozo/home-mozo.page.ts");







var routes = [
    {
        path: '',
        component: _home_mozo_page__WEBPACK_IMPORTED_MODULE_6__["HomeMozoPage"]
    }
];
var HomeMozoPageModule = /** @class */ (function () {
    function HomeMozoPageModule() {
    }
    HomeMozoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_mozo_page__WEBPACK_IMPORTED_MODULE_6__["HomeMozoPage"]]
        })
    ], HomeMozoPageModule);
    return HomeMozoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-mozo/home-mozo.page.html":
/*!*******************************************************!*\
  !*** ./src/app/paginas/home-mozo/home-mozo.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Mozo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.HacerPedido()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n      <h2>Hacer Pedido</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.ConfirmarPedidos()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"list\"></ion-icon>\r\n      <h2>Aceptar Pedidos</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-alert\" (click)=\"this.verConsultas()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n      <h2>Consultas</h2>\r\n    </ion-card> \r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.TerminarPedidos()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <h2>Estado de pedidos</h2>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.ConfirmarPago()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"cash\"></ion-icon>\r\n      <h2>Confirmar Pagos</h2>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.encuesta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card> \r\n\r\n    <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n      <ion-icon name=\"power\"></ion-icon>\r\n    </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-mozo/home-mozo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/paginas/home-mozo/home-mozo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  height: 25%; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLW1vem8vRTpcXERlc2Nhcmdhc1xcTWFzdGVyUHJlXFxNYXN0ZXJQcmUvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtbW96b1xcaG9tZS1tb3pvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNwQixnQ0FBYTtFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1tb3pvL2hvbWUtbW96by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW9uLXJpcHBsZS1lZmZlY3Qge1xyXG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDEzLjUlO1xyXG59XHJcblxyXG4uaWNvbi1ob3Jpem9udGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qbGluZS1oZWlnaHQ6IDBweDsqL1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjMsIDIzKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginas/home-mozo/home-mozo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/home-mozo/home-mozo.page.ts ***!
  \*****************************************************/
/*! exports provided: HomeMozoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMozoPage", function() { return HomeMozoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeMozoPage = /** @class */ (function () {
    function HomeMozoPage(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HomeMozoPage.prototype.ngOnInit = function () {
    };
    HomeMozoPage.prototype.HacerPedido = function () {
        this.router.navigate(['/hacer-pedido']);
    };
    HomeMozoPage.prototype.ConfirmarPago = function () {
        this.router.navigate(['/confirmar-pago']);
    };
    HomeMozoPage.prototype.ConfirmarPedidos = function () {
        this.router.navigate(['/aceptar-pedido']);
    };
    HomeMozoPage.prototype.TerminarPedidos = function () {
        this.router.navigate(['/pedidos-listos']);
    };
    HomeMozoPage.prototype.verConsultas = function () {
        this.router.navigate(['/consultas']);
    };
    HomeMozoPage.prototype.encuesta = function () {
        this.router.navigate(['/encuesta-empleado']);
    };
    HomeMozoPage.prototype.salir = function () {
        this.auth.LogOut();
        this.router.navigate(['log-in']);
    };
    HomeMozoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-mozo',
            template: __webpack_require__(/*! ./home-mozo.page.html */ "./src/app/paginas/home-mozo/home-mozo.page.html"),
            styles: [__webpack_require__(/*! ./home-mozo.page.scss */ "./src/app/paginas/home-mozo/home-mozo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeMozoPage);
    return HomeMozoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-mozo-home-mozo-module.js.map