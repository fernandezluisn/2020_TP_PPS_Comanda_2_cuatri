(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-encuesta-supervisor-encuesta-supervisor-module"],{

/***/ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/encuesta-supervisor/encuesta-supervisor.module.ts ***!
  \***************************************************************************/
/*! exports provided: EncuestaSupervisorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaSupervisorPageModule", function() { return EncuestaSupervisorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _encuesta_supervisor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta-supervisor.page */ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.ts");







var routes = [
    {
        path: '',
        component: _encuesta_supervisor_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaSupervisorPage"]
    }
];
var EncuestaSupervisorPageModule = /** @class */ (function () {
    function EncuestaSupervisorPageModule() {
    }
    EncuestaSupervisorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_encuesta_supervisor_page__WEBPACK_IMPORTED_MODULE_6__["EncuestaSupervisorPage"]]
        })
    ], EncuestaSupervisorPageModule);
    return EncuestaSupervisorPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Encuesta Supervisor</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item lines=\"full\">\r\n        <ion-label>\r\n            <ion-button color='dark' (click)=\"this.EmpleadoSelect()\" expand=\"full\">Seleccionar Empleado</ion-button>\r\n        </ion-label>\r\n    \r\n        <ion-label >\r\n            <ion-label *ngIf=\"this.empleado == ''\">Sin Seleccionar</ion-label>\r\n            <ion-label *ngIf=\"this.empleado != ''\">{{this.empleado.nombre}} {{this.empleado.apellido}}</ion-label>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n\r\n  <ion-label>Del 1 al 10 que tan limpio mantiene su lugar de trabajo</ion-label>\r\n  <ion-item>\r\n    <ion-range [(ngModel)]=\"this.limpieza\" pin=\"true\" snaps=\"true\" ticks=\"false\" min=\"1\" max=\"10\"\r\n      color=\"primary\">\r\n      <ion-label slot=\"start\">1</ion-label>\r\n      <ion-label slot=\"end\">10</ion-label>\r\n    </ion-range>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n    <ion-radio-group [(ngModel)]=\"this.rapido\">\r\n      <ion-list-header>\r\n        <ion-label>¿Qué tan rapido hace sus tarea?</ion-label>\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Muy rapido</ion-label>\r\n        <ion-radio slot=\"start\" value=\"muy rapido\" checked></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Rapido</ion-label>\r\n        <ion-radio slot=\"start\" value=\"rapido\" checked></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>No destaca</ion-label>\r\n        <ion-radio slot=\"start\" value=\"no destaca\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label>Lento</ion-label>\r\n        <ion-radio slot=\"start\" value=\"lento\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Indique que destacaria del empleado</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Amabilidad con clientes</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"this.amabilidad_dest\" slot=\"start\" value=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Velocidad de atencion</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"this.velocidad_dest\" slot=\"start\" value=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Limpieza</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"this.limpieza_dest\" slot=\"start\" value=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Puntualidad</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"this.puntualidad_dest\" slot=\"start\" value=\"true\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-item>\r\n    <ion-label style=\"font-size: 12px;\">¿Se reciben malos comentarios de este empleado la ultima semana?</ion-label>\r\n    <ion-select [(ngModel)]=\"this.mal\" placeholder=\"Seleccione\">\r\n      <ion-select-option value=\"true\">Sí</ion-select-option>\r\n      <ion-select-option value=\"false\">No</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Añada alguna nota del empleado</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"this.comentarios\" maxlength=\"40\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  <ion-button (click)=\"this.enviarEncuesta()\" expand=\"full\">Enviar encuesta</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvZW5jdWVzdGEtc3VwZXJ2aXNvci9lbmN1ZXN0YS1zdXBlcnZpc29yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.ts ***!
  \*************************************************************************/
/*! exports provided: EncuestaSupervisorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaSupervisorPage", function() { return EncuestaSupervisorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/encuestas.service */ "./src/app/servicios/encuestas.service.ts");
/* harmony import */ var _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/firestorage.service */ "./src/app/servicios/firestorage.service.ts");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var EncuestaSupervisorPage = /** @class */ (function () {
    function EncuestaSupervisorPage(encuestasService, firestorageService, auth, alertController) {
        this.encuestasService = encuestasService;
        this.firestorageService = firestorageService;
        this.auth = auth;
        this.alertController = alertController;
        this.empleado = '';
        this.empleados = [];
        this.limpieza = 6;
        this.rapido = false;
        this.calidadBebida = false;
        this.atencion = false;
        this.destacado = false;
        this.salonYAmbiente = false;
        this.urlFoto1 = '';
        this.urlFoto2 = '';
        this.urlFoto3 = '';
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    EncuestaSupervisorPage.prototype.ngOnInit = function () {
        this.tomarEmpleados();
    };
    EncuestaSupervisorPage.prototype.tomarEmpleados = function () {
        var _this = this;
        this.auth.GetUsuarios().then(function (ret) {
            ret.forEach(function (usr) {
                var emp = usr.data();
                emp['id'] = usr.id;
                if (emp.activo && emp.cuil) {
                    _this.empleados.push(emp);
                    console.log(_this.empleados);
                }
            });
        });
    };
    EncuestaSupervisorPage.prototype.EmpleadoSelect = function () {
        this.presentAlertRadio();
    };
    EncuestaSupervisorPage.prototype.presentAlertRadio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var emp_mostrar, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emp_mostrar = [];
                        this.empleados.forEach(function (emp) {
                            emp_mostrar.push({
                                name: emp['nombre'],
                                type: 'radio',
                                label: emp['nombre'] + " " + emp['apellido'],
                                value: emp
                            });
                        });
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Selecciona un empleado?',
                                inputs: emp_mostrar,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Aceptar',
                                        handler: function (empleado) {
                                            _this.empleado = empleado;
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EncuestaSupervisorPage.prototype.enviarEncuesta = function () {
        console.log(this.empleado);
        this.encuestasService.addEncuestaDueño({
            idDueño: this.usuario.id,
            limpieza: this.limpieza,
            rapido: this.rapido,
            destacado: this.destacado,
            mal: this.mal === undefined ? null : this.mal === 'true' ? true : false,
            comentarios: this.comentarios === undefined ? null : this.comentarios,
            empleado: this.empleado['id'],
            amabilidad_dest: this.amabilidad_dest === undefined ? false : this.amabilidad_dest === 'true' ? true : false,
            velocidad_dest: this.amabilidad_dest === undefined ? false : this.amabilidad_dest === 'true' ? true : false,
            limpieza_dest: this.amabilidad_dest === undefined ? false : this.amabilidad_dest === 'true' ? true : false,
            puntualidad_dest: this.amabilidad_dest === undefined ? false : this.amabilidad_dest === 'true' ? true : false,
            fecha: new Date()
        }).then(function () {
            alert('Encuesta cargada exitosamente!');
        }).catch(function (error) { alert(error); });
    };
    EncuestaSupervisorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encuesta-supervisor',
            template: __webpack_require__(/*! ./encuesta-supervisor.page.html */ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.html"),
            styles: [__webpack_require__(/*! ./encuesta-supervisor.page.scss */ "./src/app/paginas/encuesta-supervisor/encuesta-supervisor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_encuestas_service__WEBPACK_IMPORTED_MODULE_2__["EncuestasService"], _servicios_firestorage_service__WEBPACK_IMPORTED_MODULE_3__["FirestorageService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], EncuestaSupervisorPage);
    return EncuestaSupervisorPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-encuesta-supervisor-encuesta-supervisor-module.js.map