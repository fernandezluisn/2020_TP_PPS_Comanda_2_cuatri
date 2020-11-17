(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~paginas-aceptar-pedido-aceptar-pedido-module~paginas-cuenta-cliente-cuenta-cliente-module~pa~6494ff32"],{

/***/ "./src/app/servicios/pedidos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/pedidos.service.ts ***!
  \**********************************************/
/*! exports provided: PedidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosService", function() { return PedidosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productos.service */ "./src/app/servicios/productos.service.ts");





var PedidosService = /** @class */ (function () {
    function PedidosService(firestore, productosService) {
        this.firestore = firestore;
        this.productosService = productosService;
    }
    PedidosService.prototype.AddPedido = function (pedido) {
        var _this = this;
        return new Promise(function (resolve, rejected) {
            _this.firestore.collection('pedidos').add(pedido).then(function (ret) {
                resolve(ret);
            }).catch(function (err) {
                rejected(err);
            });
        });
    };
    PedidosService.prototype.AddPedidoProducto = function (pedidoProducto) {
        var _this = this;
        return new Promise(function (resolve, rejected) {
            _this.firestore.collection('pedido-productos').add(pedidoProducto).then(function (ret) {
                resolve(ret);
            }).catch(function (err) {
                rejected(err);
            });
        });
    };
    PedidosService.prototype.getPedidos = function () {
        return this.firestore.collection('pedidos').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pedidos) {
            return pedidos.map(function (pedido) {
                var data = pedido.payload.doc.data();
                data.id = pedido.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService.prototype.getPedido = function (idMesa) {
        var _this = this;
        // ACÁ ESTÁ EL ERROR, TRAE ÚNICAMENTE LOS REGISTROS QUE ESTÁN CON EL ESTADO "PREPARACIÓN"
        return this.firestore.collection('pedidos').ref.where('id-mesa', '==', idMesa) /*.where('estado', '==', 'preparacion')*/.get()
            .then(function (pedidos) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pedidos.docs.map(function (documento) {
                            var data = documento.data();
                            data.id = documento.id;
                            return data;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    PedidosService.prototype.getPedidoPorEmailCliente = function (email) {
        var _this = this;
        return this.firestore.collection('pedidos').ref.where('email', '==', email).get()
            .then(function (pedidos) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pedidos.docs.map(function (documento) {
                            var data = documento.data();
                            data.id = documento.id;
                            return data;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    PedidosService.prototype.getPedidoProductos = function () {
        return this.firestore.collection('pedido-productos').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pedidos) {
            return pedidos.map(function (pedido) {
                var data = pedido.payload.doc.data();
                data.id = pedido.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService.prototype.getPedidosProductosPorPedido = function (idPedido) {
        var _this = this;
        // ACÁ ESTÁ EL ERROR, TRAE ÚNICAMENTE LOS REGISTROS QUE ESTÁN CON EL ESTADO "PREPARACIÓN"
        return this.firestore.collection('pedido-productos').ref.where('id_pedido', '==', idPedido).get()
            .then(function (pedidos) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pedidos.docs.map(function (documento) {
                            var data = documento.data();
                            data.id = documento.id;
                            return data;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    PedidosService.prototype.getPedidosProductos = function () {
        return this.firestore.collection('pedido-productos').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (fotos) {
            return fotos.map(function (a) {
                var data = a.payload.doc.data();
                data['id'] = a.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService.prototype.updatePedido = function (id, pedido) {
        this.firestore.collection('pedidos').doc(id).set(pedido);
    };
    PedidosService.prototype.updatePedidoProducto = function (id, pedido) {
        this.firestore.collection('pedido-productos').doc(id).set(pedido);
    };
    PedidosService.prototype.getProductos = function () {
        return this.firestore.collection('productos').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (fotos) {
            return fotos.map(function (a) {
                var data = a.payload.doc.data();
                data['id'] = a.payload.doc.id;
                return data;
            });
        }));
    };
    PedidosService.prototype.PagarPedido = function (pedido) {
        var _this = this;
        return this.firestore.collection('pedidos').ref.where('id', '==', pedido.id).get().then(function (documento) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.firestore.collection('pedidos').doc(pedido.id).set({
                    comienzo: pedido.comienzo,
                    id_mesa_cliente: pedido.id_mesa_cliente,
                    id_mozo: pedido.id_mozo,
                    estado: 'pagado'
                })
                    .catch(function (err) {
                    console.log('Error al pagar', err);
                });
                return [2 /*return*/];
            });
        }); });
    };
    PedidosService.prototype.DeletePedido = function (idPedido) {
        return this.firestore.collection('pedidos').doc(idPedido).delete();
    };
    PedidosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"]])
    ], PedidosService);
    return PedidosService;
}());



/***/ }),

/***/ "./src/app/servicios/productos.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/productos.service.ts ***!
  \************************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductosService = /** @class */ (function () {
    function ProductosService(db) {
        this.db = db;
        this.productos = this.db.collection("productos").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    ProductosService.prototype.createProducto = function (producto) {
        return this.db.collection('productos').add(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, producto));
    };
    ProductosService.prototype.devolverListadoProductos = function () {
        return this.productos;
    };
    ProductosService.prototype.actualizarProducto = function (prod) {
        this.db.doc('productos' + '/' + prod.id).update(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prod));
    };
    ProductosService.prototype.BorrarProducto = function (prod) {
        this.db.doc('productos/' + prod.id).delete().then();
    };
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/servicios/spinner.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/spinner.service.ts ***!
  \**********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService(_loadingController, _toastCtrl) {
        this._loadingController = _loadingController;
        this._toastCtrl = _toastCtrl;
        this._isSpinnerShowing = false;
        this._isGoingToClose = false;
        this._timer = -1; // This is the timer, it will go from 2000 to -1
        this._timerID = null;
        // console.log('Inicializo el spinner');
        this.createSpinner();
    }
    SpinnerService.prototype.createSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._loadingController.create({
                                spinner: null,
                                keyboardClose: true,
                                message: '<div class="spinner-css"><img src="assets/loading.png"></div> Cargando...',
                                showBackdrop: false,
                                duration: 30000,
                                cssClass: 'cajaSpinner'
                            })];
                    case 1:
                        _a._currentLoading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpinnerService.prototype.showSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Muestro el spinner', this._currentLoading);
                if (this._isSpinnerShowing === false) {
                    this._currentLoading.present();
                    this._isSpinnerShowing = this.startTimer();
                }
                return [2 /*return*/];
            });
        });
    };
    SpinnerService.prototype.startTimer = function () {
        var _this = this;
        // console.log('Inicializo el conteo');
        this._timer = 2000;
        this._timerID = setInterval(function () {
            _this._timer = _this._timer - 1;
            if (_this._timer < 0) {
                // console.log('El conteo se acabÃ³.');
                _this._isGoingToClose = true;
                clearInterval(_this._timerID);
            }
        }, 1);
        return true;
    };
    SpinnerService.prototype.hideSpinner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Intento ocultar el spinner con el timer en', this._timer);
                if (this._isSpinnerShowing) {
                    if (this._timer < 0) {
                        // console.log('El tiempo acabÃ³ y oculto el spinner');
                        this._isSpinnerShowing = this.stopAndReplaceSpinner();
                        this._isGoingToClose = false;
                    }
                    else {
                        // console.log('El tiempo NO acaba y hago un timeout para acabarlo en', this._timer);
                        clearInterval(this._timerID);
                        setTimeout(function () {
                            _this._isGoingToClose = true;
                            _this.hideSpinner();
                        }, this._timer);
                    }
                    this._timer = -1;
                }
                return [2 /*return*/];
            });
        });
    };
    SpinnerService.prototype.stopAndReplaceSpinner = function () {
        this._currentLoading.dismiss();
        this.createSpinner();
        return false;
    };
    SpinnerService.prototype.mostrarToast = function (message, timer, color, position) {
        this._toastCtrl.create({
            color: color,
            duration: timer * 1000,
            message: message,
            position: position,
        })
            .then(function (toast) {
            toast.present();
        });
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ })

}]);
//# sourceMappingURL=default~paginas-aceptar-pedido-aceptar-pedido-module~paginas-cuenta-cliente-cuenta-cliente-module~pa~6494ff32.js.map