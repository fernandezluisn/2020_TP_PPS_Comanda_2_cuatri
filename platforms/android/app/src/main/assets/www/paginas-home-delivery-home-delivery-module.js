(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-home-delivery-home-delivery-module"],{

/***/ "./src/app/paginas/home-delivery/home-delivery.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginas/home-delivery/home-delivery.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeDeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDeliveryPageModule", function() { return HomeDeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-delivery.page */ "./src/app/paginas/home-delivery/home-delivery.page.ts");







var routes = [
    {
        path: '',
        component: _home_delivery_page__WEBPACK_IMPORTED_MODULE_6__["HomeDeliveryPage"]
    }
];
var HomeDeliveryPageModule = /** @class */ (function () {
    function HomeDeliveryPageModule() {
    }
    HomeDeliveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_delivery_page__WEBPACK_IMPORTED_MODULE_6__["HomeDeliveryPage"]]
        })
    ], HomeDeliveryPageModule);
    return HomeDeliveryPageModule;
}());



/***/ }),

/***/ "./src/app/paginas/home-delivery/home-delivery.page.html":
/*!***************************************************************!*\
  !*** ./src/app/paginas/home-delivery/home-delivery.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('chat')\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"chatboxes\"></ion-icon>\r\n      <h2>Chat</h2>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('mozo-terminar')\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <h2>Estado de pedidos</h2>\r\n    </ion-card> \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-delivery/home-delivery.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/paginas/home-delivery/home-delivery.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  height: 50%; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 50%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWRlbGl2ZXJ5L0M6XFxVc2Vyc1xccmF1bC56YW1vcmFcXEFubmd1bGFyXFwyMDIwX1RQX1BQUy9zcmNcXGFwcFxccGFnaW5hc1xcaG9tZS1kZWxpdmVyeVxcaG9tZS1kZWxpdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDcEIsZ0NBQWE7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFBO0VBQ0EsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ob21lLWRlbGl2ZXJ5L2hvbWUtZGVsaXZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09OVEVOVFxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxuLmNhcmQtdmVydGljYWwge1xyXG4gICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0IHtcclxuICAgIGNvbG9yOiByZ2IoMjM5LCA5MiwgOTIpO1xyXG59XHJcblxyXG4uaWNvbi12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5pY29uLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLypsaW5lLWhlaWdodDogMHB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/paginas/home-delivery/home-delivery.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/paginas/home-delivery/home-delivery.page.ts ***!
  \*************************************************************/
/*! exports provided: HomeDeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDeliveryPage", function() { return HomeDeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeDeliveryPage = /** @class */ (function () {
    function HomeDeliveryPage(router) {
        this.router = router;
    }
    HomeDeliveryPage.prototype.ngOnInit = function () {
    };
    HomeDeliveryPage.prototype.Mover = function (lugar) {
        this.router.navigate([lugar]);
    };
    HomeDeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-delivery',
            template: __webpack_require__(/*! ./home-delivery.page.html */ "./src/app/paginas/home-delivery/home-delivery.page.html"),
            styles: [__webpack_require__(/*! ./home-delivery.page.scss */ "./src/app/paginas/home-delivery/home-delivery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeDeliveryPage);
    return HomeDeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-delivery-home-delivery-module.js.map