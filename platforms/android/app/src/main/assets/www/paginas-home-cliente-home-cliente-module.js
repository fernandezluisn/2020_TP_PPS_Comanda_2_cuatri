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

module.exports = "\r\n<ion-header>\r\n\r\n\t<div *ngIf=\"cliente.estado=='desconectado' || cliente.estado == 'EnListaDeEspera' || cliente.estado == 'aceptado'\"  class=\"login-header  ion-padding\">\r\n\r\n    <img class=\"logo-img\" src=\"assets/img/logo.png\">\r\n\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"secondaryBackground ion-padding\">\r\n  <div *ngIf=\"cliente.estado=='desconectado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\r\n    <div class=\"titulo\">\r\n      <h1>Bienvenido</h1>\r\n      <h3></h3>\r\n      <p>Escanee el codigo QR para Ingresar a la lista de espera..</p>\r\n    </div>\r\n    <div style=\"display: flex;justify-content: center;\">\r\n      <ion-button class=\"boton\" (click)=\"scanearEspera()\">\r\n        <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    <div *ngIf=\"cliente.estado == 'EnListaDeEspera'\">\r\n      <ion-col >\r\n        <ion-row style=\"justify-content:center; margin-top:35px\" >\r\n          <p class=\"spinnerInterceptor latido\">Ya se encuentra en la lista de espera, podra ingresar al ser aprobado. </p>\r\n        </ion-row>\r\n        <ion-row style=\"justify-content: center; margin-top:125px;\">\r\n          <ion-spinner name=\"circles\" class=\"ion-spinner-large\" color=\"primary\"></ion-spinner>\r\n        </ion-row>\r\n      </ion-col>\r\n    </div>\r\n\r\n \r\n      <div *ngIf=\"cliente.estado=='aceptado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\r\n        <div class=\"titulo\">\r\n          <h1>Bienvenido</h1>\r\n          <h3></h3>\r\n          <p>Escanee el codigo QR para solicitar  la mesa</p>\r\n        </div>\r\n        <div style=\"display: flex;justify-content: center;\">\r\n          <ion-button class=\"boton\" (click)=\"scanearMesa()\">\r\n            <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n  \r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 200px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 110%;\n  line-height: 2; }\n\n.textoEsperando {\n  font-size: 32px;\n  margin-top: 38px;\n  margin-left: 35px;\n  font-weight: bolder;\n  color: #A599B5; }\n\nion-spinner {\n  -webkit-transform: scale(6);\n          transform: scale(6); }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-ripple-effect {\n  background-color: white;\n  opacity: 30%; }\n\n.esperando {\n  display: flex;\n  justify-content: center;\n  margin-top: 200px; }\n\n.heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.spinnerInterceptor {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #A599B5;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px; }\n\n.spinnerInterceptor img {\n    display: block;\n    height: 15%; }\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px; }\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #A599B5;\n  margin: 0; }\n\n#container a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLWNsaWVudGVcXGhvbWUtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsY0FDRCxFQUFBOztBQUVBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFLOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQU1kO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBVztFQUNYLGVBQWU7RUFFZiw2Q0FBYSxFQUFBOztBQUtmO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFXO0VBWVgsNkNBQWEsRUFBQTs7QUFJZjtFQUNFLGFBQWE7RUFBQyxzQkFBc0I7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLHVCQUFzQztFQUN0QyxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLDJDQUFtQztVQUFuQyxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUV2QixXQUFXO0VBQ1gsWUFBWTtFQUtWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFkbkI7SUFRTSxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQVVqQjtFQUNFLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBRWpCLGNBQWM7RUFFZCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1jbGllbnRlL2hvbWUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29sdW1uQ2VudGVye1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG9cclxuICAgfVxyXG4gICBcclxuICAgLmxvZ28taW1ne1xyXG4gICAgICAgZGlzcGxheTpsZWZ0O1xyXG4gICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubG9naW4taGVhZGVye1xyXG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVjb2xvcik7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDojQTU5OUI1O1xyXG4gICB9XHJcbiAgXHJcbiAgXHJcbiAgIFxyXG4gIC50aXR1bG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy9mb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ib3RvbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6I2I3MWMxYzsgICAgIFxyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24taWNvbi5idXR0b25JY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIH1cclxuICBcclxuICAudGV4dG9Fc3BlcmFuZG97XHJcbiAgICBmb250LXNpemU6IDMycHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjQTU5OUI1O1xyXG4gIH1cclxuICBcclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDYpO1xyXG5cclxufVxyXG4gIC5ib3RvbkxpbXBpYXJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6I2I3MWMxYzsgICAgIFxyXG4gICAgXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMjYsNzEsMjgsMSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI2LDcxLDI4LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoNDYsMTI1LDUwLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI2LDcxLDI4LDEpKSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxYTQ3MWMnLCBlbmRDb2xvcnN0cj0nIzFhNDcxYycsIEdyYWRpZW50VHlwZT0xICk7XHJcbiAgXHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNTFweCAtM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZMaW1waWFye1xyXG4gICAgZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICBpb24tcmlwcGxlLWVmZmVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDI0LCAxMDI0LDEwMjQpO1xyXG4gICAgb3BhY2l0eTogMzAlO1xyXG4gIH1cclxuICBcclxuICAuZXNwZXJhbmRve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhcnRCZWF0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYXJ0QmVhdDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXJJbnRlcmNlcHRvciB7ICBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgfVxyXG4gICAgICBjb2xvcjogI0E1OTlCNTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuICBcclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICNBNTk5QjU7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"

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










var HomeClientePage = /** @class */ (function () {
    function HomeClientePage(alert, spinner, barcodeScanner, route, clienteService, mesaService, mesaClienteService) {
        var _this = this;
        this.alert = alert;
        this.spinner = spinner;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.clienteService = clienteService;
        this.mesaService = mesaService;
        this.mesaClienteService = mesaClienteService;
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
    HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-cliente',
            template: __webpack_require__(/*! ./home-cliente.page.html */ "./src/app/paginas/home-cliente/home-cliente.page.html"),
            styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/paginas/home-cliente/home-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_9__["MesaClienteService"]])
    ], HomeClientePage);
    return HomeClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-cliente-home-cliente-module.js.map