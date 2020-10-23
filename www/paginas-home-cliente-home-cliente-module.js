(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-cliente-home-cliente-module"],{

/***/ "./src/app/paginas/home-cliente/home-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePageModule", function() { return HomeClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-cliente.page */ "./src/app/paginas/home-cliente/home-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _home_cliente_page__WEBPACK_IMPORTED_MODULE_6__["HomeClientePage"]
    }
];
var HomeClientePageModule = /** @class */ (function () {
    function HomeClientePageModule() {
    }
    HomeClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_cliente_page__WEBPACK_IMPORTED_MODULE_6__["HomeClientePage"]]
        })
    ], HomeClientePageModule);
    return HomeClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-card class=\"ion-activatable\" (click)=\"this.EscannerQR()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"qr-scanner\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Escanear QR</h2>\n  </ion-card>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.RealizarPedido()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Realizar pedido</h2>\n  </ion-card>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.ConfirmarRecepcion()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"checkbox-outline\"></ion-icon>\n    <h2>Confirmar recepción del pedido</h2>\n  </ion-card>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.PedirCuenta()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"list\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Mi cuenta</h2>\n  </ion-card>\n\n  <ng-container *ngIf=\"this.usuario.perfil === 'cliente'\">\n    <ion-card class=\"ion-activatable\" (click)=\"this.RealizarReserva()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-icon name=\"calendar\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n      <h2>Realizar reserva</h2>\n    </ion-card>\n  </ng-container>\n\n  <ng-container *ngIf=\"this.chat\">\n      <ion-card class=\"ion-activatable\" (click)=\"this.Chat()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n        <ion-ripple-effect></ion-ripple-effect>\n        <ion-icon name=\"chatboxes\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n        <h2>Chat Delivery</h2>\n      </ion-card>\n    </ng-container>\n\n  <ion-card class=\"ion-activatable\" (click)=\"this.Jugar()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"logo-game-controller-b\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\n    <h2>Jugar</h2>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcbWFzdGVyXFxtYXN0ZXIvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtY2xpZW50ZVxcaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNwQixnQ0FBYTtFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRFTlRcblxuaW9uLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbn1cblxuLmNhcmQtdmVydGljYWwge1xuICAgIGhlaWdodDogMzMuMzMlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkLWhvcml6b250YWwge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcbn1cblxuLmljb24tdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDEzLjUlO1xufVxuXG4uaWNvbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: HomeClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePage", function() { return HomeClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeClientePage = /** @class */ (function () {
    function HomeClientePage() {
        this.pedidos = [];
        this.chat = false;
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cliente',
            template: __webpack_require__(/*! ./home-cliente.page.html */ "./src/app/paginas/home-cliente/home-cliente.page.html"),
            styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/paginas/home-cliente/home-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeClientePage);
    return HomeClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-cliente-home-cliente-module.js.map