(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-juego-juego-module"],{

/***/ "./src/app/interfaces/pais.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/pais.ts ***!
  \************************************/
/*! exports provided: Pais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pais", function() { return Pais; });
var Pais = /** @class */ (function () {
    function Pais(nom, pista, foto) {
        this.foto = foto;
        this.nombre = nom;
        this.pista = pista;
    }
    return Pais;
}());



/***/ }),

/***/ "./src/app/paginas/juego/juego.module.ts":
/*!***********************************************!*\
  !*** ./src/app/paginas/juego/juego.module.ts ***!
  \***********************************************/
/*! exports provided: JuegoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPageModule", function() { return JuegoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _juego_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./juego.page */ "./src/app/paginas/juego/juego.page.ts");







var routes = [
    {
        path: '',
        component: _juego_page__WEBPACK_IMPORTED_MODULE_6__["JuegoPage"]
    }
];
var JuegoPageModule = /** @class */ (function () {
    function JuegoPageModule() {
    }
    JuegoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_juego_page__WEBPACK_IMPORTED_MODULE_6__["JuegoPage"]]
        })
    ], JuegoPageModule);
    return JuegoPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/juego/juego.page.html":
/*!***********************************************!*\
  !*** ./src/app/paginas/juego/juego.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"container\" [hidden]=\"!resultado\">\r\n    <div  class=\"card\">\r\n        <img class=\"img-thumbnail\"   src=\"{{paisE.foto}}\" alt=\"Avatar\" style=\"width:100%\">\r\n    </div>\r\n    <h2 style=\"text-align: center;\"> Pista: {{paisE.pista}}</h2>\r\n    <h2 style=\"text-align: center;\"></h2>\r\n\r\n    <ion-button (click)=\"ganar(string1)\" color=\"primary\" expand=\"full\" style=\"margin-top: 2rem;\">{{string1}}</ion-button>\r\n    <ion-button (click)=\"ganar(string2)\" color=\"success\" expand=\"full\" style=\"margin-top: 2rem;\">{{string2}}</ion-button>\r\n    <ion-button (click)=\"ganar(string3)\" color=\"danger\" expand=\"full\" style=\"margin-top: 2rem;\">{{string3}}</ion-button>\r\n    <ion-button (click)=\"ganar(string4)\" color=\"dark\" expand=\"full\" style=\"margin-top: 2rem;\">{{string4}}</ion-button>\r\n\r\n    \r\n</div>\r\n\r\n<div [hidden]=\"resultado\" style=\"height: 40rem; justify-content: center; text-align: center;\">\r\n    <h1 style=\"margin-top: 13rem;\" [hidden]=\"ganarB\">Ganaste un descuento!!</h1>\r\n    <h1 style=\"margin-top: 13rem;\" [hidden]=\"perder\">Perdiste!!</h1>\r\n    <h2 [hidden]=\"perder\" style=\"margin-top: 2rem;\">La respuesta era {{paisE.nombre}} </h2>\r\n    \r\n    <ion-button (click)=\"volver()\" color=\"dark\" expand=\"full\" style=\"margin-top: 2rem;\">Volver a la página principal</ion-button>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/juego/juego.page.scss":
/*!***********************************************!*\
  !*** ./src/app/paginas/juego/juego.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvanVlZ28vanVlZ28ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paginas/juego/juego.page.ts":
/*!*********************************************!*\
  !*** ./src/app/paginas/juego/juego.page.ts ***!
  \*********************************************/
/*! exports provided: JuegoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPage", function() { return JuegoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/pais */ "./src/app/interfaces/pais.ts");
/* harmony import */ var src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/mesa-cliente.service */ "./src/app/servicios/mesa-cliente.service.ts");





