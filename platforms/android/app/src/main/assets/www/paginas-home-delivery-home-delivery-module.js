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

module.exports = "<ion-content>\r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('chat')\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"chatboxes\"></ion-icon>\r\n      <h2>Chat</h2>\r\n    </ion-card>\r\n  \r\n    <ion-card class=\"ion-activatable\" (click)=\"this.Mover('mozo-terminar')\">\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n      <ion-icon name=\"restaurant\"></ion-icon>\r\n      <h2>Estado de pedidos</h2>\r\n    </ion-card> \r\n\r\n    <ion-button class=\"apagar\" color=\"dark\" (click)=\"salir()\">\r\n      <ion-icon name=\"power\"></ion-icon>\r\n    </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paginas/home-delivery/home-delivery.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/paginas/home-delivery/home-delivery.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  --background: rgb(230, 230, 230);\n  display: block;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  height: 50%; }\n\nion-card ion-icon {\n  font-size: 100px;\n  color: #333333; }\n\n.card-vertical {\n  height: 33.33%;\n  width: 50%;\n  float: left; }\n\n.card-horizontal {\n  height: 50%;\n  width: 33.33%;\n  float: left; }\n\nion-ripple-effect {\n  color: #ef5c5c; }\n\n.icon-vertical {\n  margin-top: 50%; }\n\n.icon-horizontal {\n  margin-top: 4%; }\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  /*line-height: 0px;*/\n  padding-top: 0;\n  margin-top: 0;\n  color: #181717; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ob21lLWRlbGl2ZXJ5L0U6XFxEZXNjYXJnYXNcXE1hc3RlclByZVxcTWFzdGVyUHJlL3NyY1xcYXBwXFxwYWdpbmFzXFxob21lLWRlbGl2ZXJ5XFxob21lLWRlbGl2ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQjtFQUNwQixnQ0FBYTtFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBc0IsRUFBQTs7QUFHMUI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksY0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQUE7RUFDQSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2hvbWUtZGVsaXZlcnkvaG9tZS1kZWxpdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5UXHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4uY2FyZC12ZXJ0aWNhbCB7XHJcbiAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaW9uLXJpcHBsZS1lZmZlY3Qge1xyXG4gICAgY29sb3I6IHJnYigyMzksIDkyLCA5Mik7XHJcbn1cclxuXHJcbi5pY29uLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG5cclxuLmljb24taG9yaXpvbnRhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKmxpbmUtaGVpZ2h0OiAwcHg7Ki9cclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbn0iXX0= */"

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
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");




var HomeDeliveryPage = /** @class */ (function () {
    function HomeDeliveryPage(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HomeDeliveryPage.prototype.ngOnInit = function () {
    };
    HomeDeliveryPage.prototype.Mover = function (lugar) {
        this.router.navigate([lugar]);
    };
    HomeDeliveryPage.prototype.salir = function () {
        this.auth.LogOut();
        this.router.navigate(['log-in']);
    };
    HomeDeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-delivery',
            template: __webpack_require__(/*! ./home-delivery.page.html */ "./src/app/paginas/home-delivery/home-delivery.page.html"),
            styles: [__webpack_require__(/*! ./home-delivery.page.scss */ "./src/app/paginas/home-delivery/home-delivery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeDeliveryPage);
    return HomeDeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=paginas-home-delivery-home-delivery-module.js.map