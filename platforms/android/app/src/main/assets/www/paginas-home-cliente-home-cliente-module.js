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

module.exports = "\n<ion-header>\n\n\t<div *ngIf=\"cliente.estado=='desconectado' || cliente.estado == 'EnListaDeEspera' || cliente.estado == 'aceptado'\"  class=\"login-header  ion-padding\">\n\n    <img class=\"logo-img\" src=\"assets/img/logo.png\">\n\n  </div>\n</ion-header>\n\n\n<ion-content class=\"secondaryBackground ion-padding\">\n  <div *ngIf=\"cliente.estado=='desconectado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\n    <div class=\"titulo\">\n      <h1>Bienvenido</h1>\n      <h3></h3>\n      <p>Escanee el codigo QR para Ingresar a la lista de espera..</p>\n    </div>\n    <div style=\"display: flex;justify-content: center;\">\n      <ion-button class=\"boton\" (click)=\"scanearEspera()\">\n        <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \n      </ion-button>\n    </div>\n  </div>\n\n\n    <div *ngIf=\"cliente.estado == 'EnListaDeEspera'\">\n      <ion-col >\n        <ion-row style=\"justify-content:center; margin-top:35px\" >\n          <p class=\"spinnerInterceptor latido\">Ya se encuentra en la lista de espera, podra ingresar al ser aprobado. </p>\n        </ion-row>\n        <ion-row style=\"justify-content: center; margin-top:125px;\">\n          <ion-spinner name=\"circles\" class=\"ion-spinner-large\" color=\"primary\"></ion-spinner>\n        </ion-row>\n      </ion-col>\n    </div>\n\n \n      <div *ngIf=\"cliente.estado=='aceptado'\" style=\"height: 100%; display:flex; flex-direction:column;\">\n        <div class=\"titulo\">\n          <h1>Bienvenido</h1>\n          <h3></h3>\n          <p>Escanee el codigo QR para Acceder a la mesa</p>\n        </div>\n        <div style=\"display: flex;justify-content: center;\">\n          <ion-button class=\"boton\" (click)=\"scanearEspera()\">\n            <ion-icon name=\"qr-code\" class=\"qrCode\"></ion-icon>        &nbsp; Escanear codigo QR         \n          </ion-button>\n        </div>\n      </div>\n  \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/paginas/home-cliente/home-cliente.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-cliente/home-cliente.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "#columnCenter {\n  width: 50%;\n  margin: 0 auto; }\n\n.logo-img {\n  display: left;\n  margin: 0 auto;\n  text-align: left;\n  width: 120px;\n  height: 100px; }\n\n.login-header {\n  background: var(--themecolor);\n  position: relative;\n  background-color: #A599B5; }\n\n.titulo {\n  text-align: center;\n  color: black; }\n\n.boton {\n  margin-top: 30px;\n  width: 90%;\n  height: 200px;\n  color: white;\n  font-size: 120%;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\nion-icon.buttonIcon {\n  color: white;\n  font-size: 110%;\n  line-height: 2; }\n\n.textoEsperando {\n  font-size: 32px;\n  margin-top: 38px;\n  margin-left: 35px;\n  font-weight: bolder;\n  color: #A599B5; }\n\nion-spinner {\n  -webkit-transform: scale(6);\n          transform: scale(6); }\n\n.botonLimpiar {\n  width: 50px;\n  height: 50px;\n  color: white;\n  --box-shadow: 0px 0px 51px -3px rgba(0,0,0,1); }\n\n.divLimpiar {\n  display: flex;\n  justify-content: right;\n  margin-bottom: 2px;\n  margin-top: 100px; }\n\nion-ripple-effect {\n  background-color: white;\n  opacity: 30%; }\n\n.esperando {\n  display: flex;\n  justify-content: center;\n  margin-top: 200px; }\n\n.heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.spinnerInterceptor {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #A599B5;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px; }\n\n.spinnerInterceptor img {\n    display: block;\n    height: 15%; }\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px; }\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #A599B5;\n  margin: 0; }\n\n#container a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvRTpcXERlc2Nhcmdhc1xcbWFzdGVyXFxtYXN0ZXIvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtY2xpZW50ZVxcaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVM7RUFDVCxjQUNELEVBQUE7O0FBRUE7RUFDSSxhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFHaEI7RUFDSSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUs5QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTWQ7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFXO0VBQ1gsZUFBZTtFQUVmLDZDQUFhLEVBQUE7O0FBS2Y7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVc7RUFZWCw2Q0FBYSxFQUFBOztBQUlmO0VBQ0UsYUFBYTtFQUFDLHNCQUFzQjtFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsdUJBQXNDO0VBQ3RDLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLDhDQUE4QztFQUM5QyxzQ0FBc0M7RUFDdEMsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBRXZCLFdBQVc7RUFDWCxZQUFZO0VBS1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQWRuQjtJQVFNLGNBQWM7SUFDZCxXQUFXLEVBQUE7O0FBVWpCO0VBQ0Usa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVMsRUFBQTs7QUFHWDtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvaG9tZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2x1bW5DZW50ZXJ7XG4gICAgd2lkdGg6NTAlO1xuICAgIG1hcmdpbjogMCBhdXRvXG4gICB9XG4gICBcbiAgIC5sb2dvLWltZ3tcbiAgICAgICBkaXNwbGF5OmxlZnQ7XG4gICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgd2lkdGg6MTIwcHg7XG4gICAgICAgaGVpZ2h0OjEwMHB4O1xuICAgfVxuICAgXG4gICAubG9naW4taGVhZGVye1xuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lY29sb3IpO1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDojQTU5OUI1O1xuICAgfVxuICBcbiAgXG4gICBcbiAgLnRpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy9mb250LXNpemU6IDUwcHg7XG4gIH1cbiAgXG4gIFxuICAuYm90b257XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiNiNzFjMWM7ICAgICBcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNTFweCAtM3B4IHJnYmEoMCwwLDAsMSk7XG4gIFxuICB9XG4gIFxuICBcbiAgaW9uLWljb24uYnV0dG9uSWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgfVxuICBcbiAgLnRleHRvRXNwZXJhbmRve1xuICAgIGZvbnQtc2l6ZTogMzJweDsgXG4gICAgbWFyZ2luLXRvcDogMzhweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjQTU5OUI1O1xuICB9XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg2KTtcblxufVxuICAuYm90b25MaW1waWFye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICAvLy0tYmFja2dyb3VuZDojYjcxYzFjOyAgICAgXG4gICAgXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDI2LDcxLDI4LDEpO1xuICAgIC8vIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xuICAgIC8vIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI2LDcxLDI4LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoNDYsMTI1LDUwLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI2LDcxLDI4LDEpKSk7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNiw3MSwyOCwxKSAwJSwgcmdiYSg0NiwxMjUsNTAsMSkgNTAlLCByZ2JhKDI2LDcxLDI4LDEpIDEwMCUpO1xuICAgIC8vIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI2LDcxLDI4LDEpIDAlLCByZ2JhKDQ2LDEyNSw1MCwxKSA1MCUsIHJnYmEoMjYsNzEsMjgsMSkgMTAwJSk7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsNzEsMjgsMSkgMCUsIHJnYmEoNDYsMTI1LDUwLDEpIDUwJSwgcmdiYSgyNiw3MSwyOCwxKSAxMDAlKTtcbiAgICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFhNDcxYycsIGVuZENvbG9yc3RyPScjMWE0NzFjJywgR3JhZGllbnRUeXBlPTEgKTtcbiAgXG4gICAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDUxcHggLTNweCByZ2JhKDAsMCwwLDEpO1xuICBcbiAgfVxuICBcbiAgLmRpdkxpbXBpYXJ7XG4gICAgZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxuXG4gIFxuICBpb24tcmlwcGxlLWVmZmVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyNCwgMTAyNCwxMDI0KTtcbiAgICBvcGFjaXR5OiAzMCU7XG4gIH1cbiAgXG4gIC5lc3BlcmFuZG97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgfVxuXG4gIC5oZWFydEJlYXQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYXJ0QmVhdDtcbiAgICBhbmltYXRpb24tbmFtZTogaGVhcnRCZWF0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG5cbiAgLnNwaW5uZXJJbnRlcmNlcHRvciB7ICBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgICAgIGNvbG9yOiAjQTU5OUI1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxuIFxuICBcbiAgI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogI0E1OTlCNTtcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfSJdfQ== */"
=======
module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWNsaWVudGUvQzpcXFVzZXJzXFxyYXVsLnphbW9yYVxcQW5uZ3VsYXJcXDIwMjBfVFBfUFBTL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLWNsaWVudGVcXGhvbWUtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBQTtFQUNBLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1jbGllbnRlL2hvbWUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXG5cbmlvbi1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG59XG5cbi5jYXJkLXZlcnRpY2FsIHtcbiAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2FyZC1ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMzMuMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdCB7XG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XG59XG5cbi5pY29uLXZlcnRpY2FsIHtcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcbn1cblxuLmljb24taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xufSJdfQ== */"
>>>>>>> zamora

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
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/spiner.service */ "./src/app/servicios/spiner.service.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");







