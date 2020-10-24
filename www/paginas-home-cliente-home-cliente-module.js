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

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLWNsaWVudGVcXGhvbWUtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1jbGllbnRlL2hvbWUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXG5cbmlvbi1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG59XG5cbi5jYXJkLXZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2FyZC1ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdCB7XG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XG59XG5cbi5pY29uLXZlcnRpY2FsIHtcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcbn1cblxuLmljb24taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xufSJdfQ== */"

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