var JuegoPage = /** @class */ (function () {
    function JuegoPage(bda, tomarId, route) {
        var _this = this;
        this.bda = bda;
        this.tomarId = tomarId;
        this.route = route;
        this.resultado = true;
        this.perder = true;
        this.ganarB = true;
        this.idMesaCliente = this.tomarId.snapshot.paramMap.get('idMesaCliente');
        this.lista = new Array();
        this.bda.devolverListadoMesas().subscribe(function (lista) {
            lista.filter(function (mesa) {
                if (mesa.id == _this.idMesaCliente)
                    _this.mesaCliente = mesa;
            });
        });
        this.jugadorR = JSON.parse(localStorage.getItem('usuario'));
        this.alemania = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]('Alemania', "Participó de dos guerras mundiales, ganó cuatro mundiales de futbol y queda en el centro de Europa.", "../../assets/imagenes/paises/alemania.jpg");
        this.lista.push(this.alemania);
        this.andorra = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]('Andorra', "Se encuentra en los Pirineos entre España y Francia.", "../../assets/imagenes/paises/Andorra.jpg");
        this.lista.push(this.andorra);
        this.arabiaS = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Arabia Saudita", "Aquí vivió Mahoma", "../../assets/imagenes/paises/Arabia Saudita.jpg");
        this.lista.push(this.arabiaS);
        this.australia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Australia", "El país de los canguros.", "../../assets/imagenes/paises/Australia.jpg");
        this.lista.push(this.australia);
        this.bolivia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Bolivia", "Su nombre es en honor a uno de los libertadores del continente.", "../../assets/imagenes/paises/Bolivia.jpg");
        this.lista.push(this.bolivia);
        this.brasil = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Brasil", "La tierra del carnaval.", "../../assets/imagenes/paises/Brasil.jpg");
        this.lista.push(this.brasil);
        this.chile = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Chile", "San Martín cruzó la cordillera para pelear allí contra los españoles.", "../../assets/imagenes/paises/Chile.jpg");
        this.lista.push(this.chile);
        this.china = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("China", "El país con más habitantes del mundo.", "../../assets/imagenes/paises/China.jpg");
        this.lista.push(this.china);
        this.corea = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Corea del sur", "Queda al sur de otro país que se llama igual y con el cual fueron una sola nación.", "../../assets/imagenes/paises/Corea del sur.jpg");
        this.lista.push(this.corea);
        this.españa = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("España", "La tierra de los reyes catolicos, Cervantes y el quijote.", "../../assets/imagenes/paises/España.jpg");
        this.lista.push(this.españa);
        this.francia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Francia", "La tierra de Napoleón.", "../../assets/imagenes/paises/Francia.jpg");
        this.lista.push(this.francia);
        this.inglaterra = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Inglaterra", "Tierra de piratas y corsarios.", "../../assets/imagenes/paises/Inglaterra.jpg");
        this.lista.push(this.inglaterra);
        this.italia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Italia", "El país de la lasaña.", "../../assets/imagenes/paises/Italia.jpg");
        this.lista.push(this.italia);
        this.marruecos = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Marruecos", "Queda en el norte de Africa.", "../../assets/imagenes/paises/Marruecos.jpg");
        this.lista.push(this.marruecos);
        this.mejico = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Mejico", "La tierra de los Aztecas.", "../../assets/imagenes/paises/Mejico.jpg");
        this.lista.push(this.mejico);
        this.mongolia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Mongolia", "Territorio de pueblos nomades que conquistaron en 25 años más territorio que los romanos en 400.", "../../assets/imagenes/paises/Mongolia.jpg");
        this.lista.push(this.mongolia);
        this.peru = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Perú", "La tierra de los incas.", "../../assets/imagenes/paises/Peru.jpg");
        this.lista.push(this.peru);
        this.rusia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Rusia", "La tierra de los zares.", "../../assets/imagenes/paises/Rusia.jpg");
        this.lista.push(this.rusia);
        this.turquia = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Turquía", "La tierra de Mehmed.", "../../assets/imagenes/paises/Turquia.jpg");
        this.lista.push(this.turquia);
        this.uruguay = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Uruguay", "Queda del otro lado del río más ancho del mundo.", "../../assets/imagenes/paises/Uruguay.jpg");
        this.lista.push(this.uruguay);
        this.ecuador = new src_app_interfaces_pais__WEBPACK_IMPORTED_MODULE_3__["Pais"]("Ecuador", "Se llama igual que la línea imeginaria que parte el mundo en dos.", "../../assets/imagenes/paises/Ecuador.jpg");
        this.lista.push(this.ecuador);
        this.lista.push(this.alemania);
        this.lista.push(this.andorra);
        this.lista.push(this.arabiaS);
        this.lista.push(this.australia);
        this.lista.push(this.bolivia);
        this.lista.push(this.brasil);
        this.lista.push(this.chile);
        this.lista.push(this.china);
        this.lista.push(this.corea);
        this.lista.push(this.españa);
        this.lista.push(this.francia);
        this.lista.push(this.inglaterra);
        this.lista.push(this.italia);
        this.lista.push(this.marruecos);
        this.lista.push(this.mejico);
        this.lista.push(this.mongolia);
        this.lista.push(this.peru);
        this.lista.push(this.rusia);
        this.lista.push(this.turquia);
        this.lista.push(this.uruguay);
        this.lista.push(this.ecuador);
    }
    JuegoPage.prototype.ngOnInit = function () {
        this.elegirRelleno();
    };
    JuegoPage.prototype.elegirRelleno = function () {
        this.paisE = this.elegirPais();
        var p2;
        var p3;
        var p4;
        do {
            p2 = this.elegirPais();
        } while (this.paisE.nombre == p2.nombre);
        do {
            p3 = this.elegirPais();
        } while (this.paisE.nombre == p3.nombre || p2.nombre == p3.nombre);
        do {
            p4 = this.elegirPais();
        } while (this.paisE.nombre == p4.nombre || p2.nombre == p4.nombre || p4.nombre == p3.nombre);
        var a = Math.floor(Math.random() * 10);
        switch (a) {
            case 7:
                this.string1 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 8:
                this.string1 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 9:
                this.string1 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 4:
                this.string2 = this.paisE.nombre;
                this.string1 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 5:
                this.string2 = this.paisE.nombre;
                this.string1 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 6:
                this.string2 = this.paisE.nombre;
                this.string1 = p2.nombre;
                this.string3 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 2:
                this.string3 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string1 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 3:
                this.string3 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string1 = p3.nombre;
                this.string4 = p4.nombre;
                break;
            case 0:
                this.string4 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string3 = p3.nombre;
                this.string1 = p4.nombre;
                break;
            case 1:
                this.string4 = this.paisE.nombre;
                this.string2 = p2.nombre;
                this.string3 = p3.nombre;
                this.string1 = p4.nombre;
                break;
        }
    };
    JuegoPage.prototype.elegirPais = function () {
        var p;
        for (var i = 0; i <= Math.floor((Math.random() * 100)); i++) {
            p = this.lista[i];
        }
        return p;
    };
    JuegoPage.prototype.ganar = function (string) {
        this.resultado = false;
        if (string == this.paisE.nombre) {
            this.perder = true;
            this.ganarB = false;
            this.mesaCliente.juegoDescuento = 5;
        }
        else {
            this.perder = false;
            this.ganarB = true;
            this.mesaCliente.juegoDescuento = 0;
        }
        this.bda.actualizarMesa(this.mesaCliente);
    };
    JuegoPage.prototype.volver = function () {
        this.route.navigate(["home-cliente"]);
    };
    JuegoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juego',
            template: __webpack_require__(/*! ./juego.page.html */ "./src/app/paginas/juego/juego.page.html"),
            styles: [__webpack_require__(/*! ./juego.page.scss */ "./src/app/paginas/juego/juego.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_mesa_cliente_service__WEBPACK_IMPORTED_MODULE_4__["MesaClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JuegoPage);
    return JuegoPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-juego-juego-module.js.map