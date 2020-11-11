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

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\" >\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"tertiary\" size=\"small\">\r\n          <!-- <img class=\"icon-img\" src=\"assets/icon/logout.png\"> -->\r\n          <ion-icon name=\"log-out\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo-header\">\r\n     Cliente\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"tertiary\" size=\"small\">\r\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.escanearQr()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"qr-scanner\"></ion-icon>\r\n    <h2>Escanear QR</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.realizarPedido()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"restaurant\"></ion-icon>\r\n    <h2>Realizar un Pedido</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.consultarMozo()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"person\"></ion-icon>\r\n    <h2>Consulta al Mozo</h2>\r\n    </ion-card>\r\n    \r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.realizarEncuesta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.jugar()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"logo-game-controller-b\"></ion-icon>\r\n      <h2>Jugar</h2>\r\n      </ion-card>\r\n      \r\n      <ion-card class=\"ion-activatable\" (click)=\"this.pedirCuenta()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"list\" ></ion-icon>\r\n      <h2>Pedir cuenta</h2>\r\n      </ion-card>\r\n\r\n      <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n        <ion-icon name=\"power\"></ion-icon>\r\n      </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/mesa-cliente/mesa-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/mesa-cliente/mesa-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #FF6B35; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 230px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 130%;\n  line-height: 2; }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-card {\n  text-align: center;\n  --background: #222428;\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #A599B5; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZXNhLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcbWFzdGVyMTExMVxcbWFzdGVyMTExMS9zcmNcXGFwcFxccGFnaW5hc1xcbWVzYS1jbGllbnRlXFxtZXNhLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ3BCLGdDQUFhO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksVUFBUztFQUNULGNBQ0QsRUFBQTs7QUFFQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUFBOztBQUdoQjtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFNZDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVc7RUFDWCxlQUFlO0VBRWYsNkNBQWEsRUFBQTs7QUFLZjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQU1oQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBVztFQVlYLDZDQUFhLEVBQUE7O0FBSWY7RUFDRSxhQUFhO0VBQUMsc0JBQXNCO0VBQ3BDLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFNckI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9tZXNhLWNsaWVudGUvbWVzYS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRFTlRcclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW9uLXJpcHBsZS1lZmZlY3Qge1xyXG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDEzLjUlO1xyXG59XHJcblxyXG4uaWNvbi1ob3Jpem9udGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qbGluZS1oZWlnaHQ6IDBweDsqL1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjMsIDIzKTtcclxufVxyXG5cclxuI2NvbHVtbkNlbnRlcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvXHJcbiAgIH1cclxuICAgXHJcbiAgIC5sb2dvLWltZ3tcclxuICAgICAgIGRpc3BsYXk6bGVmdDtcclxuICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICB3aWR0aDoxMjBweDtcclxuICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmxvZ2luLWhlYWRlcntcclxuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lY29sb3IpO1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvciA6I0ZGNkIzNTtcclxuICAgfVxyXG4gIFxyXG4gIFxyXG4gICBcclxuICAudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy9mb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYm90b257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiNiNzFjMWM7ICAgICBcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1MXB4IC0zcHggcmdiYSgwLDAsMCwxKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWljb24uYnV0dG9uSWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG4gIC5ib3RvbkxpbXBpYXJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6I2I3MWMxYzsgICAgIFxyXG4gICAgXHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMjYsNzEsMjgsMSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI2LDcxLDI4LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoNDYsMTI1LDUwLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI2LDcxLDI4LDEpKSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMxYTQ3MWMnLCBlbmRDb2xvcnN0cj0nIzFhNDcxYycsIEdyYWRpZW50VHlwZT0xICk7XHJcbiAgXHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNTFweCAtM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZMaW1waWFye1xyXG4gICAgZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQ6ICMyMjI0Mjg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6ICNBNTk5QjU7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW9uLXJpcHBsZS1lZmZlY3Qge1xyXG4gIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8qbGluZS1oZWlnaHQ6IDBweDsqL1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxufSJdfQ== */"

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
    MesaClientePage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    MesaClientePage.prototype.realizarPedido = function () {
        this.alert.mensaje('', 'Realizar pedido');
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
                                    _this.fcmService.enviarMensaje("Nueva Consulta", "Mesa1" + data.data, "notificacionMozo");
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