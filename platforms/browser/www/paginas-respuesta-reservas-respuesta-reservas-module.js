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

module.exports = "\r\n\r\n<ion-content>\r\n  <ion-img src=\"../assets/logo.png\"></ion-img>\r\n  <ion-radio-group [(ngModel)]=\"ver\">\r\n    <ion-list-header>\r\n      <ion-label>Reservas a consultar</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Solicitudes</ion-label>\r\n      <ion-radio slot=\"end\" value=\"Sol\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Del día</ion-label>\r\n      <ion-radio slot=\"end\" value=\"Dia\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Confirmadas</ion-label>\r\n      <ion-radio slot=\"end\" value=\"Con\"></ion-radio>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-radio-group>\r\n\r\n  <ng-container *ngIf=\"ver=='Sol'\" >\r\n    <h4 style=\"margin-left: 1rem;\">Las siguientes son las reservas solicitadas en el sistema:</h4>\r\n\r\n    <ion-list>\r\n      <div style=\"border-top: 0.1rem black solid; margin-left: 5%; margin-right: 5%; background-color: rgba(128, 128, 128, 0.575); margin-top: 2rem;\" *ngFor=\"let reserva of reservasAResponder\">     \r\n        \r\n        \r\n          <h4>Cliente: {{reserva.nombreCliente}}</h4><br>\r\n          <h4>Fecha: {{reserva.fecha}}</h4><br>\r\n          <h4>Hora: {{reserva.hora}}</h4><br>\r\n        <h4>Comensales: {{reserva.cantidad}}</h4><br>\r\n        <h4>Tipo: {{reserva.tipo}}</h4><br>\r\n      \r\n        \r\n        <ion-label style=\"margin-left: 5%; margin-right: 5%; \">Mesas de ese tipo disponibles:</ion-label>\r\n        \r\n\r\n        <ion-item *ngIf=\"reserva.tipo=='Vip'\" style=\"margin-left: 5%; margin-right: 5%; background-color: rgba(128, 128, 128, 0.575);\">\r\n          <ion-select [(ngModel)]=\"mesaV\" class=\"form-control\" style=\"width: 12rem;\">\r\n            <ion-select-option [value]=\"item\" *ngFor=\"let item of mesasVip\">Mesa {{item.numero}}</ion-select-option>\r\n          </ion-select>   \r\n        </ion-item><br><br>\r\n\r\n        <ion-item  *ngIf=\"reserva.tipo=='Estandar'\" style=\"margin-left: 5%; margin-right: 5%; background-color: rgba(128, 128, 128, 0.575);\">\r\n          <ion-select [(ngModel)]=\"mesaE\" class=\"form-control\" style=\"width: 12rem;\">\r\n            <ion-select-option [value]=\"item\" *ngFor=\"let item of mesasEstandar\">Mesa {{item.numero}}</ion-select-option>\r\n          </ion-select>   \r\n        </ion-item><br><br>\r\n\r\n        <ion-item  *ngIf=\"reserva.tipo=='Discapacitados'\" style=\"margin-left: 5%; margin-right: 5%; background-color: rgba(128, 128, 128, 0.575);\">\r\n          <ion-select [(ngModel)]=\"mesaD\" class=\"form-control\" style=\"width: 12rem;\">\r\n            <ion-select-option [value]=\"item\" *ngFor=\"let item of mesasDisc\">Mesa {{item.numero}}</ion-select-option>\r\n          </ion-select>   \r\n        </ion-item><br><br>\r\n\r\n        \r\n        <ion-button (click)=\"subir(reserva)\" expand=\"full\" color=\"success\">Aceptar reserva</ion-button>\r\n        <ion-button (click)=\"eliminar(reserva)\" expand=\"full\" color=\"warning\">Rechazar reserva</ion-button>\r\n\r\n     \r\n      </div>\r\n    </ion-list> \r\n  </ng-container>  \r\n    \r\n  <ng-container *ngIf=\"ver=='Dia'\" >\r\n  <ion-list>\r\n    <div style=\"border-top: 0.1rem black solid; margin-left: 5%; margin-right: 5%; background-color: rgba(128, 128, 128, 0.575);margin-top: 2rem;\" *ngFor=\"let reserva of reservasDelDia\">     \r\n      \r\n      \r\n        <h4>Cliente: {{reserva.nombreCliente}}</h4><br>\r\n        <h4>Fecha: {{reserva.fecha}}</h4><br>\r\n        <h4>Hora: {{reserva.hora}}</h4><br>\r\n      <h4>Mesa: {{reserva.mesa.numero}}</h4><br>      \r\n      \r\n\r\n      \r\n\r\n      \r\n      \r\n\r\n   \r\n    </div>\r\n  </ion-list> \r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"ver=='Con'\" >\r\n    <ion-list>\r\n      <div style=\"border-top: 0.1rem black solid; margin-left: 5%; margin-right: 5%;background-color: rgba(128, 128, 128, 0.575);margin-top: 2rem;\" *ngFor=\"let reserva of reservasConfirmadas\">     \r\n        \r\n        \r\n          <h4>Cliente: {{reserva.nombreCliente}}</h4><br>\r\n          <h4>Fecha: {{reserva.fecha}}</h4><br>\r\n          <h4>Hora: {{reserva.hora}}</h4><br>\r\n        <h4>Mesa: {{reserva.mesa.numero}}</h4><br>         \r\n        \r\n  \r\n     \r\n      </div>\r\n    </ion-list> \r\n\r\n  </ng-container>\r\n\r\n  <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n    <ion-icon name=\"power\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/respuesta-reservas/respuesta-reservas.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/respuesta-reservas/respuesta-reservas.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-left: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9yZXNwdWVzdGEtcmVzZXJ2YXMvRTpcXERlc2Nhcmdhc1xcTWFzdGVyUHJlXFxNYXN0ZXJQcmUvc3JjXFxhcHBcXHBhZ2luYXNcXHJlc3B1ZXN0YS1yZXNlcnZhc1xccmVzcHVlc3RhLXJlc2VydmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9yZXNwdWVzdGEtcmVzZXJ2YXMvcmVzcHVlc3RhLXJlc2VydmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn0iXX0= */"

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
/* harmony import */ var src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/alert.service */ "./src/app/servicios/alert.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");
/* harmony import */ var src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/reservas.service */ "./src/app/servicios/reservas.service.ts");
/* harmony import */ var src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/toast.service */ "./src/app/servicios/toast.service.ts");










