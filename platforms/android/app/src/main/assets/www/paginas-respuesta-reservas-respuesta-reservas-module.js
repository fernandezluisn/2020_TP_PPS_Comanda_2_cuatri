(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-respuesta-reservas-respuesta-reservas-module"],{

/***/ "./src/app/paginas/respuesta-reservas/respuesta-reservas.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/respuesta-reservas/respuesta-reservas.module.ts ***!
  \*************************************************************************/
/*! exports provided: RespuestaReservasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespuestaReservasPageModule", function() { return RespuestaReservasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _respuesta_reservas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./respuesta-reservas.page */ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.ts");







var routes = [
    {
        path: '',
        component: _respuesta_reservas_page__WEBPACK_IMPORTED_MODULE_6__["RespuestaReservasPage"]
    }
];
var RespuestaReservasPageModule = /** @class */ (function () {
    function RespuestaReservasPageModule() {
    }
    RespuestaReservasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_respuesta_reservas_page__WEBPACK_IMPORTED_MODULE_6__["RespuestaReservasPage"]]
        })
    ], RespuestaReservasPageModule);
    return RespuestaReservasPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/respuesta-reservas/respuesta-reservas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>respuestaReservas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/respuesta-reservas/respuesta-reservas.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcmVzcHVlc3RhLXJlc2VydmFzL3Jlc3B1ZXN0YS1yZXNlcnZhcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/paginas/respuesta-reservas/respuesta-reservas.page.ts ***!
  \***********************************************************************/
/*! exports provided: RespuestaReservasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespuestaReservasPage", function() { return RespuestaReservasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/reservas.service */ "./src/app/servicios/reservas.service.ts");






var RespuestaReservasPage = /** @class */ (function () {
    function RespuestaReservasPage(datePipe, route, auth, bda) {
        var _this = this;
        this.datePipe = datePipe;
        this.route = route;
        this.auth = auth;
        this.bda = bda;
        this.fecha = new Date();
        this.bda.getReservas().subscribe(function (list) {
            var fech = _this.datePipe.transform(_this.fecha, 'dd/MM/yyyy');
            var resA = new Array();
            var resD = new Array();
            _this.reservas = list;
            list.filter(function (elem) {
                if (elem.estado == "pendiente") {
                    resA.push(elem);
                }
                else if (elem.estado == "confirmada" && elem.fecha == fech) {
                    resD.push(elem);
                }
            });
            _this.reservasDelDia = resD;
            _this.reservasAResponder = resA;
        });
    }
    RespuestaReservasPage.prototype.ngOnInit = function () {
    };
    RespuestaReservasPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    RespuestaReservasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-respuesta-reservas',
            template: __webpack_require__(/*! ./respuesta-reservas.page.html */ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.html"),
            styles: [__webpack_require__(/*! ./respuesta-reservas.page.scss */ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_5__["ReservasService"]])
    ], RespuestaReservasPage);
    return RespuestaReservasPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-respuesta-reservas-respuesta-reservas-module.js.map