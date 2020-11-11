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

module.exports = "#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 200px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 110%;\n  line-height: 2; }\n\n.textoEsperando {\n  font-size: 32px;\n  margin-top: 38px;\n  margin-left: 35px;\n  font-weight: bolder;\n  color: #A599B5; }\n\nion-spinner {\n  transform: scale(6); }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-ripple-effect {\n  background-color: white;\n  opacity: 30%; }\n\n.esperando {\n  display: flex;\n  justify-content: center;\n  margin-top: 200px; }\n\n.heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.spinnerInterceptor {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #A599B5;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px; }\n\n.spinnerInterceptor img {\n    display: block;\n    height: 15%; }\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px; }\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #A599B5;\n  margin: 0; }\n\n#container a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcbWFzdGVyMTExMVxcbWFzdGVyMTExMS9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1jbGllbnRlXFxob21lLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULGNBQ0QsRUFBQTs7QUFFQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUFBOztBQUdoQjtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFNZDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVc7RUFDWCxlQUFlO0VBRWYsNkNBQWEsRUFBQTs7QUFLZjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFXO0VBWVgsNkNBQWEsRUFBQTs7QUFJZjtFQUNFLGFBQWE7RUFBQyxzQkFBc0I7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLHVCQUFzQztFQUN0QyxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLDJDQUFtQztVQUFuQyxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUV2QixXQUFXO0VBQ1gsWUFBWTtFQUtWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFkbkI7SUFRTSxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQVVqQjtFQUNFLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVMsRUFBQTs7QUFHWDtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2x1bW5DZW50ZXJ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG4gICB9XHJcbiAgIFxyXG4gICAubG9nby1pbWd7XHJcbiAgICAgICBkaXNwbGF5OmxlZnQ7XHJcbiAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sb2dpbi1oZWFkZXJ7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZWNvbG9yKTtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3IgOiNBNTk5QjU7XHJcbiAgIH1cclxuICBcclxuICBcclxuICAgXHJcbiAgLnRpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvL2ZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvdG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNTFweCAtM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1pY29uLmJ1dHRvbkljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0b0VzcGVyYW5kb3tcclxuICAgIGZvbnQtc2l6ZTogMzJweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICNBNTk5QjU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zcGlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNik7XHJcblxyXG59XHJcbiAgLmJvdG9uTGltcGlhcntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXHJcbiAgICBcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyNiw3MSwyOCwxKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjYsNzEsMjgsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSg0NiwxMjUsNTAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjYsNzEsMjgsMSkpKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFhNDcxYycsIGVuZENvbG9yc3RyPScjMWE0NzFjJywgR3JhZGllbnRUeXBlPTEgKTtcclxuICBcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1MXB4IC0zcHggcmdiYSgwLDAsMCwxKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRpdkxpbXBpYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGlvbi1yaXBwbGUtZWZmZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMjQsIDEwMjQsMTAyNCk7XHJcbiAgICBvcGFjaXR5OiAzMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lc3BlcmFuZG97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFydEJlYXQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogaGVhcnRCZWF0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhlYXJ0QmVhdDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lckludGVyY2VwdG9yIHsgIFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbG9yOiAjQTU5OUI1O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG4gIFxyXG4gICNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogI0E1OTlCNTtcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */"

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