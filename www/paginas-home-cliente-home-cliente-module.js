(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-cliente-home-cliente-module"],{

/***/ "./src/app/interfaces/mesa-cliente.ts":
/*!********************************************!*\
  !*** ./src/app/interfaces/mesa-cliente.ts ***!
  \********************************************/
/*! exports provided: MesaCliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaCliente", function() { return MesaCliente; });
var MesaCliente = /** @class */ (function () {
    function MesaCliente(idMesa, idCliente, qrMesa) {
        this.cerrada = false;
        this.idCliente = idCliente;
        this.idMesa = idMesa;
        this.qrMesa = qrMesa;
        // this.idMozo=idMozo;
    }
    return MesaCliente;
}());



/***/ }),

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

module.exports = "\r\n<ion-header>\r\n\r\n\t<div *ngIf=\"cliente.estado=='desconectado' || cliente.estado == 'EnListaDeEspera' || cliente.estado == 'aceptado'\"  class=\"login-header  ion-padding\">\r\n\r\n    <img class=\"logo-img\" src=\"assets/img/logo.png\">\r\n\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"secondaryBackground ion-padding\">\r\n  <div *ngIf=\"cliente.estado=='desconectado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\r\n    <div class=\"titulo\">\r\n      <h1>Bienvenido</h1>\r\n      <p>Aquí puede solicitar una reserva.</p>\r\n      <ion-card class=\"ion-activatable\" (click)=\"this.Mover('reservas')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"create\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n        \r\n        <h5>La reserva estará sujeta a aprobación.</h5>\r\n      </ion-card>\r\n      \r\n\r\n      <h3></h3>\r\n      <p>O escanee el codigo QR para Ingresar a la lista de espera..</p>\r\n    </div>\r\n    <div style=\"display: flex;justify-content: center;\">\r\n      <ion-button class=\"boton\" (click)=\"scanearEspera()\">\r\n        <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \r\n      </ion-button>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n\r\n\r\n    <div *ngIf=\"cliente.estado == 'EnListaDeEspera'\">\r\n      <ion-col >\r\n        <ion-row style=\"justify-content:center; margin-top:35px\" >\r\n          <p class=\"spinnerInterceptor latido\">Ya se encuentra en la lista de espera, podra ingresar al ser aprobado. </p>\r\n        </ion-row>\r\n        <ion-row style=\"justify-content: center; margin-top:125px;\">\r\n          <ion-spinner name=\"circles\" class=\"ion-spinner-large\" color=\"primary\"></ion-spinner>\r\n        </ion-row>\r\n      </ion-col>\r\n    </div>\r\n\r\n \r\n      <div *ngIf=\"cliente.estado=='aceptado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\r\n        <div class=\"titulo\">\r\n          <h1>Bienvenido</h1>\r\n          <h3></h3>\r\n          <p>Escanee el codigo QR para solicitar  la mesa</p>\r\n        </div>\r\n        <div style=\"display: flex;justify-content: center;\">\r\n          <ion-button class=\"boton\" (click)=\"scanearMesa()\">\r\n            <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n  \r\n      <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n        <ion-icon name=\"power\"></ion-icon>\r\n      </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 200px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 110%;\n  line-height: 2; }\n\n.textoEsperando {\n  font-size: 32px;\n  margin-top: 38px;\n  margin-left: 35px;\n  font-weight: bolder;\n  color: #A599B5; }\n\nion-spinner {\n  -webkit-transform: scale(6);\n          transform: scale(6); }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-ripple-effect {\n  background-color: white;\n  opacity: 30%; }\n\n.esperando {\n  display: flex;\n  justify-content: center;\n  margin-top: 200px; }\n\n.heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.spinnerInterceptor {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #A599B5;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px; }\n\n.spinnerInterceptor img {\n    display: block;\n    height: 15%; }\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px; }\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #A599B5;\n  margin: 0; }\n\n#container a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcbWFzdGVyMTExMVxcbWFzdGVyMTExMS9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1jbGllbnRlXFxob21lLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULGNBQ0QsRUFBQTs7QUFFQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUFBOztBQUdoQjtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFNZDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVc7RUFDWCxlQUFlO0VBRWYsNkNBQWEsRUFBQTs7QUFLZjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBVztFQVlYLDZDQUFhLEVBQUE7O0FBSWY7RUFDRSxhQUFhO0VBQUMsc0JBQXNCO0VBQ3BDLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSx1QkFBc0M7RUFDdEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsOENBQThDO0VBQzlDLHNDQUFzQztFQUN0QywyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUE7O0FBR3JDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFFdkIsV0FBVztFQUNYLFlBQVk7RUFLVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBZG5CO0lBUU0sY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFVakI7RUFDRSxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUVqQixjQUFjO0VBRWQsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2hvbWUtY2xpZW50ZS9ob21lLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbHVtbkNlbnRlcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvXHJcbiAgIH1cclxuICAgXHJcbiAgIC5sb2dvLWltZ3tcclxuICAgICAgIGRpc3BsYXk6bGVmdDtcclxuICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICB3aWR0aDoxMjBweDtcclxuICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmxvZ2luLWhlYWRlcntcclxuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lY29sb3IpO1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvciA6I0E1OTlCNTtcclxuICAgfVxyXG4gIFxyXG4gIFxyXG4gICBcclxuICAudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYm90b257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiNiNzFjMWM7ICAgICBcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1MXB4IC0zcHggcmdiYSgwLDAsMCwxKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWljb24uYnV0dG9uSWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9XHJcbiAgXHJcbiAgLnRleHRvRXNwZXJhbmRve1xyXG4gICAgZm9udC1zaXplOiAzMnB4OyBcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogI0E1OTlCNTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg2KTtcclxuXHJcbn1cclxuICAuYm90b25MaW1waWFye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiNiNzFjMWM7ICAgICBcclxuICAgIFxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDI2LDcxLDI4LDEpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNiw3MSwyOCwxKSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDQ2LDEyNSw1MCwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNiw3MSwyOCwxKSkpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWE0NzFjJywgZW5kQ29sb3JzdHI9JyMxYTQ3MWMnLCBHcmFkaWVudFR5cGU9MSApO1xyXG4gIFxyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZGl2TGltcGlhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgaW9uLXJpcHBsZS1lZmZlY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyNCwgMTAyNCwxMDI0KTtcclxuICAgIG9wYWNpdHk6IDMwJTtcclxuICB9XHJcbiAgXHJcbiAgLmVzcGVyYW5kb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYXJ0QmVhdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogaGVhcnRCZWF0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5zcGlubmVySW50ZXJjZXB0b3IgeyAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgIH1cclxuICAgICAgY29sb3I6ICNBNTk5QjU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIFxyXG4gXHJcbiAgXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjQTU5OUI1O1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _interfaces_mesa_cliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../interfaces/mesa-cliente */ "./src/app/interfaces/mesa-cliente.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var HomeClientePage = /** @class */ (function () {
    function HomeClientePage(alert, spinner, barcodeScanner, route, clienteService, mesaService, mesaClienteService, http, fcmService) {
        var _this = this;
        this.alert = alert;
        this.spinner = spinner;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.clienteService = clienteService;
        this.mesaService = mesaService;
        this.mesaClienteService = mesaClienteService;
        this.http = http;
        this.fcmService = fcmService;
        this.pedidos = [];
        this.chat = false;
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        this.mesaService.getMesas().subscribe(function (mesas) { _this.mesas = mesas; });
        //obtengo el cliente usando el uid generado con local storage
        console.log(this.cliente);
        this.clienteService.obtenerCliente(this.cliente.uid).subscribe(function (resp) {
            resp.forEach(function (user) {
                console.log(user.estado);
                _this.cliente = user;
                //chequeo si cambio el estado del cliente para poder darle un mensaje de aviso.
                if (_this.cliente.estado == "aceptado" && _this.estadoActualCliente == "EnListaDeEspera") {
                    _this.alert.mensaje("", "Ha sido aceptado! ya puede ingresar al local");
                }
                _this.estadoActualCliente = user.estado;
                console.log("aca");
            });
        });
        if (this.cliente.estado == "ConMesaAsignada") {
            this.route.navigate(['mesa-cliente']);
        }
    }
    //Si el usuario se encuentra en estado "desconectado" va a poder scanear el codigo de ingreso e ingresar a la lista de espera hasta que sea aceptado y pase al siguiente estado
    HomeClientePage.prototype.scanearEspera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var audio;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (localStorage.getItem('Sonido') == 'true') {
                    audio = new Audio();
                    audio.src = '../assets/click.m4a';
                    audio.load();
                    audio.play();
                }
                this.spinner.showSpinner();
                this.barcodeScanner.scan().then(function (resultado) {
                    var qrValido = false;
                    var mesaOcupada = false;
                    if (resultado.text == "ListaDeEspera") {
                        qrValido = true;
                        _this.cliente.estado = "EnListaDeEspera";
                        _this.clienteService.ModificarUsuario(_this.cliente);
                        _this.alert.mensaje('Bienvenido!', 'Usted se encuentra en la lista de espera');
                        _this.fcmService.enviarMensaje("Prueba Scan QR", "Prueba Scan QR", "all");
                    }
                    if (!qrValido) {
                        _this.alert.mensaje('Atención!', 'El QR escaneado no es válido');
                    }
                    _this.spinner.hideSpinner();
                });
                return [2 /*return*/];
            });
        });
    };
    /*si el usuario ya se encuentra en modo "aceptado" luego de la lista de espera va a poder scanear el qr de la mesa y pasar al
    siguiente estado(ConMesaAsignada) donde podra hacer su pedido.
    */
    HomeClientePage.prototype.scanearMesa = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var audio;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (localStorage.getItem('Sonido') == 'true') {
                    audio = new Audio();
                    audio.src = '../assets/click.m4a';
                    audio.load();
                    audio.play();
                }
                this.spinner.showSpinner();
                this.barcodeScanner.scan().then(function (resultado) {
                    var qrValido = false;
                    var mesaOcupada = false;
                    var mesa;
                    //verifico que el QR sea de una mesa
                    if (resultado.text.includes("Mesa") || resultado.text.includes("mesa")) {
                        /*Obtengo la mesa mediante su campo QR, que tiene que tener el mismo valor de una mesa generada y verifico que no este ocupada
                              Si no esta ocupada, modifico el estado del usuario y y lo redirecciono a la mesa.*/
                        _this.mesas.forEach(function (mesa) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (resultado.text === mesa.qr) {
                                    qrValido = true;
                                    if (mesa.estado == "Ocupada") {
                                        this.alert.mensaje('', 'La mesa esta ocupada');
                                    }
                                    else {
                                        mesa.estado = "Ocupada";
                                        this.mesaService.actualizarMesa(mesa);
                                        this.cliente.estado = "ConMesaAsignada";
                                        this.clienteService.ModificarUsuario(this.cliente);
                                        this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                                        this.mesaClienteService.createMesaCliente(new _interfaces_mesa_cliente__WEBPACK_IMPORTED_MODULE_1__["MesaCliente"](mesa.id, this.cliente.id, mesa.qr));
                                        this.route.navigate(['mesa-cliente']);
                                    }
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        /*
                               this.mesaService.obtenerMesaQr(resultado.text).subscribe((resp:any) =>{
                                 resp.forEach(mesa => {
                                   if(mesa.estado == "Ocupada"){
                                     this.alert.mensaje('', 'La mesa esta ocupada');
                                   }
                                   else{
                                     mesa.estado = "Ocupada";
                                     this.mesaService.actualizarMesa(mesa);
                                     this.cliente.estado = "ConMesaAsignada"
                                     this.clienteService.ModificarUsuario(this.cliente);
                                     this.alert.mensaje('', 'Ya puede sentarse en la mesa seleccionada!!');
                                     this.route.navigate(['mesa-cliente']);
                                     }
                                });
                                          });
                       */
                    }
                    else {
                        _this.alert.mensaje('QR Erroneo', 'El QR no pertenece a una mesa. Por favor, escanee el código de la mesa');
                    }
                    if (!qrValido) {
                        _this.alert.mensaje('Atención!', 'El QR escaneado no es válido');
                    }
                    _this.spinner.hideSpinner();
                });
                return [2 /*return*/];
            });
        });
    };
    HomeClientePage.prototype.salir = function () {
        this.clienteService.LogOut();
        this.route.navigate(['log-in']);
    };
    HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-cliente',
            template: __webpack_require__(/*! ./home-cliente.page.html */ "./src/app/paginas/home-cliente/home-cliente.page.html"),
            styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/paginas/home-cliente/home-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_9__["MesaClienteService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
            src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"]])
    ], HomeClientePage);
    return HomeClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-cliente-home-cliente-module.js.map