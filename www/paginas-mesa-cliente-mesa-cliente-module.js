(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-mesa-cliente-mesa-cliente-module"],{

/***/ "./src/app/interfaces/Consulta.ts":
/*!****************************************!*\
  !*** ./src/app/interfaces/Consulta.ts ***!
  \****************************************/
/*! exports provided: Consulta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consulta", function() { return Consulta; });
var Consulta = /** @class */ (function () {
    function Consulta(mesa, consulta, estado, id) {
        this.mesa = mesa;
        this.consulta = consulta;
        this.estado = estado;
        if (id) {
            this.id = id;
        }
    }
    return Consulta;
}());



/***/ }),

/***/ "./src/app/paginas/mesa-cliente/mesa-cliente.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/mesa-cliente/mesa-cliente.module.ts ***!
  \*************************************************************/
/*! exports provided: MesaClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaClientePageModule", function() { return MesaClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mesa_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mesa-cliente.page */ "./src/app/paginas/mesa-cliente/mesa-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _mesa_cliente_page__WEBPACK_IMPORTED_MODULE_6__["MesaClientePage"]
    }
];
var MesaClientePageModule = /** @class */ (function () {
    function MesaClientePageModule() {
    }
    MesaClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mesa_cliente_page__WEBPACK_IMPORTED_MODULE_6__["MesaClientePage"]]
        })
    ], MesaClientePageModule);
    return MesaClientePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/mesa-cliente/mesa-cliente.page.html":
/*!*************************************************************!*\
  !*** ./src/app/paginas/mesa-cliente/mesa-cliente.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\" >\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" size=\"small\">\r\n          <!-- <img class=\"icon-img\" src=\"assets/icon/logout.png\"> -->\r\n          <ion-icon name=\"log-out\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo-header\">\r\n     Cliente\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"tertiary\" size=\"small\">\r\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.escanearQr()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"qr-scanner\"></ion-icon>\r\n    <h2>Escanear QR</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.realizarPedido()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"restaurant\"></ion-icon>\r\n    <h2>Realizar un Pedido</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.consultarMozo()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"person\"></ion-icon>\r\n    <h2>Consulta al Mozo</h2>\r\n    </ion-card>\r\n    \r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.realizarEncuesta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.propina()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"trophy\"></ion-icon>\r\n      <h2>Propina</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.jugar()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"logo-game-controller-b\"></ion-icon>\r\n      <h2>Jugar</h2>\r\n      </ion-card>\r\n      \r\n      <ion-card class=\"ion-activatable\" (click)=\"this.pedirCuenta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"list\" ></ion-icon>\r\n      <h2>Pedir cuenta</h2>\r\n      </ion-card>\r\n\r\n      <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n        <ion-icon name=\"power\"></ion-icon>\r\n      </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/mesa-cliente/mesa-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/mesa-cliente/mesa-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #FF6B35; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 230px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 130%;\n  line-height: 2; }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-card {\n  text-align: center;\n  --background: #222428;\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #A599B5; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZXNhLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcTWFzdGVyUHJlXFxNYXN0ZXJQcmUvc3JjXFxhcHBcXHBhZ2luYXNcXG1lc2EtY2xpZW50ZVxcbWVzYS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNwQixnQ0FBYTtFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBOztBQUcxQjtFQUNJLFVBQVM7RUFDVCxjQUNELEVBQUE7O0FBRUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFHaEI7RUFDSSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUs5QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTWQ7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFXO0VBQ1gsZUFBZTtFQUVmLDZDQUFhLEVBQUE7O0FBS2Y7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFNaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVc7RUFZWCw2Q0FBYSxFQUFBOztBQUlmO0VBQ0UsYUFBYTtFQUFDLHNCQUFzQjtFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBTXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbWVzYS1jbGllbnRlL21lc2EtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxuLmNhcmQtdmVydGljYWwge1xyXG4gICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn1cclxuXHJcbiNjb2x1bW5DZW50ZXJ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG4gICB9XHJcbiAgIFxyXG4gICAubG9nby1pbWd7XHJcbiAgICAgICBkaXNwbGF5OmxlZnQ7XHJcbiAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sb2dpbi1oZWFkZXJ7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZWNvbG9yKTtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3IgOiNGRjZCMzU7XHJcbiAgIH1cclxuICBcclxuICBcclxuICAgXHJcbiAgLnRpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvL2ZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvdG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNTFweCAtM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1pY29uLmJ1dHRvbkljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBcclxuICAuYm90b25MaW1waWFye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiNiNzFjMWM7ICAgICBcclxuICAgIFxyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDI2LDcxLDI4LDEpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNiw3MSwyOCwxKSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDQ2LDEyNSw1MCwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNiw3MSwyOCwxKSkpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMWE0NzFjJywgZW5kQ29sb3JzdHI9JyMxYTQ3MWMnLCBHcmFkaWVudFR5cGU9MSApO1xyXG4gIFxyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZGl2TGltcGlhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIENPTlRFTlRcclxuXHJcbmlvbi1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMjIyNDI4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGNvbG9yOiAjQTU5OUI1O1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAzMy4zMyU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gIG1hcmdpbi10b3A6IDEzLjUlO1xyXG59XHJcblxyXG4uaWNvbi1ob3Jpem9udGFsIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/mesa-cliente/mesa-cliente.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/paginas/mesa-cliente/mesa-cliente.page.ts ***!
  \***********************************************************/