var RespuestaReservasPage = /** @class */ (function () {
    function RespuestaReservasPage(datePipe, route, auth, bda, bdaMEsas, alert, toast, fcm) {
        var _this = this;
        this.datePipe = datePipe;
        this.route = route;
        this.auth = auth;
        this.bda = bda;
        this.bdaMEsas = bdaMEsas;
        this.alert = alert;
        this.toast = toast;
        this.fcm = fcm;
        this.fecha = new Date();
        this.mesaE = null;
        this.mesaV = null;
        this.mesaD = null;
        this.bda.getReservas().subscribe(function (list) {
            var fech = _this.datePipe.transform(_this.fecha, 'dd/MM/yyyy');
            var resA = new Array();
            var resD = new Array();
            var resC = new Array();
            _this.reservas = list;
            list.filter(function (elem) {
                if (elem.estado == "pendiente") {
                    resA.push(elem);
                }
                else if (elem.estado == "confirmada" && elem.fecha == fech) {
                    resD.push(elem);
                    console.log(elem);
                }
                else if (elem.estado == "confirmada" && elem.fecha != fech) {
                    resC.push(elem);
                }
            });
            _this.reservasDelDia = resD;
            _this.reservasAResponder = resA;
            _this.reservasConfirmadas = resC;
            _this.reservasDelDia.sort(function (a, b) { return Number(Date.parse(a.hora.toString())) - Number(Date.parse(b.hora.toString())); });
            _this.reservasAResponder.sort(function (a, b) { return Number(Date.parse(a.fecha2.toString())) - Number(Date.parse(b.fecha2.toString())); });
            _this.reservasConfirmadas.sort(function (a, b) { return Number(Date.parse(a.fecha2.toString())) - Number(Date.parse(b.fecha2.toString())); });
            _this.reservasAResponder.reverse();
            _this.reservasConfirmadas.reverse();
        });
        this.bdaMEsas.devolverListadoMesas().subscribe(function (lista) {
            var di = new Array();
            var vi = new Array();
            var es = new Array();
            lista.filter(function (ele) {
                if (ele.tipo == "Estandar") {
                    es.push(ele);
                }
                else if (ele.tipo == "Vip") {
                    vi.push(ele);
                }
                else {
                    di.push(ele);
                }
            });
            _this.mesasDisc = di;
            _this.mesasEstandar = es;
            _this.mesasVip = vi;
            _this.mesasVip.sort(function (a, b) { return a.numero - b.numero; });
            _this.mesasEstandar.sort(function (a, b) { return a.numero - b.numero; });
            _this.mesasDisc.sort(function (a, b) { return a.numero - b.numero; });
            _this.ver = "Sol";
        });
    }
    RespuestaReservasPage.prototype.ngOnInit = function () {
    };
    RespuestaReservasPage.prototype.subir = function (res) {
        if (res.tipo == "Vip") {
            if (this.mesaV == null) {
                this.alert.mensaje("Error", "Debe seleccionar una mesa");
            }
            else {
                res.mesa = this.mesaV;
                res.estado = "confirmada";
                this.bda.updateReserva(res);
                this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día " + res.fecha, 'notificacionCliente');
            }
        }
        else if (res.tipo == "Estandar") {
            if (this.mesaE == null) {
                this.alert.mensaje("Error", "Debe seleccionar una mesa");
            }
            else {
                res.mesa = this.mesaE;
                res.estado = "confirmada";
                this.bda.updateReserva(res);
                this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día " + res.fecha, 'notificacionCliente');
            }
        }
        else {
            if (this.mesaD == null) {
                console.log(this.mesaD);
                this.alert.mensaje("Error", "Debe seleccionar una mesa");
            }
            else {
                res.mesa = this.mesaD;
                res.estado = "confirmada";
                this.bda.updateReserva(res);
                this.toast.confirmationToast("Se confirmó la reserva");
                this.fcm.enviarMensaje("Reserva confirmada", "Se confirmó su reserva para el día " + res.fecha, 'notificacionCliente');
            }
        }
    };
    RespuestaReservasPage.prototype.eliminar = function (reserva) {
        reserva.estado = "rechazada";
        this.bda.updateReserva(reserva);
        this.toast.confirmationToast("Se rechazó la reserva");
        this.fcm.enviarMensaje("Reserva rechazada", "Se rechazó su reserva para el día " + reserva.fecha, 'notificacionCliente');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_8__["ReservasService"], src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_7__["MesasService"],
            src_app_servicios_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_servicios_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_6__["FcmService"]])
    ], RespuestaReservasPage);
    return RespuestaReservasPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-respuesta-reservas-respuesta-reservas-module.js.map