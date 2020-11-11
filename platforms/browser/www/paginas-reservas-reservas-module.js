(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-reservas-reservas-module"],{

/***/ "./src/app/interfaces/reserva.ts":
/*!***************************************!*\
  !*** ./src/app/interfaces/reserva.ts ***!
  \***************************************/
/*! exports provided: Reserva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reserva", function() { return Reserva; });
var Reserva = /** @class */ (function () {
    function Reserva(idCliente, fecha, hora, estado) {
        this.fecha = fecha;
        this.hora = hora;
        this.idCliente = idCliente;
        this.estado = estado;
    }
    return Reserva;
}());



/***/ }),

/***/ "./src/app/paginas/reservas/reservas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/reservas/reservas.module.ts ***!
  \*****************************************************/
/*! exports provided: ReservasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasPageModule", function() { return ReservasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reservas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservas.page */ "./src/app/paginas/reservas/reservas.page.ts");







var routes = [
    {
        path: '',
        component: _reservas_page__WEBPACK_IMPORTED_MODULE_6__["ReservasPage"]
    }
];
var ReservasPageModule = /** @class */ (function () {
    function ReservasPageModule() {
    }
    ReservasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reservas_page__WEBPACK_IMPORTED_MODULE_6__["ReservasPage"]]
        })
    ], ReservasPageModule);
    return ReservasPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/reservas/reservas.page.html":
/*!*****************************************************!*\
  !*** ./src/app/paginas/reservas/reservas.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content>\r\n  <ion-img src=\"../assets/logo.png\"></ion-img>\r\n  <ion-item style=\"margin-top: 2rem;\">\r\n    <ion-label>Fecha</ion-label>\r\n    <ion-datetime displayFormat=\"DD MM YYYY\" [min]=\"hoy\" placeholder=\"\" [(ngModel)]=\"fecha\"></ion-datetime>\r\n  </ion-item>\r\n  <ion-item style=\"margin-top: 2rem;\">\r\n    <ion-label>Hora</ion-label>\r\n    <ion-datetime displayFormat=\"HH:mm\" hourValues=\"12,13,14,15,20,21,22,23\" [(ngModel)]=\"hora\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"subir()\" expand=\"full\" color=\"success\" style=\"bottom: 2rem; position: absolute;\">Solicitar reserva</ion-button>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/reservas/reservas.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/paginas/reservas/reservas.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvcmVzZXJ2YXMvcmVzZXJ2YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/reservas/reservas.page.ts":
/*!***************************************************!*\
  !*** ./src/app/paginas/reservas/reservas.page.ts ***!
  \***************************************************/
/*! exports provided: ReservasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasPage", function() { return ReservasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_interfaces_reserva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/reserva */ "./src/app/interfaces/reserva.ts");
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/reservas.service */ "./src/app/servicios/reservas.service.ts");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");









var ReservasPage = /** @class */ (function () {
    function ReservasPage(datePipe, alertar, bda, toast, route, auth) {
        this.datePipe = datePipe;
        this.alertar = alertar;
        this.bda = bda;
        this.toast = toast;
        this.route = route;
        this.auth = auth;
        this.hoy = new Date().toISOString();
        console.log(this.hoy);
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    ReservasPage.prototype.ngOnInit = function () {
    };
    ReservasPage.prototype.subir = function () {
        var hor = this.datePipe.transform(this.hora, 'HH:mm');
        ;
        var fech = this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
        var r = new src_app_interfaces_reserva__WEBPACK_IMPORTED_MODULE_3__["Reserva"](this.usuario.id, fech, hor, "pendiente");
        if (fech == null && hor == null) {
            this.alertar.mensaje("Faltan datos", "Debe ingresar fecha y hora");
        }
        else if (this.usuario.perfil == "anonimo") {
            this.alertar.mensaje("Usuario anónimo", "Debe estar registrado para poder hacer una reserva");
        }
        else {
            try {
                this.bda.addReserva(r);
                this.toast.confirmationToast("Se solicitó la reserva correctamente");
            }
            catch (err) {
                this.alertar.mensaje("ERROR", err);
            }
        }
    };
    ReservasPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    ReservasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservas',
            template: __webpack_require__(/*! ./reservas.page.html */ "./src/app/paginas/reservas/reservas.page.html"),
            styles: [__webpack_require__(/*! ./reservas.page.scss */ "./src/app/paginas/reservas/reservas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_5__["ReservasService"], src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ReservasPage);
    return ReservasPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-reservas-reservas-module.js.map