var HomeClientePage = /** @class */ (function () {
    function HomeClientePage(alert, spiner, barcodeScanner, route, clienteService) {
        var _this = this;
        this.alert = alert;
        this.spiner = spiner;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.clienteService = clienteService;
        this.pedidos = [];
        this.chat = false;
        this.cliente = JSON.parse(localStorage.getItem('usuario'));
        console.log(this.cliente);
        this.clienteService.obtenerCliente(this.cliente.uid).subscribe(function (resp) {
            resp.forEach(function (user) {
                console.log(user.estado);
                _this.cliente = user;
            });
        });
    }
    HomeClientePage.prototype.scanearEspera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var audio, sp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (localStorage.getItem('Sonido') == 'true') {
                            audio = new Audio();
                            audio.src = '../assets/click.m4a';
                            audio.load();
                            audio.play();
                        }
                        return [4 /*yield*/, this.spiner.GetAllPageSpinner("")];
                    case 1:
                        sp = _a.sent();
                        sp.present();
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
                            sp.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cliente',
            template: __webpack_require__(/*! ./home-cliente.page.html */ "./src/app/paginas/home-cliente/home-cliente.page.html"),
            styles: [__webpack_require__(/*! ./home-cliente.page.scss */ "./src/app/paginas/home-cliente/home-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_servicios_spiner_service__WEBPACK_IMPORTED_MODULE_5__["SpinerService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeClientePage);
    return HomeClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-cliente-home-cliente-module.js.map