(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-metre-home-metre-module"],{

/***/ "./src/app/paginas/home-metre/home-metre.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/paginas/home-metre/home-metre.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeMetrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMetrePageModule", function() { return HomeMetrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_metre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-metre.page */ "./src/app/paginas/home-metre/home-metre.page.ts");







var routes = [
    {
        path: '',
        component: _home_metre_page__WEBPACK_IMPORTED_MODULE_6__["HomeMetrePage"]
    }
];
var HomeMetrePageModule = /** @class */ (function () {
    function HomeMetrePageModule() {
    }
    HomeMetrePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_metre_page__WEBPACK_IMPORTED_MODULE_6__["HomeMetrePage"]]
        })
    ], HomeMetrePageModule);
    return HomeMetrePageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-metre/home-metre.page.html":
/*!*********************************************************!*\
  !*** ./src/app/paginas/home-metre/home-metre.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>METRE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"dark\"> \r\n\r\n  <br>\r\n  <ion-list-header lines=\"inset\" color=\"dark\">\r\n    <ion-label>LISTA DE ESPERA</ion-label>\r\n  </ion-list-header>\r\n<div *ngFor=\"let cliente of this.clientesEnEspera\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label style=\"color:black\" >{{cliente.nombre}} {{cliente.apellido}}</ion-label>\r\n    <ion-button fill=\"outline\" (click)=\"aceptarCliente(cliente)\">ACEPTAR</ion-button>\r\n  </ion-item>\r\n</div>\r\n<div *ngIf=\"clientesEnEspera.length === 0\">\r\n  <ion-item color=\"dark\">\r\n    <ion-label >Sin clientes en espera</ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color='dark' expand=\"full\" (click)='this.AltaCliente()' >Alta Cliente</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-metre/home-metre.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/paginas/home-metre/home-metre.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaG9tZS1tZXRyZS9ob21lLW1ldHJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/home-metre/home-metre.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/paginas/home-metre/home-metre.page.ts ***!
  \*******************************************************/
/*! exports provided: HomeMetrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMetrePage", function() { return HomeMetrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/reservas.service */ "./src/app/servicios/reservas.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");





var HomeMetrePage = /** @class */ (function () {
    function HomeMetrePage(reservasService, authService, route) {
        this.reservasService = reservasService;
        this.authService = authService;
        this.route = route;
        this.clientesEnEspera = [];
        this.cantClientesEnEspera = 100;
        this.clientesEnEspera = [];
    }
    HomeMetrePage.prototype.ngOnInit = function () {
        var _this = this;
        //Obtengo los clientes en estado lista de espera y asigno la cantidad total en la variable "cantClientesEnEspera" para poder darme cuenta cuando hay un cliente nuevo
        this.authService.getUsuariosListaEspera().subscribe(function (usuarios) {
            _this.clientesEnEspera = [];
            console.log(usuarios);
            usuarios.forEach(function (cliente) {
                if (cliente.estado === "EnListaDeEspera") {
                    _this.clientesEnEspera.push(cliente);
                }
            });
            if (_this.clientesEnEspera.length > _this.cantClientesEnEspera) {
                //TODO -> PUSH NOTIFICATION
                alert("nuevoCliente");
            }
            _this.cantClientesEnEspera = _this.clientesEnEspera.length;
            console.log(_this.clientesEnEspera);
        });
    };
    HomeMetrePage.prototype.Eliminar = function (id) {
        this.reservasService.EliminarListaEspera(id);
    };
    HomeMetrePage.prototype.aceptarCliente = function (cliente) {
        cliente.estado = "aceptado";
        this.authService.ModificarUsuario(cliente);
    };
    HomeMetrePage.prototype.AltaCliente = function () {
        this.route.navigate(['alta-cliente']);
    };
    HomeMetrePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-metre',
            template: __webpack_require__(/*! ./home-metre.page.html */ "./src/app/paginas/home-metre/home-metre.page.html"),
            styles: [__webpack_require__(/*! ./home-metre.page.scss */ "./src/app/paginas/home-metre/home-metre.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_reservas_service__WEBPACK_IMPORTED_MODULE_3__["ReservasService"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeMetrePage);
    return HomeMetrePage;
}());



/***/ }),

/***/ "./src/app/servicios/reservas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/reservas.service.ts ***!
  \***********************************************/
/*! exports provided: ReservasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasService", function() { return ReservasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/servicios/auth.service.ts");





var ReservasService = /** @class */ (function () {
    function ReservasService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    ReservasService.prototype.getReservas = function () {
        return this.db.collection('reservas').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reservas) {
            return reservas.map(function (reserva) {
                var data = reserva.payload.doc.data();
                data.id = reserva.payload.doc.id;
                return data;
            });
        }));
    };
    ReservasService.prototype.getReservasPendientes = function () {
        return this.db.collection('reservas', function (ref) { return ref.where('estado', '==', 'pendiente'); }).snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reservas) {
            return reservas.map(function (reserva) {
                var data = reserva.payload.doc.data();
                data.id = reserva.payload.doc.id;
                return data;
            });
        }));
    };
    ReservasService.prototype.addReserva = function (reserva) {
        var _this = this;
        return new Promise(function (resolve, rejected) {
            _this.db.collection('reservas').add(reserva).then(function (ret) {
                resolve(ret);
            }).catch(function (err) {
                rejected(err);
            });
        });
    };
    ReservasService.prototype.updateReserva = function (reserva) {
        return this.db.collection('reservas').doc(reserva.id).set(reserva);
    };
    ReservasService.prototype.entrarListaEspera = function (cantidad) {
        var usr = this.authService.getUsuario();
        var id = usr['id'];
        var nombre = usr['nombre'];
        var fecha = new Date();
        var anio = fecha.getFullYear().toString();
        var mes = fecha.getMonth().toString();
        var dia = fecha.getDate().toString();
        var hora = fecha.getHours().toString();
        var minuto = fecha.getMinutes().toString();
        this.db.collection('lista-espera').add({
            nombre: nombre,
            ingreso: anio + '-' + mes + '-' + dia + ' ' + hora + ':' + minuto,
            cliente: id,
            cantidad: cantidad
        }).then(function (ret) { console.log(ret); }).catch(function (err) { console.log(err); });
    };
    ReservasService.prototype.getListaEspera = function () {
        return this.db.collection('lista-espera').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (esperas) {
            return esperas.map(function (espera) {
                var data = espera.payload.doc.data();
                data.id = espera.payload.doc.id;
                return data;
            });
        }));
    };
    ReservasService.prototype.EliminarListaEspera = function (id) {
        this.db.doc('lista-espera/' + id).delete().then(function (ret) { console.log(ret); });
    };
    ReservasService.prototype.EliminarDeListaEsperaByIdCliente = function (idCliente, listaEspera) {
        var _this = this;
        listaEspera.map(function (espera) {
            if (espera.cliente === idCliente) {
                _this.db.doc('lista-espera/' + espera.id).delete();
            }
        });
    };
    ReservasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ReservasService);
    return ReservasService;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-metre-home-metre-module.js.map