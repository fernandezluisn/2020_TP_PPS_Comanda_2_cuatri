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

module.exports = "<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.HacerPedido()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n      <h2>Hacer Pedido</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.ConfirmarPedidos()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"list\"></ion-icon>\r\n      <h2>Aceptar Pedidos</h2>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.TerminarPedidos()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <h2>Estado de pedidos</h2>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.ConfirmarPago()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"cash\"></ion-icon>\r\n      <h2>Confirmar Pagos</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.encuesta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card> \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-mozo/home-mozo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/paginas/home-mozo/home-mozo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  height: 25%; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLW1vem8vQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLW1vem9cXGhvbWUtbW96by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2hvbWUtbW96by9ob21lLW1vem8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjUlO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxuLmNhcmQtdmVydGljYWwge1xyXG4gICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeMozoPage = /** @class */ (function () {
    function HomeMozoPage(router) {
        this.router = router;
    }
    HomeMozoPage.prototype.ngOnInit = function () {
    };
    HomeMozoPage.prototype.HacerPedido = function () {
        this.router.navigate(['/hacer-pedido']);
    };
    HomeMozoPage.prototype.ConfirmarPago = function () {
        this.router.navigate(['/cuenta']);
    };
    HomeMozoPage.prototype.ConfirmarPedidos = function () {
        this.router.navigate(['/mozo-aceptar']);
    };
    HomeMozoPage.prototype.TerminarPedidos = function () {
        this.router.navigate(['/mozo-terminar']);
    };
    HomeMozoPage.prototype.encuesta = function () {
        this.router.navigate(['/encuesta-empleado']);
    };
    HomeMozoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-mozo',
            template: __webpack_require__(/*! ./home-mozo.page.html */ "./src/app/paginas/home-mozo/home-mozo.page.html"),
            styles: [__webpack_require__(/*! ./home-mozo.page.scss */ "./src/app/paginas/home-mozo/home-mozo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeMozoPage);
    return HomeMozoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-mozo-home-mozo-module.js.map