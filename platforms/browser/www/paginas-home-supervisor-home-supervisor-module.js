(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-supervisor-home-supervisor-module"],{

/***/ "./src/app/paginas/home-supervisor/home-supervisor.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/home-supervisor/home-supervisor.module.ts ***!
  \*******************************************************************/
/*! exports provided: HomeSupervisorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSupervisorPageModule", function() { return HomeSupervisorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_supervisor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-supervisor.page */ "./src/app/paginas/home-supervisor/home-supervisor.page.ts");







var routes = [
    {
        path: '',
        component: _home_supervisor_page__WEBPACK_IMPORTED_MODULE_6__["HomeSupervisorPage"]
    }
];
var HomeSupervisorPageModule = /** @class */ (function () {
    function HomeSupervisorPageModule() {
    }
    HomeSupervisorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_supervisor_page__WEBPACK_IMPORTED_MODULE_6__["HomeSupervisorPage"]]
        })
    ], HomeSupervisorPageModule);
    return HomeSupervisorPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-supervisor/home-supervisor.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/home-supervisor/home-supervisor.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('aceptar-cliente')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"person-add\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n        <h2>Activar un cliente</h2>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-empleado')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n        <h2>Dar de alta empleado</h2>\r\n      </ion-card>\r\n\r\n      \r\n  \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('cuenta')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"logo-usd\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Cobrar Una mesa</h2>\r\n  </ion-card>\r\n\r\n \r\n\r\n \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-supervisor')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n    <h2>Dar de alta supervisor</h2>\r\n  </ion-card>\r\n\r\n \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('respuesta-reservas')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"calendar\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Confirmar reservas</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('mozo-aceptar')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"logo-model-s\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Delivery</h2>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-mesa')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"add-circle\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Agregar mesa</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Encuesta()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.EncuestaCliente()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n      <h2>Encuesta cliente</h2>\r\n    </ion-card>\r\n\r\n    <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n      <ion-icon name=\"power\"></ion-icon>\r\n    </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-supervisor/home-supervisor.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/home-supervisor/home-supervisor.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(60, 97, 112);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: white; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLXN1cGVydmlzb3IvRTpcXERlc2Nhcmdhc1xcTWFzdGVyUHJlXFxNYXN0ZXJQcmUvc3JjXFxhcHBcXHBhZ2luYXNcXGhvbWUtc3VwZXJ2aXNvclxcaG9tZS1zdXBlcnZpc29yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNsQiw4QkFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixZQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLXN1cGVydmlzb3IvaG9tZS1zdXBlcnZpc29yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRFTlRcclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDYwLCA5NywgMTEyKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMy41JTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginas/home-supervisor/home-supervisor.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/paginas/home-supervisor/home-supervisor.page.ts ***!
  \*****************************************************************/
/*! exports provided: HomeSupervisorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSupervisorPage", function() { return HomeSupervisorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/mesas.service */ "./src/app/servicios/mesas.service.ts");
/* harmony import */ var src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/reservas.service */ "./src/app/servicios/reservas.service.ts");
/* harmony import */ var src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/fcm.service */ "./src/app/servicios/fcm.service.ts");









var HomeSupervisorPage = /** @class */ (function () {
    function HomeSupervisorPage(mesaService, datePipe, platform, route, auth, reservaService, fcmService) {
        var _this = this;
        this.mesaService = mesaService;
        this.datePipe = datePipe;
        this.platform = platform;
        this.route = route;
        this.auth = auth;
        this.reservaService = reservaService;
        this.fcmService = fcmService;
        this.fecha = new Date();
        this.mesaService.getMesas().subscribe(function (mesas) {
            _this.mesas = mesas;
            _this.chequearReservas();
        });
    }
    HomeSupervisorPage.prototype.ngOnInit = function () {
    };
    HomeSupervisorPage.prototype.Mover = function (endpoint) {
        this.route.navigate([endpoint]);
    };
    HomeSupervisorPage.prototype.Encuesta = function () {
        this.route.navigate(['encuesta-supervisor']);
    };
    HomeSupervisorPage.prototype.EncuestaCliente = function () {
        this.route.navigate(['graficos-cliente']);
    };
    HomeSupervisorPage.prototype.chequearReservas = function () {
        var _this = this;
        var fech1 = this.datePipe.transform(this.fecha, 'dd/MM/yyyy');
        var fech2 = this.datePipe.transform(this.fecha, 'yyyy-MM-dd');
        this.fecha.setMinutes(this.fecha.getMinutes() - 40);
        var resD = new Array();
        this.reservaService.getReservas().subscribe(function (list) {
            list.filter(function (res) {
                if (res.fecha == fech1 && res.estado == "confirmada") {
                    resD.push(res);
                }
                else if (Number(Date.parse(res.fecha2)) < Number(Date.parse(fech2)) && res.estado != "expirada") {
                    res.estado = "expirada";
                    _this.reservaService.updateReserva(res);
                }
            });
            resD.forEach(function (resDia) {
                var hor = new Date(resDia.fecha + " " + resDia.hora);
                if (hor > _this.fecha) {
                    _this.mesas.filter(function (mesa) {
                        if (mesa.numero == resDia.mesa.numero && mesa.estado == "Vacia" && resDia.situacion == "a reservar") {
                            mesa.estado = "Reservada";
                            _this.mesaService.actualizarMesa(mesa);
                            resDia.situacion = "hecha";
                            resDia.mesa = mesa;
                            _this.reservaService.updateReserva(resDia);
                            _this.fcmService.enviarMensaje("Mesa" + mesa.numero, "Le informamos que se encuentra reservada la mesa " + mesa.numero, 'notificacionListaEspera');
                        }
                        else if (mesa.numero == resDia.mesa.numero && mesa.estado == "Ocupada" && resDia.situacion == "a reservar") {
                            _this.fcmService.enviarMensaje("Mesa" + mesa.numero, "Le informamos que se encuentra reservada la mesa " + mesa.numero + ", debe desocuparla en un plazo menor a 40 minutos.", 'notificacionListaEspera');
                        }
                    });
                }
            });
        });
    };
    HomeSupervisorPage.prototype.salir = function () {
        this.auth.LogOut();
        this.route.navigate(['log-in']);
    };
    HomeSupervisorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-supervisor',
            template: __webpack_require__(/*! ./home-supervisor.page.html */ "./src/app/paginas/home-supervisor/home-supervisor.page.html"),
            styles: [__webpack_require__(/*! ./home-supervisor.page.scss */ "./src/app/paginas/home-supervisor/home-supervisor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_mesas_service__WEBPACK_IMPORTED_MODULE_6__["MesasService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_7__["ReservasService"],
            src_app_servicios_fcm_service__WEBPACK_IMPORTED_MODULE_8__["FcmService"]])
    ], HomeSupervisorPage);
    return HomeSupervisorPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-supervisor-home-supervisor-module.js.map