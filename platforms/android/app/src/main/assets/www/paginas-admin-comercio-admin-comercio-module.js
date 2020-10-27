(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-admin-comercio-admin-comercio-module"],{

/***/ "./src/app/paginas/admin-comercio/admin-comercio.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminComercioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComercioPageModule", function() { return AdminComercioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-comercio.page */ "./src/app/paginas/admin-comercio/admin-comercio.page.ts");







var routes = [
    {
        path: '',
        component: _admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__["AdminComercioPage"]
    }
];
var AdminComercioPageModule = /** @class */ (function () {
    function AdminComercioPageModule() {
    }
    AdminComercioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_comercio_page__WEBPACK_IMPORTED_MODULE_6__["AdminComercioPage"]]
        })
    ], AdminComercioPageModule);
    return AdminComercioPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>admin-comercio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button position=\"floating\" (click)=\"cambiarAlta()\">Cambiar formulario</ion-button>\r\n  <ng-container *ngIf=\"altaMesa\">\r\n   <h1 position=\"floating\">Subo mesas</h1>\r\n\r\n   <ion-item>\r\n    <ion-label position=\"floating\">Tipo de mesa</ion-label>\r\n    <ion-select [(ngModel)]=\"this.tipoMesa\">\r\n      <ion-select-option>Vip</ion-select-option>\r\n      <ion-select-option>Discapacitados</ion-select-option>\r\n      <ion-select-option>Estandar</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>  \r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Número de mesa</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"this.numMesa\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Cantidad de comensales</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"this.cantidad\"></ion-input>\r\n    </ion-item>  \r\n    \r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!altaMesa\">\r\n    <h1 position=\"floating\">subo productos</h1>\r\n  \r\n    \r\n  </ng-container>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 80px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 100%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9hZG1pbi1jb21lcmNpby9FOlxcRGVzY2FyZ2FzXFxtYXN0ZXJcXG1hc3Rlci9zcmNcXGFwcFxccGFnaW5hc1xcYWRtaW4tY29tZXJjaW9cXGFkbWluLWNvbWVyY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9hZG1pbi1jb21lcmNpby9hZG1pbi1jb21lcmNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/admin-comercio/admin-comercio.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/admin-comercio/admin-comercio.page.ts ***!
  \***************************************************************/
/*! exports provided: AdminComercioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComercioPage", function() { return AdminComercioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComercioPage = /** @class */ (function () {
    function AdminComercioPage() {
        this.altaMesa = true;
    }
    AdminComercioPage.prototype.ngOnInit = function () {
    };
    AdminComercioPage.prototype.cambiarAlta = function () {
        if (this.altaMesa) {
            this.altaMesa = false;
        }
        else {
            this.altaMesa = true;
        }
    };
    AdminComercioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-comercio',
            template: __webpack_require__(/*! ./admin-comercio.page.html */ "./src/app/paginas/admin-comercio/admin-comercio.page.html"),
            styles: [__webpack_require__(/*! ./admin-comercio.page.scss */ "./src/app/paginas/admin-comercio/admin-comercio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComercioPage);
    return AdminComercioPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-admin-comercio-admin-comercio-module.js.map