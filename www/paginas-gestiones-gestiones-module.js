(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-gestiones-gestiones-module"],{

/***/ "./src/app/paginas/gestiones/gestiones.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/gestiones/gestiones.module.ts ***!
  \*******************************************************/
/*! exports provided: GestionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionesPageModule", function() { return GestionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gestiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestiones.page */ "./src/app/paginas/gestiones/gestiones.page.ts");







var routes = [
    {
        path: '',
        component: _gestiones_page__WEBPACK_IMPORTED_MODULE_6__["GestionesPage"]
    }
];
var GestionesPageModule = /** @class */ (function () {
    function GestionesPageModule() {
    }
    GestionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gestiones_page__WEBPACK_IMPORTED_MODULE_6__["GestionesPage"]]
        })
    ], GestionesPageModule);
    return GestionesPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/gestiones/gestiones.page.html":
/*!*******************************************************!*\
  !*** ./src/app/paginas/gestiones/gestiones.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"titulo-header\">Gestiones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.realizarEncuesta()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n    <h2>Encuesta</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.jugar()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"logo-game-controller-b\"></ion-icon>\r\n    <h2>Jugar</h2>\r\n    </ion-card>\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.estado()\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <h2>Estado del pedido</h2>\r\n      </ion-card>\r\n\r\n\r\n      <ion-card class=\"ion-activatable\" (click)=\"this.confirmarRecepcion()\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"cart\"></ion-icon>\r\n        <h2>Confirmar Recepcion Pedido</h2>\r\n        </ion-card>\r\n  \r\n\r\n      <ion-card class=\"ion-activatable\" (click)=\"this.volver()\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <h2>Volver a la home</h2>\r\n        </ion-card>\r\n      \r\n      \r\n        <ion-card class=\"ion-activatable\" (click)=\"this.pedirCuenta()\">\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n          <ion-icon name=\"list\" ></ion-icon>\r\n          <h2>Pedir cuenta</h2>\r\n          </ion-card>\r\n          \r\n          <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n        <ion-icon name=\"power\"></ion-icon>\r\n      </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/gestiones/gestiones.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/paginas/gestiones/gestiones.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #FF6B35; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 230px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 130%;\n  line-height: 2; }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-card {\n  text-align: center;\n  --background: #222428;\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #A599B5; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9nZXN0aW9uZXMvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxnZXN0aW9uZXNcXGdlc3Rpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxVQUFTO0VBQ1QsY0FDRCxFQUFBOztBQUVBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFLOUI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQU1kO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBVztFQUNYLGVBQWU7RUFFZiw2Q0FBYSxFQUFBOztBQUtmO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBTWhCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFXO0VBWVgsNkNBQWEsRUFBQTs7QUFJZjtFQUNFLGFBQWE7RUFBQyxzQkFBc0I7RUFDcEMsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQU1yQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2dlc3Rpb25lcy9nZXN0aW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1ob3Jpem9udGFsIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmljb24tdmVydGljYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTMuNSU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59XHJcblxyXG4jY29sdW1uQ2VudGVye1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG9cclxuICAgfVxyXG4gICBcclxuICAgLmxvZ28taW1ne1xyXG4gICAgICAgZGlzcGxheTpsZWZ0O1xyXG4gICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubG9naW4taGVhZGVye1xyXG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVjb2xvcik7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDojRkY2QjM1O1xyXG4gICB9XHJcbiAgXHJcbiAgXHJcbiAgIFxyXG4gIC50aXR1bG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy9mb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ib3RvbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6I2I3MWMxYzsgICAgIFxyXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBpb24taWNvbi5idXR0b25JY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgXHJcbiAgLmJvdG9uTGltcGlhcntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXHJcbiAgICBcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyNiw3MSwyOCwxKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjYsNzEsMjgsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSg0NiwxMjUsNTAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjYsNzEsMjgsMSkpKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XHJcbiAgICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFhNDcxYycsIGVuZENvbG9yc3RyPScjMWE0NzFjJywgR3JhZGllbnRUeXBlPTEgKTtcclxuICBcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA1MXB4IC0zcHggcmdiYSgwLDAsMCwxKTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRpdkxpbXBpYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG5cclxuICAvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMjQyODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBjb2xvcjogI0E1OTlCNTtcclxufVxyXG5cclxuLmNhcmQtdmVydGljYWwge1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2FyZC1ob3Jpem9udGFsIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMzMuMzMlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tcmlwcGxlLWVmZmVjdCB7XHJcbiAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/paginas/gestiones/gestiones.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/gestiones/gestiones.page.ts ***!
  \*****************************************************/
