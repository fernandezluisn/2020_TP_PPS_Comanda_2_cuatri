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

module.exports = "<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('aceptar-cliente')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"person-add\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n        <h2>Activar un cliente</h2>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-empleado')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-icon name=\"restaurant\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n        <h2>Dar de alta empleado</h2>\r\n      </ion-card>\r\n  \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('cuenta')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"logo-usd\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Cobrar Una mesa</h2>\r\n  </ion-card>\r\n\r\n \r\n\r\n \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-supervisor')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n    <h2>Dar de alta supervisor</h2>\r\n  </ion-card>\r\n\r\n \r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('confirmar-reserva')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"calendar\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Confirmar reservas</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('mozo-aceptar')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"logo-model-s\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Delivery</h2>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Mover('alta-mesa')\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"add-circle\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n    <h2>Agregar mesa</h2>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"ion-activatable\" (click)=\"this.Encuesta()\" [ngClass]=\"{ 'card-vertical': !this.platform.isLandscape(), 'card-horizontal': this.platform.isLandscape() }\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"bookmarks\" [ngClass]=\"{ 'icon-horizontal': this.platform.isLandscape(), 'icon-vertical': !this.platform.isLandscape() }\"></ion-icon>\r\n      <h2>Encuesta</h2>\r\n    </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/paginas/home-supervisor/home-supervisor.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/home-supervisor/home-supervisor.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(60, 97, 112);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: white; }\n\n.card-vertical {\n  height: 30%;\n  width: 100%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 13.5%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #fdfdfd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLXN1cGVydmlzb3IvRTpcXERlc2Nhcmdhc1xcbWFzdGVyNS9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1zdXBlcnZpc29yXFxob21lLXN1cGVydmlzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLDhCQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2hvbWUtc3VwZXJ2aXNvci9ob21lLXN1cGVydmlzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjAsIDk3LCAxMTIpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5jYXJkLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW9uLXJpcHBsZS1lZmZlY3Qge1xyXG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDEzLjUlO1xyXG59XHJcblxyXG4uaWNvbi1ob3Jpem9udGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qbGluZS1oZWlnaHQ6IDBweDsqL1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxufSJdfQ== */"

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




var HomeSupervisorPage = /** @class */ (function () {
    function HomeSupervisorPage(platform, route) {
        this.platform = platform;
        this.route = route;
    }
    HomeSupervisorPage.prototype.ngOnInit = function () {
    };
    HomeSupervisorPage.prototype.Mover = function (endpoint) {
        this.route.navigate([endpoint]);
    };
    HomeSupervisorPage.prototype.Encuesta = function () {
        this.route.navigate(['encuesta-supervisor']);
    };
    HomeSupervisorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-supervisor',
            template: __webpack_require__(/*! ./home-supervisor.page.html */ "./src/app/paginas/home-supervisor/home-supervisor.page.html"),
            styles: [__webpack_require__(/*! ./home-supervisor.page.scss */ "./src/app/paginas/home-supervisor/home-supervisor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeSupervisorPage);
    return HomeSupervisorPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-supervisor-home-supervisor-module.js.map