/*! exports provided: MesaClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaClientePage", function() { return MesaClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var _consulta_mozo_consulta_mozo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consulta-mozo/consulta-mozo.page */ "./src/app/paginas/consulta-mozo/consulta-mozo.page.ts");
/* harmony import */ var src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/spinner.service */ "./src/app/servicios/spinner.service.ts");
/* harmony import */ var src_app_servicios_consulta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/consulta.service */ "./src/app/servicios/consulta.service.ts");
/* harmony import */ var src_app_interfaces_Consulta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/interfaces/Consulta */ "./src/app/interfaces/Consulta.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");












var MesaClientePage = /** @class */ (function () {
    function MesaClientePage(platform, route, alert, auth, modalController, popoverCtrl, spinnerService, consultaService, fcmService) {
        this.platform = platform;
        this.route = route;
        this.alert = alert;
        this.auth = auth;
        this.modalController = modalController;
        this.popoverCtrl = popoverCtrl;
        this.spinnerService = spinnerService;
        this.consultaService = consultaService;
        this.fcmService = fcmService;
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    MesaClientePage.prototype.ngOnInit = function () {
        //this.platform.isLandscape();
    };
    MesaClientePage.prototype.realizarPedido = function () {
        var audio = new Audio();
        audio.src = '../assets/click.m4a';
        audio.load();
        audio.play();
        this.route.navigate(['hacer-pedido']);
    };
    MesaClientePage.prototype.escanearQr = function () {
        this.alert.mensaje('', 'escanear');
    };
    MesaClientePage.prototype.consultarMozo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _consulta_mozo_consulta_mozo_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaMozoPage"],
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        return [2 /*return*/, popover.onDidDismiss().then(function (data) {
                                console.log(data);
                                if (data.data) {
                                    _this.spinnerService.showSpinner();
                                    _this.consultaService.createConsulta(new src_app_interfaces_Consulta__WEBPACK_IMPORTED_MODULE_9__["Consulta"]("Mesa1", data.data, "Pendiente"));
                                    //TODO -> PUSH NOTIFICATION.
                                    _this.spinnerService.hideSpinner();
                                    _this.alert.mensaje("", "Se ha enviado su consulta.");
                                    _this.fcmService.enviarMensaje("Nueva Consulta", "Mesa1" + data.data, "mozo");
                                }
                                else {
                                    _this.alert.mensaje("", "Consulta Cancelada");
                                }
                            })];
                }
            });
        });
    };
    MesaClientePage.prototype.jugar = function () {
        this.alert.mensaje('', 'jugar');
    };
    MesaClientePage.prototype.realizarEncuesta = function () {
        var audio = new Audio();
        audio.src = '../assets/click.m4a';
        audio.load();
        audio.play();
        this.alert.mensaje('', 'Lo enviaremos a hacer una encuesta. Si quiere puede no hacerla');
        this.route.navigate(['encuesta-cliente']);
    };
    MesaClientePage.prototype.pedirCuenta = function () {
        this.alert.mensaje('', 'pedir cuenta');
    };
    MesaClientePage.prototype.propina = function () {
        //falta completar esto
        //this.route.navigate(['propina/'+ this.idMesaCliente]);
    };
    MesaClientePage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    MesaClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesa-cliente',
            template: __webpack_require__(/*! ./mesa-cliente.page.html */ "./src/app/paginas/mesa-cliente/mesa-cliente.page.html"),
            styles: [__webpack_require__(/*! ./mesa-cliente.page.scss */ "./src/app/paginas/mesa-cliente/mesa-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], src_app_servicios_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"],
            src_app_servicios_consulta_service__WEBPACK_IMPORTED_MODULE_8__["ConsultaService"], src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"]])
    ], MesaClientePage);
    return MesaClientePage;
}());



/***/ }),

/***/ "./src/app/servicios/consulta.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/consulta.service.ts ***!
  \***********************************************/
/*! exports provided: ConsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaService", function() { return ConsultaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var ConsultaService = /** @class */ (function () {
    function ConsultaService(db) {
        this.db = db;
    }
    ConsultaService.prototype.createConsulta = function (Consulta) {
        return this.db.collection('consultas').add(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Consulta));
    };
    ConsultaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ConsultaService);
    return ConsultaService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-mesa-cliente-mesa-cliente-module.js.map