/*! exports provided: GestionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionesPage", function() { return GestionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");
/* harmony import */ var src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/pedidos.service */ "./src/app/servicios/pedidos.service.ts");







var GestionesPage = /** @class */ (function () {
    function GestionesPage(route, alert, bda, auth, pedidoServ) {
        var _this = this;
        this.route = route;
        this.alert = alert;
        this.bda = bda;
        this.auth = auth;
        this.pedidoServ = pedidoServ;
        this.idMesaCliente = JSON.parse(localStorage.getItem('mesaClienteID'));
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.bda.devolverListadoMesas().subscribe(function (lista) {
            lista.filter(function (elem) {
                if (elem.idCliente == _this.usuario.id && elem.cerrada == false) {
                    _this.mesaCliente = elem;
                    console.log(elem);
                }
            });
        });
    }
    GestionesPage.prototype.ngOnInit = function () {
    };
    GestionesPage.prototype.jugar = function () {
        if (this.mesaCliente.juegoDescuento == null)
            this.route.navigate(["juego"]);
        else {
            this.alert.mensaje('Error', 'Solo puede intentar el descuento una vez');
        }
    };
    GestionesPage.prototype.realizarEncuesta = function () {
        var audio = new Audio();
        audio.src = '../assets/click.m4a';
        audio.load();
        audio.play();
        this.alert.mensaje('', 'Lo enviaremos a hacer una encuesta. Si quiere puede no hacerla');
        this.route.navigate(['encuesta-cliente']);
    };
    GestionesPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    GestionesPage.prototype.estado = function () {
        var _this = this;
        console.log(this.mesaCliente.id);
        var ped;
        this.pedidoServ.getPedidos().subscribe(function (lista) {
            lista.filter(function (elem) {
                if (elem.id_mesa_cliente == _this.mesaCliente.id) {
                    ped = elem;
                    if (ped.estado == "sconfirmar")
                        _this.alert.mensaje("", "Su pedido aún no ha sido confirmado");
                    else if (ped.estado == "confirmado")
                        _this.alert.mensaje("", "Su pedido está siendo elaborado");
                    else if (ped.estado == "terminado")
                        _this.alert.mensaje("", "Su pedido ya está listo");
                }
            });
        });
    };
    GestionesPage.prototype.pedirCuenta = function () {
        if (localStorage.getItem('Sonido') == 'true') {
            var audio = new Audio();
            audio.src = '../assets/click.m4a';
            audio.load();
            audio.play();
        }
        this.route.navigate(['/cuenta-cliente']);
    };
    GestionesPage.prototype.volver = function () {
        this.route.navigate(["mesa-cliente"]);
    };
    GestionesPage.prototype.confirmarRecepcion = function () {
        this.alert.mensaje("", "Ha confirmado la recepcion del pedido!!");
    };
    GestionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gestiones',
            template: __webpack_require__(/*! ./gestiones.page.html */ "./src/app/paginas/gestiones/gestiones.page.html"),
            styles: [__webpack_require__(/*! ./gestiones.page.scss */ "./src/app/paginas/gestiones/gestiones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_5__["MesaClienteService"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_servicios_pedidos_service__WEBPACK_IMPORTED_MODULE_6__["PedidosService"]])
    ], GestionesPage);
    return GestionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-gestiones-gestiones-module.js.map