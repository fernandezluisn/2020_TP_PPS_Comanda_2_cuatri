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

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #FF6B35; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 230px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 130%;\n  line-height: 2; }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-card {\n  text-align: center;\n  --background: #222428;\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #A599B5; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9tZXNhLWNsaWVudGUvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxtZXNhLWNsaWVudGVcXG1lc2EtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxVQUFTO0VBQ1QsY0FDRCxFQUFBOztBQUVBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFLOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQU1kO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBVztFQUNYLGVBQWU7RUFFZiw2Q0FBYSxFQUFBOztBQUtmO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBTWhCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFXO0VBWVgsNkNBQWEsRUFBQTs7QUFJZjtFQUNFLGFBQWE7RUFBQyxzQkFBc0I7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQU1yQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL21lc2EtY2xpZW50ZS9tZXNhLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1ob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59XHJcblxyXG4jY29sdW1uQ2VudGVye1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG9cclxuICAgfVxyXG4gICBcclxuICAgLmxvZ28taW1ne1xyXG4gICAgICAgZGlzcGxheTpsZWZ0O1xyXG4gICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubG9naW4taGVhZGVye1xyXG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVjb2xvcik7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDojRkY2QjM1O1xyXG4gICB9XHJcbiAgXHJcbiAgXHJcbiAgIFxyXG4gIC50aXR1bG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy9mb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ib3RvbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6I2I3MWMxYzsgICAgIFxyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24taWNvbi5idXR0b25JY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgXHJcbiAgLmJvdG9uTGltcGlhcntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXHJcbiAgICBcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyNiw3MSwyOCwxKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjYsNzEsMjgsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSg0NiwxMjUsNTAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjYsNzEsMjgsMSkpKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFhNDcxYycsIGVuZENvbG9yc3RyPScjMWE0NzFjJywgR3JhZGllbnRUeXBlPTEgKTtcclxuICBcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1MXB4IC0zcHggcmdiYSgwLDAsMCwxKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRpdkxpbXBpYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG5cclxuICAvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjQyODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBjb2xvcjogI0E1OTlCNTtcclxufVxyXG5cclxuLmNhcmQtdmVydGljYWwge1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1ob3Jpem9udGFsIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMzMuMzMlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG59Il19 */"

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