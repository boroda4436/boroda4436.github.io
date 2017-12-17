webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\r\n     [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n  {{message.text}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        // this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fakeBackendFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");


function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    // let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    // const ServerToken = '';
    //
    // const users: User[] = [];
    // users.push(new User(1, 'dev', 'Dev123', '666'));
    // users.push(new User(2, 'test', 'test', '123'));
    // users.push(new User(3, '123', '123', '123'));
    //
    // const news: News[] = [];
    // news.push({
    //   id: 1,
    //   header: 'Text Header',
    //   body: 'Text Body',
    //   footer: 'Text Footer'
    // });
    // news.push({
    //   id: 2,
    //   header: 'Text Header',
    //   body: 'Text Body',
    //   footer: 'Text Footer'
    // });
    // news.push({
    //   id: 3,
    //   header: 'Text Header',
    //   body: 'Text Body',
    //   footer: 'Text Footer'
    // });
    //
    // const categories: Category[] = [];
    // categories.push({
    //   id: 1001,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Мобильная связь'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Мобільний звя\'зок'
    //     }],
    //   order: 4
    // });
    // categories.push({
    //   id: 1002,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Интернет, ТВ, Телефон'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Інтернет, ТВ, Телефон'
    //     }],
    //   order: 3
    // });
    // categories.push({
    //   id: 1003,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Платежные системы'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Платіжні системи'
    //     }],
    //   order: 2
    // });
    // categories.push({
    //   id: 1004,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Веб-сервисы'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Веб-сервіси'
    //     }],
    //   order: 1
    // });
    //
    // const products: Article[] = [];
    // products.push({
    //   id: 4001,
    //   type: 2,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Киевстар1'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Київстар'
    //     }],
    //   hint: [{
    //     cult: 'ru',
    //     value: '067, 068, 097, 098'
    //   },
    //     {
    //       cult: 'ua',
    //       value: ''
    //     }],
    //
    //   field: [{
    //     id: 1,
    //     order: 1,
    //     type: 1,
    //     name: [{
    //       cult: 'ru',
    //       value: 'field1'
    //     },
    //       {
    //         cult: 'ua',
    //         value: ''
    //       }],
    //     hint: [{
    //       cult: 'ru',
    //       value: 'hint1'
    //     },
    //       {
    //         cult: 'ua',
    //         value: ''
    //       }],
    //     mask: '',
    //     regexp: ''
    //   }],
    //   commission: [{
    //     minAmount: 100,
    //     value: 10,
    //     percent: 0
    //   },
    //     {
    //       minAmount: 2000,
    //       value: 0.5,
    //       percent: 0
    //     }],
    //   nominal: -1,
    //   codes: ['067',
    //     '068',
    //     '097',
    //     '098'],
    //   order: 1,
    //   icon: 'assets/images/icons/kyivstar.png',
    //   cheque: 'cheque'
    //
    // });
    //
    // products.push({
    //   id: 4002,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Киевстар ваучер 10'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Київстар ваучер 10'
    //     }], // name: [],
    //   // name: [{cult: "ru", value: 'Киевстар ваучер 10'}],
    //   codes: ['067',
    //     '068',
    //     '097',
    //     '098'],
    //   hint: [{
    //     cult: 'ru',
    //     value: 'покупка ваучера'
    //   },
    //     {
    //       cult: 'ua',
    //       value: ''
    //     }],
    //   order: 2,
    //   minAmount: 5,
    //   maxAmount: 5,
    //   commission: [{
    //     minAmount: 100,
    //     value: 10,
    //     percent: 0
    //   }],
    //   icon: 'assets/images/icons/kyivstar.png',
    //   field: [],
    //   type: 1,
    //   cheque: 'cheque',
    //   nominal: 1000
    // });
    // products.push({
    //   id: 4003,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Киевстар3'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Київстар'
    //     }],
    //   codes: ['067',
    //     '068',
    //     '097',
    //     '098'],
    //   hint: [{
    //     cult: 'ru',
    //     value: '067, 068, 097, 098'
    //   },
    //     {
    //       cult: 'ua',
    //       value: ''
    //     }],
    //   order: 1,
    //   minAmount: 1,
    //   maxAmount: 100,
    //   commission: [],
    //   icon: 'assets/images/icons/kyivstar.png',
    //   field: [{
    //     id: 1,
    //     order: 1,
    //     type: 1,
    //     name: [],
    //     hint: [],
    //     mask: '',
    //     regexp: ''
    //   }],
    //   type: 1003,
    //   cheque: 'cheque',
    //   nominal: 10
    // });
    // products.push({
    //   id: 4004,
    //   name: [{
    //     cult: 'ru',
    //     value: 'Киевстар4'
    //   },
    //     {
    //       cult: 'ua',
    //       value: 'Київстар'
    //     }],
    //   codes: ['067',
    //     '068',
    //     '097',
    //     '098'],
    //   hint: [{
    //     cult: 'ru',
    //     value: '067, 068, 097, 098'
    //   },
    //     {
    //       cult: 'ua',
    //       value: ''
    //     }],
    //   order: 1,
    //   minAmount: 1,
    //   maxAmount: 100,
    //   commission: [{
    //     minAmount: 1,
    //     value: 0.1,
    //     percent: 0
    //   }],
    //   icon: 'assets/images/icons/kyivstar.png',
    //   field: [{
    //     id: 1,
    //     order: 1,
    //     type: 1,
    //     name: [],
    //     hint: [],
    //     mask: '',
    //     regexp: ''
    //   }],
    //   type: 1004,
    //   cheque: 'cheque',
    //   nominal: 10
    // });
    // let balance: Balance = {
    //   personal: (Math.floor(Math.random() * (1000000 - 1)) + 1),
    //   network: (Math.floor(Math.random() * (1000000 - 1)) + 1),
    //   overdraft: (Math.floor(Math.random() * (1000000 - 1)) + 1),
    //   datetime: (Math.floor(Math.random() * (1000000 - 1)) + 1),
    // };
    // const cheque: Cheque [] = [];
    // cheque.push({
    //   name: 'ch1',
    //   text: 'text of ch1'
    // });
    // cheque.push({
    //   name: 'ch2',
    //   text: 'text of ch2'
    // });
    // cheque.push({
    //   name: 'ch3',
    //   text: 'text of ch3'
    // });
    // cheque.push({
    //   name: 'ch4',
    //   text: 'text of ch4'
    // });
    // cheque.push({
    //   name: 'ch5',
    //   text: 'text of ch5'
    // });
    // const vauchStatus: VoucherStatus = {
    //   // transId: (Math.floor(Math.random() * (1000000 - 1)) + 1),
    //   serial: randomString(14),
    //   secret: randomString(6), // error: 0,
    //   // errorText: "success"
    // };
    var mock = 0;
    // ==========================================================================================
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            if (mock) {
                /**OPERATION LIST CHECK*/
                var operations = [];
                var time = new Date();
                operations.push({
                    id: '1',
                    article: [],
                    type: 2,
                    timestamp: time,
                    fields: [{ id: 1, value: '0970002000' }],
                    amount: 1,
                    commission: 0,
                    comment: "",
                    status: { error: 923, errorText: [] },
                    cheque: '',
                    icon: ''
                });
                operations.push({
                    id: '2',
                    article: [],
                    type: 2,
                    timestamp: time,
                    fields: [{ id: 1, value: '0970002000' }],
                    amount: 1,
                    commission: 0,
                    comment: "",
                    status: { error: 923, errorText: [] },
                    cheque: '',
                    icon: ''
                });
                operations.push({
                    id: '3',
                    article: [],
                    type: 2,
                    timestamp: time,
                    fields: [{ id: 1, value: '0970002000' }],
                    amount: 1,
                    commission: 0,
                    comment: "",
                    status: { error: 923, errorText: [] },
                    cheque: '',
                    icon: ''
                });
                if (connection.request.url.includes('api\/v0\/operation\/history') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                    console.error('works');
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
                        status: 200,
                        body: operations
                    })));
                }
                if (connection.request.url.includes('api\/v0\/operation\/replenishment\/1') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                    console.error('works');
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
                        status: 200,
                        body: { error: 0, errorText: [] }
                    })));
                }
                if (connection.request.url.includes('api\/v0\/operation\/replenishment\/2') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                    console.error('works');
                    connection.mockError(new Error('Username, password or terminal is incorrect'));
                }
                if (connection.request.url.includes('api\/v0\/operation\/replenishment\/3') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                    console.error('works');
                    connection.mockError(new Error('Username, password or terminal is incorrect'));
                }
                /**============================================================*/
                /**COLLECTION EXTENDED CHECK*/
                if (connection.request.url.match(/api\/v0\/report\/collection\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
                        status: 200,
                        body: {
                            id: 0,
                            terminal: 0,
                            tradePoint: "string",
                            tradeAdress: "string",
                            date: "2017-12-06T09:01:30.831Z",
                            nominal: 0,
                            commission: 0,
                            sum: 0,
                            quantity: 0,
                            incomePrice: 0,
                            collectorGet: 0,
                            saleRecord: [
                                {
                                    article: 'test-string',
                                    cashier: "string",
                                    quantity: 0,
                                    nominal: 0,
                                    commission: 0,
                                    sum: 0,
                                    incomeTariff: 0,
                                    firstOperation: "2017-12-06T09:01:30.831Z",
                                    lastOperation: "2017-12-06T09:01:30.831Z"
                                }
                            ]
                        }
                    })));
                }
                /**============================================================*/
                // USER ===========================================================================================================
                // if (connection.request.url.endsWith('/auth/login') && connection.request.method === RequestMethod.Post) {
                //   // get parameters from post request
                //   const params = JSON.parse(connection.request.getBody());
                //   console.debug(JSON.parse(connection.request.getBody()));
                //   // find if any user matches login credentials
                //   const filteredUsers = users.filter(user => {
                //     return user.username === params.login && user.password === params.password && user.terminal === params.terminal;
                //   });
                //
                //   if (filteredUsers.length) {
                //     // if login details are valid return 200 OK with user details and fake jwt token
                //     const user = filteredUsers[0];
                //     connection.mockRespond(new Response(new ResponseOptions({
                //       status: 200,
                //       body: {
                //         keyToken: randomString(32)
                //       }
                //     })));
                //   } else {
                //     // else return 400 bad request
                //     connection.mockError(new Error('Username, password or terminal is incorrect'));
                //   }
                //   return;
                // }
                //
                // // TODO otpAuth
                // if (connection.request.url.match(/auth\/\w+$/) && connection.request.method === RequestMethod.Get) {
                //   const urlParts = connection.request.url.split('/');
                //   const code = parseInt(urlParts[urlParts.length - 1]).toString();
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200,
                //     body: {
                //       keyToken: randomString(12)
                //     }
                //   })));
                //
                // }
                // if (connection.request.url.endsWith('/user/balance') && connection.request.method === RequestMethod.Get) {
                //   if (connection.request.headers.get('API-Key') !== '') {
                //     connection.mockRespond(new Response(new ResponseOptions({
                //       status: 200, // body: balance
                //     })));
                //   } else {
                //     // return 401 not authorised if token is null or invalid
                //     connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                //   }
                // }
                // if (connection.request.url.endsWith('/user/news') && connection.request.method === RequestMethod.Get) {
                //   if (connection.request.headers.get('API-Key') !== '') {
                //     connection.mockRespond(new Response(new ResponseOptions({
                //       status: 200,
                //       body: news
                //     })));
                //   } else {
                //     // return 401 not authorised if token is null or invalid
                //     connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                //   }
                // }
                // if (connection.request.url.endsWith('/auth/logout') && connection.request.method === RequestMethod.Get) {
                //   if (connection.request.headers.get('API-Key') !== '') {
                //     connection.mockRespond(new Response(new ResponseOptions({status: 204})));
                //   } else {
                //     // return 401 not authorised if token is null or invalid
                //     connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                //   }
                // }
                // ARTICLES ======================================================================================================
                // if (connection.request.url.endsWith('/article/categories') && connection.request.method === RequestMethod.Get) {
                //   if (connection.request.headers.get('API-Key') !== '') {
                //     connection.mockRespond(new Response(new ResponseOptions({
                //       status: 200,
                //       body: categories
                //     })));
                //   } else {
                //     // return 401 not authorised if token is null or invalid
                //     connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                //   }
                // }
                // if (connection.request.url.match(/article\/byCategory\/\d+$/) && connection.request.method === RequestMethod.Get) {
                //   const urlParts = connection.request.url.split('/');
                //   const catId = parseInt(urlParts[urlParts.length - 1]);
                //   const prodList: Article[] = [];
                //   for (let i = 0; i < products.length; i++) {
                //     if (products[i].id < 4003) {
                //       prodList.push(products[i]);
                //     }
                //   }
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200,
                //     body: prodList
                //   })));
                //
                // }
                // if (connection.request.url.endsWith('/article/cheques') && connection.request.method === RequestMethod.Get) {
                //   if (connection.request.headers.get('API-Key') !== '') {
                //     connection.mockRespond(new Response(new ResponseOptions({
                //       status: 200,
                //       body: cheque
                //     })));
                //   } else {
                //     // return 401 not authorised if token is null or invalid
                //     connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                //   }
                // }
                // OPERATION =====================================================================================================
                // if (connection.request.url.match('/operation/transId') && connection.request.method === RequestMethod.Get) {
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200,
                //     body: {
                //       transId: (Math.floor(Math.random() * (1000000 - 1)) + 1)
                //     }
                //   })));
                // }
                // if (connection.request.url.endsWith('/operation/replenishment') && connection.request.method === RequestMethod.Post) {
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200,
                //     body: {
                //       error: 0,
                //       errorText: 'wtf is going on?!'
                //     }
                //   })));
                // }
                // if (connection.request.url.match(/\/operation\/replanishment\/\d+$/)) {
                //   // connection.mockRespond(new Response(new ResponseOptions({
                //   //   status: 200,
                //   //   body: {
                //   //     error: 0,
                //   //     errorText: "Success"
                //   //   }
                //   // })));
                //
                //   connection.mockRespond(new Response(new ResponseOptions({status: 403})));
                // }
                // if (connection.request.url.endsWith('/operation/voucher') && connection.request.method === RequestMethod.Post) {
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200, // body: {
                //     //   transId: (Math.floor(Math.random() * (1000000 - 1)) + 1)
                //     // }
                //   })));
                // }
                //
                // if (connection.request.url.endsWith('/operation/history') && connection.request.method === RequestMethod.Get) {
                //   connection.mockRespond(new Response(new ResponseOptions({
                //     status: 200,
                //     body: operations
                //   })));
                // }
            }
            // pass through any requests not handled above
            var realHttp = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](realBackend, options);
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestOptions */]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions).subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 1);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */],
    useFactory: fakeBackendFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["l" /* XHRBackend */]]
};
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("../../../../../src/app/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fake_backend__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_models/balance.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Balance; });
var Balance = (function () {
    function Balance(bPersonal, bNetwork, bOverdraft, bDateTime) {
        this.bPersonal = bPersonal;
        this.bNetwork = bNetwork;
        this.bOverdraft = bOverdraft;
        this.bDateTime = bDateTime;
    }
    return Balance;
}());

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ "../../../../../src/app/_models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(id, name, order) {
        this.cId = id;
        this.cName = name;
        this.cOrder = order;
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/_models/cheque.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cheque; });
var Cheque = (function () {
    function Cheque(cName, cText) {
        this.cName = cName;
        this.cText = cText;
    }
    return Cheque;
}());

//# sourceMappingURL=cheque.js.map

/***/ }),

/***/ "../../../../../src/app/_models/collection-extended.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionExtended; });
var CollectionExtended = (function () {
    function CollectionExtended(id, tradePoint, pointAddr, date, nominal, commission, quantity, summary, incomeTariff, collectorGet, saleRecord) {
        this.id = id;
        this.tradePoint = tradePoint;
        this.pointAddr = pointAddr;
        this.date = date;
        this.nominal = nominal;
        this.commission = commission;
        this.quantity = quantity;
        this.summary = summary;
        this.incomeTariff = incomeTariff;
        this.collectorGet = collectorGet;
        this.saleRecord = saleRecord;
    }
    CollectionExtended.toCollectionExt = function (data) {
        // console.error(data);
        var saleRecors = [];
        if (data) {
            for (var i = 0; i < data.saleRecord.length; i++) {
                saleRecors.push({
                    article: data.saleRecord[i].article,
                    cashier: data.saleRecord[i].cashier,
                    quantity: data.saleRecord[i].quantity,
                    nominal: data.saleRecord[i].nominal / 100,
                    commission: data.saleRecord[i].commission / 100,
                    incomeTariff: data.saleRecord[i].incomeTariff / 100,
                    firstOperation: data.saleRecord[i].firstOperation,
                    lastOperation: data.saleRecord[i].lastOperation
                });
            }
            var collection = new CollectionExtended(data.id, data.tradePoint, data.tradeAdress, data.date, data.nominal / 100, data.commission / 100, data.quantity, data.sum / 100, data.incomeTariff / 100, data.collectorGet / 100, saleRecors);
            return collection;
        }
        else
            return null;
    };
    return CollectionExtended;
}());

//# sourceMappingURL=collection-extended.js.map

/***/ }),

/***/ "../../../../../src/app/_models/collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collection; });
var Collection = (function () {
    function Collection(opId, id, tradePoint, date, nominal, commission, sum, quantity, incomeTariff, collectorGet, firstOperation, lastOperation) {
        this.opId = opId;
        this.id = id;
        this.tradePoint = tradePoint;
        this.date = date;
        this.nominal = nominal;
        this.commission = commission;
        this.sum = sum;
        this.quantity = quantity;
        this.incomeTariff = incomeTariff;
        this.collectorGet = collectorGet;
        this.firstOperation = firstOperation;
        this.lastOperation = lastOperation;
    }
    Collection.toCollection = function (data) {
        var collection = new Collection(data.opId, data.id, data.tradePoint, data.date, data.nominal / 100, data.commission / 100, data.sum / 100, data.quantity, data.incomeTariff / 100, data.collectorGet / 100, data.firstOperation, data.lastOperation);
        return collection;
    };
    Collection.toCollectionArray = function (data) {
        var array = [];
        var obj;
        for (var i = 0; i < data.length; i++) {
            array.push(new Collection(data[i].op_id, data[i].id, data[i].tradePoint, data[i].date, data[i].nominal / 100, data[i].commission / 100, data[i].sum / 100, data[i].quantity, data[i].incomeTariff / 100, data[i].collectorGet / 100, data[i].firstOperation, data[i].lastOperation));
        }
        return array;
    };
    return Collection;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "../../../../../src/app/_models/commission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Commission; });
var Commission = (function () {
    function Commission(min, percent, val) {
        this.cMin_amount = min;
        this.cPercent = percent;
        this.cValue = val;
    }
    return Commission;
}());

//# sourceMappingURL=commission.js.map

/***/ }),

/***/ "../../../../../src/app/_models/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
var Field = (function () {
    function Field(fId, fName, fHint, fMask, fRegexp, fOrder) {
        this.fId = fId || 0;
        this.fName = fName || [];
        this.fHint = fHint || [];
        this.fMask = fMask || '';
        this.fRegexp = fRegexp || '';
        this.fOrder = fOrder || 0;
    }
    Field.toFields = function (data) {
        console.log('convert fields');
        var list = [];
        if (data.length !== 0) {
            if (data[0].id) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    list.push(new Field(data[i].id || 0, data[i].name || [], data[i].hint || [], data[i].mask || '', data[i].regexp || '', data[i].order ||
                        0));
                }
            }
            else {
                console.log(data);
                list = data;
            }
            console.log(list);
            return list;
        }
        else {
            return [];
        }
    };
    return Field;
}());

//# sourceMappingURL=field.js.map

/***/ }),

/***/ "../../../../../src/app/_models/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News(nId, nOrder, nTitle, nBody, nFooter) {
        this.nId = nId;
        this.nOrder = nOrder;
        this.nTitle = nTitle;
        this.nBody = nBody;
        this.nFooter = nFooter;
    }
    return News;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ "../../../../../src/app/_models/operation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operation; });
var Operation = (function () {
    // --------------------
    function Operation(oId, oArticle, oType, oTimestamp, oFields, oAmount, oCommission, oComment, oStatus, oCheque, oIcon) {
        this.oId = oId;
        this.oArticle = oArticle;
        this.oType = oType;
        this.oTimestamp = oTimestamp;
        this.oFields = oFields;
        this.oAmount = oAmount;
        this.oCommission = oCommission;
        this.oComment = oComment;
        this.oStatus = oStatus;
        this.oCheque = oCheque;
        this.oIcon = oIcon;
    }
    return Operation;
}());

//# sourceMappingURL=operation.js.map

/***/ }),

/***/ "../../../../../src/app/_models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(pId, pType, pName, pHint, pInputFields, pCommissions, pNominal, pCheque, pProvCodes, pAmountMin, pAmountMax, pIcon, pOrder) {
        this.pId = pId;
        this.pType = pType;
        this.pName = pName;
        this.pHint = pHint;
        this.pInputFields = pInputFields;
        this.pCommissions = pCommissions;
        this.pNominal = pNominal;
        this.pCheque = pCheque;
        this.pProvCodes = pProvCodes;
        this.pAmountMin = pAmountMin;
        this.pAmountMax = pAmountMax;
        this.pIcon = pIcon;
        this.pOrder = pOrder;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/myCurrency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PADDING = '000000';
var MyCurrencyPipe = (function () {
    function MyCurrencyPipe() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = '.';
        this.THOUSANDS_SEPARATOR = ' ';
    }
    MyCurrencyPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || '').toString().split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        if (value === '_') {
            return '';
        }
        if (value === 0 || value === '') {
            return '0.00';
        }
        else {
            return integer + fraction;
        }
    };
    MyCurrencyPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || '').split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');
        fraction =
            parseInt(fraction, 10) > 0 && fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : '';
        return integer + fraction;
    };
    return MyCurrencyPipe;
}());
MyCurrencyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'myCurrency' }),
    __metadata("design:paramtypes", [])
], MyCurrencyPipe);

//# sourceMappingURL=myCurrency.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/safeHTML.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safeHTML.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/to-number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToNumberPipe = (function () {
    function ToNumberPipe() {
    }
    ToNumberPipe.prototype.transform = function (value, args) {
        if (value.length == 16) {
            value = [value.slice(0, 4), value.slice(4, 8), value.slice(8, 12), value.slice(12, 16)].join('-');
        }
        if (value.length == 10 && /^\d+$/.test(value)) {
            value = '(' + value.slice(0, 3) + ')' + value.slice(3, 6) + '-' + value.slice(6, 8) + '-' + value.slice(8, 10);
        }
        if (value.length > 20 && !args) {
            value = value.slice(0, 14) + '...';
        }
        return value;
    };
    return ToNumberPipe;
}());
ToNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'toNumber'
    })
], ToNumberPipe);

//# sourceMappingURL=to-number.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/to-regex.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToRegexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToRegexPipe = (function () {
    function ToRegexPipe() {
    }
    ToRegexPipe.prototype.transform = function (value) {
        console.log(value);
        var test = [];
        {
            for (var i = 0; i < value.length; i++) {
                if (value[i].match(/[_*0-9]/g)) {
                    test.push(/\d/);
                }
                else {
                    test.push(value[i]);
                }
            }
        }
        console.log(test);
        return test;
    };
    return ToRegexPipe;
}());
ToRegexPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'toRegex'
    })
], ToRegexPipe);

//# sourceMappingURL=to-regex.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlertService = (function () {
    function AlertService(router, auth, dialog) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        this.dialog = dialog;
        this.currError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({
            type: 'success',
            text: message
        });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({
            type: 'error',
            text: message
        });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    // showError(error) {
    //   this.currError.emit(error);
    // }
    AlertService.prototype.onError = function (error) {
        // console.log("ERROR");
        // console.log(error);
        switch (error.status) {
            case 500: {
                break;
            }
            case 501: {
                break;
            }
            case 502: {
                console.log('Server temporary unavailable');
                __WEBPACK_IMPORTED_MODULE_6__global_service__["a" /* GlobalService */].showDialog({
                    title: 'Сервер не отвечает',
                    body: 'Сервер недоступен. Попробуйте зайти на сайт позже.'
                });
                break;
            }
            case 401: {
                console.log('ERROR');
                console.log(error);
                console.log('ERROR_STATUS = ' + error.status);
                // console.log("ERROR_BODY = " + error._body);
                console.log('LOGOUT');
                this.auth.logout();
                break;
            }
            case 403: {
                var err = JSON.parse(error._body);
                // alert("ERROR: " + err);
                console.error('ERROR: ' + err.error + ' - ' + __WEBPACK_IMPORTED_MODULE_5__translate_Lang__["a" /* Lang */].getLangValue(err.errorText));
            }
            default: {
                if (error.status === 0) {
                    __WEBPACK_IMPORTED_MODULE_6__global_service__["a" /* GlobalService */].showDialog({
                        title: 'Нет интернета',
                        body: 'Проверьте соединение интернет и обновите страницу'
                    });
                }
                else {
                    console.log('ERROR');
                    console.log(error);
                    // alert(error);
                }
                // console.log("ERROR_STATUS = " + error.status);
                // console.log("ERROR_BODY = " + error._body);
            }
        }
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]) === "function" && _c || Object])
], AlertService);

var _a, _b, _c;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swagger_api_AuthApi__ = __webpack_require__("../../../../../src/app/swagger/api/AuthApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swagger_api_UserApi__ = __webpack_require__("../../../../../src/app/swagger/api/UserApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(service, user) {
        this.service = service;
        this.user = user;
    }
    AuthenticationService.prototype.loginAuth = function (username, pass, term) {
        console.log("run LoginAuth");
        return this.service.authLoginPost({
            login: username,
            password: pass,
            terminal: term
        });
    };
    AuthenticationService.prototype.loginByToken = function (token) {
        console.log("run loginByToken");
        return this.service.authOtpOtpUuidGet(token);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        if (__WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].redirectToMain) {
            window.location.href = __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].redirectPath;
        }
        else {
            window.location.href = '/';
        }
        localStorage.removeItem('currentUser');
        // navigator.geolocation.clearWatch();
        this.service.authLogoutGet();
    };
    AuthenticationService.prototype.changePass = function (passwords) {
        return this.user.userPasswordPut(passwords);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__swagger_api_AuthApi__["a" /* AuthApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__swagger_api_AuthApi__["a" /* AuthApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__swagger_api_UserApi__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swagger_api_UserApi__["a" /* UserApi */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__ = __webpack_require__("../../../../../src/app/swagger/api/ArticleApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_category__ = __webpack_require__("../../../../../src/app/_models/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = (function () {
    function CategoryService(service, global) {
        this.service = service;
        this.global = global;
        this.CATEGORIES = [new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */](0, [{
                    cult: '',
                    value: ''
                }], 0)];
        this.CurrentCATEGORY = new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */](0, [{
                cult: '',
                value: ''
            }], 0);
        this.currCat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // clearCategory() {
    //   this.CurrentCATEGORY = new Category(0, [{cult: "", value: ""}], 0);
    //   this.currCat.emit(this.CurrentCATEGORY.cId);
    // }
    CategoryService.prototype.setCategory = function (category) {
        this.CurrentCATEGORY = category;
        this.currCat.emit(this.CurrentCATEGORY.cId);
    };
    CategoryService.prototype.getCategories = function () {
        return this.service.articleCategoriesGet();
    };
    CategoryService.prototype.getCategoriesList = function (data) {
        if (this.CATEGORIES.length) {
            this.CATEGORIES = [];
        }
        for (var i = 0; i < data.length; i++) {
            this.CATEGORIES.push(new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */](data[i].id, data[i].name, data[i].order));
        }
        this.setCategoryByOrderId(1);
        return this.CATEGORIES;
    };
    CategoryService.prototype.setCategoryByOrderId = function (cOrder) {
        this.global.setActivity(0);
        var cat = this.CATEGORIES.filter(function (obj) {
            return obj.cOrder == cOrder;
        });
        console.log(cat[0]);
        this.setCategory(cat[0]);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__["a" /* ArticleApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__["a" /* ArticleApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], CategoryService);

var _a, _b;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = GlobalService_1 = (function () {
    function GlobalService() {
        this.activity = 0;
        this.currOnline = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**-----------------------------------------------------*/
        this.currActivity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checkOnline();
    }
    GlobalService.showMenu = function () {
        this.navMenu = true;
        var body = document.getElementsByTagName('body');
        body[0].classList.toggle('show-menu');
        if (document.getElementById('lang-help'))
            document.getElementById('lang-help').style.display = 'none';
        this.showList.emit(false);
    };
    GlobalService.closeMenu = function () {
        this.navMenu = false;
        var body = document.getElementsByTagName('body');
        body[0].classList.remove('show-menu');
    };
    GlobalService.checkMobileView = function () {
        return screen.availWidth < 770;
    };
    /**
     * Method for setting current activity by it`s Id:
     * 0 - market
     * REPORTS
     * 1 - sales
     * 2 - opHistory
     * 3 - collection
     * 4 - detailed sales
     * 5 - financial
     * 6 - shift
     * OPTIONS
     * (9) - my contacts (will be done)
     * 7 - authHistory
     * 8 - changePassword
     * @param act - activity Id
     */
    GlobalService.prototype.setActivity = function (act) {
        GlobalService_1.closeMenu();
        this.activity = act;
        this.currActivity.emit(this.activity);
    };
    GlobalService.prototype.checkOnline = function () {
        this.online = navigator.onLine;
        // alert(this.online);
        if (!this.online) {
            this.currOnline.emit({
                error: 'Нет интернета',
                errorText: 'Проверьте соединение интернет и обновите страницу'
            });
            return false;
        }
        else {
            return true;
        }
    };
    /**
     obj = {
        title: string, - name of dialog
        body: string, - html template to show as body
        closable: boolean - flag is dialog able to be closed or not
     }*/
    GlobalService.showDialog = function (obj) {
        if (obj) {
            this.currDialog.next(obj);
        }
        else {
            this.currDialog.next(null);
        }
    };
    return GlobalService;
}());
/** Flag for hiding debug messages from console.log() and console.warn() methods */
GlobalService.hideConsole = true;
/** Flag and path of page for redirection to market and return there after logout*/
GlobalService.redirectToMain = false;
GlobalService.redirectPath = "https://" + location.hostname.substr(location.hostname.indexOf(".") + 1);
/** Flag for blocking all main actions in project.
 * Used only in operation creation to block all actions while operation in progress
 * default value - false */
GlobalService.blockedNavigation = false;
/** Applications href*/
GlobalService.playstore = "https://play.google.com/store/apps/details?id=ua.com.globalpay.globalpay";
GlobalService.appstore = "#";
GlobalService.showList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
GlobalService.navMenu = false;
/**AUDIO FILES*/
/**main audio chanel*/
GlobalService.audio = new Audio();
/**preloaded audio objects*/
GlobalService.tink = new Audio('assets/audio/tink.mp3');
GlobalService.failed = new Audio('assets/audio/failure.mp3');
GlobalService.payed = new Audio('assets/audio/payed.mp3');
GlobalService.currDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
GlobalService = GlobalService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalService);

var GlobalService_1;
//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_service__ = __webpack_require__("../../../../../src/app/_services/news.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__news_service__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__ = __webpack_require__("../../../../../src/app/swagger/api/UserApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_news__ = __webpack_require__("../../../../../src/app/_models/news.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsService = NewsService_1 = (function () {
    function NewsService(service) {
        this.service = service;
        this.NEWS = [];
        this.showNews = true;
        this.currNews = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewsService.prototype.getNews = function () {
        return this.service.userNewsGet();
    };
    NewsService.prototype.getNewsList = function (data) {
        if (this.NEWS.length > 0) {
            this.NEWS = [];
        }
        if (data) {
            for (var i = 0; i < data.length; i++) {
                this.NEWS.push(new __WEBPACK_IMPORTED_MODULE_2__models_news__["a" /* News */](data[i].id, i + 1, data[i].header, data[i].body, data[i].footer));
            }
            if (this.NEWS.length > 0) {
                this.currNews.emit(false);
            }
            else {
                // console.error("NO NEWS");
                this.currNews.emit(true);
            }
        }
        var mobileView = __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */].checkMobileView();
        if (mobileView && NewsService_1.showApps) {
            // console.error(mobileView);
            var obj = {
                title: '',
                body: '<span style="white-space: normal">Установите мобильное приложение</span><br>' +
                    '<div style="display: inline">' +
                    '<button class="app-btn" style="float: right; background-color: yellowgreen" >' +
                    '<a class="app_href"' +
                    'href="' + __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */].playstore + '">' +
                    '   Скачать' +
                    '   <img class="app-img" target="_blank" src=assets/images/icons/android.svg><br> ' +
                    '</a></button>' +
                    '<button class="app-btn" style="float: left; background-color: black">' +
                    '<a class="app_href"  ' +
                    'href="' + __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */].appstore + '">' +
                    '   Скачать' +
                    '   <img class="app-img" target="_blank" src=assets/images/icons/apple_icon.svg><br> ' +
                    '</a></button>' +
                    '</div>',
                closeable: true
            };
            __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */].showDialog(obj);
        }
        console.log(this.NEWS);
        return this.NEWS;
        // return [];
    };
    return NewsService;
}());
NewsService.showApps = true;
NewsService = NewsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__["a" /* UserApi */]) === "function" && _a || Object])
], NewsService);

var NewsService_1, _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/operation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_OperationApi__ = __webpack_require__("../../../../../src/app/swagger/api/OperationApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("../../../../../src/app/_models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperationService = (function () {
    function OperationService(service, global, user) {
        this.service = service;
        this.global = global;
        this.user = user;
        this.currStage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finalStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currTransId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.redirect = false;
        this.error500 = {
            error: '500',
            errorText: [
                { cult: "uk", value: "Помилка сервера" },
                { cult: "ru", value: "Ошибка сервера" }
            ]
        };
        // this.payed.load();
        this.OPERATION = {
            opId: '',
            name: [],
            product: new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](0, 0, [{
                    cult: '',
                    value: ''
                }], [{
                    cult: '',
                    value: ''
                }], [], [], 0, '', [], 0, 0, '', 0),
            fieldValues: [{
                    id: 0,
                    value: ''
                }],
            maskedValues: [],
            amount: 0,
            commission: 0,
            comment: '',
            status: {},
            opStage: 1,
            completed: 0
        };
        if (this.OPERATION.opStage != 3) {
            // console.error("CLEAR TIMER");
            // clearTimeout(this.timer)
        }
    }
    /**
     Set operation create stages :
     1 - input forms (show input-form.component),
     2 - verify operation (show check-begin.component),
     3 - execute and show status (show check-process.component)
     */
    OperationService.prototype.setStage = function (stage) {
        if (this.global.checkOnline()) {
            this.OPERATION.opStage = stage;
            this.currStage.emit(this.OPERATION.opStage);
        }
    };
    /**
     Set operation status :
     1 - completed (green),
     2 - in progress (yellow),
     3 - failed (red)
     */
    OperationService.prototype.setCompleted = function (status) {
        if (this.global.checkOnline()) {
            this.OPERATION.completed = status;
            this.finalStatus.emit(status);
        }
    };
    /**
     Method for selection of current product
     */
    OperationService.prototype.setProduct = function (product) {
        console.warn("SET PRODUCT");
        this.OPERATION.product = product;
        this.OPERATION.fieldValues = [];
        for (var i = 0; i < product.pInputFields.length; i++) {
            this.OPERATION.fieldValues.push({
                id: product.pInputFields[i].fId,
                value: ''
            });
        }
        this.currProduct.emit(product);
    };
    /**
     Method set necessary data to defaults for next work
     */
    OperationService.prototype.clearOperation = function () {
        console.log('CLEAR OPERATION');
        this.OPERATION.name = [];
        this.setProduct(new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](0, 0, [{
                cult: '',
                value: ''
            }], [{
                cult: '',
                value: ''
            }], [], [], 0, '', [], 0, 0, '', 0));
        this.OPERATION.fieldValues = [{
                id: 0,
                value: ''
            }];
        this.OPERATION.maskedValues = [];
        this.OPERATION.amount = 0;
        this.OPERATION.commission = 0;
        this.OPERATION.comment = '';
        this.OPERATION.status = {};
        this.setStage(1);
        this.OPERATION.completed = 2; // 1 - success, 2 - in progress, 3 - error
    };
    // ========== OPERATION CREATION ========================================================================================
    /**
     Method for getting transaction Id and then run appropriate method for operation creation
     */
    OperationService.prototype.createOperation = function () {
        var _this = this;
        if (this.global.checkOnline()) {
            console.log('CREATE OPERATION START');
            this.setStage(3);
            __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = true;
            this.getTransId().subscribe(function (data) {
                _this.currTransId.emit(data.transId);
                _this.OPERATION.opId = data.transId.toString();
                var transId = data.transId;
                console.log('TRANS_ID = ' + transId);
                // VOUCHER
                if (_this.OPERATION.product.pType === 1) {
                    _this.createVoucher(data.transId);
                }
                // REPLENISHMENT
                if (_this.OPERATION.product.pType === 2) {
                    _this.createReplenishment(data.transId);
                }
            }, function (error) {
                // this.alert.onError(error);
                console.log('ERROR in getting TransId');
                console.log('ERROR_STATUS = ' + error.status);
                console.log('ERROR_BODY = ' + error._body);
                _this.OPERATION.status = JSON.parse(error._body);
                console.log(error._body);
                _this.setCompleted(3);
            }, function () {
            });
        }
    };
    // ---------- VOUCHER OPERATION -----------------------------------------------------------------------------------------
    OperationService.prototype.createVoucher = function (transId) {
        var _this = this;
        var voucherOp = {
            article: this.OPERATION.product.pId,
            comment: this.OPERATION.comment || '',
            transId: transId
        };
        if (this.global.checkOnline()) {
            console.log('CREATE VOUCHER START');
            this.voucherCreate(voucherOp).subscribe(function (data) {
                console.log('VOUCHER GET STATUS_1  FOR ' + transId);
                console.log(data);
                _this.getVoucherStatus(transId);
            }, function (error) {
                console.log('ERROR VOUCHER CREATE 1');
                console.log(error);
                var err = JSON.parse(error._body);
                switch (err.error) {
                    case 8: {
                        console.log('OPERATION EXISTS');
                        _this.getVoucherStatus(transId);
                        break;
                    }
                    default: {
                        break;
                    }
                }
                _this.voucherCreate(voucherOp).subscribe(function (data) {
                    console.log('VOUCHER GET STATUS 2 TIME: ' + transId);
                    console.log(data);
                    _this.getVoucherStatus(voucherOp.transId);
                }, function (error) {
                    console.log('VOUCHER ERROR');
                    console.log(error);
                    _this.OPERATION.status = JSON.parse(error._body);
                    _this.setCompleted(3);
                    __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                });
            });
        }
    };
    OperationService.prototype.getVoucherStatus = function (tId) {
        var _this = this;
        if (this.global.checkOnline()) {
            console.log('GET STATUS FOR:' + tId);
            this.voucherGetStatus(tId).subscribe(function (data) {
                console.log('VOUCHER_STATUS 1:');
                console.log(data);
                if (data.serial) {
                    _this.OPERATION.status = data;
                    _this.setCompleted(1);
                    __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                    _this.user.refreshBalance();
                    // console.error("TIMER START");
                    // this.timer = setTimeout(() => {
                    //   console.error("TIMER " + this.OPERATION.opId + " ENDS");
                    //   this.clearOperation();
                    // }, 15000);
                }
                else {
                    _this.voucherGetStatus(tId).subscribe(function (data) {
                        console.log('VOUCHER_STATUS 2:');
                        console.log(data);
                        if (data.serial) {
                            _this.OPERATION.status = data;
                            _this.setCompleted(1);
                            __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                            // this.timer = setTimeout(() => {
                            //   console.error("TIMER " + this.OPERATION.opId + " ENDS");
                            //   this.clearOperation();
                            // }, 15000);
                            // console.error("TIMER START");
                            // setTimeout(this.timer);
                        }
                        else {
                            _this.voucherGetStatus(tId).subscribe(function (data) {
                                console.log('VOUCHER_STATUS 3:');
                                console.log(data);
                                if (data.serial) {
                                    _this.OPERATION.status = data;
                                    _this.setCompleted(1);
                                    __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                }
                                else {
                                    _this.OPERATION.status = data;
                                    _this.setCompleted(3);
                                    __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                }
                            }, function (error) {
                                _this.OPERATION.status = JSON.parse(error._body);
                                _this.setCompleted(3);
                                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                            });
                        }
                    }, function (error) {
                        _this.OPERATION.status = JSON.parse(error._body);
                        _this.setCompleted(3);
                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                    });
                }
            }, function (error) {
                _this.OPERATION.status = JSON.parse(error._body);
                _this.setCompleted(3);
                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
            });
        }
    };
    // ---------- REPLENISHMENT OPERATION -----------------------------------------------------------------------------------
    OperationService.prototype.createReplenishment = function (transId) {
        var _this = this;
        var replenishmentOp = {
            article: this.OPERATION.product.pId,
            fields: this.OPERATION.fieldValues,
            amount: Number(this.OPERATION.amount),
            comment: this.OPERATION.comment,
            transId: transId
        };
        if (this.global.checkOnline()) {
            console.log('CREATE REPLENISHMENT START');
            console.log('OPERATION:');
            console.log(replenishmentOp);
            this.setCompleted(2);
            __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = true;
            this.replCreate(replenishmentOp).subscribe(function (data) {
                console.log('OPERATION GET STATUS 1 TIME: ' + transId);
                console.log(data);
                _this.getReplenishmentStatus(transId);
            }, function (error) {
                if (error.status == 500) {
                    _this.setCompleted(3);
                    __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                    _this.OPERATION.status = _this.error500;
                }
                if (error.status = 403) {
                    var err_1 = JSON.parse(error._body);
                    switch (err_1.error) {
                        case 8: {
                            _this.replGetStatus(transId);
                            break;
                        }
                        case 923: {
                            _this.replCreate(replenishmentOp).subscribe(function (data) {
                                console.log('OPERATION GET STATUS 2 TIME: ' + transId);
                                console.log(data);
                                _this.getReplenishmentStatus(transId);
                            }, function (error) {
                                console.log('REPLENISHMENT ERROR');
                                err_1 = JSON.parse(error._body);
                                _this.OPERATION.status = err_1;
                                _this.setCompleted(3);
                                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                            });
                            break;
                        }
                        default: {
                            console.log("ERROR IN OPERATION CREATION");
                            err_1 = JSON.parse(error._body);
                            _this.OPERATION.status = err_1;
                            _this.setCompleted(3);
                            __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                        }
                    }
                }
            });
        }
    };
    OperationService.prototype.getReplenishmentStatus = function (tId) {
        var _this = this;
        var err;
        if (this.global.checkOnline()) {
            console.log('REPLENISHMENT GET STATUS');
            this.replGetStatus(tId).subscribe(function (data) {
                console.log('REPLENISHMENT GET STATUS 1');
                console.log(data);
                switch (data.error) {
                    // success
                    case 0: {
                        _this.OPERATION.status = data;
                        _this.setCompleted(1);
                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                        _this.user.refreshBalance();
                        break;
                    }
                    case 923: {
                        console.warn('STATUS 923! Second attempt to request!');
                        // REPL 2 ATTEMPT delay 5 sec
                        setTimeout(function () {
                            console.log('REPLENISHMENT GET STATUS 2');
                            _this.replGetStatus(tId).subscribe(function (data) {
                                console.log(data);
                                _this.OPERATION.status = data;
                                switch (data.error) {
                                    case 0: {
                                        console.log('OPERATION SUCCESS');
                                        _this.setCompleted(1);
                                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                        _this.user.refreshBalance();
                                        // this.timer = setTimeout(() => {
                                        //   console.error("TIMER " + this.OPERATION.opId + " ENDS");
                                        //   this.clearOperation();
                                        // }, 15000);
                                        // console.error("TIMER START");
                                        // setTimeout(this.timer);
                                        break;
                                    }
                                    case 923: {
                                        console.warn('STATUS 923! Third attempt to request!');
                                        // REPL 3 ATTEMPT delay 10sec
                                        setTimeout(function () {
                                            console.log('REPLENISHMENT GET STATUS 3');
                                            _this.replGetStatus(tId).subscribe(function (data) {
                                                switch (data.error) {
                                                    case 0: {
                                                        console.log(data);
                                                        _this.setCompleted(1);
                                                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                                        _this.user.refreshBalance();
                                                        // this.timer = setTimeout(() => {
                                                        //   console.error("TIMER " + this.OPERATION.opId + " ENDS");
                                                        //   this.clearOperation();
                                                        // }, 15000);
                                                        // console.error("TIMER START");
                                                        // setTimeout(this.timer);
                                                        break;
                                                    }
                                                    case 923: {
                                                        _this.setCompleted(2);
                                                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                                        _this.OPERATION.status = data;
                                                        _this.user.refreshBalance();
                                                        break;
                                                    }
                                                    default: {
                                                        _this.setCompleted(3);
                                                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                                        _this.OPERATION.status = data;
                                                        _this.user.refreshBalance();
                                                        break;
                                                    }
                                                }
                                            }, function (error) {
                                                console.log('STATUS ERROR');
                                                err = JSON.parse(error._body);
                                                console.log(err);
                                                _this.OPERATION.status = err;
                                                _this.setCompleted(3);
                                                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                            }, function () {
                                                console.log('OPERATION COMPLETED 3');
                                            });
                                        }, 10000);
                                        break;
                                    }
                                    default: {
                                        _this.OPERATION.status = data;
                                        _this.setCompleted(3);
                                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                                    }
                                }
                            }, function (error) {
                                // this.alert.onError(error);
                                err = JSON.parse(error._body);
                                console.log(err);
                                _this.OPERATION.status = err;
                                _this.setCompleted(3);
                                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                            }, function () {
                                console.log('OPERATION COMPLETED 2');
                            });
                        }, 5000);
                        break;
                    }
                    default: {
                        _this.OPERATION.status = data;
                        _this.setCompleted(3);
                        __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
                    }
                }
            }, function (error) {
                console.log("REPLENISHMENT ERROR 1");
                // this.alert.onError(error);
                if (error.status == 500) {
                    _this.OPERATION.status = _this.error500;
                }
                err = JSON.parse(error._body);
                console.log(err);
                _this.OPERATION.status = err;
                _this.setCompleted(3);
                __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */].blockedNavigation = false;
            }, function () {
                console.log('OPERATION COMPLETED 1');
                //TODO for making tests
                // this.user.refreshBalance();
                // setTimeout(() => {
                //   this.clearOperation();
                // }, 2000);
                //------------------//
            });
        }
    };
    // ======================================================================================================================
    // ========= SWAGGER REQUESTING =========================================================================================
    OperationService.prototype.getTransId = function () {
        if (this.global.checkOnline()) {
            return this.service.operationTransIdGet();
        }
    };
    OperationService.prototype.replCreate = function (operation) {
        if (this.global.checkOnline()) {
            return this.service.operationReplenishmentPost(operation);
        }
    };
    OperationService.prototype.replGetStatus = function (opId) {
        if (this.global.checkOnline()) {
            return this.service.operationReplenishmentOperationGet(opId);
        }
    };
    OperationService.prototype.voucherCreate = function (_a) {
        var article = _a.article, comment = _a.comment, transId = _a.transId;
        if (this.global.checkOnline()) {
            return this.service.operationVoucherPost({
                article: article,
                comment: comment,
                transId: transId
            });
        }
    };
    OperationService.prototype.voucherGetStatus = function (opId) {
        if (this.global.checkOnline()) {
            return this.service.operationVoucherOperationGet(opId);
        }
    };
    return OperationService;
}());
OperationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_OperationApi__["a" /* OperationApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_OperationApi__["a" /* OperationApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object])
], OperationService);

var _a, _b, _c;
//# sourceMappingURL=operation.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__ = __webpack_require__("../../../../../src/app/swagger/api/ArticleApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("../../../../../src/app/_models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cheque__ = __webpack_require__("../../../../../src/app/_models/cheque.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_commission__ = __webpack_require__("../../../../../src/app/_models/commission.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductService = ProductService_1 = (function () {
    function ProductService(service, userServ, alert, opService, catService, global) {
        this.service = service;
        this.userServ = userServ;
        this.alert = alert;
        this.opService = opService;
        this.catService = catService;
        this.global = global;
        this.fastProducts = [3, 5, 7, 16, 17];
        this.currProductList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.PRODUCTS = [];
        this.fastAccess = [];
        this.currFastList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.CHEQUES = [];
        this.CurrentPRODUCT = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](0, 0, [{
                cult: '',
                value: ''
            }], [{
                cult: '',
                value: ''
            }], [], [], 0, '', [], 0, 0, '', 0);
        this.ProdsByCat = [];
    }
    ProductService.prototype.selectFirstProduct = function () {
        console.log('PRODUCT SELECTED');
        var product = this.PRODUCTS.reduce(function (l, e) {
            return e.pOrder < l.pOrder ? e : l;
        });
        console.log(product);
        this.opService.clearOperation();
        product.pInputFields = __WEBPACK_IMPORTED_MODULE_10__models_field__["a" /* Field */].toFields(product.pInputFields);
        this.opService.setProduct(product);
        // this.service.clearSearchList();
        setTimeout(function () {
            var field = document.getElementById('fast-access');
            if (__WEBPACK_IMPORTED_MODULE_5__global_service__["a" /* GlobalService */].checkMobileView()) {
                field.scrollIntoView();
            }
        }, 300);
    };
    /**
     * Convert server responce to array of Commission obj
     * @param obj
     * @returns {Array}
     */
    ProductService.toCommission = function (obj) {
        var comm = [];
        for (var i = 0; i < obj.length; i++) {
            comm.push(new __WEBPACK_IMPORTED_MODULE_4__models_commission__["a" /* Commission */](obj[i].minAmount, obj[i].percent || 0, obj[i].value || 0));
        }
        return comm;
    };
    ProductService.prototype.getProducts = function (catId) {
        if (this.global.checkOnline()) {
            return this.service.articleByCategoryCategoryGet(catId);
        }
    };
    /**
     * Set current product to default
     */
    ProductService.prototype.clearCurrent = function () {
        this.CurrentPRODUCT = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](0, 0, [{
                cult: '',
                value: ''
            }], [{
                cult: '',
                value: ''
            }], [], [], 0, '', [], 0, 0, '', 0);
    };
    /**
     * Convert responce from server for category products to array of Product
     * @param data
     * @returns {Product[]}
     */
    ProductService.prototype.getProductsList = function (data) {
        if (this.global.checkOnline()) {
            var fieldList = [];
            if (this.PRODUCTS.length) {
                this.PRODUCTS = [];
            }
            for (var i = 0; i < data.length; i++) {
                this.PRODUCTS.push(new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](data[i].id, data[i].type, data[i].name || [], data[i].hint || [], data[i].field || [], ProductService_1.toCommission(data[i].commission) || [], data[i].nominal, data[i].cheque, data[i].codes, data[i].minAmount, data[i].maxAmount, data[i].icon, data[i].order));
                fieldList.push({
                    product: data[i].id,
                    field: data[i].field || []
                });
            }
            this.PRODUCTS = this.PRODUCTS.sort(function (a, b) {
                return (a.pOrder > b.pOrder) ? 1 : ((b.pOrder > a.pOrder) ? -1 : 0);
            });
            console.warn(this.PRODUCTS);
            console.warn(fieldList);
            if (this.catService.CurrentCATEGORY.cOrder != 1) {
                this.selectFirstProduct();
            }
        }
        return this.PRODUCTS;
    };
    /**
     * Create array of products accessible from fast-access panel
     */
    ProductService.prototype.formFastAccessList = function () {
        this.fastAccess = [];
        var products = this.PRODUCTS;
        for (var i = 0; i < products.length; i++) {
            if (this.fastProducts.includes(products[i].pId)) {
                this.fastAccess.push(products[i]);
            }
        }
        console.log('FAST PRODUCTS');
        console.log(this.fastAccess);
        localStorage.setItem('fastList', JSON.stringify(this.fastAccess));
        this.currFastList.emit(this.fastAccess);
    };
    ProductService.prototype.getCheques = function () {
        if (this.global.checkOnline()) {
            return this.service.articleChequesGet();
        }
    };
    /**
     * Convert server responce to array of Cheque obj
     */
    ProductService.prototype.getChequesList = function () {
        var _this = this;
        this.getCheques().subscribe(function (data) {
            if (_this.CHEQUES.length) {
                _this.CHEQUES = [];
            }
            for (var i = 0; i < data.length; i++) {
                _this.CHEQUES.push(new __WEBPACK_IMPORTED_MODULE_3__models_cheque__["a" /* Cheque */](data[i].name, data[i].text));
            }
            localStorage.cheques = JSON.stringify(_this.CHEQUES);
        }, function (error) {
            _this.alert.onError(error);
        });
        console.log(this.CHEQUES);
    };
    /**
     * Getting HTML template of cheque from cheques array by it`s name
     * @param name - name of template
     * @returns {string}
     * @constructor
     */
    ProductService.prototype.ChequeText = function (name) {
        for (var i = 0; i < this.CHEQUES.length; i++) {
            if (name === this.CHEQUES[i].cName) {
                return this.CHEQUES[i].cText;
            }
        }
    };
    /**
     * Method for printing cheque
     * @param {Operation} Operation - obj with necessary values
     * @param {string} chequeTemplate - HTML template of cheque
     */
    ProductService.prototype.printCheque = function (Operation, chequeTemplate) {
        var popupWin, cheque;
        cheque = chequeTemplate.replace(/\n/g, '<br>');
        console.log(cheque);
        var terminal = this.userServ.USER.terminal.toString();
        cheque = cheque.replace('<TermID>', '' + terminal + '');
        var d = new Date(Operation.oTimestamp);
        var date = '' + d.getDate() + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' +
            d.getMinutes() + ':' + d.getSeconds();
        cheque = cheque.replace('<DateSale>', '' + date + '');
        var name = __WEBPACK_IMPORTED_MODULE_8__translate_Lang__["a" /* Lang */].getLangValue(Operation.oArticle);
        cheque = cheque.replace('<ProductName>', name + '');
        if (chequeTemplate.includes('<AmountTotal>')) {
            cheque = cheque.replace('<Fld1Value>', Operation.oFields[0].value);
            cheque = cheque.replace('<Fee>', Math.abs(Operation.oCommission) / 100);
            if (Operation.oCommission >= 0) {
                cheque = cheque.replace('<AmountTotal>', (Operation.oAmount / 100 + Operation.oCommission / 100));
            }
            else {
                cheque = cheque.replace('<AmountTotal>', Operation.oAmount);
            }
            cheque = cheque.replace('<OpState>', Operation.oStatus.error + ' - ' + __WEBPACK_IMPORTED_MODULE_8__translate_Lang__["a" /* Lang */].getLangValue(Operation.oStatus.errorText));
            cheque = cheque.replace('<UNIQID>', Operation.oId);
        }
        if (chequeTemplate.includes('<CardSerial>')) {
            cheque = cheque.replace('<CardSerial>', Operation.oStatus.serial);
            cheque = cheque.replace('<CardSecret>', Operation.oStatus.secret);
            cheque = cheque.replace('<CardSecret\>', Operation.oStatus.secret);
        }
        if (Operation.oCommission >= 0) {
            cheque = cheque.replace('<Nominal>', Operation.oAmount / 100);
        }
        else {
            cheque = cheque.replace('<Nominal>', (Operation.oAmount + Operation.oCommission) / 100);
        }
        var content = '<html><head><title>Print cheque</title></head>' + '<body onload="window.print();window.close()">' + cheque +
            '</body></html>';
        console.log(content);
        popupWin = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        // popupWin.document.open();
        popupWin.document.write(content);
        // popupWin.document.print();
        popupWin.document.close();
    };
    return ProductService;
}());
ProductService = ProductService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__["a" /* ArticleApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_ArticleApi__["a" /* ArticleApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__operation_service__["a" /* OperationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__category_service__["a" /* CategoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__global_service__["a" /* GlobalService */]) === "function" && _f || Object])
], ProductService);

var ProductService_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_ReportApi__ = __webpack_require__("../../../../../src/app/swagger/api/ReportApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swagger_api_OperationApi__ = __webpack_require__("../../../../../src/app/swagger/api/OperationApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_operation__ = __webpack_require__("../../../../../src/app/_models/operation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swagger_api_UserApi__ = __webpack_require__("../../../../../src/app/swagger/api/UserApi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsService = (function () {
    function ReportsService(service, alert, operation, user) {
        this.service = service;
        this.alert = alert;
        this.operation = operation;
        this.user = user;
        this.currReportContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reportContent = '';
    }
    ReportsService.toOpList = function (data) {
        var array = [];
        for (var i = 0; i < data.length; i++) {
            array.push(new __WEBPACK_IMPORTED_MODULE_4__models_operation__["a" /* Operation */](data[i].id, data[i].article, data[i].type, new Date(data[i].timestamp).toISOString(), data[i].fields, data[i].amount, data[i].commission, data[i].comment, data[i].status, data[i].cheque, data[i].icon));
        }
        return array;
    };
    ReportsService.prototype.setContent = function (content) {
        this.reportContent = '';
        this.reportContent = content;
        this.currReportContent.emit(content);
    };
    ReportsService.prototype.getCollection = function () {
        var cult = localStorage.lang;
        return this.service.reportShiftGet(cult);
    };
    ReportsService.prototype.createCollection = function () {
        // this.clearReport();
        console.log('GET COLLECTION');
        var cult = localStorage.lang;
        return this.service.reportCollectionPost(new Date(), cult);
    };
    ReportsService.prototype.getCollectionHistory = function (sDate, eDate) {
        console.log('GET COLLECTION');
        var cult = localStorage.lang;
        return this.service.reportCollectionHistoryGet(sDate, eDate, cult);
    };
    ReportsService.prototype.getCollectionById = function (id) {
        return this.service.reportCollectionOpIdGet(id);
    };
    ReportsService.prototype.getShift = function () {
        var _this = this;
        // this.clearReport();
        console.log('GET SHIFT');
        var cult = localStorage.lang;
        this.service.reportShiftGet(cult).subscribe(function (data) {
            console.log('DUTY_REPORT');
            console.log(data);
            _this.setContent(data.body);
        }, function (error) {
            _this.setContent('ERROR! Operation temporary unavailable!');
            _this.alert.onError(error);
        });
    };
    ReportsService.prototype.getOperationHistory = function (count, dateFrom, dateTill, startFrom, desc) {
        // this.clearReport();
        return this.operation.operationHistoryGet(count, dateFrom, dateTill, startFrom, desc);
    };
    ReportsService.prototype.getSales = function (dateFrom, dateTill) {
        var _this = this;
        // this.clearReport();
        console.log('GET SALES');
        var cult = localStorage.lang;
        console.warn('LANG - ' + cult);
        this.service.reportSalesGet(dateFrom, dateTill, cult).subscribe(function (data) {
            console.log('SALES_REPORT');
            console.log(data);
            _this.setContent(data.body);
        }, function (error) {
            _this.setContent('ERROR! Operation temporary unavailable!');
            _this.alert.onError(error);
        });
    };
    ReportsService.prototype.getSalesDetailed = function (dateFrom, dateTill) {
        var _this = this;
        // this.clearReport();
        console.log('GET SALES DETAILED');
        var cult = localStorage.lang;
        console.warn('LANG - ' + cult);
        this.service.reportSalesDetailedGet(dateFrom, dateTill, cult).subscribe(function (data) {
            console.log('DETAILED_REPORT');
            console.log(data);
            _this.setContent(data.body);
        }, function (error) {
            _this.setContent('ERROR! Operation temporary unavailable!');
            _this.alert.onError(error);
        });
    };
    ReportsService.prototype.getFinancial = function (date) {
        var _this = this;
        // this.clearReport();
        console.log('GET FINANCIAL');
        var cult = localStorage.lang;
        console.warn('LANG - ' + cult);
        this.service.reportFinancialGet(date, cult).subscribe(function (data) {
            console.log('FINANCIAL_REPORT');
            console.log(data);
            _this.setContent(data.body);
        }, function (error) {
            _this.setContent('ERROR! Operation temporary unavailable!');
            _this.alert.onError(error);
        });
    };
    ReportsService.prototype.getAuthHistory = function () {
        console.log('GET AUTH HISTORY');
        return this.user.userAuthHistoryGet();
    };
    ReportsService.printReport = function (report) {
        var sDate = '', eDate = '';
        if (report.sDate != null)
            sDate = '' + report.sDate.getDate() + '.' +
                ('0' + (report.sDate.getMonth() + 1)).slice(-2) + '.' + report.sDate.getFullYear();
        if (report.eDate != null)
            eDate = '' + report.eDate.getDate() + '.' +
                ('0' + (report.eDate.getMonth() + 1)).slice(-2) + '.' + report.eDate.getFullYear();
        // + d.getHours() + ':' +
        // d.getMinutes() + ':' +
        // d.getSeconds();
        var range = (sDate != '' && eDate != '') ? ('<h5 style="text-align: center">' + sDate + ' - ' + eDate + '</h5>') : '';
        var text = '<html><head><title>' + report.name + '</title></head><body >' +
            '<h4 style="text-align: center">' + report.name + '</h4>' +
            range +
            '<div style="text-align: center; width: 400px; margin: 0 auto">' + report.content + '</div>' +
            '</body></html>';
        var printWindow = window.open('', '', 'height=800,width=800');
        printWindow.document.write(text);
        printWindow.document.close(); // necessary for IE >= 10
        printWindow.focus(); // necessary for IE >= 10*/
        printWindow.print();
        printWindow.close();
        return true;
    };
    return ReportsService;
}());
ReportsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_ReportApi__["a" /* ReportApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_ReportApi__["a" /* ReportApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__swagger_api_OperationApi__["a" /* OperationApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swagger_api_OperationApi__["a" /* OperationApi */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__swagger_api_UserApi__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__swagger_api_UserApi__["a" /* UserApi */]) === "function" && _d || Object])
], ReportsService);

var _a, _b, _c, _d;
//# sourceMappingURL=reports.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__ = __webpack_require__("../../../../../src/app/swagger/api/UserApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_balance__ = __webpack_require__("../../../../../src/app/_models/balance.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../swagger/model/Auth.ts"/>




var UserService = (function () {
    function UserService(service, alert) {
        this.service = service;
        this.alert = alert;
        this.BALANCE = new __WEBPACK_IMPORTED_MODULE_2__models_balance__["a" /* Balance */](0, 0, 0, null);
        this.currBalance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.USER = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserService.prototype.refreshBalance = function () {
        var _this = this;
        console.log('GET BALANCE');
        this.getBalance().subscribe(function (data) {
            _this.BALANCE = new __WEBPACK_IMPORTED_MODULE_2__models_balance__["a" /* Balance */](data.personal, data.network, data.overdraft, new Date(data.datetime));
            console.log('USER BALANCE:' + data.personal);
            _this.currBalance.emit(_this.BALANCE);
        }, function (error) {
            _this.alert.onError(error);
        });
    };
    UserService.prototype.getBalance = function () {
        return this.service.userBalanceGet();
    };
    UserService.prototype.getSupport = function () {
        return this.service.userSupport2Get();
    };
    // ==========================================================================================================
    UserService.prototype.getGeo = function () {
        console.log('GETTING GEO');
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.workWithGeo.bind(this), null, options);
        }
    };
    UserService.prototype.workWithGeo = function (position) {
        var _this = this;
        console.log('GEOLOCATION');
        var positionInfo = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: new Date(position.timestamp)
        };
        console.log(positionInfo);
        // alert("My position: " + positionInfo.longitude + " || " + positionInfo.latitude);
        this.service.userGeolocationPost(positionInfo).subscribe(function (data) {
            console.log('GEO-RESPONCE');
            console.log(data);
        }, function (error) {
            console.log('GEO-ERROR');
            _this.alert.onError(error);
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__["a" /* UserApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_api_UserApi__["a" /* UserApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(config) {
        this.config = config;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.service.otpAuth();
        if (localStorage.getItem('currentUser')) {
            this.config.apiKey = JSON.parse(localStorage.getItem('currentUser')).token;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__["a" /* Configuration */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__ = __webpack_require__("../../../../../src/app/keyboard/keyboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_menu_nav_menu_component__ = __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fast_access_fast_access_component__ = __webpack_require__("../../../../../src/app/fast-access/fast-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__center_center_component__ = __webpack_require__("../../../../../src/app/center/center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__check_forms_check_begin_check_begin_component__ = __webpack_require__("../../../../../src/app/check-forms/check-begin/check-begin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__check_forms_check_process_check_process_component__ = __webpack_require__("../../../../../src/app/check-forms/check-process/check-process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__input_form_input_form_component__ = __webpack_require__("../../../../../src/app/input-form/input-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__translate_translate_pipe__ = __webpack_require__("../../../../../src/app/translate/translate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__translate_translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__swagger_api_UserApi__ = __webpack_require__("../../../../../src/app/swagger/api/UserApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__swagger_api_ArticleApi__ = __webpack_require__("../../../../../src/app/swagger/api/ArticleApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__swagger_api_OperationApi__ = __webpack_require__("../../../../../src/app/swagger/api/OperationApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swagger_configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_news_service__ = __webpack_require__("../../../../../src/app/_services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__swagger_api_AuthApi__ = __webpack_require__("../../../../../src/app/swagger/api/AuthApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__swagger_api_ReportApi__ = __webpack_require__("../../../../../src/app/swagger/api/ReportApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_safeHTML__ = __webpack_require__("../../../../../src/app/_pipes/safeHTML.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_myCurrency__ = __webpack_require__("../../../../../src/app/_pipes/myCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_app_report_components_operation_report_operation_report_component__ = __webpack_require__("../../../../../src/app/report_components/operation-report/operation-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__report_components_reports_reports_component__ = __webpack_require__("../../../../../src/app/report_components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__change_pass_change_pass_component__ = __webpack_require__("../../../../../src/app/change-pass/change-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_to_regex_pipe__ = __webpack_require__("../../../../../src/app/_pipes/to-regex.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__report_components_auth_history_auth_history_component__ = __webpack_require__("../../../../../src/app/report_components/auth-history/auth-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_hammer_timejs__ = __webpack_require__("../../../../hammer-timejs/hammer-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_hammer_timejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_hammer_timejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__swagger_variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__otp_auth_otp_auth_component__ = __webpack_require__("../../../../../src/app/otp-auth/otp-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pipes_to_number_pipe__ = __webpack_require__("../../../../../src/app/_pipes/to-number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__report_components_collection_collection_component__ = __webpack_require__("../../../../../src/app/report_components/collection/collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="input-form/input-form.component.ts"/>





























































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__keyboard_keyboard_component__["a" /* KeyboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__fast_access_fast_access_component__["a" /* FastAccessComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__center_center_component__["a" /* CenterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__check_forms_check_begin_check_begin_component__["a" /* CheckBeginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__check_forms_check_process_check_process_component__["a" /* CheckProcessComponent */],
            __WEBPACK_IMPORTED_MODULE_16__input_form_input_form_component__["a" /* InputFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__translate_translate_pipe__["a" /* TranslatePipe */],
            __WEBPACK_IMPORTED_MODULE_24__home_home_component__["b" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_27__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_39__pipes_safeHTML__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_41__pipes_myCurrency__["a" /* MyCurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_46__report_components_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_45_app_report_components_operation_report_operation_report_component__["b" /* OperationReportComponent */],
            __WEBPACK_IMPORTED_MODULE_49__pipes_to_regex_pipe__["a" /* ToRegexPipe */],
            __WEBPACK_IMPORTED_MODULE_45_app_report_components_operation_report_operation_report_component__["a" /* MyDialog */],
            __WEBPACK_IMPORTED_MODULE_58__report_components_collection_collection_component__["b" /* MyCollection */],
            __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* GlobalDialog */],
            __WEBPACK_IMPORTED_MODULE_48__change_pass_change_pass_component__["a" /* ChangePassComponent */],
            __WEBPACK_IMPORTED_MODULE_50__report_components_auth_history_auth_history_component__["a" /* AuthHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_51__status_status_component__["a" /* StatusComponent */],
            __WEBPACK_IMPORTED_MODULE_56__otp_auth_otp_auth_component__["a" /* OtpAuthComponent */],
            __WEBPACK_IMPORTED_MODULE_57__pipes_to_number_pipe__["a" /* ToNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_58__report_components_collection_collection_component__["a" /* CollectionComponent */],],
        imports: [__WEBPACK_IMPORTED_MODULE_54_ng2_currency_mask__["CurrencyMaskModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_38_ngx_pipes__["a" /* NgPipesModule */],
            __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["c" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["h" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["i" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["j" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_47_angular2_text_mask__["TextMaskModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_16__input_form_input_form_component__["a" /* InputFormComponent */],],
        providers: [__WEBPACK_IMPORTED_MODULE_18__translate_translations__["b" /* TRANSLATION_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_40__services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_21__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_22__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_23__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_32__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_33__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_34__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_35__services_operation_service__["a" /* OperationService */],
            __WEBPACK_IMPORTED_MODULE_44__services_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_31__swagger_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_36__swagger_api_AuthApi__["a" /* AuthApi */],
            __WEBPACK_IMPORTED_MODULE_28__swagger_api_UserApi__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_29__swagger_api_ArticleApi__["a" /* ArticleApi */],
            __WEBPACK_IMPORTED_MODULE_37__swagger_api_ReportApi__["a" /* ReportApi */],
            __WEBPACK_IMPORTED_MODULE_30__swagger_api_OperationApi__["a" /* OperationApi */],
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_59__helpers__["a" /* fakeBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_60__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_26__angular_common__["APP_BASE_HREF"],
                useValue: '/'
            },
            // {provide: LOCALE_ID, useValue: 'ru-RU'}
            /** base path for transport services (SWAGGER)*/
            { provide: __WEBPACK_IMPORTED_MODULE_55__swagger_variables__["a" /* BASE_PATH */], useValue: '/api/v0' },
            { provide: __WEBPACK_IMPORTED_MODULE_55__swagger_variables__["a" /* BASE_PATH */], useValue: 'https://m.globalpay.com.ua/api/v0' },
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_45_app_report_components_operation_report_operation_report_component__["a" /* MyDialog */],
            __WEBPACK_IMPORTED_MODULE_58__report_components_collection_collection_component__["b" /* MyCollection */],
            __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* GlobalDialog */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otp_auth_otp_auth_component__ = __webpack_require__("../../../../../src/app/otp-auth/otp-auth.component.ts");





var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]],
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: ''
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */]
    },
    {
        path: 'otp/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__otp_auth_otp_auth_component__["a" /* OtpAuthComponent */]
    },
    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.scrol-cont {\r\n  /*padding-left: 0;*/\r\n  /*padding-right: 0;*/\r\n}\r\n\r\n.scroll {\r\n  padding: 0 5px 5px 5px;\r\n  margin: 0 auto;\r\n  width: inherit;\r\n  overflow-x: scroll;\r\n}\r\n\r\n#categories {\r\n  position: relative;\r\n  height: 100%; /* Or whatever you want (eg. 400px) */\r\n}\r\n\r\n/*.scroll::-webkit-scrollbar {*/\r\n/*height: 6px;*/\r\n/*}*/\r\n\r\n/*.scroll::-webkit-scrollbar-track {*/\r\n\r\n/*border-radius: 6px;*/\r\n/*!*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*!*/\r\n/*!*background-color: #F5F5F5;*!*/\r\n/*background-color: rgba(0, 0, 0, 0.1);*/\r\n\r\n/*}*/\r\n\r\n/*.scroll::-webkit-scrollbar-thumb {*/\r\n/*border-radius: 5px;*/\r\n/*width: 60%;*/\r\n/*!*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*!*/\r\n/*background-color: rgba(255, 255, 255, 0.6);*/\r\n/*}*/\r\n\r\nmd-tab-header.mat-tab-header {\r\n  background: red !important;\r\n}\r\n\r\nmd-card-content {\r\n  background: white !important;\r\n}\r\n\r\n/*==============================================================*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"wrap-nav-top\">\r\n  <div id=\"scroll-content\" class=\"container scrol-cont\">\r\n    <ul id=\"nav-top\" class=\"tabs nav-top\">\r\n      <li *ngFor=\"let category of categories|orderBy:'cId'\" class=\"tab\">\r\n        <a *ngIf=\"category.cId&&category.cName\"\r\n           [ngClass]=\"{'active': (category.cId === currCatId) }\"\r\n           (click)=\"selectCategory(category)\">{{Lang(category.cName)}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"main-wrap\" class=\"container main-wrap clearfix no-news\">\r\n  <app-nav-menu></app-nav-menu>\r\n  <app-help></app-help>\r\n  <div *ngIf=\"currActivity==0\" [ngSwitch]=\"currCatId\" class=\"wrap-left clearfix\" style=\"max-width: 750px\">\r\n    <div *ngFor=\"let category of categories|orderBy:'cOrder'\" id='{{category.cId}}'>\r\n      <app-center *ngSwitchCase=\"(category.cId)\" [catId]=category.cId></app-center>\r\n    </div>\r\n  </div>\r\n  <app-news *ngIf=\"currActivity==0||(currActivity!=0&&mobileView)\"></app-news>\r\n  <!--Operation report-->\r\n  <app-operation-report *ngIf=\"currActivity==2\"></app-operation-report>\r\n  <!--Other reports-->\r\n  <app-reports *ngIf=\"[1,4,5,6,7].includes(currActivity)\"></app-reports>\r\n  <!--Collection report-->\r\n  <!--<app-reports *ngIf=\"currActivity==3\"></app-reports>-->\r\n  <app-collection *ngIf=\"currActivity==3\"></app-collection>\r\n  <!--Change pass-->\r\n  <app-change-pass *ngIf=\"currActivity==8\"></app-change-pass>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_news_service__ = __webpack_require__("../../../../../src/app/_services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriesComponent = (function () {
    function CategoriesComponent(catService, prodService, newsServ, global, alert) {
        var _this = this;
        this.catService = catService;
        this.prodService = prodService;
        this.newsServ = newsServ;
        this.global = global;
        this.alert = alert;
        this.categories = this.catService.CATEGORIES;
        this.currActivity = 0;
        this.mobileView = window.innerWidth <= 1115;
        this.catService.currCat.subscribe(function (value) {
            _this.currCatId = value;
        });
        this.global.currActivity.subscribe(function (value) {
            _this.currActivity = value;
        });
        this.newsServ.currNews.subscribe(function (value) {
            _this.showNews = value;
        });
        // if (this.categories.length > 0) {
        //   if (this.catService.CurrentCATEGORY.cId === 0) {
        //     this.catService.setCategory(this.categories.filter(function (obj) {
        //       return obj.cOrder == 1;
        //     }))
        //   }
        // }
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catService.getCategories().subscribe(function (data) {
            _this.categories = [];
            _this.categories = _this.catService.getCategoriesList(data);
            console.log('CATEGORIES');
            console.log(_this.categories);
            for (var i = 0; i < _this.categories.length; i++) {
                _this.prodService.ProdsByCat.push({
                    category: _this.categories[i].cId,
                    products: []
                });
            }
            localStorage.setItem('ProductsByCategory', JSON.stringify(_this.prodService.ProdsByCat));
            if (_this.categories.length > 0) {
                console.warn('categories>0');
                console.warn(_this.catService.CurrentCATEGORY);
                if (_this.catService.CurrentCATEGORY.cId === 0) {
                    console.warn(_this.catService.CurrentCATEGORY.cId);
                    _this.catService.setCategoryByOrderId(1);
                }
                else {
                    console.warn(_this.catService.CurrentCATEGORY.cId);
                    _this.catService.setCategory(_this.catService.CurrentCATEGORY);
                }
            }
        }, function (error) {
            // console.log("STATUS = " + error.status);
            _this.alert.onError(error);
        });
    };
    CategoriesComponent.prototype.Lang = function (names) {
        return __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    CategoriesComponent.prototype.selectCategory = function (category) {
        if (!__WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */].blockedNavigation) {
            // console.error(category);
            this.global.checkOnline();
            if (this.currActivity !== 0) {
                this.global.setActivity(0);
            }
            this.catService.setCategory(category);
            this.prodService.clearCurrent();
        }
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_news_service__["a" /* NewsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], CategoriesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/center/center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/center/center.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=mob class=\"wrap-left clearfix\">-->\r\n<div [ngSwitch]=\"opStage\">\r\n  <div *ngSwitchCase=\"1\" class=\"keyboard-tablet-wrap small-keyboard\">\r\n    <div id=\"input-wrap\" class=keyboard-box-wrap>\r\n      <app-fast-access #fastAccessInput></app-fast-access>\r\n      <hr class=under-keyboard-logos>\r\n      <div class=wrap-pay-data>\r\n        <app-input-form></app-input-form>\r\n      </div>\r\n    </div>\r\n    <hr class=\"under-keyboard-line only-mobile\">\r\n  </div>\r\n  <app-check-begin *ngSwitchCase=\"2\"></app-check-begin>\r\n  <app-check-process *ngSwitchCase=\"3\"></app-check-process>\r\n  <div class=operators-wrap>\r\n    <app-product-list [catId]=catId></app-product-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/center/center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CenterComponent = (function () {
    function CenterComponent(service) {
        var _this = this;
        this.service = service;
        this.number = '';
        this.amount = 0.0;
        this.service.currStage.subscribe(function (value) {
            _this.opStage = value;
        });
    }
    CenterComponent.prototype.ngOnInit = function () {
        this.opStage = 1;
    };
    return CenterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('catId'),
    __metadata("design:type", String)
], CenterComponent.prototype, "catId", void 0);
CenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-center',
        template: __webpack_require__("../../../../../src/app/center/center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/center/center.component.css")]
        // directives: [InputMobComponent, InputPayComponent, InputInetComponent, InputWebComponent]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object])
], CenterComponent);

var _a;
//# sourceMappingURL=center.component.js.map

/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\r\n  text-align: center;\r\n}\r\n\r\ninput:focus {\r\n  border-bottom: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.mat-input-infix {\r\n  font-size: 16px;\r\n}\r\n\r\n.eye {\r\n  height: 28px;\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.help-block {\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 style=\"text-align: center\">{{'pass_change'|translate}}</h5>\r\n<div id=\"main-wrap\" class=\"clearfix\">\r\n\r\n  <div style=\"margin: 0 auto; padding-top: 20px; max-width: 200px\">\r\n    <form name=\"formPass\" (ngSubmit)=\"f.form.valid&&(newPass==newPassRepeat)\" #f=\"ngForm\"\r\n          style=\"margin: 0 auto\" novalidate>\r\n\r\n      <mat-form-field>\r\n        <input matInput [type]=\"showPassword ? 'text' : 'password'\" id=\"old_pass\" name=\"old_pass\" style=\"width: 80%\"\r\n               [(ngModel)]=\"old_pass\" #oldPass=\"ngModel\"\r\n               required placeholder=\"{{'current_pass'|translate}}\"/>\r\n        <img class=\"eye\" src=\"assets/images/icons/{{showPassword ?'shown.svg':'hidden.svg' }}\"\r\n             (click)=\"showPassword=!showPassword\">\r\n      </mat-form-field>\r\n\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" id=\"new_pass\" [(ngModel)]=\"new_pass\"\r\n               #newPass=\"ngModel\" name=\"new_pass\"\r\n               required placeholder=\"{{'new_pass'|translate}}\"/>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" name=\"new_pass_repeat\" id=\"new_pass_repeat\" [(ngModel)]=\"new_pass_repeat\"\r\n               #newPassRepeat=\"ngModel\"\r\n               required placeholder=\"{{'new_pass_repeat'|translate}}\"/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"f.submitted && (!oldPass.valid||!newPass.valid||!newPassRepeat.valid)\" class=\"help-block\">\r\n        {{'required'|translate}}\r\n      </div>\r\n      <div *ngIf=\"f.submitted && (new_pass!=new_pass_repeat)\" style=\"color: red; font-weight: bold\" class=\"help-block\">\r\n        {{'incorrect_pass'|translate}}\r\n      </div>\r\n      <div *ngIf=\"success\" style=\"color: forestgreen; font-weight: bold\" class=\"help-block\">\r\n        {{'success'|translate}}\r\n      </div>\r\n      <div *ngIf=\"error\" style=\"color: red; font-weight: bold\" class=\"help-block\">\r\n        {{'incorrect-change'|translate}}\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"\">\r\n        <img *ngIf=\"loading\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n        <button type=\"submit\"\r\n                (click)=\"f.form.valid? changePass():''\"\r\n                md-button class=\"btn next\" [disabled]=\"loading\" id=\"login_btn\">{{'change'|translate}}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePassComponent = (function () {
    function ChangePassComponent(auth) {
        this.auth = auth;
        this.loading = false;
        this.showPassword = false;
        this.success = false;
        this.error = false;
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    ChangePassComponent.prototype.changePass = function () {
        var _this = this;
        if (this.old_pass !== '' && this.new_pass !== '' && this.new_pass_repeat !== '') {
            if (this.new_pass === this.new_pass_repeat) {
                var passwords = {
                    oldPassword: this.old_pass,
                    newPassword: this.new_pass
                };
                this.loading = true;
                console.log(passwords);
                this.auth.changePass(passwords).subscribe(function (data) {
                    console.log(data);
                    _this.loading = false;
                    _this.passForm.reset();
                    _this.success = true;
                    setTimeout(function () {
                        _this.success = false;
                    }, 15000);
                }, function () {
                    _this.error = true;
                    _this.loading = false;
                    _this.passForm.reset();
                    setTimeout(function () {
                        _this.error = false;
                    }, 15000);
                });
            }
        }
    };
    return ChangePassComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", Object)
], ChangePassComponent.prototype, "passForm", void 0);
ChangePassComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-pass',
        template: __webpack_require__("../../../../../src/app/change-pass/change-pass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/change-pass/change-pass.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], ChangePassComponent);

var _a;
//# sourceMappingURL=change-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-forms/check-begin/check-begin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-forms/check-begin/check-begin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keyboard-tablet-wrap check-begin\">\r\n  <div class=\"keyboard-box-wrap bottom-tooth\">\r\n    <div class=\"keyboard-logos-wrap clearfix\"><img\r\n      src=\"https://globalpay.com.ua/images/iconset/{{Operation.product.pIcon}}\"\r\n      alt=\"\"\r\n      class=\"keyboard-operator-logo curr-operator operator-image\">\r\n      <span class=keyboard-operator-name\r\n            *ngIf=\"Operation.product.pName.length>1\">{{Lang(Operation.product.pName)}}</span></div>\r\n    <hr class=under-keyboard-logos>\r\n    <div class=wrap-pay-data>\r\n      <div *ngFor=\"let field of Operation.maskedValues\">\r\n        <!--<div>{{field.fields[0].value}}</div>-->\r\n        <div class=pay-number>{{field.value}}</div>\r\n      </div>\r\n      <div class=\"wrap-pay-values clearfix\">\r\n        <div class=owner-score>\r\n          <span class=text>{{'amount_on'|translate}}</span>\r\n          <span class=value>{{onBalance|myCurrency}}</span>\r\n        </div>\r\n        <br>\r\n        <div class=commission>\r\n          <span class=text>{{'commission'|translate}}:</span>\r\n          <span class=value>{{sumCommission|myCurrency}}</span>\r\n        </div>\r\n        <br>\r\n        <div class=from-client>\r\n          <span class=text>{{'from_client'|translate}}</span>\r\n          <span class=value>{{inAmount|myCurrency}}</span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"Operation.comment!=''\" class=wrap-remark-check>\r\n        <div class=\"remark check\">{{'comment'|translate}}: {{Operation.comment}}</div>\r\n        <div class=reseiver-name></div>\r\n      </div>\r\n      <button\r\n        id=\"op-confirm-btn\"\r\n        [disabled]=\"onBalance<=0\"\r\n        [ngClass]=\"{'disabled':(onBalance<=0)}\"\r\n        (click)=\"createOperation()\" class=\"waves-effect waves-light btn next check\">Провести\r\n      </button>\r\n\r\n      <div class=\"return-wrap\" (click)=\"goBack()\">\r\n        <img style=\"width: 18px; padding-top: 2px; float: left\" src=\"assets/images/icons/arrow-left.svg\">\r\n        <a class=\"return\">{{'return'|translate}}\r\n        </a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/check-forms/check-begin/check-begin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBeginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckBeginComponent = (function () {
    // transInfo = this.service.OPERATION;
    function CheckBeginComponent(service, prodService) {
        this.service = service;
        this.prodService = prodService;
        this.responseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBalance = 0;
        this.inAmount = 0;
    }
    CheckBeginComponent.prototype.ngOnInit = function () {
        console.warn("INIT STAGE 2");
        this.Operation = this.service.OPERATION;
        console.log(this.Operation);
        this.calcValues(this.Operation);
        setTimeout(function () {
            if (document.getElementById('op-confir`m-btn'))
                document.getElementById('op-confirm-btn').focus();
        }, 100);
    };
    CheckBeginComponent.prototype.calcValues = function (operation) {
        // console.error(operation);
        this.sumCommission = operation.commission;
        console.warn(this.sumCommission);
        if (this.sumCommission > 0) {
            this.onBalance = Math.round(this.Operation.amount) / 100;
            this.sumCommission = Math.abs(this.sumCommission);
            this.inAmount = Math.round((this.Operation.amount / 100 + this.sumCommission) * 100) / 100;
            // console.error('inAmount = ' + this.inAmount);
            console.warn('opAmount = ' + this.Operation.amount);
        }
        if (this.sumCommission < 0) {
            this.onBalance = Math.round((this.Operation.amount / 100 + this.sumCommission) * 100) / 100;
            this.sumCommission = Math.abs(this.sumCommission);
            this.inAmount = this.Operation.amount / 100;
            // console.error('inAmount = ' + this.inAmount);
            console.warn('opAmount = ' + this.Operation.amount);
        }
        if (this.sumCommission === 0) {
            this.onBalance = Math.round(this.Operation.amount) / 100;
            this.inAmount = this.Operation.amount / 100;
            this.sumCommission = Math.abs(this.sumCommission);
            console.warn('opAmount = ' + this.Operation.amount);
        }
        // console.error(this.onBalance);
    };
    CheckBeginComponent.prototype.createOperation = function () {
        this.service.createOperation();
        this.prodService.clearCurrent();
    };
    CheckBeginComponent.prototype.goBack = function () {
        this.service.setStage(1);
    };
    CheckBeginComponent.prototype.Lang = function (names) {
        return __WEBPACK_IMPORTED_MODULE_3__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    return CheckBeginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CheckBeginComponent.prototype, "responseEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CheckBeginComponent.prototype, "Operation", void 0);
CheckBeginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-begin',
        template: __webpack_require__("../../../../../src/app/check-forms/check-begin/check-begin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-forms/check-begin/check-begin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], CheckBeginComponent);

var _a, _b;
//# sourceMappingURL=check-begin.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-forms/check-process/check-process.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-forms/check-process/check-process.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keyboard-tablet-wrap check-process\">\r\n  <div class=\"keyboard-box-wrap bottom-tooth\">\r\n    <div class=\"keyboard-logos-wrap clearfix\"><img\r\n      src=\"https://globalpay.com.ua/images/iconset/{{opResult.product.pIcon}}\"\r\n      alt=\"\"\r\n      class=\"keyboard-operator-logo curr-operator operator-image\">\r\n      <span class=keyboard-operator-name *ngIf=\"opResult.product.pName\">\r\n        {{setL(opResult.product.pName)}}</span>\r\n    </div>\r\n    <hr class=under-keyboard-logos>\r\n    <div class=wrap-pay-data>\r\n      <div *ngFor=\"let field of opResult.maskedValues\">\r\n        <!--<div>{{opResult.product.pInputField}}</div>-->\r\n        <div class=pay-number>{{field.value}}</div>\r\n      </div>\r\n      <div *ngIf=\"opResult.status.serial\">\r\n        <span class=text>{{'serial'|translate}}:</span>\r\n        <div class=pay-number id=\"serial_result\">\r\n          <span class=value>{{opResult.status.serial}}</span></div>\r\n        <span class=text>{{'secret_code'|translate}}:</span>\r\n        <div class=pay-number id=\"secret_result\">\r\n          <span class=value> {{opResult.status.secret}}</span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"wrap-pay-values clearfix\">\r\n        <div class=owner-score><span class=text>{{'amount_on'|translate}}</span> <span\r\n          class=value>{{onBalance|myCurrency}}</span></div>\r\n        <br>\r\n        <div class=commission><span class=text>{{'commission'|translate}}:</span> <span\r\n          class=value>{{sumCommission|myCurrency}}</span>\r\n        </div>\r\n        <br>\r\n        <div class=from-client><span class=text>{{'from_client'|translate}}</span> <span\r\n          class=value>{{inAmount|myCurrency}}</span></div>\r\n      </div>\r\n      <br>\r\n\r\n      <div [ngSwitch]=\"statusComplete\">\r\n\r\n        <div *ngSwitchCase=\"1\" class=wrap-status id=\"operation-payed\">\r\n          <div *ngIf=\"transId>0\" class=status>id: {{transId}}</div>\r\n          <div class=\"status\">{{time|date:\"d.MM.yy HH:mm:ss\"}}</div>\r\n          <div class=status-img><img src=\"assets/images/icons/status-ok.png\" alt=\"\"></div>\r\n          <div class=status>{{'success'|translate}}</div>\r\n          <!--<audio id=\"payedSound\">-->\r\n          <!--<source src=\"assets/audio/payed.mp3\">-->\r\n          <!--</audio>-->\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"2\" class=wrap-status id=\"operation-in-progress\">\r\n          <div *ngIf=\"transId>0\" class=status>id: {{transId}}</div>\r\n          <div class=status-img>\r\n            <img src=\"assets/images/icons/status-wait-inner.png\" alt=\"\">\r\n            <img [ngClass]=\"{'anim-arrow': opResult.status.error!=923}\" src=\"assets/images/icons/status-wait-arrow.png\"\r\n                 alt=\"\">\r\n          </div>\r\n          <div class=status>{{'in_progress'|translate}}</div>\r\n        </div>\r\n\r\n        <div\r\n          *ngSwitchCase=\"3\" class=wrap-status id=\"operation-canceled\">\r\n          <div *ngIf=\"transId>0\" class=status>id: {{transId}}</div>\r\n          <div class=\"status\">{{time|date:\"d.MM.yy HH:mm:ss\"}}</div>\r\n          <div class=status-img><img src=\"assets/images/icons/status-error.png\" alt=\"\"></div>\r\n          <div class=status>{{'failed'|translate}}</div>\r\n          <div class=status>{{opResult.status.error}}-{{setL(opResult.status.errorText)}}</div>\r\n          <!--<audio id=\"failedSound\">-->\r\n          <!--<source src=\"assets/audio/failure.mp3\">-->\r\n          <!--</audio>-->\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"opResult.comment!=''\" class=wrap-remark-check>\r\n        <div class=\"remark check\">{{'comment'|translate}}:{{opResult.comment}}</div>\r\n        <div class=reseiver-name></div>\r\n      </div>\r\n\r\n      <div *ngIf=\"opResult.status.error\" class=\"button-container\">\r\n        <button *ngIf=\"opResult.status.error==923\" [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\"\r\n                id=\"report_button\" class=\"rep_btn\"\r\n                (click)=\"getOpStatus(transId)\">{{'update'|translate}}\r\n        </button>\r\n        <img style=\"width: 24px; margin:0 85px;\" *ngIf=\"loading\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n      </div>\r\n      <div *ngIf=\"statusComplete==1\" style=\"height: 30px\">\r\n        <button type=\"button\" class=\"print\" (click)=\"printC()\"><img\r\n          src=\"assets/images/icons/print.png\" alt=\"\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/check-forms/check-process/check-process.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckProcessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_operation__ = __webpack_require__("../../../../../src/app/_models/operation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckProcessComponent = (function () {
    function CheckProcessComponent(service, prodServ, alert) {
        var _this = this;
        this.service = service;
        this.prodServ = prodServ;
        this.alert = alert;
        this.statusComplete = 2;
        this.transId = 0;
        this.onBalance = 0;
        this.inAmount = 0;
        this.loading = false;
        this.service.finalStatus.subscribe(function (value) {
            _this.time = new Date();
            if (value == 1) {
                _this.service.redirect = true;
                // console.error("TIMER " + this.service.OPERATION.opId + " START");
                _this.sbTime = setTimeout(function () {
                    // console.error("TIMER " + this.service.OPERATION.opId + " ENDS");
                    if (_this.service.redirect) {
                        // console.error("TIMER " + this.service.OPERATION.opId + " redirect for" + this.sbTime);
                        _this.service.clearOperation();
                    }
                }, 15000);
            }
            _this.statusComplete = value;
            _this.playSound();
        });
        this.service.currTransId.subscribe(function (value) {
            _this.transId = value;
        });
    }
    CheckProcessComponent.prototype.ngOnDestroy = function () {
        this.service.redirect = false;
        // console.error("DESTROY Check-process");
        // console.error(this.service.redirect);
        clearTimeout(this.sbTime);
    };
    CheckProcessComponent.prototype.ngOnInit = function () {
        this.time = null;
        this.statusComplete = 2;
        this.opResult = this.service.OPERATION;
        this.calcValues(this.opResult);
        console.warn(__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].failed);
        console.warn(__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].payed);
        this.playSound();
    };
    CheckProcessComponent.prototype.setL = function (names) {
        return __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    CheckProcessComponent.prototype.calcValues = function (operation) {
        this.sumCommission = operation.commission;
        console.warn(this.sumCommission);
        console.log(operation.commission);
        if (this.sumCommission > 0) {
            this.onBalance = this.opResult.amount / 100;
            this.sumCommission = Math.abs(this.sumCommission);
            this.inAmount = this.opResult.amount / 100 + this.sumCommission;
        }
        if (this.sumCommission < 0) {
            this.onBalance = Math.round((this.opResult.amount / 100 + this.sumCommission) * 100) / 100;
            this.sumCommission = Math.abs(this.sumCommission);
            this.inAmount = this.opResult.amount / 100;
        }
        if (this.sumCommission === 0) {
            this.onBalance = this.opResult.amount / 100;
            this.inAmount = this.opResult.amount / 100;
            this.sumCommission = Math.abs(this.sumCommission);
        }
    };
    CheckProcessComponent.prototype.getOpStatus = function (transId) {
        var _this = this;
        if (this.opResult.product.pType === 1) {
            this.loading = true;
            this.service.voucherGetStatus(transId).subscribe(function (data) {
                console.log(data);
                _this.opResult.status = data;
                _this.loading = false;
                _this.time = new Date();
            }, function (error) {
                _this.loading = false;
                _this.alert.onError(error);
            });
        }
        if (this.opResult.product.pType === 2) {
            // alert('TEMPORARY UNAVAILABLE');
            this.loading = true;
            this.service.replGetStatus(transId).subscribe(function (data) {
                console.log(data);
                _this.opResult.status = data;
                _this.time = new Date();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                _this.alert.onError(error);
            });
        }
    };
    CheckProcessComponent.prototype.playSound = function () {
        // if (this.statusComplete == 1) {
        //   GlobalService.audio.src = 'assets/audio/payed.mp3';
        //   // GlobalService.audio.load();
        //   GlobalService.audio.play();
        // }
        // if (this.statusComplete == 3) {
        //   GlobalService.audio.src = 'assets/audio/failure.mp3';
        //   // GlobalService.audio.load();
        //   GlobalService.audio.play();
        // }
        if (this.statusComplete == 1) {
            __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio = __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].payed;
            __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio.play();
        }
        if (this.statusComplete == 3) {
            __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio = __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].failed;
            __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio.play();
        }
    };
    CheckProcessComponent.prototype.printC = function () {
        console.log('PRINT CHEQUE');
        var operation = new __WEBPACK_IMPORTED_MODULE_5__models_operation__["a" /* Operation */](this.service.OPERATION.opId, this.service.OPERATION.product.pName, this.service.OPERATION.product.pType, this.time.toString(), this.service.OPERATION.fieldValues, // [],
        this.service.OPERATION.amount, this.service.OPERATION.commission * 100, this.service.OPERATION.comment, this.service.OPERATION.status, this.service.OPERATION.product.pCheque, '');
        if (operation.oType === 2) {
            console.log('PRINT REPLENISHMENT');
            var cheque = this.prodServ.ChequeText('gen.prn');
            this.prodServ.printCheque(operation, cheque);
        }
        if (operation.oType === 1 && operation.oStatus.secret) {
            console.log('PRINT VOUCHER');
            var cheque = this.prodServ.ChequeText('lifeex.prn');
            this.prodServ.printCheque(operation, cheque);
        }
    };
    return CheckProcessComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CheckProcessComponent.prototype, "opResult", void 0);
CheckProcessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-process',
        template: __webpack_require__("../../../../../src/app/check-forms/check-process/check-process.component.html"),
        styles: [__webpack_require__("../../../../../src/app/check-forms/check-process/check-process.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], CheckProcessComponent);

var _a, _b, _c;
//# sourceMappingURL=check-process.component.js.map

/***/ }),

/***/ "../../../../../src/app/fast-access/fast-access.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fast-access/fast-access.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keyboard-logos-wrap clearfix\" id=\"fast-access\">\r\n  <div class=\"operator-rows-wrap\">\r\n    <div *ngIf=\"product.pId==0\" class=\"row-1\">\r\n      <a *ngFor=\"let product of fastList\" (click)=\"fastSelect(product)\" style=\"cursor: pointer\">\r\n        <img src=\"https://globalpay.com.ua/images/iconset/{{product.pIcon}}\" class=\"operator-image\">\r\n      </a>\r\n    </div>\r\n    <div *ngIf=\"product.pId!=0\" class=\"row-2\">\r\n      <img src=\"https://globalpay.com.ua/images/iconset/{{product.pIcon}}\" alt=\"\"\r\n           class=\"keyboard-operator-logo curr-operator operator-image\">\r\n      <span class=\"keyboard-operator-name\">{{Lang(product.pName)}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/fast-access/fast-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_product__ = __webpack_require__("../../../../../src/app/_models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FastAccessComponent = (function () {
    function FastAccessComponent(service, products) {
        var _this = this;
        this.service = service;
        this.products = products;
        this.fastList = [];
        this.service.currProduct.subscribe(function (value) {
            _this.product = value;
            console.log('CurrProduct');
            console.log(value);
        });
        this.products.currFastList.subscribe(function (val) {
            _this.fastList = val;
        });
    }
    FastAccessComponent.prototype.ngOnInit = function () {
        console.warn("FAST INIT");
        this.fastList = [];
        if (localStorage.getItem('fastList')) {
            this.fastList = JSON.parse(localStorage.getItem('fastList'));
        }
        if (this.service.OPERATION.product.pId !== 0) {
            this.product = this.service.OPERATION.product;
        }
        else {
            this.product = new __WEBPACK_IMPORTED_MODULE_3__models_product__["a" /* Product */](0, 0, [], [], [], [], 0, '', [], 0, 0, '', 0);
        }
    };
    FastAccessComponent.prototype.fastSelect = function (product) {
        console.log('PRODUCT SELECTED');
        console.log(product);
        product.pInputFields = __WEBPACK_IMPORTED_MODULE_5__models_field__["a" /* Field */].toFields(product.pInputFields);
        this.service.setProduct(product);
    };
    FastAccessComponent.prototype.Lang = function (names) {
        return __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    return FastAccessComponent;
}());
FastAccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fast-access',
        template: __webpack_require__("../../../../../src/app/fast-access/fast-access.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fast-access/fast-access.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], FastAccessComponent);

var _a, _b;
//# sourceMappingURL=fast-access.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=container>\r\n    <div class=\"header-top clearfix\">\r\n      <div class=header-left>\r\n        <div class=tabel_c-img-wrap><a class=back href=#><img src=\"assets/images/icons/back.png\" alt=\"\"></a>\r\n        </div>\r\n        <div id=wrap-nav-icon class=\"tabel_c-img-wrap clearfix\"\r\n             (click)=\"showMenu()\">\r\n          <div id=nav-icon>\r\n            <span style=\"width: 60px\"></span>\r\n            <span style=\"width: 60px\"></span>\r\n            <span style=\"width: 60px\"></span>\r\n          </div>\r\n          <div class=\"help-modal help-modal-small modal-menu\">\r\n            <div class=arrow-dialog>{{'menu_hint'|translate}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=tabel_c-img-wrap\r\n             style=\"cursor: pointer\"\r\n             (click)=\"showBegin()\">\r\n          <a class=logo-wrap>\r\n            <img src=\"assets/images/{{(mobileView||windowWidth<770) ? 'GP_logo':'globalpay_logo'}}.svg\"\r\n                 [style.height]=\"(mobileView||windowWidth<770) ? '35px':'30px'\"\r\n                 alt=лого class=logo>\r\n          </a>\r\n        </div>\r\n        <span class=user-id>{{terminal}}</span></div>\r\n      <div class=header-right>\r\n        <span *ngIf=\"showBalance\" class=balance (click)=\"getBalance()\">\r\n          <span class=text>\r\n           <img style=\"height: 24px;vertical-align: sub\"\r\n                src=\"assets/images/wallet.svg\" alt=\"\">\r\n          </span>\r\n          <span class=balance-value>{{((balance.bNetwork)/100)|myCurrency}}</span>\r\n        </span>\r\n        <span class=cashier>\r\n          <span>{{'cashier'|translate}}</span>\r\n          <span class=cashier-name>{{cashier}}</span>\r\n        </span>\r\n        <div class=tabel_c-img-wrap><a href=# class=exit (click)=\"exit()\">\r\n          <svg class=svg-exit>\r\n            <use href=#exit></use>\r\n          </svg>\r\n        </a></div>\r\n        <span id=\"mob_right_menu\" class=showmore (click)=\"showMore()\"><img src=\"assets/images/icons/show-more.svg\"\r\n                                                                           alt=\"\">\r\n          <ul class=more-list>\r\n            <li>\r\n            <a href=#>\r\n              <div class=list-inner-tabel_c (click)=\"showNews()\">{{'News'|translate}}</div>\r\n            </a>\r\n            <li>\r\n            <a href=# class=show-help>\r\n              <div class=list-inner-tabel_c (click)=\"showHelp()\">{{'Help'|translate}}</div>\r\n            </a>\r\n            <li>\r\n            <a href=#>\r\n              <div class=list-inner-tabel_c id=\"exit-word\" (click)=\"exit()\">{{'Exit'|translate}}</div>\r\n            </a>\r\n          </ul>\r\n        </span></div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<div class=nav-menu-shadow (click)=\"closeMenu()\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_balance__ = __webpack_require__("../../../../../src/app/_models/balance.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HeaderComponent = (function () {
    function HeaderComponent(service, auth, catService, prodService, opService, cdr) {
        var _this = this;
        this.service = service;
        this.auth = auth;
        this.catService = catService;
        this.prodService = prodService;
        this.opService = opService;
        this.cdr = cdr;
        this.showBalance = false;
        this.mobileView = false;
        this.terminal = -1;
        this.cashier = '';
        this.service.currBalance.subscribe(function (value) {
            _this.balance = value;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mobileView = __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */].checkMobileView();
        this.windowWidth = document.body.clientWidth;
        this.showBalance = false;
        this.balance = new __WEBPACK_IMPORTED_MODULE_3__models_balance__["a" /* Balance */](0, 0, 0, null);
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.cashier = user.username;
        this.terminal = user.terminal;
        this.service.currBalance.subscribe(function (value) {
            _this.balance = value;
            _this.showBalance = true;
        });
        this.getBalance();
    };
    HeaderComponent.prototype.getBalance = function () {
        this.service.refreshBalance();
    };
    HeaderComponent.prototype.showMenu = function () {
        __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */].showMenu();
    };
    HeaderComponent.prototype.closeMenu = function () {
        __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */].closeMenu();
    };
    HeaderComponent.prototype.exit = function () {
        console.log('EXIT clicked!');
        // remove user from local storage to log user out
        if (!__WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */].blockedNavigation)
            this.auth.logout();
    };
    HeaderComponent.prototype.showMore = function () {
        document.getElementById('mob_right_menu').classList.toggle('show-showmore');
    };
    HeaderComponent.prototype.showNews = function () {
        if (document.getElementById('modal-news'))
            document.getElementById('modal-news').classList.toggle('hide-news');
    };
    HeaderComponent.prototype.showHelp = function () {
        document.getElementById('help_block').classList.toggle('show-modal');
    };
    HeaderComponent.prototype.showBegin = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */].blockedNavigation) {
            this.catService.setCategoryByOrderId(1);
            this.prodService.clearCurrent();
            this.opService.clearOperation();
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_product_service__["a" /* ProductService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_operation_service__["a" /* OperationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".help-number {\r\n  white-space: nowrap;\r\n  text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=help id=\"help_block\">\r\n  <div class=help-relative (click)=\"showHelp()\">\r\n    <div class=\"help-inner show-help\">{{'help'|translate}}</div>\r\n    <div class=help-modal>\r\n      <div class=arrow-dialog>\r\n        <div *ngFor=\"let info of support|orderBy:'order'\">\r\n          <div *ngIf=\"info.type=='email'\" class=wrap-help-email>\r\n            <span> {{info.value}} </span>\r\n          </div>\r\n          <div *ngIf=\"info.type=='phone'\" class=wrap-help-number>\r\n            <span> {{info.value}} </span>\r\n          </div>\r\n          <div *ngIf=\"info.type=='telegram'\" class=wrap-help-telegram>\r\n            <span> {{info.value}} </span>\r\n          </div>\r\n          <div *ngIf=\"info.type=='viber'\" class=wrap-help-viber>\r\n            <span> {{info.value}} </span>\r\n          </div>\r\n          <div *ngIf=\"info.type=='skype'\" class=wrap-help-skype>\r\n            <span> {{info.value}}<br></span>\r\n          </div>\r\n\r\n          <div *ngIf=\"info.type=='workTime'\" class=\"wrap-help-number time\">\r\n            <span> {{info.value}} </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpComponent = (function () {
    function HelpComponent(user, alert) {
        this.user = user;
        this.alert = alert;
        this.support = [];
    }
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getSupport().subscribe(function (data) {
            console.log(data);
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(data)) {
                // console.error(data);
                _this.support = data;
            }
        }, function (error) {
            _this.alert.onError(error);
        });
    };
    HelpComponent.prototype.showHelp = function () {
        document.getElementById('help_block').classList.toggle('show-modal');
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], HelpComponent);

var _a, _b;
//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/dialog.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"closeable\" mat-button [mat-dialog-close]=\"true\"\r\n        (click)=\"closeDialog()\"\r\n        style=\"float:right; margin:-10px -10px -25px 0; outline:none; border: 0; background-color: white\">\r\n  <img src=\"assets/images/icons/clean-sum.png\">\r\n</button>\r\n\r\n<div style=\"text-align: center\">\r\n  <h4 *ngIf=\"title!=''\" style=\"margin-bottom: 20px\">{{title}}</h4>\r\n  <div style=\"font-size: 20px; margin-top: 10px;\" [innerHTML]=\"message|safeHtml\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cdk-overlay-pane {\r\n  max-width: 400px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=mob-rule class=small-keyboard>\r\n  <div id=internet-rule class=small-keyboard>\r\n    <div id=pay-systems-rule class=small-keyboard>\r\n      <div id=web-services-rule class=small-keyboard>\r\n        <app-header></app-header>\r\n        <main>\r\n          <app-categories></app-categories>\r\n        </main>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var HomeComponent = (function () {
    function HomeComponent(configuration, global, alert, auth, user, dialog, prodServ, cdr) {
        var _this = this;
        this.configuration = configuration;
        this.global = global;
        this.alert = alert;
        this.auth = auth;
        this.user = user;
        this.dialog = dialog;
        this.prodServ = prodServ;
        this.cdr = cdr;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user.USER = this.currentUser;
        if (navigator.onLine) {
            console.log('CLIENT ONLINE');
        }
        else {
            console.log('CLIENT OFF');
            console.error('client offline');
        }
        this.global.currOnline.subscribe(function (val) {
            if (val) {
                _this.openDialog(val.error, val.errorText);
            }
        });
        __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */].currDialog.subscribe(function (data) {
            if (data != null) {
                _this.openDialog(data.title, data.body, data.closeable);
            }
        });
        // this.alert.currError.subscribe((val) => {
        //   if (val) {
        //     this.openDialog(val.error, val.errorText);
        //   }
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.global.checkOnline();
        // this.service.watchGeo();
        if (localStorage.getItem('currentUser')) {
            this.user.USER = JSON.parse(localStorage.getItem('currentUser'));
            console.log(JSON.parse(localStorage.getItem('currentUser')));
            this.configuration.apiKey = JSON.parse(localStorage.getItem('currentUser')).keyToken;
        }
        else {
            // if (this.configuration.apiKey === "") {
            this.auth.logout();
            // }
        }
        this.prodServ.getChequesList();
        // this.loadAllUsers();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    HomeComponent.prototype.openDialog = function (title, message, closeable) {
        var config = {};
        if (window.screen.availWidth < 720) {
            config = {
                disableClose: true,
                maxHeight: '80vh',
                width: '92vw',
                minWidth: '300px',
                marginLeft: '2vw'
            };
        }
        else {
            config = {
                disableClose: true,
                maxHeight: '550px',
                width: '300px',
            };
        }
        var dialogRef = this.dialog.open(GlobalDialog, config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        if (closeable)
            dialogRef.componentInstance.closeable = closeable;
        // console.log('dialogRef', dialogRef);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swagger_configuration__["a" /* Configuration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _h || Object])
], HomeComponent);

var GlobalDialog = (function () {
    function GlobalDialog(dialogRef, cdr, data) {
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.data = data;
        this.title = 'TEST';
        this.message = 'test text';
        this.closeable = false;
        window.scrollTo(0, 1);
    }
    GlobalDialog.prototype.ngOnInit = function () {
    };
    GlobalDialog.prototype.setL = function (names) {
        return __WEBPACK_IMPORTED_MODULE_4__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    GlobalDialog.prototype.closeDialog = function () {
        if (__WEBPACK_IMPORTED_MODULE_9__services__["c" /* NewsService */].showApps)
            __WEBPACK_IMPORTED_MODULE_9__services__["c" /* NewsService */].showApps = false;
    };
    return GlobalDialog;
}());
GlobalDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'globalDialog',
        template: __webpack_require__("../../../../../src/app/home/dialog.html"),
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogRef */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _k || Object, Object])
], GlobalDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/input-form/input-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.point {\r\n  padding-top: 15px;\r\n  font-size: 23px;\r\n  height: 64px;\r\n  width: 6px;\r\n  margin-right: -6px;\r\n  /*border-bottom: 1px solid grey;*/\r\n}\r\n\r\n.change:hover {\r\n  width: 0px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.wrong-input {\r\n  border-bottom: 2px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-form/input-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" #F=\"ngForm\" (ngSubmit)=\"F.form.valid\" novalidate>\r\n  <div class=up-keyboard style=\"min-height: 50px\">\r\n    <div class=inputs-wrap>\r\n      <div *ngIf=\"product.pId==0\"\r\n           style=\"margin: 15px 0 40px\"\r\n           class=\"input-wrap-icon show\">\r\n        <input class=\"number input-field\" name=number id=\"findNumber\"\r\n               [readonly]=\"mobileView\"\r\n               [textMask]=\"{mask: mask}\"\r\n               [(ngModel)]=\"findNumber\"\r\n               placeholder=\"(___) ___-__-__\"\r\n               (focus)=\"setActiveInput(1)\"\r\n               (ngModelChange)=\"searchByNumber(findNumber)\"/>\r\n        <span class=bkspace-input (click)=\"findNumber=clear(findNumber)\"><svg class=svg-menu-icon><use\r\n          xlink:href=#backspace></use></svg></span>\r\n      </div>\r\n\r\n\r\n      <div class=\"input-wrap-icon show\" style=\"margin: -10px 0 -30px 0; z-index: 10\">\r\n        <mat-form-field\r\n          *ngFor=\"let f of fields|reverse; let i = index;\"\r\n          style=\"width: 100%; height:80px; z-index: 2; padding-bottom: 10px\">\r\n\r\n          <input *ngIf=\"f.field.fRegexp!='.'\" matInput required\r\n                 [readonly]=\"mobileView\"\r\n                 placeholder=\"{{setL(f.field.fName)}}\"\r\n                 class=\"number input-field\" style=\"border: 0; margin-bottom: -5px;\"\r\n                 name=\"input-field{{f.field.fOrder}}\" id=\"field{{f.field.fOrder}}\"\r\n                 [textMask]=\"{mask: (f.field.fMask|toRegex), guide:true}\"\r\n                 value=\"{{f.field.fMask}}\"\r\n                 pattern=\"{{f.field.fRegexp }}\"\r\n                 #number=\"ngModel\"\r\n                 [(ngModel)]=\"f.value\"\r\n                 (focus)=\"setActiveInput(2,f.field.fOrder)\"\r\n                 (ngModelChange)=\"f.value=clearModel(f.value);\"\r\n                 (keyup.enter)=\"onEnterAction()\"\r\n                 onkeypress='return event.charCode !=32'\r\n                 title=\"{{setL(f.field.fHint)}}\"/>\r\n\r\n          <input *ngIf=\"f.field.fRegexp=='.'\" matInput required\r\n                 [readonly]=\"mobileView\"\r\n                 placeholder=\"{{setL(f.field.fName)}}\"\r\n                 class=\"number input-field\" style=\"border: 0; margin-bottom: -5px;\"\r\n                 name=\"input-field{{f.field.fOrder}}\"\r\n                 id=\"field{{f.field.fOrder}}-nomask\"\r\n                 pattern=\".*\"\r\n                 #number=\"ngModel\"\r\n                 [(ngModel)]=\"f.value\"\r\n                 (ngModelChange)=\"f.value=clearModel(f.value);setMasked(f.value)\"\r\n                 (focus)=\"setActiveInput(2,f.field.fOrder)\"\r\n                 (keyup.enter)=\"onEnterAction(f)\"\r\n                 onkeypress='return event.charCode !=32'\r\n                 title=\"{{setL(f.field.fHint)}}\"/>\r\n\r\n          <span class=bkspace-input\r\n                (click)=\"f.value=clear(f.value); setMasked();\">\r\n        <svg class=svg-menu-icon><use xlink:href=#backspace></use></svg></span>\r\n        </mat-form-field>\r\n      </div>\r\n      <!--========================================================-->\r\n      <div *ngIf=\"product.pId!=0\" class=\"under-main_field clearfix\" style=\"padding-top: 20px\">\r\n        <div *ngIf=\"product.pType==1\" class=\"\" style=\"font-size: 17px\">\r\n          {{'voucher'|translate}} <br>\r\n          <span\r\n            style=\"font-weight: 600; font-size: 17px\">{{setL(product.pName)}}<br></span>\r\n          {{'nominal'|translate}}: <span\r\n          style=\"font-weight: bold; font-size: 20px\">{{(product.pNominal/100)}}</span><br>\r\n\r\n          {{'voucher_hint'|translate}}\r\n        </div>\r\n        <br>\r\n        <div class=wrap-sum id=\"wrap-sum\" *ngIf=\"product.pType==2\">\r\n          <mat-form-field style=\"width: 95px; height: 60px;\">\r\n            <input name=\"amount\" id=\"amount\"\r\n                   maxlength=\"5\"\r\n                   [readonly]=\"mobileView\"\r\n                   currencyMask\r\n                   [options]=\"{ prefix: '', suffix:'', thousands: ' ', align:'right', precision:'0'}\"\r\n                   pattern=\"^[0-9]{1,5}\"\r\n                   class=\"sum form-control numeric\"\r\n                   style=\"border: 0; text-align: right\"\r\n                   matInput required\r\n                   [(ngModel)]=\"amount\"\r\n                   (ngModelChange)=\"amount=validateSum()\"\r\n                   [placeholder]=\"'amount'|translate\"\r\n                   (focus)=\"setActiveInput(3)\"\r\n                   (blur)=\"onBlur()\"\r\n                   (keyup.enter)=\"onEnterAction()\"\r\n                   (keydown)=\"keyboardInputSum($event)\"\r\n                   value=\"{{amount}}\"\r\n                   type=\"text\" dir=\"ltr\">\r\n          </mat-form-field>\r\n          <span class=\"point\">.</span>\r\n          <mat-form-field style=\"width: 60px; padding-left: 0;\">\r\n            <input id=\"coins\" name=\"coins\"\r\n                   maxlength=\"2\"\r\n                   [readonly]=\"mobileView\"\r\n                   pattern=\"[0-9]{1,2}\"\r\n                   onkeypress='return event.charCode >= 48 && event.charCode <= 57'\r\n                   (keydown)=\"insertCoins($event)\"\r\n                   (ngModelChange)=\"validateSum()\"\r\n                   class=\"sum numeric\"\r\n                   style=\"border: 0; width: 50px; padding: 0 8px\"\r\n                   matInput [(ngModel)]=\"coins\"\r\n                   (change)=\"clearCoins()\"\r\n                   (keyup.enter)=\"onEnterAction()\"\r\n                   (blur)=\"onBlur()\"\r\n                   (focus)=\"setActiveInput(3,1)\" dir=\"ltr\">\r\n          </mat-form-field>\r\n          <span class=clear-sum (click)=\"clearSum()\"></span>\r\n        </div>\r\n        <br>\r\n        <button *ngIf=\"false\" type=button\r\n                class=contact-list_btn>\r\n          <svg class=svg-contact-list>\r\n            <use xlink:href=#contact-list></use>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"invalid.min\" style=\"color:red; margin-top:20px\">Сумма <\r\n        {{product.pAmountMin/100}}\r\n      </div>\r\n      <div *ngIf=\"invalid.max\" style=\"color:red; margin-top: 20px\">Сумма >\r\n        {{product.pAmountMax/100}}\r\n      </div>\r\n      <div *ngIf=\"invalid.commission\" style=\"color:red; margin-top: 20px\">\r\n        {{'high_commission'|translate}}<br>\r\n        {{'on_balance'|translate}}: {{onBalance}}\r\n      </div>\r\n      <div *ngIf=\"product.pId!=0\" style=\"display: inline-block; width: 100%;\">\r\n        <button *ngIf=\"product.pId!=0\" type=button class=remark (click)=\"showComment()\">{{'comment'|translate}}</button>\r\n\r\n        <input (click)=\"setActiveInput(4)\" (focus)=\"setActiveInput(4)\" [formControl]=\"comment\" [readonly]=\"mobileView\"\r\n               class=\"remark-text form-control\"\r\n               id=remark-text>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"product.pId!=0\" style=\"margin-top: 5px; height: 50px;\">\r\n      <button\r\n        [disabled]=\"F.form.invalid||(product.pType==2&&amount=='0'&&coins=='00')||invalid.min||invalid.max||invalid.commission\"\r\n        [ngClass]=\"{'disabled':(product.pType==2&&(F.form.invalid||(coins=='00'&&amount=='0')))||invalid.min||invalid.max||invalid.commission}\"\r\n        type=\"submit\"\r\n        id=\"operation-next\"\r\n        class=\"waves-effect waves-light btn next onkeyboard \"\r\n        (click)=\"pressup()\"\r\n        (keydown.enter)=\"pressup()\"\r\n        (mousedown)=\"mousedown($event)\"\r\n        (mouseup)=\"mouseup($event)\"\r\n        (mouseleave)=\"mouseup($event)\"\r\n        (press)=\"longPress()\"\r\n        (pressup)=\"pressup()\"\r\n        (pan)=\"pressup()\">\r\n        <span id=\"execute\" class=next-onkeyboard-inner>{{'execute'|translate}}</span>\r\n        {{'next'|translate}}\r\n        <span class=next-onkeyboard-overfl></span>\r\n      </button>\r\n    </div>\r\n    <!--<div id=\"wrong-data\" style=\"color: red;\" class=\"hide\">Change summ! Commission is bigger than amount</div>-->\r\n    <!--TODO!-->\r\n\r\n\r\n  </div>\r\n</form>\r\n<app-keyboard (onBtnClick)=\"keyboardPress($event)\"></app-keyboard>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/input-form/input-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product__ = __webpack_require__("../../../../../src/app/_models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pipes_src_app_pipes_helpers_helpers__ = __webpack_require__("../../../../ngx-pipes/src/app/pipes/helpers/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InputFormComponent = (function () {
    // ======== HELP METHODS ================================================================================================
    function InputFormComponent(opService, catService, prodService) {
        var _this = this;
        this.opService = opService;
        this.catService = catService;
        this.prodService = prodService;
        this.product = new __WEBPACK_IMPORTED_MODULE_4__models_product__["a" /* Product */](0, 0, [{
                cult: '',
                value: ''
            }], [{
                cult: '',
                value: ''
            }], [], [], 0, '', [], 0, 0, '', 0);
        this.mask = ['(',
            /[0]/,
            /[1-9]/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/];
        this.coinsMask = [/\d/, /\d/];
        this.comment = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('');
        this.fields = [];
        this.masked = [];
        this.findNumber = '';
        this.activeInput = {
            inputType: 0,
            fieldIndex: -1
        };
        this.mobileView = true;
        this.amount = '';
        this.coins = '';
        this.invalid = {
            amount: true,
            min: false,
            max: false,
            commission: false
        };
        this.onBalance = 0;
        this.mobileView = __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].checkMobileView();
        this.opService.currProduct.subscribe(function (value) {
            _this.clearSum();
            _this.findNumber = '';
            _this.invalid = {
                amount: true,
                min: false,
                max: false,
                commission: false
            };
            _this.comment.setValue('');
            _this.product = value;
            _this.setFields(_this.product.pInputFields);
            _this.formMasked(_this.product.pInputFields);
            _this.setFocusedField();
        });
    }
    InputFormComponent.prototype.ngOnInit = function () {
        console.warn("INIT STAGE 1");
        console.log(this.prodService.PRODUCTS);
        console.log(this.opService.OPERATION);
        if (this.catService.CurrentCATEGORY.cOrder != 1 && this.prodService.PRODUCTS.length > 0) {
            if (this.opService.OPERATION.product.pId == 0)
                // console.warn("ERROR ERROR ERROR ERROR ERROR ERROR ERROR");
                this.prodService.selectFirstProduct();
        }
        console.warn(this.opService.OPERATION.product.pId);
        if (this.opService.OPERATION.product.pId !== 0) {
            this.product = this.opService.OPERATION.product;
            this.setFields(this.opService.OPERATION.product.pInputFields);
            if (this.masked == []) {
                // console.error("REINIT MASKED");
                this.masked = this.opService.OPERATION.maskedValues;
            }
            var coins = Math.round(this.opService.OPERATION.amount % 100);
            this.amount = ((this.opService.OPERATION.amount - coins) / 100).toString();
            // console.error('amount=' + this.amount);
            if (document.getElementById('amount')) {
                var amount = document.getElementById('amount');
                amount.value = this.amount;
            }
            if (coins >= 0 && coins < 10) {
                this.coins = '0' + coins.toString();
            }
            else {
                this.coins = coins.toString();
            }
            this.validateSum();
            this.comment.setValue(this.opService.OPERATION.comment);
            console.warn(this.fields);
            // console.warn("end end end end end end ");
        }
        else {
            this.product = new __WEBPACK_IMPORTED_MODULE_4__models_product__["a" /* Product */](0, 0, [{
                    cult: '',
                    value: ''
                }], [{
                    cult: '',
                    value: ''
                }], [], [], 0, '', [], 0, 0, '', 0);
            // this.setFields([]);
            window.scrollTo(0, 1);
        }
        // if (this.product.pId === 0) {
        this.setFocus();
        this.mobileView = __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].checkMobileView();
        // }
        /** loading keyboard click sound*/
        __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio = __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].tink;
        console.warn(__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio);
    };
    // ======== MOUSE ACTIONS ===============================================================================================
    InputFormComponent.prototype.mousedown = function ($event) {
        var _this = this;
        console.log('MOUSE DOWN');
        console.log('MOUSE EVENT = ' + $event.which);
        var next = true;
        if ($event.which === 1) {
            if (this.product.pType === 2) {
                for (var i = 0; i < this.fields.length; i++) {
                    if (this.fields[i].value === '') {
                        console.log('THERE IS EMPTY FIELDS');
                        next = false;
                    }
                }
            }
            if (next) {
                if (this.product.pType === 2) {
                    // document.getElementById('wrong-data').classList.add('hide');
                    document.getElementById('execute').style.width = '100%';
                }
                if (this.product.pType === 1) {
                    document.getElementById('execute').style.width = '100%';
                }
            }
            else {
                document.getElementById('wrong-data').classList.remove('hide');
            }
            setTimeout(function () {
                if (document.getElementById('execute')) {
                    var width = document.getElementById('execute').offsetWidth;
                    if ((_this.mobileView && width < 280) || (!_this.mobileView && width !== 270)) {
                        console.log('GO TO CHECK OPERATION');
                        _this.checkOperation();
                    }
                    else {
                        console.log('CREATE WITH NO VERIFY');
                        _this.goToVerification(true);
                    }
                }
            }, 1000);
        }
    };
    InputFormComponent.prototype.longPress = function () {
        var _this = this;
        // alert("pressed");
        console.log('MOUSE DOWN Longpress');
        var next = true;
        if (this.product.pType === 2) {
            for (var i = 0; i < this.fields.length; i++) {
                if (this.fields[i].value === '') {
                    console.log('THERE IS EMPTY FIELDS');
                    next = false;
                }
            }
        }
        if (next) {
            if (this.product.pType === 2) {
                // document.getElementById('wrong-data').classList.add('hide');
                document.getElementById('execute').style.width = '100%';
            }
            if (this.product.pType === 1) {
                document.getElementById('execute').style.width = '100%';
            }
        }
        else {
            // document.getElementById('wrong-data').classList.remove('hide');
        }
        setTimeout(function () {
            if (document.getElementById('execute')) {
                var width = document.getElementById('execute').offsetWidth;
                if ((_this.mobileView && width < 280) || (!_this.mobileView && width !== 270)) {
                    console.log('GO TO CHECK OPERATION');
                    _this.checkOperation();
                }
                else {
                    console.log('CREATE WITH NO VERIFY');
                    _this.goToVerification(true);
                }
            }
        }, 1000);
    };
    InputFormComponent.prototype.mouseup = function ($event) {
        if ($event.which === 1) {
            console.log('MOUSE UP = ' + $event.which);
            if (document.getElementById('execute')) {
                var width = document.getElementById('execute').offsetWidth;
                if ((this.mobileView && width < 280) || (!this.mobileView && width !== 270)) {
                    console.log('WIDTH !== 320!');
                    this.checkOperation();
                }
                else {
                    console.log('WIDTH = 320!');
                    this.goToVerification(true);
                }
            }
            document.getElementById('execute').style.width = '0';
        }
    };
    // ======== FIELDS METHODS ==============================================================================================
    InputFormComponent.prototype.setActiveInput = function (type, fOrderId) {
        console.log('setActiveInput( ' + type + ' , ' + fOrderId + ' )');
        // console.log("field = " + field + "  fieldId = " + (field === 2 ? this.fields[field].fId : 0));
        var field;
        this.activeInput = {
            inputType: type,
            fieldIndex: fOrderId || 0
        };
        if (type == 3) {
            if (fOrderId == 1) {
                field = document.getElementById('coins');
                field.value = field.value.replace(/[.]/g, '');
                field.focus();
                // console.error(field.value);
                field.setSelectionRange(0, 0);
                if (field.value == '00' || ['', '00'].includes(this.coins)) {
                    field.value = '';
                    this.coins = '';
                }
                // field.setSelectionRange(2, 2);
            }
            else {
                field = document.getElementById('amount');
                field.focus();
                if (field.value == '0') {
                    field.value = '';
                }
                // field.setSelectionRange(1, 1);
            }
        }
        // console.log(this.activeInput.fieldIndex);
    };
    InputFormComponent.prototype.searchByNumber = function (numStr) {
        // let numStr = <HTMLInputElement>document.getElementById('findNumber');
        this.findNumber = numStr.replace(/[^0-9]/g, '');
        var number = this.findNumber.substring(0, 3);
        console.log('CODE CHANGE');
        console.log(number);
        // console.log("======================================================");
        if (Number(number) > 10) {
            var prod = 0;
            var prodArray = [[],
                []]; // [[] - product Id`s,[] - products]
            var products = this.prodService.PRODUCTS;
            for (var i = 0; i < products.length; i++) {
                if (products[i].pProvCodes.includes(number) && !prodArray[0].includes(products[i].pId)) {
                    console.log(products[i]);
                    prodArray[0].push(products[i].pId);
                    prodArray[1].push(products[i]);
                    prod = i;
                }
                for (var j = 0; j < products[i].pHint.length; j++) {
                    if (products[i].pHint[j].value.includes(number) && !prodArray[0].includes(products[i].pId)) {
                        console.log(products[i]);
                        prodArray[0].push(products[i].pId);
                        prodArray[1].push(products[i]);
                        prod = i;
                    }
                }
            }
            if (prodArray[1].length > 1) {
            }
            if (prodArray[1].length === 1) {
                prodArray[1][0].pInputFields = __WEBPACK_IMPORTED_MODULE_7__models_field__["a" /* Field */].toFields(prodArray[1][0].pInputFields);
                this.opService.setProduct(prodArray[1][0]);
                if (this.product.pType === 2) {
                    this.fields[0].value = number;
                    console.log(this.product.pInputFields[0].fId.toLocaleString());
                    this.setFocusedField();
                }
            }
        }
    };
    InputFormComponent.prototype.setFields = function (fields) {
        console.warn('setFields()');
        this.fields = [];
        var values = this.opService.OPERATION.fieldValues;
        console.warn(values);
        for (var i = 0; i < fields.length; i++) {
            this.fields.push({
                fieldId: fields[i].fId,
                field: fields[i],
                value: ((fields[i].fId === values[i].id) ? values[i].value : '')
            });
        }
        this.formMasked(fields);
        this.fields = this.fields.sort(function (a, b) {
            return (a.fOrder < b.fOrder) ? 1 : ((b.fOrder < a.fOrder) ? -1 : 0);
        });
        // console.log("FIELDS");
        // console.log(this.fields);
        if (this.opService.OPERATION.maskedValues.length > 0) {
            this.masked = this.opService.OPERATION.maskedValues;
        }
        console.log(this.masked);
        console.log(this.fields);
    };
    InputFormComponent.prototype.formMasked = function (fields) {
        console.log("Form masked");
        this.masked = [];
        for (var i = 0; i < fields.length; i++) {
            this.masked.push({
                id: fields[i].fOrder,
                value: ''
            });
        }
        console.log(this.masked);
    };
    InputFormComponent.prototype.setFocusedField = function () {
        var _this = this;
        setTimeout(function () {
            // let field = document.getElementById("field" + this.product.pInputFields[0].fId);
            var field;
            if (document.getElementById('findNumber')) {
                field = document.getElementById('findNumber');
                field.focus();
            }
            if (_this.product.pId !== 0 && _this.product.pType === 2) {
                if (_this.product.pInputFields[0].fRegexp !== '.') {
                    if (document.getElementById('field1')) {
                        field = document.getElementById('field1');
                        // set cursor to position (000)|_
                        field.setSelectionRange(5, 5);
                        field.focus();
                    }
                }
                else {
                    if (document.getElementById('field1-nomask')) {
                        field = document.getElementById('field1-nomask');
                        field.focus();
                    }
                }
                if (__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].checkMobileView()) {
                    _this.setActiveInput(2, 1);
                    field = document.getElementById('input-wrap');
                    // field = document.getElementById("but0");
                    if (field) {
                        field.scrollIntoView();
                    }
                }
            }
        }, 50);
    };
    InputFormComponent.prototype.setFocus = function () {
        var _this = this;
        setTimeout(function () {
            if (document.getElementById('findNumber')) {
                var inputFocus = document.getElementById('findNumber');
                inputFocus.focus();
                _this.setActiveInput(1);
                if (__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].checkMobileView()) {
                    /**Scroll to fast-access level on top*/
                    // inputFocus = document.getElementById('fast-access');
                    // inputFocus.scrollIntoView();
                }
            }
        }, 100);
    };
    InputFormComponent.prototype.clearedFields = function () {
        var fields = [];
        for (var i = 0; i < this.fields.length; i++) {
            fields.push({
                id: this.fields[i].fieldId,
                value: this.fields[i].value.replace(/[^a-zA-Zа-яА-ЯёЁ 0-9]/g, '')
            });
        }
        console.warn(fields);
        return fields;
    };
    InputFormComponent.prototype.setMasked = function (value) {
        // console.error('INDEX = ' + this.activeInput.fieldIndex);
        var field;
        if (!['.', '.*'].includes(this.product.pInputFields[this.activeInput.fieldIndex - 1].fRegexp)) {
            // console.error('MASKED');
            field = document.getElementById('field' + this.activeInput.fieldIndex);
            this.masked[this.activeInput.fieldIndex - 1].value = field.value.replace(/[_*]/g, '');
        }
        else {
            console.log('NOMASK');
            field = document.getElementById('field' + this.activeInput.fieldIndex + '-nomask');
            console.log(value);
            this.masked[this.activeInput.fieldIndex - 1].value = value;
        }
        console.log('Masked = ' + this.masked[this.activeInput.fieldIndex - 1].value);
        console.log(this.masked);
    };
    InputFormComponent.prototype.showComment = function () {
        this.setActiveInput(4);
        var comment = document.getElementById('remark-text');
        comment.classList.toggle('show');
        comment.classList.toggle('active');
    };
    InputFormComponent.prototype.clear = function (value, amount) {
        console.log(value);
        if (amount) {
            // console.log(value);
            value = value.replace('\D+/g', '');
        }
        else {
            value = value.substring(0, value.length - 1);
            console.log(value);
        }
        __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio.play();
        return value;
    };
    InputFormComponent.prototype.clearModel = function (val) {
        console.warn('keyboard model = ' + val);
        this.setMasked();
        console.warn(val.replace(/\s/g, '').replace(/ /g, ''));
        return val.replace(/[^0-9A-Za-z]/g, '').replace(/\s/g, '').replace(/ /g, '');
    };
    // ======== AMOUNT METHODS ==============================================================================================
    InputFormComponent.prototype.clearSum = function () {
        // console.error("SUM CLEARED");
        this.amount = '';
        this.coins = '00';
        this.validateSum();
        if (document.getElementById('amount')) {
            var field = document.getElementById('amount');
            field.focus();
        }
    };
    InputFormComponent.prototype.keyboardInputSum = function (val) {
        console.log(val.keyCode);
        // const sum=<HTMLInputElement>document.getElementById('amount');
        if ([110, 188, 190, 191].includes(val.keyCode)) {
            this.setActiveInput(3, 1);
        }
        var input = document.getElementById('amount');
        if (input.value.length == input.selectionEnd) {
            if (val.keyCode == 39) {
                this.setActiveInput(3, 1);
                // input = <HTMLInputElement>document.getElementById('coins');
                // input.value = input.value.replace(/[.,]/, '');
            }
        }
        this.validateSum();
    };
    InputFormComponent.prototype.insertCoins = function (val) {
        // console.error("KEY PRESSED = " + val.key);
        var field = document.getElementById('coins');
        var num = val.key.replace(/\[^0-9]/g, '');
        var text = field.textContent;
        console.log(val.keyCode);
        console.log(text);
        if (field.value.length >= 2) {
            field.value = field.value.substring(1, 2);
        }
        if (val.keyCode == 13) {
            this.onEnterAction();
        }
        if (val.keyCode >= 48 && val.keyCode <= 57) {
            // console.error('number');
            if (Object(__WEBPACK_IMPORTED_MODULE_9_ngx_pipes_src_app_pipes_helpers_helpers__["a" /* isNumber */])(parseInt(num)) || num == '0') {
                // console.log("2 KEY PRESSED  = " + val.key);
                if (this.coins.length == 2) {
                    this.coins = this.coins.substring(1, 2) + num;
                    field.value = field.value + num;
                }
                else {
                    field.setSelectionRange(0, 0, 'rtl');
                    this.coins = this.coins + num;
                }
            }
        }
        var input = document.getElementById('coins');
        if (input.selectionStart == 0) {
            if (val.keyCode == 37) {
                // field.value = field.value.replace('.', '!');
                this.setActiveInput(3);
            }
        }
    };
    InputFormComponent.prototype.clearCoins = function () {
        var field = document.getElementById('coins');
        field.value = field.value.replace(/\D+/g, '');
    };
    InputFormComponent.prototype.onBlur = function () {
        var field;
        // console.error('coins=' + this.coins);
        field = document.getElementById('coins');
        console.log(field.value);
        if (['', '00'].includes(field.value)) {
            field.value = '00';
        }
        else {
            if (parseInt(this.coins) > 10)
                field.value = this.coins;
            if (parseInt(this.coins) < 10)
                field.value = this.coins;
        }
        field = document.getElementById('amount');
        if (['', '0'].includes(this.amount)) {
            field.value = '0';
        }
        // console.error(this.amount + '.' + this.coins);
        this.validateSum();
    };
    InputFormComponent.prototype.validateSum = function () {
        console.warn("validateSum");
        if (parseFloat(this.amount + '.' + this.coins)) {
            var amount = parseFloat(this.amount + '.' + this.coins) || 0;
            console.warn('AMOUNT = ' + amount);
            this.invalid.amount = true;
            this.invalid.commission = false;
            this.invalid.min = false;
            this.invalid.max = false;
            // this.amount = this.amount.replace(/[,]/g, '.');
            // this.amount = this.amount.replace(/[^.0-9]/g, '');
            this.invalid.amount = amount <= 0;
            this.invalid.min = (amount > 0 && amount < this.product.pAmountMin / 100);
            if (this.product.pAmountMax > 0) {
                if (amount > this.product.pAmountMax / 100) {
                    this.invalid.max = true;
                }
            }
            var comm = this.calcCommission(amount);
            if (comm != 0) {
                this.onBalance = Math.round((amount + comm) * 1000) / 1000;
            }
            else {
                this.onBalance = amount;
            }
            // console.warn(this.onBalance);
            this.invalid.commission = (amount > 0 && this.onBalance <= 0);
            // console.warn(this.highCommission);
        }
        else {
            this.amount = '0';
        }
        return this.amount;
    };
    // ======== CREATE OPERATION METHODS ====================================================================================
    InputFormComponent.prototype.checkOperation = function () {
        console.warn("checkOperation");
        if (this.product.pType === 2) {
            if (parseFloat(this.amount + '.' + this.coins)) {
                if ((parseFloat(this.amount + '.' + this.coins) * 100) < this.product.pAmountMin) {
                    console.log('AMOUNT = 0');
                }
                else {
                    console.log('AMOUNT = ' + this.amount + '.' + this.coins);
                    this.goToVerification();
                }
            }
        }
        if (this.product.pType === 1) {
            this.goToVerification();
        }
    };
    InputFormComponent.prototype.pressup = function () {
        if (document.getElementById('execute')) {
            var width = document.getElementById('execute').offsetWidth;
            if ((this.mobileView && width < 280) || (!this.mobileView && width !== 320)) {
                console.log('WIDTH = ' + width);
                this.checkOperation();
            }
            else {
                console.log('WIDTH = ' + width);
                this.goToVerification(true);
            }
        }
        document.getElementById('execute').style.width = '0';
    };
    InputFormComponent.prototype.calcCommission = function (amount) {
        var comForValue = 0;
        var commission = 0;
        var com = this.product.pCommissions;
        console.log(com);
        for (var i = 0; i < com.length; i++) {
            if (com[i].cMin_amount <= amount * 100 && com[i].cMin_amount >= comForValue) {
                comForValue = com[i].cMin_amount;
            }
        }
        console.warn("COMMISSIONS");
        // console.warn(comForValue);
        for (var i = 0; i < com.length; i++) {
            if (com[i].cMin_amount === comForValue) {
                if (com[i].cValue !== 0) {
                    commission += com[i].cValue;
                }
                if (com[i].cPercent !== 0) {
                    commission += Math.round(amount * com[i].cPercent);
                }
                console.log(commission);
            }
        }
        console.log(Math.round(commission) / 100);
        return Math.round(commission) / 100;
        // return 0;
    };
    // ======== KEYBOARD EVENTS METHOD ======================================================================================
    InputFormComponent.prototype.keyboardPress = function (val) {
        console.warn("PLAY SOUND");
        __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */].audio.play();
        var input;
        // if (this.global.checkOnline())
        {
            /** INPUT SEARCH NUMBER */
            if (this.activeInput.inputType === 1) {
                if (this.findNumber.length < 10) {
                    this.findNumber = this.findNumber + val;
                    if (this.findNumber[0] !== '0') {
                        this.findNumber = this.findNumber.replace(this.findNumber[0], '');
                    }
                    if (this.findNumber[1] === '0') {
                        this.findNumber = this.findNumber.replace(this.findNumber[1], '');
                    }
                    this.searchByNumber(this.findNumber);
                    // console.log(this.findNumber);
                }
                // console.warn("PLAY SOUND");
                // GlobalService.audio.play();
                input = document.getElementById('findNumber');
                input.focus();
            }
            /** INPUT FIELDS */
            if (this.activeInput.inputType === 2) {
                var fieldIndex = this.activeInput.fieldIndex - 1;
                if (val !== 'space') {
                    if (val !== 'bksp') {
                        if (!['.', '*'].includes(this.fields[fieldIndex].field.fRegexp)) {
                            /**value that will be sent in operation*/
                            var model = this.fields[fieldIndex].value;
                            // console.warn('model = ' + model);
                            /**value contains field string without all except placeholders? numbers and letters*/
                            var modelMask = this.fields[fieldIndex].field.fMask.replace(/[^_*0-9A-Za-z]/g, '');
                            // console.warn('modelMask = ' + modelMask);
                            /**value of insertion (if mask contains some symbols [0-9A-Za-z])*/
                            var insertion = modelMask.substring(model.length, modelMask.length);
                            // console.warn('insertion = ' + insertion);
                            this.fields[fieldIndex].value += insertion.substring(0, insertion.replace(/[*]/, '_').indexOf('_'));
                            if (model.length < modelMask.length) {
                                this.fields[fieldIndex].value += val;
                                document.getElementById('field' + (fieldIndex + 1)).focus();
                                // setTimeout(() => {
                                this.setMasked();
                                // }, 10);
                            }
                            else {
                                this.setActiveInput(3);
                            }
                        }
                        else {
                            document.getElementById('field' + (fieldIndex + 1) + '-nomask').focus();
                            this.fields[fieldIndex].value += val;
                            console.log(this.fields[fieldIndex].value);
                            this.setMasked(this.fields[fieldIndex].value);
                        }
                        /**----------------------------------------------------------------------------------------------*/
                        console.warn('L:515');
                    }
                    else {
                        this.fields[fieldIndex].value = this.fields[fieldIndex].value.substring(0, this.fields[fieldIndex].value.length - 1);
                    }
                }
                // console.warn("PLAY SOUND");
                // GlobalService.audio.play();
            }
            var field = void 0;
            /** INPUT AMOUNT */
            if (this.activeInput.inputType === 3 && (Object(__WEBPACK_IMPORTED_MODULE_9_ngx_pipes_src_app_pipes_helpers_helpers__["a" /* isNumber */])(val) || val == '.')) {
                if (this.activeInput.fieldIndex == 1) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_9_ngx_pipes_src_app_pipes_helpers_helpers__["a" /* isNumber */])(parseInt(val)) && val != '.') {
                        console.log("KEY PRESSED = " + val);
                        if (this.coins.length == 2) {
                            this.coins = this.coins.substring(1, 2) + val;
                            field = document.getElementById('coins');
                            field.value = this.coins;
                            field.focus();
                        }
                        if (this.coins.length < 2) {
                            this.coins = this.coins + val;
                            field = document.getElementById('coins');
                            field.value = this.coins;
                            field.focus();
                        }
                    }
                    // this.coins = this.coins.replace(/[_]/g, '0');
                }
                if (val === '.' && this.activeInput.fieldIndex != 1) {
                    this.setActiveInput(3, 1);
                }
                if (!this.activeInput.fieldIndex && this.amount.length < 5) {
                    var s = val.toString().replace(/[^0-9]/, '');
                    if (this.amount == '0') {
                        this.amount = s;
                    }
                    else {
                        this.amount = this.amount + s;
                    }
                }
                console.warn("TOTAL AMOUNT = " + this.amount + "." + this.coins);
                // console.warn("PLAY SOUND");
                // GlobalService.audio.play();
            }
            /** INPUT COMMENT */
            if (this.activeInput.inputType === 4) {
                if (val !== 'bksp') {
                    if (val == 'space') {
                        this.comment.setValue(this.comment.value + ' ');
                    }
                    else {
                        this.comment.setValue(this.comment.value + val);
                    }
                }
                else {
                    this.comment.setValue(this.comment.value.substring(0, this.comment.value.length - 1));
                }
                document.getElementById('remark-text').focus();
                // console.warn("PLAY SOUND");
                // GlobalService.audio.play();
            }
        }
    };
    InputFormComponent.prototype.goToVerification = function (noVerify) {
        console.warn("goToVerification");
        console.log('AMOUNT = ' + this.amount + '.' + this.coins);
        console.warn(this.masked);
        console.warn(this.comment.value);
        var masked = this.masked;
        var amount = parseFloat(this.amount + '.' + this.coins);
        console.warn('AMOUNT = ' + amount);
        var comment = this.comment.value;
        var values = [];
        if (this.product.pType === 2) {
            values = this.clearedFields();
        }
        if (this.product.pType === 1) {
            amount = this.product.pNominal;
        }
        this.opService.OPERATION.name = this.product.pName;
        this.opService.setProduct(this.product);
        this.opService.OPERATION.fieldValues = values;
        this.opService.OPERATION.maskedValues = masked;
        console.warn('MASKED VALUES');
        console.warn(this.opService.OPERATION.maskedValues);
        this.opService.OPERATION.commission = this.calcCommission(amount);
        // console.log("COMMISSION = " + this.opService.OPERATION.commission);
        if (this.product.pType === 1) {
            this.opService.OPERATION.amount = Number(this.product.pNominal);
        }
        if (this.product.pType === 2) {
            // if (this.opService.OPERATION.commission < 0) {
            //   this.opService.OPERATION.amount = (amount - Math.abs(this.opService.OPERATION.commission)) * 100;
            // } else {
            this.opService.OPERATION.amount = amount * 100;
            // }
        }
        this.opService.OPERATION.comment = comment;
        this.opService.OPERATION.status = {};
        console.warn(noVerify);
        // console.error(this.opService.OPERATION.amount);
        // console.error(this.opService.OPERATION.commission);
        console.log(this.opService.OPERATION);
        if (noVerify && Math.round(this.opService.OPERATION.amount + this.opService.OPERATION.commission * 100) >= 1) {
            this.opService.setStage(3);
            console.log('GO TO CREATION');
            this.opService.createOperation();
            this.prodService.clearCurrent();
            this.clearSum();
            this.comment.setValue('');
        }
        else {
            this.opService.setStage(2);
        }
    };
    InputFormComponent.prototype.setL = function (names) {
        return __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    InputFormComponent.prototype.onEnterAction = function () {
        console.warn('PRESS ENTER');
        var field = document.getElementById('amount');
        // let button = document.getElementById('operation-next');
        if (this.activeInput.inputType == 3 && this.activeInput.fieldIndex == 1) {
            document.getElementById('coins').addEventListener('keyup', function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.getElementById('operation-next').click();
                    console.warn('pressed');
                }
            });
        }
        if (this.activeInput.inputType == 3 && this.activeInput.fieldIndex != 1) {
            this.setActiveInput(3, 1);
            setTimeout(function () {
                field = document.getElementById('coins');
                field.focus();
                // field.setSelectionRange(0, 0);
            }, 100);
        }
        if (this.activeInput.inputType == 2 && this.activeInput.fieldIndex > 0) {
            if (this.activeInput.fieldIndex < this.fields.length) {
                this.setActiveInput(2, this.activeInput.fieldIndex + 1);
                var input = document.getElementById('field' + (this.activeInput.fieldIndex));
                input.focus();
            }
            else {
                this.setActiveInput(3);
                setTimeout(function () {
                    field.focus();
                    field.setSelectionRange(1, 1);
                }, 100);
            }
        }
    };
    return InputFormComponent;
}());
InputFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-form',
        template: __webpack_require__("../../../../../src/app/input-form/input-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-form/input-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]) === "function" && _c || Object])
], InputFormComponent);

var _a, _b, _c;
//# sourceMappingURL=input-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"currKeyboard\" id=\"keyboard\" style=\"padding-top: 0px\">\r\n  <div *ngSwitchCase=\"1\" class=\"keyboard-wrap numbers clearfix\">\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(1)\">1</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(2)\">2</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(3)\">3</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(4)\">4</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(5)\">5</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(6)\">6</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(7)\">7</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(8)\">8</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(9)\">9</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button id=\"but0\" type=button class=\"key-inner\" (click)=\"pressButton(0)\">0</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('.')\">.</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner letters\" (click)=\"changeKeyboard(2)\">абв\r\n      </button>\r\n    </div>\r\n    <div class=\"help-modal help-modal-small modal-keyboard\">\r\n      <div class=arrow-dialog>{{'keyboard_help'|translate}}</div>\r\n    </div>\r\n  </div>\r\n  <div *ngSwitchCase=\"2\" class=\"keyboard-wrap letters ru clearfix\">\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('й')\">й</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ц')\">ц</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('у')\">у</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('к')\">к</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('е')\">е</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('н')\">н</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('г')\">г</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ш')\">ш</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('щ')\">щ</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('з')\">з</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('х')\">х</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ф')\">ф</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ы')\">ы</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('в')\">в</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('а')\">а</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('п')\">п</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('р')\">р</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('о')\">о</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('л')\">л</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('д')\">д</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ж')\">ж</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('э')\">э</button>\r\n    </div>\r\n    <div class=\"key-wrap upper\">\r\n      <button type=button class=\"key-inner\" (click)=\"changeToUpper()\">\r\n        <svg class=svg-keyboard-icon>\r\n          <use href=#uppercase></use>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('я')\">я</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ч')\">ч</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('с')\">с</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('м')\">м</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('и')\">и</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('т')\">т</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ь')\">ь</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('б')\">б</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('ю')\">ю</button>\r\n    </div>\r\n    <div class=\"key-wrap bkspace\">\r\n      <button type=button class=\"key-inner\" (click)=\"removeSymbol()\">\r\n        <svg class=svg-keyboard-icon>\r\n          <use href=#backspace></use>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n    <div class=\"key-wrap switch-numbers\">\r\n      <button type=button class=\"key-inner\" (click)=\"changeKeyboard(1)\">123</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('@')\">@</button>\r\n    </div>\r\n    <div class=\"key-wrap switch-en\">\r\n      <button type=button class=\"key-inner\" (click)=\"changeKeyboard(3)\">en</button>\r\n    </div>\r\n    <div class=\"key-wrap space\">\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('space')\">Русский</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('.')\">.</button>\r\n    </div>\r\n    <div class=\"key-wrap switch-symbols\">\r\n      <button type=button class=\"key-inner\" (click)=\"changeKeyboard(4)\">>.!</button>\r\n    </div>\r\n  </div>\r\n  <div *ngSwitchCase=\"3\" class=\"keyboard-wrap letters en clearfix\">\r\n    <div class=clearfix>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('q')\">q</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('w')\">w</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('e')\">e</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('r')\">r</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('t')\">t</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('y')\">y</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('u')\">u</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('i')\">i</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('o')\">o</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('p')\">p</button>\r\n      </div>\r\n    </div>\r\n    <div class=clearfix>\r\n      <div class=\"key-wrap leftspace-mibble\">\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('a')\">a</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('s')\">s</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('d')\">d</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('f')\">f</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('g')\">g</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('h')\">h</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('j')\">j</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('k')\">k</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('l')\">l</button>\r\n      </div>\r\n    </div>\r\n    <div class=clearfix>\r\n      <div class=\"key-wrap upper\">\r\n        <button type=button class=\"key-inner\" (click)=\"changeToUpper()\">\r\n          <svg class=svg-keyboard-icon>\r\n            <use href=#uppercase></use>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('z')\">z</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('x')\">x</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('c')\">c</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('v')\">v</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('b')\">b</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('n')\">n</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('m')\">m</button>\r\n      </div>\r\n      <div class=\"key-wrap bkspace\">\r\n        <button type=button class=\"key-inner\" (click)=\"removeSymbol()\">\r\n          <svg class=svg-keyboard-icon>\r\n            <use href=#backspace></use>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom-letters clearfix\">\r\n      <div class=\"key-wrap switch-numbers\">\r\n        <button type=button class=\"key-inner\" (click)=\"changeKeyboard(1)\">123</button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('@')\">@</button>\r\n      </div>\r\n      <div class=\"key-wrap switch-ru\">\r\n        <button type=button class=\"key-inner\" (click)=\"changeKeyboard(2)\">ru</button>\r\n      </div>\r\n      <div class=\"key-wrap space\">\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('space')\">English\r\n        </button>\r\n      </div>\r\n      <div class=key-wrap>\r\n        <button type=button class=\"key-inner\" (click)=\"pressButton('.')\">.</button>\r\n      </div>\r\n      <div class=\"key-wrap switch-symbols\">\r\n        <button type=button class=\"key-inner\" (click)=\"changeKeyboard(4)\">>.!</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngSwitchCase=\"4\" class=\"keyboard-wrap symbols clearfix\">\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('!')\">!</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('@')\">@</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('#')\">#</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('$')\">$</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('%')\">%</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('^')\">^</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('&')\">&</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('*')\">*</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('(')\">(</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(')')\">)</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('-')\">-</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('+')\">+</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('№')\">№</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(';')\">;</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('?')\">?</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('_')\">_</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('=')\">=</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('{')\">{{ \"{\" }}</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('}')\">}</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('[')\">[</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(']')\">]</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('\\\\')\">\\</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('&lt;')\">&lt;</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('&gt;')\">&gt;</button>\r\n    </div>\r\n    <div class=\"key-wrap letters\">\r\n      <button type=button class=\"key-inner letters\" (click)=\"changeKeyboard(2)\">абв\r\n      </button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton(',')\">,</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('.')\">.</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('/')\">/</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('&quot;')\">\"</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('\\'')\">'</button>\r\n    </div>\r\n    <div class=key-wrap>\r\n      <button type=button class=\"key-inner\" (click)=\"pressButton('|')\">|</button>\r\n    </div>\r\n    <div class=\"key-wrap bkspace\">\r\n      <button type=button class=\"key-inner\" (click)=\"removeSymbol()\">\r\n        <svg class=svg-keyboard-icon>\r\n          <use href=#backspace></use>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/keyboard/keyboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardComponent = (function () {
    function KeyboardComponent(opService) {
        this.opService = opService;
        this.currKeyboard = 1;
        this.upperCase = false;
        this.onBtnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    KeyboardComponent.prototype.ngOnInit = function () {
    };
    KeyboardComponent.prototype.changeKeyboard = function (val) {
        this.currKeyboard = val;
        this.upperCase = false;
    };
    KeyboardComponent.prototype.pressButton = function (val) {
        if (!this.upperCase) {
            this.onBtnClick.emit(val);
        }
        else {
            this.onBtnClick.emit(val.toUpperCase());
        }
    };
    KeyboardComponent.prototype.changeToUpper = function () {
        this.upperCase = !this.upperCase;
        var letters = document.getElementsByClassName('keyboard-wrap letters')[0];
        if (this.upperCase)
            letters.classList.add('uppercased');
        else
            letters.classList.remove('uppercased');
    };
    KeyboardComponent.prototype.removeSymbol = function () {
        this.onBtnClick.emit('bksp');
    };
    return KeyboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], KeyboardComponent.prototype, "onBtnClick", void 0);
KeyboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-keyboard',
        template: __webpack_require__("../../../../../src/app/keyboard/keyboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/keyboard/keyboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operation_service__["a" /* OperationService */]) === "function" && _a || Object])
], KeyboardComponent);

var _a;
//# sourceMappingURL=keyboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\r\n\r\n<header>\r\n  <div class=container>\r\n    <div class=\"header-top clearfix\">\r\n      <div class=header-left>\r\n        <div class=tabel_c-img-wrap><a href=# class=logo-wrap>\r\n          <img src=\"assets/images/{{(mobileView||windowWidth<770) ? 'GP_logo':'globalpay_logo'}}.svg\"\r\n               [style.height]=\"(mobileView||windowWidth<770) ? '35px':'30px'\"\r\n               alt=лого class=logo>\r\n        </a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<div id=\"main-wrap\" class=\"container main-wrap clearfix\" style=\"height: 93vh\">\r\n\r\n  <div style=\"margin: 0 auto; padding-top: 100px; max-width: 200px\">\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" style=\"margin: 0 auto\" novalidate>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" id=\"username\" name=\"username\"\r\n               [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n               required placeholder=\"Login\"/>\r\n      </mat-form-field>\r\n      <!--<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Login is required</div>-->\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" id=\"password\" [(ngModel)]=\"model.password\"\r\n               #password=\"ngModel\" name=\"password\"\r\n               required placeholder=\"Password\"/>\r\n        <!--<img (click)=\"showPass()\" class=\"eye\" src=\"assets/images/icons/check.svg\" alt=\"\">-->\r\n      </mat-form-field>\r\n      <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"terminal\" id=\"terminal\" [(ngModel)]=\"model.terminal\"\r\n               #terminal=\"ngModel\"\r\n               pattern=\"\\d+\"\r\n               required placeholder=\"Terminal\"/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"f.submitted && (!terminal.valid||!password.valid||!username.valid)\" class=\"help-block\">\r\n        * - обязательно к заполнению\r\n      </div>\r\n      <div *ngIf=\"incorrect\" class=\"help-block\">\r\n        Неправильные данные\r\n      </div>\r\n      <br>\r\n      <div [ngSwitch]=\"loading\" class=\"\" style=\"text-align: center\">\r\n        <img *ngSwitchCase=\"true\" style=\"height: 25px\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n        <button *ngSwitchCase=\"false\" md-button class=\"btn next\" [disabled]=\"loading\" id=\"login_btn\">ВОЙТИ</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<noscript>\r\n  <div style=\"\r\n  color: #b20000; background-color: rgba(255, 95, 102, 0.36);\r\n  border: 2px solid #b20000;\r\n  width: 800px; margin: 100px auto 0; padding: 25px\">\r\n    В вашем интернет браузере деактивирован Javascript. Некоторые разделы сайта будут работать некорректно.\r\n  </div>\r\n</noscript>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, configuration, authenticationService, user) {
        this.route = route;
        this.router = router;
        this.configuration = configuration;
        this.authenticationService = authenticationService;
        this.user = user;
        this.model = {};
        this.loading = false;
        this.incorrect = false;
        this.token = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.mobileView = __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */].checkMobileView();
        this.windowWidth = document.body.clientWidth;
        // reset login status
        // this.authenticationService.logout();
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        // get return url from route parameters or default to '/'
        if (!localStorage.getItem('currentUser')) {
            if (__WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */].redirectToMain) {
                this.authenticationService.logout();
            }
            else {
                // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            }
        }
        else {
            this.user.USER = JSON.parse(localStorage.getItem('currentUser'));
            this.configuration.apiKey = JSON.parse(localStorage.getItem('currentUser')).keyToken;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.incorrect = false;
        if (this.model.username !== '' && this.model.password !== '' && this.model.terminal !== '') {
            console.log('LOGIN ON');
            this.authenticationService.loginAuth(this.model.username, this.model.password, this.model.terminal).subscribe(function (data) {
                console.log(data);
                if (data.tokens.keyToken !== '') {
                    try {
                        localStorage.setItem('currentUser', JSON.stringify({
                            username: _this.model.username,
                            terminal: _this.model.terminal,
                            keyToken: data.tokens.keyToken,
                            refreshToken: data.tokens.refreshToken
                        }));
                        console.warn("login data saved to storage");
                        _this.user.USER = JSON.parse(localStorage.getItem('currentUser'));
                    }
                    catch (error) {
                        alert('Для авторизации на сайте отключите режим инкогнито');
                        _this.loading = false;
                    }
                    // set token value for requests
                    _this.configuration.apiKey = data.tokens.keyToken;
                }
                _this.loading = false;
                _this.router.navigate(['/']);
                _this.user.getGeo();
            }, function (error) {
                var info = JSON.parse(error._body);
                // console.error(info);
                if (info.error == 4)
                    _this.incorrect = true;
                // // this.alertService.error(error);
                _this.loading = false;
            });
            setTimeout(function () {
                _this.loading = false;
                // TODO timeout message init
            }, 30000);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__["a" /* Configuration */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vert {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translate(0%, 50%);\r\n          transform: translate(0%, 50%);\r\n}\r\n\r\n.help-block {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: red;\r\n}\r\n\r\ninput {\r\n  text-align: center;\r\n  border: none;\r\n  min-width: 200px;\r\n}\r\n\r\n.eye {\r\n  width: 22px;\r\n  float: right;\r\n}\r\n\r\n.btn {\r\n  width: 200px;\r\n}\r\n\r\n.header-left {\r\n  padding-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden-help {\r\n  display: none;\r\n}\r\n\r\na {\r\n  /*color: darkblue;*/\r\n  cursor: pointer;\r\n}\r\n\r\n.set-lang {\r\n  font-weight: 500;\r\n  /*width: 220px;*/\r\n  margin: auto;\r\n\r\n}\r\n\r\n#lang-help {\r\n  /*display: table;*/\r\n}\r\n\r\n.lang-list {\r\n  width: 320px;\r\n  heght: 50px;\r\n  color: black;\r\n}\r\n\r\n.lang {\r\n  text-align: center;\r\n  width: 270px;\r\n  float: right;\r\n}\r\n\r\n.selected_lang {\r\n  width: 270px;\r\n  float: right;\r\n  cursor: default;\r\n}\r\n\r\n.selected_lang a {\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n\r\n  .nav-menu {\r\n    max-width: 290px;\r\n  }\r\n\r\n  .lang-list {\r\n    width: 290px;\r\n  }\r\n\r\n  .lang {\r\n    width: 240px;\r\n  }\r\n\r\n  .selected_lang {\r\n    width: 240px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-menu\">\r\n  <div class=wrap-menu-title>\r\n    <div class=menu-title>{{'reports'|translate}}</div>\r\n  </div>\r\n  <ul class=menu-list>\r\n    <li class=menu-item (click)=\"goToActivity(1)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#prodaju></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'sales'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'sales_help'|translate}}</div>\r\n      </div>\r\n    <li class=menu-item (click)=\"goToActivity(2)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#operations></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'op_list'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'op_list_help'|translate}}</div>\r\n      </div>\r\n    <li class=menu-item (click)=\"goToActivity(3)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#incasation></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'collection'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'collection_help'|translate}}</div>\r\n      </div>\r\n    <li class=menu-item (click)=\"goToActivity(4)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#details></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'details'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'details_help'|translate}}</div>\r\n      </div>\r\n    <li class=menu-item (click)=\"goToActivity(5)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#finance></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'financial'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'financial_help'|translate}}</div>\r\n      </div>\r\n    <li class=menu-item (click)=\"goToActivity(6)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#report></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'duty_report'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'duty_report_help'|translate}}</div>\r\n      </div>\r\n  </ul>\r\n  <div class=wrap-menu-title>\r\n    <div class=\"menu-title settings\">{{'settings'|translate}}</div>\r\n  </div>\r\n  <ul class=\"menu-list settings\">\r\n\r\n    <!--============== TODO will be done in future =========================================-->\r\n    <!--<li class=\"menu-item akk\"><a>oad_instructions_help'|translate}}</div>-->\r\n    <!--</div>-->\r\n    <!--<svg class=svg-menu-icon>-->\r\n    <!--<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#account></use>-->\r\n    <!--</svg>-->\r\n    <!--<span class=menu-item-text>{{'my_contacts'|translate}}</span></a>-->\r\n    <!--<div class=\"help-modal help-modal-small modal-menu-li\">-->\r\n    <!--<div class=arrow-dialog>{{'my_contacts_help'|translate}}</div>-->\r\n    <!--</div>-->\r\n    <!--<li class=\"menu-item instraction\"><a href=#>-->\r\n    <!--<svg class=svg-menu-icon>-->\r\n    <!--<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#instraction></use>-->\r\n    <!--</svg>-->\r\n    <!--<span class=menu-item-text>{{'download_instructions'|translate}}</span></a>-->\r\n    <!--<div class=\"help-modal help-modal-small modal-menu-li\">-->\r\n    <!--<div class=arrow-dialog>{{'downl-->\r\n    <!--=====================================================================================-->\r\n\r\n    <li class=\"menu-item control\" (click)=\"goToActivity(7)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#control></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'access_control'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'access_control_help'|translate}}</div>\r\n      </div>\r\n\r\n    <li class=\"menu-item set-lang\" (click)=showLangList()><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xlink:href=#earth></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'language'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'language_help'|translate}}</div>\r\n      </div>\r\n    </li>\r\n    <div *ngIf=\"showList\" id=lang-help style=\"display: table\">\r\n      <div class=\"lang-list\" id=\"lang-list\" style=\"text-align: center\">\r\n        <div class=\"lang\" *ngFor=\"let lang of supportedLanguages\"\r\n             id=\"{{lang.value}}\"\r\n             (click)=\"selectLang(lang.value)\"\r\n             [class.selected_lang]=\"isCurrentLang(lang.value)\">\r\n          <a>{{ lang.display }} <br></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <li class=\"menu-item passwd\" (click)=\"goToActivity(8)\"><a>\r\n      <svg class=svg-menu-icon>\r\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=#passwd></use>\r\n      </svg>\r\n      <span class=menu-item-text>{{'pass_change'|translate}}</span></a>\r\n      <div class=\"help-modal help-modal-small modal-menu-li\">\r\n        <div class=arrow-dialog>{{'pass_change_help'|translate}}</div>\r\n      </div>\r\n  </ul>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavMenuComponent = (function () {
    function NavMenuComponent(dateAdapter, global) {
        var _this = this;
        this.dateAdapter = dateAdapter;
        this.global = global;
        this.showList = false;
        __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */].showList.subscribe(function (val) {
            _this.showList = val;
        });
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setLang();
        this.showList = false;
        __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */].showList.subscribe(function (val) {
            _this.showList = val;
        });
    };
    // ===========================================
    NavMenuComponent.prototype.setLang = function () {
        if (localStorage.lang) {
            this.cur_lang = localStorage.lang;
        }
        else {
            this.cur_lang = __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].def_lang;
        }
        this.supportedLanguages = [
            {
                display: 'Русский',
                value: 'ru'
            },
            {
                display: 'Українська',
                value: 'uk'
            }
        ];
        this.selectLang(this.cur_lang);
    };
    NavMenuComponent.prototype.isCurrentLang = function (lang) {
        return lang === localStorage.lang;
    };
    NavMenuComponent.prototype.selectLang = function (lang) {
        // set default;
        if (lang === 'ru') {
            this.dateAdapter.setLocale('ru-UA');
        }
        if (lang === 'uk') {
            this.dateAdapter.setLocale('uk-UA');
        }
        localStorage.lang = lang;
        this.cur_lang = lang;
        this.showList = false;
    };
    NavMenuComponent.prototype.showLangList = function () {
        this.showList = !this.showList;
        setTimeout(function () {
            this.showList = false;
        }, 4000);
    };
    NavMenuComponent.prototype.goToActivity = function (act) {
        if (!__WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */].blockedNavigation) {
            this.global.setActivity(act);
            this.showList = false;
        }
    };
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-menu/nav-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], NavMenuComponent);

var _a, _b;
//# sourceMappingURL=nav-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=modal-news class=\"news-wrap modal-news\">\r\n  <div class=wrap-table_c-modal>\r\n    <div class=\"news-item modal-content\">\r\n      <div class=news-head><span class=close-news-modal (click)=\"closeNews()\">&times;</span>\r\n        <h2 class=clearfix><a class=top-name>{{'News'|translate}}</a></h2></div>\r\n      <div class=wrap-for-news-modal>\r\n        <div class=wrap-news-inner>\r\n          <div class=news-item-inner *ngFor=\"let news of NEWS\">\r\n            <div class=news-title>{{news.nTitle}}</div>\r\n            <div class=news-text>\r\n              <div [innerHTML]=\"news.nBody | safeHtml\"></div>\r\n            </div>\r\n            <div class=news-footer>{{news.nFooter}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__("../../../../../src/app/_services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(service, alert) {
        this.service = service;
        this.alert = alert;
        this.NEWS = [];
        this.haveNews = false;
        this.showNews = true;
        this.showNews = this.service.showNews;
        if (!this.showNews && this.NEWS.length != 0) {
            this.closeNews();
        }
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.showNews = this.service.showNews;
        if (!this.showNews) {
            this.closeNews();
        }
        this.service.getNews().subscribe(function (data) {
            console.warn(data);
            _this.NEWS = _this.service.getNewsList(data);
            // this.NEWS = [];
            if (_this.NEWS.length > 0) {
                _this.haveNews = true;
                document.getElementById('main-wrap').classList.remove('no-news');
            }
            console.log('NEWS');
            console.log(_this.NEWS);
        }, function (error) {
            // document.getElementById("main-wrap").classList.add("no-news");
            _this.NEWS = [];
            // this.closeNews();
            _this.alert.onError(error);
        });
    };
    NewsComponent.prototype.closeNews = function () {
        document.getElementById('modal-news').classList.toggle('hide-news');
        this.service.showNews = false;
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], NewsComponent);

var _a, _b;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/otp-auth/otp-auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otp-auth/otp-auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!error\" style=\"text-align: center;margin: 100px auto 0;\">\r\n  <img style=\"height: 35px\"\r\n       src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n</div>\r\n\r\n\r\n<!--<div *ngIf=\"error\"-->\r\n<!--style=\"color: #b20000; background-color: rgba(255, 95, 102, 0.36);-->\r\n<!--border: 2px solid #b20000; font-size: 18px; text-align: center;-->\r\n<!--width: 800px; margin: 100px auto 0; padding: 25px\">-->\r\n<!--Невозможно войти на сайт-->\r\n<!--<br>-->\r\n<!--<span style=\"font-size: 13px;\">Попробуйте повторить попытку позже или зайти через другой интернет браузер.</span>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/otp-auth/otp-auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtpAuthComponent = (function () {
    function OtpAuthComponent(route, router, configuration, authenticationService, user) {
        this.route = route;
        this.router = router;
        this.configuration = configuration;
        this.authenticationService = authenticationService;
        this.user = user;
        this.token = "";
        this.error = false;
    }
    OtpAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = false;
        this.sub = this.route.params.subscribe(function (params) {
            _this.token = params['id'] || ''; // (+) converts string 'id' to a number
            try {
                if (_this.token.length > 0)
                    _this.loginByToken(_this.token);
            }
            catch (e) {
                _this.error = true;
            }
        });
    };
    OtpAuthComponent.prototype.loginByToken = function (token) {
        var _this = this;
        console.warn("OTP - " + token);
        this.authenticationService.loginByToken(token)
            .subscribe(function (data) {
            try {
                var user = {
                    username: data.cashier,
                    terminal: data.terminal,
                    keyToken: data.tokens.keyToken,
                    refreshToken: data.tokens.refreshToken
                };
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.warn("login data saved to storage");
                _this.user.USER = JSON.parse(localStorage.getItem('currentUser'));
                // set token value for requests
                _this.configuration.apiKey = token;
                _this.router.navigate(['/']);
                _this.user.getGeo();
            }
            catch (error) {
                alert('Для авторизации на сайте отключите режим инкогнито');
            }
        }, function (error) {
            _this.error = true;
            window.location.href = __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */].redirectPath;
            var info;
            try {
                info = JSON.parse(error);
            }
            catch (e) {
            }
            console.warn(info);
            console.error('NO RESPONCE FROM SERVER');
        });
    };
    return OtpAuthComponent;
}());
OtpAuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-otp-auth',
        template: __webpack_require__("../../../../../src/app/otp-auth/otp-auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/otp-auth/otp-auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__swagger_configuration__["a" /* Configuration */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], OtpAuthComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=otp-auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"operator-list\">\r\n  <li *ngFor=\"let product of PRODUCTS|orderBy:'pOrder'\" class=\"article\">\r\n    <a *ngIf=\"product.pId\"\r\n       (click)=\"selectProduct(product)\"\r\n       id=\"{{product.pId}}\"\r\n       [attr.number]=product.pProvCodes\r\n       [ngClass]=\"{'active':product.pId==currProduct.pId}\"\r\n       class=\"operator-item\">\r\n      <div *ngIf=\"product.pIcon\" class=wrap-oper-img><img\r\n        src=\"https://globalpay.com.ua/images/iconset/{{product.pIcon||'none'}}\"\r\n        alt=\"\" class=operator-image>\r\n      </div>\r\n      <div class=list-inner-tabel_c>\r\n        <div class=operator-name>{{Lang(product.pName)}}</div>\r\n\r\n        <div *ngIf=\"product.pHint\" class=descr-input-rules>\r\n          {{Lang(product.pHint)}}\r\n        </div>\r\n      </div>\r\n    </a>\r\n  <li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductListComponent = (function () {
    function ProductListComponent(service, catService, opService, alert) {
        var _this = this;
        this.service = service;
        this.catService = catService;
        this.opService = opService;
        this.alert = alert;
        // @Input('catTag') catTag: string;
        this.emitEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opService.currProduct.subscribe(function (value) {
            console.warn("PRODUCT CHANGED");
            _this.currProduct = value;
        });
        this.catService.currCat.subscribe(function (value) {
            _this.catId = value;
        });
        this.service.currProductList.subscribe(function (val) {
            _this.PRODUCTS = val;
        });
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opService.clearOperation();
        this.opService.currProduct.subscribe(function (value) {
            _this.currProduct = value;
        });
        this.catService.currCat.subscribe(function (value) {
            _this.catId = value;
        });
        this.service.currProductList.subscribe(function (val) {
            _this.PRODUCTS = val;
        });
        var currentCatId = 0;
        var prodByCat;
        if (sessionStorage.ProductsByCategory) {
            prodByCat = JSON.parse(sessionStorage.ProductsByCategory);
            for (var i = 0; i < prodByCat.length; i++) {
                if (prodByCat[i].category === this.catId) {
                    currentCatId = i;
                }
            }
        }
        if (this.catId !== 0) {
            this.service.getProducts(this.catId).subscribe(function (data) {
                _this.PRODUCTS = _this.service.getProductsList(data);
                console.log('PRODUCTS FOR ' + _this.catId.toString());
                console.log(_this.PRODUCTS);
                _this.service.ProdsByCat[currentCatId].products = _this.PRODUCTS;
                _this.service.formFastAccessList();
                console.warn("FAST FORMED");
                // if (this.catService.CurrentCATEGORY.cOrder !== 1) {
                //   console.warn("autoselect product");
                //   if (this.PRODUCTS.length > 0) {
                //     this.selectProduct(
                //       this.PRODUCTS.reduce(function (l, e) {
                //         return e.pOrder < l.pOrder ? e : l;
                //       }))
                //   }
                // }
            }, function (error) {
                // console.log("STATUS = " + error.status);
                _this.alert.onError(error);
            });
        }
    };
    ProductListComponent.prototype.selectProduct = function (product) {
        if (!__WEBPACK_IMPORTED_MODULE_7__services_global_service__["a" /* GlobalService */].blockedNavigation) {
            console.log('PRODUCT SELECTED');
            console.log(product);
            this.opService.clearOperation();
            product.pInputFields = __WEBPACK_IMPORTED_MODULE_6__models_field__["a" /* Field */].toFields(product.pInputFields);
            this.opService.setProduct(product);
            // this.service.clearSearchList();
            setTimeout(function () {
                var field = document.getElementById('fast-access');
                if (__WEBPACK_IMPORTED_MODULE_7__services_global_service__["a" /* GlobalService */].checkMobileView()) {
                    field.scrollIntoView();
                }
            }, 300);
        }
    };
    ProductListComponent.prototype.Lang = function (names) {
        return __WEBPACK_IMPORTED_MODULE_1__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    return ProductListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('catId'),
    __metadata("design:type", Number)
], ProductListComponent.prototype, "catId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "emitEvent", void 0);
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_operation_service__["a" /* OperationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], ProductListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/report_components/auth-history/auth-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth_element {\r\n  max-width: 400px;\r\n  height: 45px;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report_components/auth-history/auth-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto; max-width: 300px\">\r\n  <div style=\"margin: 0 auto; width: 25px\">\r\n    <img *ngIf=\"loading\"\r\n         src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n  </div>\r\n\r\n  <div *ngFor=\"let auth of authArray\">\r\n    <div class=\"auth_element\">\r\n      <div style=\"float: left; max-width: 150px\">\r\n        <span style=\"float: left\">{{auth.datetime|date:\"d.MM.yy\"}}</span>\r\n        <br>\r\n        <span style=\"float: left; font-size: 0.8em; color: grey\">{{auth.datetime|date:\"HH:mm:ss\"}}</span>\r\n      </div>\r\n      <div style=\"float: right;max-width: 150px\">\r\n        <span style=\"float: right; \">{{auth.userAgent}}</span>\r\n        <br>\r\n        <span style=\"float: right; \">IP: {{auth.ip}}</span></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/auth-history/auth-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthHistoryComponent = (function () {
    function AuthHistoryComponent(report, alert) {
        this.report = report;
        this.alert = alert;
        this.authArray = [];
        this.loading = false;
    }
    AuthHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.report.getAuthHistory().subscribe(function (data) {
            console.log('AUTH HISTORY REPORT');
            console.log(data);
            _this.authArray = data;
            _this.loading = false;
        }, function (error) {
            _this.alert.onError(error);
        });
    };
    return AuthHistoryComponent;
}());
AuthHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-history',
        template: __webpack_require__("../../../../../src/app/report_components/auth-history/auth-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report_components/auth-history/auth-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], AuthHistoryComponent);

var _a, _b;
//# sourceMappingURL=auth-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/report_components/collection/collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-container {\r\n  width: 200px;\r\n  margin: auto;\r\n}\r\n\r\n.table-head th {\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.collection {\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.collection td {\r\n  text-align: center\r\n}\r\n\r\n.collection-table {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  max-width: 500px;\r\n}\r\n\r\n.collection-table label {\r\n  font-weight: bold;\r\n}\r\n\r\n.collection-table td {\r\n  padding: 5px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report_components/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h5 id=\"actName\" style=\"\r\n    max-width: 500px;\r\n    margin: 0 auto;\">\r\n    {{'collection'|translate}}\r\n    <button\r\n      *ngIf=\"showPrint\"\r\n      type=\"button\"\r\n      class=\"print\" style=\"padding-top: 7px\"\r\n      (click)=\" printReport()\">\r\n      <img src=\"assets/images/icons/print.png\" alt=\"\">\r\n    </button>\r\n  </h5>\r\n  <div style=\"margin-left: 15px; padding-top: 7px;\">\r\n\r\n  </div>\r\n\r\n  <div class=\"report_container\"\r\n       [innerHTML]=\"reportContent|safeHtml\">\r\n  </div>\r\n  <div *ngIf=\"success_collect\"\r\n       style=\"margin: 15px auto; width:180px; color: forestgreen; font-weight: bold\">\r\n    {{'success_collect'|translate}}\r\n  </div>\r\n\r\n  <div class=\"button-container\"\r\n       style=\"text-align: center;  margin: 0 auto\">\r\n    <button [disabled]=\"loading1\" [ngClass]=\"{'disabled':loading1}\"\r\n            class=\"rep_btn\" style=\"height:60px;width: 160px\"\r\n            (click)=\"createReport()\">{{actName|translate}}\r\n    </button>\r\n    <div style=\"text-align: center\">\r\n      <img *ngIf=\"loading1\" style=\"width: 24px\"\r\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"display: block\">\r\n    <h5 style=\"\r\n    max-width: 500px;\r\n    margin: 0 auto;\">\r\n      {{'collection_history'|translate}}\r\n    </h5>\r\n\r\n    <div id=\"date-container\" class=\"date-container\">\r\n      <div class=\"field\">\r\n        <mat-form-field style=\"width: 120px\">\r\n          <input id=\"StartDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n                 matInput (onChange)=\"checkDates()\" [(ngModel)]=\"sDate\" [matDatepicker]=\"startDate\"\r\n                 placeholder=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #startDate [touchUi]=\"mobileView\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <span style=\"padding-top: 22px\"> - </span>\r\n      <div class=\"field\">\r\n        <mat-form-field style=\"width: 120px\">\r\n          <input id=\"EndDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n                 matInput (onChange)=\"checkDates()\" [(ngModel)]=\"eDate\" [matDatepicker]=\"endDate\"\r\n                 placeholder=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #endDate [touchUi]=\"mobileView\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div id=\"date-error\" style=\"text-align: center; color:red; display: none\">\r\n      {{'date_range_error'|translate}}\r\n    </div>\r\n\r\n    <div class=\"button-container\">\r\n      <button [disabled]=\"loading2\" [ngClass]=\"{'disabled':loading2}\"\r\n              id=\"report_button\" class=\"rep_btn\"\r\n              (click)=\"getCollectionHistory()\">{{'show'|translate}}\r\n      </button>\r\n      <div style=\"text-align: center\">\r\n        <img *ngIf=\"loading2\" style=\"width: 24px\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"report_container2\">\r\n      <div *ngIf=\"collectionList.length>0\" id=\"reports\">\r\n        <div>\r\n\r\n          <table style=\"width: 90%; margin: 0 auto\">\r\n            <thead class=\"table-head\">\r\n            <th>{{'op_no'|translate}}</th>\r\n            <th *ngIf=\"!mobileView\">{{'tradePoint'|translate}}</th>\r\n            <th>№</th>\r\n            <th>{{'collection_date'|translate}}</th>\r\n            <th *ngIf=\"!mobileView\">{{'nominal'|translate}}</th>\r\n            <th *ngIf=\"!mobileView\">{{'commission'|translate}}</th>\r\n            <th *ngIf=\"!mobileView\">{{'total'|translate}}</th>\r\n            <th>{{'op_count'|translate}}</th>\r\n            <th *ngIf=\"!mobileView\">{{'incomeTariff'|translate}}</th>\r\n            <th>{{'collectorGet'|translate}}</th>\r\n            <!--<th>Первая операция</th>-->\r\n            <!--<th>Последняя операция</th>-->\r\n            </thead>\r\n            <!--<tbody *ngFor=\"let report of collectionList\"></tbody>-->\r\n            <tbody>\r\n            <tr class='collection' *ngFor=\"let collection of collectionList|orderBy:'-id'\"\r\n                (click)=\"openDialog(collection.opId)\">\r\n              <td>{{collection.opId}}</td>\r\n              <td *ngIf=\"!mobileView\">{{collection.tradePoint}}</td>\r\n              <td style=\"width: 35px\">{{collection.id}}</td>\r\n              <td style=\"\">{{collection.date|date:\"d.MM.yy HH:mm:ss\"}}</td>\r\n              <td *ngIf=\"!mobileView\">{{collection.nominal|myCurrency}}</td>\r\n              <td *ngIf=\"!mobileView\">{{collection.commission|myCurrency}}</td>\r\n              <td *ngIf=\"!mobileView\">{{(collection.commission+collection.nominal)|myCurrency}}</td>\r\n              <td>{{collection.quantity}}</td>\r\n              <td *ngIf=\"!mobileView\">{{(collection.incomeTariff||'_')|myCurrency}}</td>\r\n              <td>{{collection.collectorGet|myCurrency}}</td>\r\n              <!--<td *ngIf=\"collection.firstOperation\">{{collection.firstOperation|date:\"d.MM.yy HH:mm:ss\"}}</td>-->\r\n              <!--<td *ngIf=\"collection.lastOperation\">{{collection.lastOperation|date:\"d.MM.yy HH:mm:ss\"}}</td>-->\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_collection_extended__ = __webpack_require__("../../../../../src/app/_models/collection-extended.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_collection__ = __webpack_require__("../../../../../src/app/_models/collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CollectionComponent = (function () {
    function CollectionComponent(global, report, alert, dialog) {
        this.global = global;
        this.report = report;
        this.alert = alert;
        this.dialog = dialog;
        /**
         * Activities
         * 1 - sales
         * 2 - opHistory
         * 3 - collection
         * 4 - detailed sales
         * 5 - financial
         * 6 - shift
         * OPTIONS
         * (9) - my contacts (in future)
         * 7 - authHistory
         * 8 - changePassword
         * */
        this.currActivity = this.global.activity;
        this.reportContent = '';
        this.history = '';
        this.loading1 = false;
        this.loading2 = false;
        this.collectionList = [];
        this.actName = 'create_collection';
        this.reportCreated = false;
        this.success_collect = false;
        this.sDate = new Date;
        this.eDate = new Date;
        this.showPrint = false;
        this.reportCreated = false;
        if (window.innerWidth < 720) {
            // console.error('changed');
            this.mobileView = true;
        }
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.mobileView = __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */].checkMobileView();
        // console.error(this.mobileView);
        // this.collectionList = [
        //   new Collection(1223235, 1, "TradePoint", new Date(), 20, 5, 5, 20, 25, 25, new Date(), new Date()),
        //   new Collection(1346343, 2, "TradePoint", new Date(), 20, 5, 5, 20, 25, 25, new Date(), new Date()),
        //   new Collection(1454544, 3, "TradePoint", new Date(), 20, 0, 5, 20, 25, 25, new Date(), new Date()),
        //   new Collection(1543543, 4, "TradePoint", new Date(), 20, 5, 5, 20, 25, 25, new Date(), new Date()),
        // ];
        this.sDate.setHours(0);
        this.sDate.setMinutes(0);
        this.sDate.setSeconds(0);
        this.sDate.setMilliseconds(0);
        this.eDate.setHours(23);
        this.eDate.setMinutes(59);
        this.eDate.setSeconds(59);
        this.eDate.setMilliseconds(999);
        this.clearContent();
        this.reportContent = '';
        this.history = '';
        // this.report.currReportContent.subscribe((val) => {
        //   this.reportContent = val;
        //   this.loading1 = false;
        // });
        console.log('CURR_ACTIVITY = ' + this.currActivity);
    };
    CollectionComponent.prototype.clearContent = function () {
        this.showPrint = false;
        this.reportContent = '';
        this.history = '';
    };
    CollectionComponent.prototype.setLang = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__translate_Lang__["a" /* Lang */].getLangValue(name);
    };
    CollectionComponent.prototype.checkDates = function () {
        console.warn(this.sDate);
        console.warn(this.eDate);
        if (this.sDate.getTime() > this.eDate.getTime()) {
            document.getElementById('EndDate').style.borderBottomColor = 'red';
            document.getElementById('StartDate').style.borderBottomColor = 'red';
            document.getElementById('date-error').style.display = 'block';
            return false;
        }
        else {
            document.getElementById('EndDate').style.borderBottomColor = '#898989';
            document.getElementById('StartDate').style.borderBottomColor = '#898989';
            document.getElementById('date-error').style.display = 'none';
            return true;
        }
    };
    CollectionComponent.prototype.printReport = function () {
        var report = {
            content: this.reportContent,
            sDate: null,
            eDate: null,
            name: document.getElementById('actName').innerText
        };
        __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */].printReport(report);
    };
    CollectionComponent.prototype.createReport = function () {
        var _this = this;
        this.loading1 = true;
        this.success_collect = false;
        if (this.reportCreated == true) {
            this.report.createCollection().subscribe(function (data) {
                _this.showPrint = true;
                _this.reportContent = data.body;
                _this.loading1 = false;
                _this.reportCreated = false;
                _this.success_collect = true;
                _this.actName = 'create_collection';
            }, function (error) {
                _this.reportContent = 'Операция временно недоступна. Попробуйте повторить позже.';
                _this.showPrint = false;
                _this.reportCreated = false;
                // this.alert.onError(JSON.parse(error._body));
                _this.loading1 = false;
                _this.actName = 'create_collection';
                _this.alert.onError(error);
            });
        }
        else {
            this.report.getCollection().subscribe(function (data) {
                _this.reportContent = data.body;
                _this.showPrint = false;
                _this.loading1 = false;
                _this.actName = 'execute';
                _this.reportCreated = true;
            }, function (error) {
                _this.showPrint = false;
                _this.loading1 = false;
                _this.reportCreated = false;
                _this.alert.onError(error);
            });
        }
    };
    CollectionComponent.prototype.completeAction = function () {
        var _this = this;
        if (this.checkDates()) {
            console.warn('COLLECTION');
            this.report.createCollection();
            this.loading1 = true;
            setTimeout(function () {
                _this.loading1 = false;
            }, 40000);
        }
    };
    CollectionComponent.prototype.getCollectionHistory = function () {
        var _this = this;
        this.loading2 = true;
        this.report.getCollectionHistory(this.sDate, this.eDate).subscribe(function (data) {
            console.log('COLLECTION_REPORT');
            // console.error(data);
            _this.collectionList = __WEBPACK_IMPORTED_MODULE_6__models_collection__["a" /* Collection */].toCollectionArray(data);
            // console.error(this.collectionList);
            _this.loading2 = false;
        }, function (error) {
            _this.collectionList = [];
            _this.loading2 = false;
            _this.alert.onError(error);
        });
    };
    CollectionComponent.prototype.openDialog = function (collectionId) {
        var _this = this;
        // console.error(collectionId);
        this.report.getCollectionById(collectionId).subscribe(function (data) {
            // console.error(data);
            var config = {};
            if (window.innerWidth < 721) {
                config = {
                    height: '85%',
                    width: '96vw'
                };
            }
            else {
                config = {
                    height: '700px',
                    width: '780px'
                };
            }
            var dialogRef = _this.dialog.open(MyCollection, config);
            dialogRef.componentInstance.Collection = __WEBPACK_IMPORTED_MODULE_5__models_collection_extended__["a" /* CollectionExtended */].toCollectionExt(data);
            // collection = data;
        }, function (error) {
            // console.error(error);
        });
        // collection = new Collection(12, "TradePoint", new Date(), []);
    };
    return CollectionComponent;
}());
CollectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collection',
        template: __webpack_require__("../../../../../src/app/report_components/collection/collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report_components/collection/collection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]) === "function" && _d || Object])
], CollectionComponent);

var MyCollection = (function () {
    function MyCollection(dialogRef, report, data) {
        this.dialogRef = dialogRef;
        this.report = report;
        this.data = data;
        this.mobileView = __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */].checkMobileView();
        this.addScroll = '';
        if (this.mobileView) {
            this.addScroll = "scroll";
        }
        else {
            this.addScroll = "normal";
        }
    }
    MyCollection.prototype.ngOnInit = function () {
        // console.error(this.Collection)
    };
    MyCollection.prototype.setL = function (names) {
        return __WEBPACK_IMPORTED_MODULE_3__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    return MyCollection;
}());
MyCollection = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'collectDialog',
        styles: [__webpack_require__("../../../../../src/app/report_components/collection/collection.component.css")],
        template: __webpack_require__("../../../../../src/app/report_components/collection/dialog.html"),
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */]) === "function" && _f || Object, Object])
], MyCollection);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=collection.component.js.map

/***/ }),

/***/ "../../../../../src/app/report_components/collection/dialog.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button [mat-dialog-close]=\"true\"\r\n        style=\"float:right; margin:-10px -10px -25px 0; outline:none; border: 0; background-color: white\">\r\n  <img src=\"assets/images/icons/clean-sum.png\">\r\n</button>\r\n\r\n<div *ngIf=\"Collection!=null\" [style.overflow-x]=\"mobileView? 'scroll':'normal'\"\r\n     class=\"keyboard-logos-wrap clearfix\" id=\"dialog-header\">\r\n\r\n  <table class=\"collection-table\" style=\"margin: 0 auto;\">\r\n    <tr>\r\n      <td>\r\n        <label>{{'collection'|translate}}</label>\r\n      </td>\r\n      <td colspan=\"4\">{{Collection.id}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <label>{{'tradePoint'|translate}}</label>\r\n      </td>\r\n      <td colspan=\"4\"><label>« {{Collection.tradePoint}} » </label> - ({{Collection.pointAddr}})</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <label>{{'collection_date'|translate}}</label>\r\n      </td>\r\n      <td colspan=\"4\">{{Collection.date|date:'d.MM.yy HH:mm:ss'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td rowspan=\"2\">\r\n        <label>{{'operations'|translate}}</label>\r\n      </td>\r\n      <td>\r\n        <label>{{'nominal'|translate}}</label>\r\n      </td>\r\n      <td>\r\n        <label>{{'commission'|translate}}</label>\r\n      </td>\r\n      <td>\r\n        <label>{{'total'|translate}}</label>\r\n      </td>\r\n      <td>\r\n        <label>{{'op_count'|translate}}</label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{Collection.nominal|myCurrency}}</td>\r\n      <td>{{Collection.commission|myCurrency}}</td>\r\n      <td>{{(Collection.nominal+Collection.commission)|myCurrency}}</td>\r\n      <td>{{Collection.quantity}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <label>{{'collectorGet'|translate}}</label>\r\n      </td>\r\n      <td colspan=\"4\">{{Collection.collectorGet|myCurrency}}</td>\r\n    </tr>\r\n  </table>\r\n  <br>\r\n\r\n\r\n  <table class='collection-table' style=\"width: 90%; margin: 0 auto\">\r\n    <thead>\r\n    <td><label>{{'product'|translate}}</label></td>\r\n    <td><label>{{'Cashier'|translate}}</label></td>\r\n    <td><label>{{'op_count'|translate}}</label></td>\r\n    <td><label>{{'nominal'|translate}}</label></td>\r\n    <td><label>{{'commission'|translate}}</label></td>\r\n    <td><label>{{'total'|translate}}</label></td>\r\n    <td><label>{{'incomeTariff'|translate}}</label></td>\r\n    <td><label>{{'first_op'|translate}}</label></td>\r\n    <td><label>{{'last_op'|translate}}</label></td>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let record of Collection.saleRecord\">\r\n      <td>{{record.article}}</td>\r\n      <td>{{record.cashier}}</td>\r\n      <td>{{record.quantity}}</td>\r\n      <td>{{record.nominal|myCurrency}}</td>\r\n      <td>{{record.commission|myCurrency}}</td>\r\n      <td>{{(record.commission+record.nominal)|myCurrency}}</td>\r\n      <td>{{record.incomeTariff|myCurrency}}</td>\r\n      <td>{{record.firstOperation|date:\"d.MM.yy HH:mm:ss\"||'_'}}</td>\r\n      <td>{{record.lastOperation|date:\"d.MM.yy HH:mm:ss\"||'_'}}</td>\r\n    <tr>\r\n    <tr style=\"background: #F3F3F3;\">\r\n      <td colspan=\"2\"><label>{{'total_op'|translate}} {{Collection.saleRecord.length}}):</label></td>\r\n      <td><label>{{Collection.quantity}}</label></td>\r\n      <td><label>{{Collection.nominal|myCurrency}}</label></td>\r\n      <td><label>{{Collection.commission|myCurrency}}</label></td>\r\n      <td><label>{{(Collection.nominal+Collection.commission)|myCurrency}}</label></td>\r\n      <td><label>{{(Collection.incomeTariff||'_')|myCurrency}}</label></td>\r\n      <td colspan=\"2\"></td>\r\n\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"Collection==null\">\r\n  <h5 style=\"text-align: center\">There is no extended report for collection!</h5>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/operation-report/dialog.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button [mat-dialog-close]=\"true\"\r\n        style=\"float:right; margin:-10px -10px -25px 0; outline:none; border: 0; background-color: white\">\r\n  <img src=\"assets/images/icons/clean-sum.png\">\r\n</button>\r\n<div class=\"keyboard-logos-wrap clearfix\" id=\"dialog-header\">\r\n  <img src=\"https://globalpay.com.ua/images/iconset/{{Operation.oIcon}}\"\r\n       alt=\"\" class=\"keyboard-operator-logo curr-operator operator-image\">\r\n  <span class=keyboard-operator-name *ngIf=\"Operation.oArticle\">\r\n        {{setL(Operation.oArticle)}}</span>\r\n</div>\r\n<!--<hr class=under-keyboard-logos>-->\r\n<hr style=\"border: none;height: 1px;background: #f0f0f0;margin: 0;\">\r\n<div class=wrap-pay-data>\r\n  <div *ngFor=\"let field of Operation.oFields\">\r\n    <!--<div>{{opResult.product.pInputField}}</div>-->\r\n    <div class=pay-number>{{field.value|toNumber:'dialog'}}</div>\r\n  </div>\r\n\r\n\r\n  <div class=\"wrap-pay-values clearfix\">\r\n    <div class=owner-score>\r\n      <span class=text>{{'amount_on'|translate}}</span>\r\n      <span class=value>{{onBalance|myCurrency}}</span></div>\r\n    <br>\r\n    <div *ngIf=\"sumCommission>=0\" class=commission>\r\n      <span class=text>{{'commission'|translate}}:</span>\r\n      <span class=value>{{sumCommission|myCurrency}}</span>\r\n      <br>\r\n    </div>\r\n    <div class=from-client>\r\n      <span class=text>{{'from_client'|translate}}</span> <span\r\n      class=value>{{inAmount|myCurrency}}</span></div>\r\n  </div>\r\n  <br>\r\n\r\n  <div *ngIf=\"Operation.oStatus.serial\" style=\"margin-bottom:50px;\">\r\n    <span class=text>{{'serial'|translate}}:</span>\r\n    <div class=pay-number id=\"serial\">\r\n      <span class=value>{{Operation.oStatus.serial}}</span></div>\r\n    <span class=text>{{'secret_code'|translate}}:</span>\r\n    <div class=pay-number id=\"secret\">\r\n      <span class=value> {{Operation.oStatus.secret}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"Operation.oStatus.error||Operation.oStatus.error==0\">\r\n    <div *ngIf=\"Operation.oStatus.error==0\" class=wrap-status>\r\n      <div class=status>{{'success'|translate}}</div>\r\n      <div class=\"status\">{{Operation.oTimestamp|date:\"d.MM.yy HH:mm:ss\"}}</div>\r\n      <div class=status>id: {{Operation.oId}}</div>\r\n      <div class=status-img><img src=\"assets/images/icons/status-ok.png\" alt=\"\"></div>\r\n      <div class=status>{{Operation.oStatus.error}} - {{setL(Operation.oStatus.errorText)}}</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"Operation.oStatus.error==923\" class=wrap-status>\r\n      <div class=status>{{'in_progress'|translate}}</div>\r\n      <div class=\"status\">{{Operation.oTimestamp|date:\"d.MM.yy HH:mm:ss\"}}</div>\r\n      <div class=status>id: {{Operation.oId}}</div>\r\n      <div class=status-img>\r\n        <img src=\"assets/images/icons/status-wait-inner.png\" alt=\"\">\r\n        <img src=\"assets/images/icons/status-wait-arrow.png\" alt=\"\"></div>\r\n      <div class=status *ngIf=\"Operation.oStatus.errorText.length>0\">\r\n        {{Operation.oStatus.error}} - {{setL(Operation.oStatus.errorText)}}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"Operation.oStatus.error!=0&&Operation.oStatus.error!=923\" class=wrap-status>\r\n      <div class=status>{{'failed'|translate}}</div>\r\n      <div class=\"status\">{{Operation.oTimestamp|date:\"d.MM.yy HH:mm:ss\"}}</div>\r\n      <div class=status>id: {{Operation.oId}}</div>\r\n      <div class=status-img><img src=\"assets/images/icons/status-error.png\" alt=\"\"></div>\r\n      <div class=status>{{Operation.oStatus.error}} - {{setL(Operation.oStatus.errorText)}}</div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=wrap-remark-check *ngIf=\"Operation.oComment!=''\">\r\n    <div class=\"remark check\">{{'comment'|translate}}: {{Operation.oComment}}</div>\r\n    <div class=reseiver-name></div>\r\n  </div>\r\n\r\n  <div\r\n    *ngIf=\"Operation.oType==1&&!Operation.oStatus.serial&&Operation.oStatus.error==0\">\r\n    <button [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\" id=\"status_button\" class=\"rep_btn\"\r\n            (click)=\"getOpStatus(Operation.oId)\">{{'show'|translate}}\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"Operation.oStatus.error==923\" class=\"button-container\">\r\n    <button [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\" id=\"report_button\" class=\"rep_btn\"\r\n            (click)=\"getOpStatus(Operation.oId)\">{{'update'|translate}}\r\n    </button>\r\n    <img style=\"width: 24px; margin:0 85px;\" *ngIf=\"loading\"\r\n         src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n  </div>\r\n  <div *ngIf=\"Operation.oStatus.error==0\">\r\n    <button\r\n      type=\"button\" class=\"print\" (click)=\"printCheque()\">\r\n      <img src=\"assets/images/icons/print.png\" alt=\"\">\r\n    </button>\r\n  </div>\r\n</div>\r\n<!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/operation-report/operation-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".colored {\r\n  color: red;\r\n}\r\n\r\nh5 {\r\n  text-align: center;\r\n}\r\n\r\n.date-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  max-width: 320px;\r\n  padding-top: 14px;\r\n}\r\n\r\n.field {\r\n  font-size: 17px;\r\n  margin: 0 10px;\r\n  /*max-width: 600px;*/\r\n  text-align: center;\r\n}\r\n\r\n.field input {\r\n  text-align: center;\r\n  width: 140px;\r\n  border-bottom-color: #898989;\r\n}\r\n\r\n.one_line {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  max-width: 290px;\r\n}\r\n\r\n.report_container {\r\n  margin: 0 auto;\r\n  text-align: inherit;\r\n  /*max-width: 90vw;*/\r\n}\r\n\r\n.wrap-status {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.button-container {\r\n  width: 200px;\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report_components/operation-report/operation-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h5 id=\"rep_name\">\r\n    {{\"op_list\"|translate}}\r\n  </h5>\r\n  <div class=\"one_line\">\r\n    <div id=\"date-container\" class=\"date-container\" style=\"padding-top: 0\">\r\n      <div class=\"field\">\r\n        <mat-form-field style=\"width: 120px\">\r\n          <input id=\"StartDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n                 matInput (onChange)=\"checkDates()\" [(ngModel)]=\"sDate\" [matDatepicker]=\"startDate\"\r\n                 placeholder=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #startDate [touchUi]=\"mobileView\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <!--<input id=\"StartDate\" class=\"picker-input\" [value]=\"sDate | date:['d/MM/y H:mm']\" [(ngModel)]=\"sDate\"-->\r\n        <!--(onChange)=\"checkDates()\"-->\r\n        <!--dateTimePicker [locale]=\"setLang(calendarLocales)\" [autoClose]=\"true\">-->\r\n      </div>\r\n      <span style=\"padding-top: 22px\"> - </span>\r\n      <div class=\"field\">\r\n        <mat-form-field style=\"width: 120px\">\r\n          <input id=\"EndDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n                 matInput (onChange)=\"checkDates()\" [(ngModel)]=\"eDate\" [matDatepicker]=\"endDate\"\r\n                 placeholder=\"\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #endDate [touchUi]=\"mobileView\"></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <!--<input id=\"EndDate\" class=\"picker-input\" [value]=\"eDate | date:['d/MM/y H:mm']\" [(ngModel)]=\"eDate\"-->\r\n        <!--(onChange)=\"checkDates()\"-->\r\n        <!--dateTimePicker [locale]=\"setLang(calendarLocales)\" [autoClose]=\"true\">-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div id=\"date-error\" style=\"text-align: center; color:red; display: none; margin-top: -15px\">\r\n    {{'date_range_error'|translate}}\r\n  </div>\r\n  <div style=\"width: 320px; height: 59px; margin: -15px auto 10px;\">\r\n    <div class=\"field\" style=\"margin: 10px auto; float: left; width: 170px; padding-top: 21px\">\r\n      <label>{{'show'|translate}}: </label>\r\n      <input type=\"number\" min=\"1\" style=\"width:50px;\" [(ngModel)]=\"count\" maxlength=\"4\">\r\n    </div>\r\n    <div style=\"float: left; margin: 0 auto; width: 120px; padding-top: 10px;\">\r\n      <mat-form-field style=\"width: 120px; padding-top: 4px;\">\r\n        <mat-select placeholder=\"{{'sort'|translate}}\" class=\"colored\" [(ngModel)]=\"sort_desc\">\r\n          <mat-option *ngFor=\"let sort of sort_types\" [value]=\"sort.desc\"\r\n                      (onSelectionChange)=\"sort_desc=sort.desc\">\r\n            {{sort.value|translate}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button-container\">\r\n    <button [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\" id=\"report_button\" class=\"rep_btn\"\r\n            (click)=\"sendRequest()\">{{'show'|translate}}\r\n    </button>\r\n    <img style=\"width: 24px; margin:0 85px;\" *ngIf=\"loading\"\r\n         src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n  </div>\r\n\r\n\r\n  <div id=\"report_container\" class=\"report_container\">\r\n    <div *ngIf=\"reportArray.length>0\" id=\"reports\">\r\n      <div class=\"reports\" *ngFor=\"let report of reportArray\">\r\n        <div (click)=\"openDialog(report)\">\r\n\r\n          <span *ngIf=\"report.oStatus.error==0||report.oStatus.secret\" class=\"report-icon\">\r\n            <img src=\"assets/images/icons/check.svg\" alt=\"\">\r\n          </span>\r\n\r\n          <span *ngIf=\"report.oStatus.error==923\" class=\"report-icon\">\r\n            <img src=\"assets/images/icons/info.svg\" alt=\"\">\r\n          </span>\r\n\r\n          <span *ngIf=\"report.oStatus.error!=0&&report.oStatus.error!=923&&!report.oStatus.secret\" class=\"report-icon\">\r\n            <img src=\"assets/images/icons/error.svg\" alt=\"\">\r\n          </span>\r\n\r\n          <div class=\"report-info\">\r\n            <div style=\"font-size: 17px\">\r\n              <span style=\"float: left\">{{setLang(report.oArticle)}}</span>\r\n              <span style=\"float: right\">\r\n                <span *ngFor=\"let field of report.oFields\">{{field.value|toNumber}}</span>\r\n              </span>\r\n            </div>\r\n            <br style=\"line-height: 25px\">\r\n            <div style=\"color:rgba(76, 76, 76, 0.51);\">{{report.oId}}</div>\r\n            <div>\r\n              <span>{{report.oTimestamp|date:\"d.MM H:mm:ss\"}}</span>\r\n              <span style=\"float: right; font-weight: bold;\">{{report.oAmount/100|myCurrency}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/operation-report/operation-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OperationReportComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_operation__ = __webpack_require__("../../../../../src/app/_models/operation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_operation_service__ = __webpack_require__("../../../../../src/app/_services/operation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
///<reference path="../../translate/translate.pipe.ts"/>









var OperationReportComponent = (function () {
    function OperationReportComponent(report, alert, dialog) {
        this.report = report;
        this.alert = alert;
        this.dialog = dialog;
        this.loading = false;
        this.mobileView = __WEBPACK_IMPORTED_MODULE_8__services_global_service__["a" /* GlobalService */].checkMobileView();
        this.reportArray = [];
        this.sort_types = [{
                value: 'newer',
                desc: 'desc'
            },
            {
                value: 'older',
                desc: 'asc'
            }];
        this.sort_desc = this.sort_types[0].desc;
        this.lang = 'ru';
        this.sDate = new Date;
        this.eDate = new Date;
        this.count = 100;
    }
    OperationReportComponent.prototype.ngOnInit = function () {
        this.lang = localStorage.lang;
        this.sDate.setHours(0);
        this.sDate.setMinutes(0);
        this.sDate.setSeconds(0);
        this.sDate.setMilliseconds(0);
        this.eDate.setHours(23);
        this.eDate.setMinutes(59);
        this.eDate.setSeconds(59);
        this.eDate.setMilliseconds(999);
    };
    OperationReportComponent.prototype.sendRequest = function () {
        var _this = this;
        if (this.checkDates()) {
            this.reportArray = [];
            this.loading = true;
            console.log(this.sDate.toISOString());
            console.log(this.eDate.toISOString());
            console.log(this.sort_desc);
            console.log(this.count);
            this.report.getOperationHistory(this.count, this.sDate, this.eDate, 0, this.sort_desc).subscribe(function (data) {
                console.log('OPERATION HISTORY');
                console.log(data);
                _this.loading = false;
                _this.reportArray = __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */].toOpList(data);
                console.log(_this.reportArray);
            }, function (error) {
                _this.loading = false;
                _this.alert.onError(error);
            });
        }
    };
    OperationReportComponent.prototype.checkDates = function () {
        if (this.sDate.getTime() > this.eDate.getTime()) {
            document.getElementById('EndDate').style.borderBottomColor = 'red';
            document.getElementById('StartDate').style.borderBottomColor = 'red';
            document.getElementById('date-error').style.display = 'block';
            return false;
        }
        else {
            document.getElementById('EndDate').style.borderBottomColor = '#898989';
            document.getElementById('StartDate').style.borderBottomColor = '#898989';
            document.getElementById('date-error').style.display = 'none';
            return true;
        }
    };
    OperationReportComponent.prototype.openDialog = function (operation) {
        var config = {};
        if (window.innerWidth < 721) {
            config = {
                height: '80vh',
                width: '80vw',
                data: operation
            };
        }
        else {
            config = {
                height: '550px',
                width: '400px',
                data: operation
            };
        }
        var dialogRef = this.dialog.open(MyDialog, config);
        dialogRef.componentInstance.Operation = operation;
    };
    OperationReportComponent.prototype.setLang = function (name) {
        return __WEBPACK_IMPORTED_MODULE_6__translate_Lang__["a" /* Lang */].getLangValue(name);
    };
    return OperationReportComponent;
}());
OperationReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-operation-report',
        template: __webpack_require__("../../../../../src/app/report_components/operation-report/operation-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report_components/operation-report/operation-report.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]) === "function" && _c || Object])
], OperationReportComponent);

var MyDialog = (function () {
    function MyDialog(opService, dialogRef, prodServ, data) {
        this.opService = opService;
        this.dialogRef = dialogRef;
        this.prodServ = prodServ;
        this.data = data;
        this.Operation = new __WEBPACK_IMPORTED_MODULE_3__models_operation__["a" /* Operation */]('', [{
                cult: '',
                value: ''
            }], 0, '', [{
                id: 0,
                value: ''
            }], 0, 0, '', {
            error: 0,
            errorText: [{
                    cult: '',
                    value: ''
                }]
        }, '', '');
        this.onBalance = 0;
        this.inAmount = 0;
        this.sumCommission = 0;
        this.loading = false;
        this.cheque = '';
        this.calcValues();
    }
    MyDialog.prototype.ngOnInit = function () {
        this.calcValues();
        setTimeout(function () {
            var f = document.getElementById('dialog-header');
            f.scrollIntoView();
        }, 200);
    };
    MyDialog.prototype.setL = function (names) {
        return __WEBPACK_IMPORTED_MODULE_6__translate_Lang__["a" /* Lang */].getLangValue(names);
    };
    MyDialog.prototype.calcValues = function () {
        this.sumCommission = this.Operation.oCommission;
        // console.log(operation.commission);
        if (this.sumCommission > 0) {
            this.onBalance = this.Operation.oAmount / 100;
            this.sumCommission = Math.abs(this.sumCommission / 100);
            this.inAmount = this.Operation.oAmount / 100 + this.sumCommission;
        }
        if (this.sumCommission === 0) {
            this.onBalance = this.Operation.oAmount / 100;
            this.sumCommission = Math.abs(this.sumCommission / 100);
            this.inAmount = this.Operation.oAmount / 100;
        }
        if (this.sumCommission < 0) {
            this.sumCommission = Math.abs(this.sumCommission / 100);
            this.onBalance = this.Operation.oAmount / 100 - this.sumCommission;
            this.inAmount = this.Operation.oAmount / 100;
        }
    };
    MyDialog.prototype.getOpStatus = function (transId) {
        var _this = this;
        if (this.Operation.oType === 1) {
            this.loading = true;
            this.opService.voucherGetStatus(transId).subscribe(function (data) {
                console.log(data);
                _this.Operation.oStatus = data;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                _this.Operation.oStatus = JSON.parse(error._body);
                // this.alert.onError(error);
            });
        }
        if (this.Operation.oType === 2) {
            console.log('NOT VOUCHER');
            this.loading = true;
            this.opService.replGetStatus(transId).subscribe(function (data) {
                console.log(data);
                _this.Operation.oStatus = data;
                _this.loading = false;
            }, function (error) {
                console.error(error);
                _this.loading = false;
                if (error._body) {
                    // console.error("TEST1");
                    _this.Operation.oStatus = JSON.parse(error._body);
                }
                else {
                    // console.error("TEST2");
                    _this.Operation.oStatus = {
                        error: 923,
                        errorText: [
                            { cult: 'ru', value: 'Транзакция в обработке.\n Попробуйте позже' },
                            { cult: 'ua', value: 'Транзакція в обробці.\n Спробуйте пізніше' }
                        ]
                    };
                }
                // this.alert.onError(error);
            });
        }
    };
    MyDialog.prototype.printCheque = function () {
        console.log("Print cheque");
        var cheque = this.prodServ.ChequeText(this.Operation.oCheque);
        this.prodServ.printCheque(this.Operation, cheque);
    };
    return MyDialog;
}());
MyDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'opDialog',
        template: __webpack_require__("../../../../../src/app/report_components/operation-report/dialog.html"),
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_operation_service__["a" /* OperationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_operation_service__["a" /* OperationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]) === "function" && _f || Object, Object])
], MyDialog);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=operation-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/report_components/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-datepicker-toggle {\r\n  color: #898989;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report_components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h5 id=\"actName\" style=\"\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n\">\r\n    {{actName|translate}}\r\n    <button\r\n      *ngIf=\"currActivity==6||(currActivity==3&&showButton==false&&reportContent!='')\"\r\n      type=\"button\"\r\n      class=\"print\" style=\"padding-top: 7px\"\r\n      (click)=\" printReport()\">\r\n      <img src=\"assets/images/icons/print.png\" alt=\"\">\r\n    </button>\r\n  </h5>\r\n  <div style=\"margin-left: 15px; padding-top: 7px;\">\r\n\r\n  </div>\r\n  <div id=\"date-container\" class=\"date-container\">\r\n\r\n    <div *ngIf=\"date_fields>0\" class=\"field\">\r\n      <mat-form-field style=\"width: 120px\">\r\n        <input id=\"StartDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n               matInput (onChange)=\"checkDates()\" [(ngModel)]=\"sDate\" [matDatepicker]=\"picker\"\r\n               placeholder=\"\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker [touchUi]=\"mobileView\"></mat-datepicker>\r\n      </mat-form-field>\r\n      <!--<label for=\"StartDate\"></label>-->\r\n      <!--<input id=\"StartDate\" class=\"picker-input\" [value]=\"sDate | date:['d/MM/y']\" [(ngModel)]=\"sDate\"-->\r\n      <!--(onChange)=\"checkDates()\"-->\r\n      <!--dateTimePicker [locale]=\"setLang(calendarLocales)\" [autoClose]=\"true\" [pickerType]=\"'date'\">-->\r\n    </div>\r\n    <span *ngIf=\"date_fields==2\" style=\"padding-top: 22px\"> - </span>\r\n    <div *ngIf=\"date_fields==2\" class=\"field\">\r\n      <mat-form-field style=\"width: 120px\">\r\n        <input id=\"EndDate\" class=\"picker-input\" style=\"border-bottom: 0\"\r\n               matInput (onChange)=\"checkDates()\" [(ngModel)]=\"eDate\" [matDatepicker]=\"picker\"\r\n               placeholder=\"\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker [touchUi]=\"mobileView\"></mat-datepicker>\r\n      </mat-form-field>\r\n      <!--<label for=\"EndDate\"></label>-->\r\n      <!--<input id=\"EndDate\" class=\"picker-input\" [value]=\"eDate|date:['d/MM/y']\" [(ngModel)]=\"eDate\"-->\r\n      <!--(onChange)=\"checkDates()\"-->\r\n      <!--dateTimePicker [locale]=\"setLang(calendarLocales)\" [autoClose]=\"true\" [pickerType]=\"'date'\">-->\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"date_fields==2\" id=\"date-error\" style=\"text-align: center; color:red; display: none\">\r\n    {{'date_range_error'|translate}}\r\n  </div>\r\n  <!--<div *ngIf=\"currActivity==3\" class=\"report_container\"-->\r\n  <!--[innerHTML]=\"reportContent|safeHtml\"></div>-->\r\n\r\n  <!--<div *ngIf=\"success_collect\" style=\"color: forestgreen; font-weight: bold; margin: 10px auto; width: 174px;\"-->\r\n  <!--class=\"help-block\">-->\r\n  <!--{{'success_collect'|translate}}-->\r\n  <!--</div>-->\r\n\r\n  <div *ngIf=\"showButton\" class=\"button-container\"\r\n       style=\"text-align: center\">\r\n    <div style=\"display: inline-flex\">\r\n      <button *ngIf=\"currActivity!=3\" [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\"\r\n              id=\"report_button\" class=\"rep_btn\"\r\n              (click)=\"completeAction()\">{{buttonName|translate}}\r\n      </button>\r\n      <button *ngIf=\"currActivity==3\"\r\n              [disabled]=\"loading\" [ngClass]=\"{'disabled':loading}\"\r\n              class=\"rep_btn\" style=\"height:60px\"\r\n              (click)=\"completeAction()\">{{buttonName|translate}}\r\n      </button>\r\n      <div *ngIf=\"repDone==true&&currActivity!=3\" style=\"margin-left: 15px; padding-top: 7px;\">\r\n        <button\r\n          type=\"button\" class=\"print\" (click)=\"printReport('report_container')\">\r\n          <img src=\"assets/images/icons/print.png\" alt=\"\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <img *ngIf=\"loading\" style=\"width: 24px\"\r\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"loading&&currActivity==3\" style=\"text-align: center\">\r\n    <img style=\"width: 24px\"\r\n         src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n  </div>\r\n  <div *ngIf=\"currActivity!=7\" class=\"report_container\"\r\n       [innerHTML]=\"reportContent|safeHtml\"></div>\r\n\r\n  <div *ngIf=\"currActivity==7\" class=\"report-container\">\r\n    <app-auth-history></app-auth-history>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/report_components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reports_service__ = __webpack_require__("../../../../../src/app/_services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_Lang__ = __webpack_require__("../../../../../src/app/translate/Lang.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsComponent = (function () {
    function ReportsComponent(global, report) {
        this.global = global;
        this.report = report;
        this.mobileView = __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */].checkMobileView();
        /**
         * Activities
         * 1 - sales
         * 2 - opHistory
         * 3 - collection
         * 4 - detailed sales
         * 5 - financial
         * 6 - shift
         * OPTIONS
         * (9) - my contacts (in future)
         * 7 - authHistory
         * 8 - changePassword
         * */
        this.currActivity = this.global.activity;
        this.reportContent = '';
        this.loading = false;
        this.actName = 'reports';
        this.buttonName = 'show';
        this.success_collect = false;
        this.sDate = new Date;
        this.eDate = new Date;
        this.date_fields = 0;
        this.showButton = true;
        this.success_collect = false;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repDone = false;
        this.sDate.setHours(0);
        this.sDate.setMinutes(0);
        this.sDate.setSeconds(0);
        this.sDate.setMilliseconds(0);
        this.eDate.setHours(23);
        this.eDate.setMinutes(59);
        this.eDate.setSeconds(59);
        this.eDate.setMilliseconds(999);
        this.success_collect = false;
        this.reportContent = '';
        this.report.currReportContent.subscribe(function (val) {
            _this.reportContent = val;
            _this.repDone = true;
            _this.loading = false;
        });
        this.global.currActivity.subscribe(function (val) {
            _this.currActivity = val;
            _this.setCurrReport(_this.currActivity);
            console.log('CURR_ACTIVITY = ' + _this.currActivity);
        });
        this.setCurrReport(this.currActivity);
        console.log('CURR_ACTIVITY = ' + this.currActivity);
    };
    ReportsComponent.prototype.clearContent = function () {
        this.repDone = false;
        this.reportContent = '';
    };
    ReportsComponent.prototype.setCurrReport = function (val) {
        switch (val) {
            case 1: {
                this.clearContent();
                this.buttonName = 'show';
                this.actName = 'sales';
                this.date_fields = 2;
                this.showButton = true;
                break;
            }
            case 3: {
                this.clearContent();
                this.actName = 'collection';
                this.buttonName = 'create_collection';
                this.date_fields = 0;
                this.report.getShift();
                this.showButton = true;
                break;
            }
            case 4: {
                this.clearContent();
                this.buttonName = 'show';
                this.actName = 'details';
                this.date_fields = 2;
                this.showButton = true;
                break;
            }
            case 5: {
                this.clearContent();
                this.buttonName = 'show';
                this.actName = 'financial';
                this.date_fields = 1;
                this.showButton = true;
                break;
            }
            case 6: {
                this.clearContent();
                this.buttonName = 'show';
                this.actName = 'duty_report';
                this.date_fields = 0;
                this.showButton = false;
                this.report.getShift();
                break;
            }
            case 7: {
                this.clearContent();
                this.buttonName = 'show';
                this.actName = 'access_control';
                this.date_fields = 0;
                this.showButton = false;
                break;
            }
            default: {
                this.clearContent();
                this.actName = '';
                this.date_fields = 0;
                this.showButton = false;
                break;
            }
        }
    };
    ReportsComponent.prototype.setLang = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__translate_Lang__["a" /* Lang */].getLangValue(name);
    };
    ReportsComponent.prototype.checkDates = function () {
        console.warn(this.sDate);
        console.warn(this.eDate);
        if (this.date_fields === 2) {
            if (this.sDate.getTime() > this.eDate.getTime()) {
                document.getElementById('EndDate').style.borderBottomColor = 'red';
                document.getElementById('StartDate').style.borderBottomColor = 'red';
                document.getElementById('date-error').style.display = 'block';
                return false;
            }
            else {
                document.getElementById('EndDate').style.borderBottomColor = '#898989';
                document.getElementById('StartDate').style.borderBottomColor = '#898989';
                document.getElementById('date-error').style.display = 'none';
                return true;
            }
        }
        if (this.date_fields <= 1) {
            return true;
        }
    };
    ReportsComponent.prototype.printReport = function () {
        var report = {
            content: this.reportContent,
            sDate: [3, 5, 6].includes(this.currActivity) ? null : this.sDate,
            eDate: [3, 5, 6].includes(this.currActivity) ? null : this.eDate,
            name: document.getElementById('actName').innerText
        };
        __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */].printReport(report);
    };
    ReportsComponent.prototype.completeAction = function () {
        var _this = this;
        if (this.checkDates()) {
            switch (this.currActivity) {
                case 1: {
                    this.report.getSales(this.sDate, this.eDate);
                    this.loading = true;
                    setTimeout(function () {
                        _this.loading = false;
                    }, 40000);
                    break;
                }
                case 3: {
                    console.warn('COLLECTION');
                    this.report.createCollection();
                    this.loading = true;
                    this.showButton = false;
                    setTimeout(function () {
                        _this.loading = false;
                    }, 40000);
                    break;
                }
                case 4: {
                    this.report.getSalesDetailed(this.sDate, this.eDate);
                    this.loading = true;
                    setTimeout(function () {
                        _this.loading = false;
                    }, 40000);
                    break;
                }
                case 5: {
                    // console.log(this.sDate.toISOString());
                    this.report.getFinancial(this.sDate);
                    this.loading = true;
                    setTimeout(function () {
                        _this.loading = false;
                    }, 40000);
                    break;
                }
                default: {
                    this.loading = false;
                }
            }
        }
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/report_components/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/report_components/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reports_service__["a" /* ReportsService */]) === "function" && _b || Object])
], ReportsComponent);

var _a, _b;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\r\n\r\n<header>\r\n  <div class=container>\r\n    <div class=\"header-top clearfix\">\r\n      <div class=header-left>\r\n        <div class=tabel_c-img-wrap [routerLink]=\"'home'\" style=\"cursor: pointer\">\r\n          <a class=logo-wrap>\r\n            <img src=\"assets/images/icons/arrow-back.png\" style=\"float: left; padding-right: 10px\">\r\n            <img src=\"assets/images/logo.png\" alt=лого class=logo>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"main-wrap\">\r\n  <div class=\"check-process\"\r\n       style=\"max-width: 380px; margin: 0 auto;\">\r\n    <div class=\"keyboard-box-wrap bottom-tooth\">\r\n      <div class=\"keyboard-logos-wrap clearfix\">\r\n        <span class=keyboard-operator-name>\r\n        NAME</span>\r\n      </div>\r\n      <hr class=under-keyboard-logos>\r\n      <div class=wrap-pay-data>\r\n        <div class=\"wrap-pay-values clearfix\">\r\n          <div class=owner-score><span class=text>{{'amount_on'|translate}}</span> <span\r\n            class=value>{{onBalance}}</span></div>\r\n          <br>\r\n          <div class=commission><span class=text>{{'commission'|translate}}</span> <span\r\n            class=value>{{sumCommission}}</span>\r\n          </div>\r\n          <br>\r\n          <div class=from-client><span class=text>{{'from_client'|translate}}</span> <span\r\n            class=value>{{inAmount}}</span></div>\r\n        </div>\r\n        <br>\r\n\r\n        <div [ngSwitch]=\"statusComplete\">\r\n\r\n          <div *ngSwitchCase=\"1\" class=wrap-status>\r\n            <div class=status>Id: {{transId}}</div>\r\n            <div class=status-img><img src=\"assets/images/icons/status-ok.png\" alt=\"\"></div>\r\n            <div class=status>{{'success'|translate}}</div>\r\n            <!--<div class=status-time>14.02.2017 18:24:43</div>-->\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"2\" class=wrap-status>\r\n            <div class=status>Id: {{transId}}</div>\r\n            <div class=status-img><img src=\"assets/images/icons/status-wait-inner.png\" alt=\"\">\r\n              <img class=anim-arrow src=\"assets/images/icons/status-wait-arrow.png\" alt=\"\">\r\n            </div>\r\n            <div class=status>{{'in_progress'|translate}}</div>\r\n          </div>\r\n\r\n          <div\r\n            *ngSwitchCase=\"3\" class=wrap-status>\r\n            <div class=status>Id: {{transId}}</div>\r\n            <div class=status-img><img src=\"assets/images/icons/status-error.png\" alt=\"\"></div>\r\n            <div class=status>{{'failed'|translate}}</div>\r\n            <!--<div class=status>{{opResult.status.error}}-{{setL(opResult.status.errorText)}}</div>-->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=wrap-remark-check>\r\n          <div class=\"remark check\">{{'comment'|translate}}:{{opResult.comment}}</div>\r\n          <div class=reseiver-name></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = (function () {
    function StatusComponent(route) {
        var _this = this;
        this.route = route;
        this.statusComplete = 2;
        this.transId = 0;
        this.onBalance = 0;
        this.inAmount = 0;
        this.sumCommission = 0;
        this.subscription = route.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], StatusComponent);

var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/api/ArticleApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/**
 * Market
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.4
 * Contact: dev@globalpay.com.ua
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ArticleApi = (function () {
    function ArticleApi(http, basePath, configuration) {
        this.http = http;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        this.basePath = 'https://m.globalpay.com.ua/api/v0';
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @summary Get articles for category
     * @param category ID of category
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleByCategoryCategoryGet = function (category, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.articleByCategoryCategoryGetWithHttpInfo(category, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get available categories
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleCategoriesGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.articleCategoriesGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get available cheques
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleChequesGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.articleChequesGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get articles for category
     *
     * @param category ID of category
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleByCategoryCategoryGetWithHttpInfo = function (category, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/article/byCategory/${category}'
            .replace('${' + 'category' + '}', String(category));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling articleByCategoryCategoryGet.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get available categories
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleCategoriesGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/article/categories';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get available cheques
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ArticleApi.prototype.articleChequesGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/article/cheques';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ArticleApi;
}());
ArticleApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], ArticleApi);

var _a, _b;
//# sourceMappingURL=ArticleApi.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/api/AuthApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/**
 * Market
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.4
 * Contact: dev@globalpay.com.ua
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var AuthApi = (function () {
    function AuthApi(http, basePath, configuration) {
        this.http = http;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        this.basePath = 'https://m.globalpay.com.ua/api/v0';
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @summary User authorization from landing website
     * @param auth Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLandingLoginPost = function (auth, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.authLandingLoginPostWithHttpInfo(auth, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary User authorization
     * @param auth Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLoginPost = function (auth, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.authLoginPostWithHttpInfo(auth, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Logs out current logged in user session
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLogoutGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.authLogoutGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary User authorization from /otp/{otp_uuid}
     * @param otpUuid Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authOtpOtpUuidGet = function (otpUuid, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.authOtpOtpUuidGetWithHttpInfo(otpUuid, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * User authorization from landing website
     *
     * @param auth Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLandingLoginPostWithHttpInfo = function (auth, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/auth/landingLogin';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: auth == null ? '' : JSON.stringify(auth),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * User authorization
     *
     * @param auth Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLoginPostWithHttpInfo = function (auth, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/auth/login';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: auth == null ? '' : JSON.stringify(auth),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Logs out current logged in user session
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authLogoutGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/auth/logout';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * User authorization from /otp/{otp_uuid}
     *
     * @param otpUuid Needed data for user authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    AuthApi.prototype.authOtpOtpUuidGetWithHttpInfo = function (otpUuid, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/auth/otp/${otp_uuid}'
            .replace('${' + 'otp_uuid' + '}', String(otpUuid));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'otpUuid' is not null or undefined
        if (otpUuid === null || otpUuid === undefined) {
            throw new Error('Required parameter otpUuid was null or undefined when calling authOtpOtpUuidGet.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return AuthApi;
}());
AuthApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], AuthApi);

var _a, _b;
//# sourceMappingURL=AuthApi.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/api/OperationApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/**
 * Market
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.4
 * Contact: dev@globalpay.com.ua
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var OperationApi = (function () {
    function OperationApi(http, basePath, configuration) {
        this.http = http;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        this.basePath = 'https://m.globalpay.com.ua/api/v0';
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @summary Get operations list
     * @param count Max count of operations that will be returned
     * @param dateFrom Start datetime for selecting operations
     * @param dateTill End datetime for selecting operations
     * @param startFrom Start getting last operations starting on this count
     * @param order Sorting order, if true order is from oldest
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationHistoryGet = function (count, dateFrom, dateTill, startFrom, order, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationHistoryGetWithHttpInfo(count, dateFrom, dateTill, startFrom, order, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get Status/Confirm operation with {operation} transaction ID
     * @param operation Transaction ID in wich status/confirmation is interesting
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationReplenishmentOperationGet = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationReplenishmentOperationGetWithHttpInfo(operation, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create replenishment operation
     * @param operation Data for operation creation
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationReplenishmentPost = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationReplenishmentPostWithHttpInfo(operation, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get uniq replenishment id
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationTransIdGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationTransIdGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get Status/Confirm operation with {operation} transaction ID for voucher sell
     * @param operation Voucher transaction ID in wich status/confirmation is interesting
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationVoucherOperationGet = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationVoucherOperationGetWithHttpInfo(operation, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Create voucher sell operation
     * @param operation Data for selling voucher
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationVoucherPost = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.operationVoucherPostWithHttpInfo(operation, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get operations list
     *
     * @param count Max count of operations that will be returned
     * @param dateFrom Start datetime for selecting operations
     * @param dateTill End datetime for selecting operations
     * @param startFrom Start getting last operations starting on this count
     * @param order Sorting order, if true order is from oldest
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationHistoryGetWithHttpInfo = function (count, dateFrom, dateTill, startFrom, order, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/history';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (count !== undefined) {
            queryParameters.set('count', count);
        }
        if (dateFrom !== undefined) {
            queryParameters.set('dateFrom', dateFrom.toISOString());
        }
        if (dateTill !== undefined) {
            queryParameters.set('dateTill', dateTill.toISOString());
        }
        if (startFrom !== undefined) {
            queryParameters.set('startFrom', startFrom);
        }
        if (order !== undefined) {
            queryParameters.set('order', order);
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Status/Confirm operation with {operation} transaction ID
     *
     * @param operation Transaction ID in wich status/confirmation is interesting
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationReplenishmentOperationGetWithHttpInfo = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/replenishment/${operation}'
            .replace('${' + 'operation' + '}', String(operation));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling operationReplenishmentOperationGet.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create replenishment operation
     *
     * @param operation Data for operation creation
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationReplenishmentPostWithHttpInfo = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/replenishment';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling operationReplenishmentPost.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: operation == null ? '' : JSON.stringify(operation),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get uniq replenishment id
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationTransIdGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/transId';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get Status/Confirm operation with {operation} transaction ID for voucher sell
     *
     * @param operation Voucher transaction ID in wich status/confirmation is interesting
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationVoucherOperationGetWithHttpInfo = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/voucher/${operation}'
            .replace('${' + 'operation' + '}', String(operation));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling operationVoucherOperationGet.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Create voucher sell operation
     *
     * @param operation Data for selling voucher
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    OperationApi.prototype.operationVoucherPostWithHttpInfo = function (operation, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/operation/voucher';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'operation' is not null or undefined
        if (operation === null || operation === undefined) {
            throw new Error('Required parameter operation was null or undefined when calling operationVoucherPost.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: operation == null ? '' : JSON.stringify(operation),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return OperationApi;
}());
OperationApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], OperationApi);

var _a, _b;
//# sourceMappingURL=OperationApi.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/api/ReportApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/**
 * Market
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.4
 * Contact: dev@globalpay.com.ua
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var ReportApi = (function () {
    function ReportApi(http, basePath, configuration) {
        this.http = http;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        this.basePath = 'https://m.globalpay.com.ua/api/v0';
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @summary Get historical collections
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionHistoryGet = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportCollectionHistoryGetWithHttpInfo(dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get historical collections
     * @param opId Collection id for detailed info
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionOpIdGet = function (opId, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportCollectionOpIdGetWithHttpInfo(opId, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Make collection
     * @param date Data for doing collection
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionPost = function (date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportCollectionPostWithHttpInfo(date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get financial report
     * @param date Date for report
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportFinancialGet = function (date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportFinancialGetWithHttpInfo(date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get detailed sales report
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportSalesDetailedGet = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportSalesDetailedGetWithHttpInfo(dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get sales report
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportSalesGet = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportSalesGetWithHttpInfo(dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get shift report
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportShiftGet = function (cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.reportShiftGetWithHttpInfo(cult, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get historical collections
     *
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionHistoryGetWithHttpInfo = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/collectionHistory';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling reportCollectionHistoryGet.');
        }
        // verify required parameter 'dateTill' is not null or undefined
        if (dateTill === null || dateTill === undefined) {
            throw new Error('Required parameter dateTill was null or undefined when calling reportCollectionHistoryGet.');
        }
        if (dateFrom !== undefined) {
            queryParameters.set('dateFrom', dateFrom.toISOString());
        }
        if (dateTill !== undefined) {
            queryParameters.set('dateTill', dateTill.toISOString());
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get historical collections
     *
     * @param opId Collection id for detailed info
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionOpIdGetWithHttpInfo = function (opId, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/collection/${op_id}'
            .replace('${' + 'op_id' + '}', String(opId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'opId' is not null or undefined
        if (opId === null || opId === undefined) {
            throw new Error('Required parameter opId was null or undefined when calling reportCollectionOpIdGet.');
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Make collection
     *
     * @param date Data for doing collection
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportCollectionPostWithHttpInfo = function (date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/collection';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling reportCollectionPost.');
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: date == null ? '' : JSON.stringify(date),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get financial report
     *
     * @param date Date for report
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportFinancialGetWithHttpInfo = function (date, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/financial';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling reportFinancialGet.');
        }
        if (date !== undefined) {
            queryParameters.set('date', date.toISOString());
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get detailed sales report
     *
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportSalesDetailedGetWithHttpInfo = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/salesDetailed';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling reportSalesDetailedGet.');
        }
        // verify required parameter 'dateTill' is not null or undefined
        if (dateTill === null || dateTill === undefined) {
            throw new Error('Required parameter dateTill was null or undefined when calling reportSalesDetailedGet.');
        }
        if (dateFrom !== undefined) {
            queryParameters.set('dateFrom', dateFrom.toISOString());
        }
        if (dateTill !== undefined) {
            queryParameters.set('dateTill', dateTill.toISOString());
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get sales report
     *
     * @param dateFrom Start date of report period
     * @param dateTill End date of report period
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportSalesGetWithHttpInfo = function (dateFrom, dateTill, cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/sales';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'dateFrom' is not null or undefined
        if (dateFrom === null || dateFrom === undefined) {
            throw new Error('Required parameter dateFrom was null or undefined when calling reportSalesGet.');
        }
        // verify required parameter 'dateTill' is not null or undefined
        if (dateTill === null || dateTill === undefined) {
            throw new Error('Required parameter dateTill was null or undefined when calling reportSalesGet.');
        }
        if (dateFrom !== undefined) {
            queryParameters.set('dateFrom', dateFrom.toISOString());
        }
        if (dateTill !== undefined) {
            queryParameters.set('dateTill', dateTill.toISOString());
        }
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get shift report
     *
     * @param cult User language
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    ReportApi.prototype.reportShiftGetWithHttpInfo = function (cult, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/report/shift';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (cult !== undefined && cult !== null) {
            headers.set('cult', String(cult));
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ReportApi;
}());
ReportApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], ReportApi);

var _a, _b;
//# sourceMappingURL=ReportApi.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/api/UserApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/swagger/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/swagger/configuration.ts");
/**
 * Market
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.4
 * Contact: dev@globalpay.com.ua
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */





var UserApi = (function () {
    function UserApi(http, basePath, configuration) {
        this.http = http;
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        this.basePath = 'https://m.globalpay.com.ua/api/v0';
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @summary Get history of authorization
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userAuthHistoryGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userAuthHistoryGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get dealer balance
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userBalanceGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userBalanceGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Terminal current location
     * @param location User GPS coordinates in exact time
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userGeolocationPost = function (location, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userGeolocationPostWithHttpInfo(location, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get news
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userNewsGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userNewsGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Change user password
     * @param passwords Current and new password for changing current
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userPasswordPut = function (passwords, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userPasswordPutWithHttpInfo(passwords, host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get dealer support information
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userSupport2Get = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userSupport2GetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @summary Get dealer support information
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userSupportGet = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        return this.userSupportGetWithHttpInfo(host, userAgent, xForwardedFor, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     * Get history of authorization
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userAuthHistoryGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/authHistory';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get dealer balance
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userBalanceGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/balance';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Terminal current location
     *
     * @param location User GPS coordinates in exact time
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userGeolocationPostWithHttpInfo = function (location, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/geolocation';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'location' is not null or undefined
        if (location === null || location === undefined) {
            throw new Error('Required parameter location was null or undefined when calling userGeolocationPost.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post,
            headers: headers,
            body: location == null ? '' : JSON.stringify(location),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get news
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userNewsGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/news';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Change user password
     *
     * @param passwords Current and new password for changing current
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userPasswordPutWithHttpInfo = function (passwords, host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/password';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'passwords' is not null or undefined
        if (passwords === null || passwords === undefined) {
            throw new Error('Required parameter passwords was null or undefined when calling userPasswordPut.');
        }
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Put,
            headers: headers,
            body: passwords == null ? '' : JSON.stringify(passwords),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get dealer support information
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userSupport2GetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/support2';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Get dealer support information
     *
     * @param host Auto generated on request, used for server logic
     * @param userAgent Auto generated on request, used for server logic
     * @param xForwardedFor Auto generated on request, used for server logic
     */
    UserApi.prototype.userSupportGetWithHttpInfo = function (host, userAgent, xForwardedFor, extraHttpRequestParams) {
        var path = this.basePath + '/user/support';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (host !== undefined && host !== null) {
            headers.set('host', String(host));
        }
        if (userAgent !== undefined && userAgent !== null) {
            headers.set('user-agent', String(userAgent));
        }
        if (xForwardedFor !== undefined && xForwardedFor !== null) {
            headers.set('x-forwarded-for', String(xForwardedFor));
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return UserApi;
}());
UserApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
], UserApi);

var _a, _b;
//# sourceMappingURL=UserApi.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "../../../../../src/app/swagger/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* unused harmony export COLLECTION_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/app/translate/Lang.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lang; });
var Lang = (function () {
    function Lang() {
    }
    Lang.getLangValue = function (names) {
        var currLang = '';
        var value = '';
        var ru, uk, en;
        if (localStorage.lang) {
            currLang = localStorage.lang;
        }
        else {
            currLang = this.def_lang;
        }
        for (var i = 0; i < names.length; i++) {
            if (names[i].cult === currLang && names[i].value !== '') {
                value = names[i].value;
                return value;
            }
            else {
                if (names[i].cult === 'ru') {
                    ru = names[i].value;
                }
                if (names[i].cult === 'uk') {
                    uk = names[i].value;
                }
                if (names[i].cult === 'en') {
                    en = names[i].value;
                }
            }
        }
        // !value->UK->RU->EN
        if (value === '') {
            if (uk !== '') {
                return uk;
            }
            else {
                if (ru !== '') {
                    return ru;
                }
                else {
                    if (en !== '') {
                        return en;
                    }
                    else {
                        return '';
                    }
                }
            }
        }
    };
    return Lang;
}());

Lang.def_lang = 'ru'; // if def_lang is uk-UA change 'ru' to 'uk'
//# sourceMappingURL=Lang.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-ru.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_RU_TRANS; });
var LANG_RU_TRANS = {
    // ========HEADER================================
    'balance': 'баланс',
    'cashier': 'кассир',
    'News': 'Новости',
    'Help': 'Помощь',
    'Exit': 'Выход',
    // ========NAV-MENU================================
    // -------REPORTS---------------------------------
    'menu_hint': 'отчеты, настройки и прочее',
    'reports': 'Отчеты',
    'sales': 'Продажи',
    'operations': 'Операции',
    'sales_help': 'при нажатии, вы перейдете на страницу ваших продаж',
    'op_list': 'Список операций',
    'op_list_help': 'при нажатии, вы перейдете на страницу ваших операций',
    'collection': 'Инкассация',
    'collection_history': 'История инкассаций',
    'collection_help': 'при нажатии, вы перейдете на страницу ваших инкасаций',
    'details': 'Детал. продажи',
    'details_help': 'при нажатии, вы перейдете на страницу ваших продаж',
    'financial': 'Финансовый',
    'financial_help': 'при нажатии, вы перейдете на страницу финансов',
    'duty_report': 'Отчет за смену',
    'duty_report_help': 'при нажатии, вы перейдете на страницу отчетов',
    // --------SETTINGS--------------------------------
    'settings': 'Настройки',
    'my_contacts': 'Мои контакты',
    'my_contacts_help': 'при нажатии, вы перейдете на страницу ваших контактов',
    'download_instructions': 'Скачать инструкции',
    'download_instructions_help': 'при нажатии, начнется скачиваться инструкция по использованию сервиса',
    'access_control': 'Контроль входов',
    'access_control_help': 'при нажатии, вы перейдете на страницу управления входом',
    'pass_change': 'Смена пароля',
    'pass_change_help': 'при нажатии, вы перейдете на страницу смены пароля',
    // ========SUPPORT====================================
    'help': 'помощь',
    'support': 'Техподдержка:',
    // ========INPUT-FORM==================================
    'amount': 'Сумма',
    'high_commission': 'Комиссия больше суммы пополнения!',
    'on_balance': ' На счёт',
    // ======== BUTTONS =====================================
    'execute': 'Провести',
    'next': 'Далее',
    'complete': 'Выполнить',
    'show': 'Показать',
    'update': 'обновить',
    'change': 'сменить',
    'return': 'вернуться',
    'show_data': 'Показать информацию',
    'create_collection': 'Создать инкассацию',
    // ======== OP_LIST =====================================
    'sort': 'Сортировка',
    'older': 'старше',
    'newer': 'новее',
    'show_operations': 'Показать операций',
    'date_range_error': 'Неправильный диапазон дат',
    // ======== CHANGE PASS =====================================
    'current_pass': 'Текщий пароль',
    'new_pass': 'Новый пароль',
    'new_pass_repeat': 'Подтверждение пароля',
    'required': ' * - обязательно к заполнению',
    'incorrect_pass': 'Новый пароль и подтверждение не совпадают!',
    'incorrect-change': 'Смена пароля отклонена!',
    // ======== COLLECTION =====================================
    'op_no': '№ операции',
    'tradePoint': 'Торговая точка',
    'collection_date': 'Дата инкассации',
    'total': 'Итого',
    'op_count': 'Кол-во оп.',
    'incomeTariff': 'Вход. тариф',
    'collectorGet': 'Получено инкассатором',
    'Cashier': 'Кассир',
    'first_op': 'Первая оп.',
    'last_op': 'Последняя оп.',
    'total_op': 'Всего\n (продуктов:',
    'product': 'Продукт',
    // ========  =====================================
    'keyboard_help': 'Клавиши для набора номера телефона',
    'voucher': 'Ваучер для пополнения',
    'nominal': 'Номинал',
    'voucher_hint': 'После проведения операции будет показан чек, который необходимо напечатать.',
    'success_collect': 'Инкассация проведена',
    // ======== CHECK PAGES
    'amount_on': 'На счет:',
    'commission': 'Комиссия',
    'from_client': 'ОТ КЛИЕНТА:',
    'comment': 'примечание',
    // -------- OP STATUSES--------------------------------------
    'success': 'Успешная',
    'failed': 'Отказ в транзакции',
    'in_progress': 'Транзакция в обработке',
    'serial': 'Серийный номер',
    'secret_code': 'Секретный код',
    // ========= LANGUAGE ========================================
    'language': 'Язык',
    'language_help': 'Смена выбранного языка',
    'locale': 'ru',
};
//# sourceMappingURL=lang-ru.js.map

/***/ }),

/***/ "../../../../../src/app/translate/lang-ua.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_UA_TRANS; });
var LANG_UA_TRANS = {
    // ======== HEADER ================================
    'balance': 'баланс',
    'cashier': 'касир',
    'News': 'Новини',
    'Help': 'Допомога',
    'Exit': 'Вихід',
    // ======== NAV-MENU ================================
    // -------REPORTS---------------------------------
    'menu_hint': 'звіти, налаштування та інше',
    'reports': 'Звіти',
    'sales': 'Продажі',
    'operations': 'Операції',
    'sales_help': 'при виборі, ви перейдете на сторінку ваших продаж',
    'op_list': 'Список операцій',
    'op_list_help': 'при виборі, ви перейдете на сторінку ваших операцій',
    'collection': 'Інкасація',
    'collection_history': 'Історія инкасацій',
    'collection_help': 'при виборі, ви перейдете на сторінку ваших інкасацій',
    'details': 'Детал. продажі',
    'details_help': 'при виборі, ви перейдете на сторінку ваших продаж',
    'financial': 'Фінансовий',
    'financial_help': 'при виборі, ви перейдете на сторінку фінансів',
    'duty_report': 'Звіт за зміну',
    'duty_report_help': 'при виборі, ви перейдете на сторінку звітів',
    // --------SETTINGS--------------------------------
    'settings': 'Налаштування',
    'my_contacts': 'Мої контакти',
    'my_contacts_help': 'при виборі, ви перейдете на сторінку ваших контактів',
    'download_instructions': 'Завантажити інструкції',
    'download_instructions_help': 'при виборі, почне завантажуватися інструкція з використання сервіса',
    'access_control': 'Контроль входів',
    'access_control_help': 'при виборі, ви перейдете на сторінку керування входом',
    'pass_change': 'Змінити пароль',
    'pass_change_help': 'при виборі, ви перейдете на сторінку зміни пароля',
    // ======== SUPPORT====================================
    'help': 'допомога',
    'support': 'Техпідтримка:',
    // ======== INPUT-FORM ==================================
    'amount': 'Сума',
    'high_commission': 'Комісія більша за суму поповнення! ',
    'on_balance': 'На рахунок',
    // ======== BUTTONS =====================================
    'execute': 'Провести',
    'next': 'Далі',
    'complete': 'Виконати',
    'show': 'Показати',
    'update': 'оновити',
    'change': 'змінити',
    'return': 'повернутися',
    'show_data': 'Показати інформацію',
    'create_collection': 'Створити інкасацію',
    // ======== OP_LIST =====================================
    'sort': 'Сортування',
    'older': 'старіші',
    'newer': 'новіші',
    'show_operations': 'Показати операцій',
    'date_range_error': 'Невірний діапазон дат',
    // ======== CHANGE PASS =====================================
    'current_pass': 'Поточний пароль',
    'new_pass': 'Новий пароль',
    'new_pass_repeat': 'Підтвердження пароля',
    'required': ' * - обов`язково до заповнення',
    'incorrect_pass': 'Новий пароль та підтвердження не співпадають!',
    'incorrect-change': 'Зміна пароля відхилена!',
    // ======== COLLECTION =====================================
    'op_no': '№ операції',
    'tradePoint': 'Торгова точка',
    'collection_date': 'Дата інкасації',
    'total': 'Всього',
    'op_count': 'Кіл-ть оп.',
    'incomeTariff': 'Вхід. тариф',
    'collectorGet': 'Отримано інкасатором',
    'Cashier': 'Касир',
    'first_op': 'Перша оп.',
    'last_op': 'Остання оп.',
    'total_op': 'Всього\n (продуктів:',
    'product': 'Продукт',
    // ========  =====================================
    'keyboard_help': 'Клавіші для набору номера телефона',
    'voucher': 'Ваучер для поповнення',
    'nominal': 'Номінал',
    'voucher_hint': 'Після проведення операції буде показано чек, який необхідно надрукувати.',
    'success_collect': 'Інкасацію проведено',
    // ======== CHECK PAGES ==========================
    'amount_on': 'На рахунок:',
    'commission': 'Комісія',
    'from_client': 'ВІД КЛІЄНТА:',
    'comment': 'примітка',
    // -------- OP STATUSES--------------------------------------
    'success': 'Успішна',
    'failed': 'В транзакції відмовлено',
    'in_progress': 'Транзакція в обробці',
    'serial': 'Серійний номер',
    'secret_code': 'Секретний код',
    // ========= LANGUAGE ========================================
    'language': 'Мова',
    'language_help': 'Зміна обраної мови',
    'locale': 'uk',
};
//# sourceMappingURL=lang-ua.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations__ = __webpack_require__("../../../../../src/app/translate/translations.ts");
// app/translate/translate.pipe.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // our translate service
var TranslatePipe = (function () {
    function TranslatePipe(_translations) {
        this._translations = _translations;
        this.currentLang = localStorage.lang;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        this.currentLang = localStorage.lang;
        if (!value) {
            return;
        }
        if (this._translations[this.currentLang] && this._translations[this.currentLang][value]) {
            return this._translations[this.currentLang][value];
        }
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translate',
        pure: false // impure pipe, update value when we change language
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translations__["a" /* TRANSLATIONS */])),
    __metadata("design:paramtypes", [Object])
], TranslatePipe);

//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATIONS; });
/* unused harmony export dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_ru__ = __webpack_require__("../../../../../src/app/translate/lang-ru.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_ua__ = __webpack_require__("../../../../../src/app/translate/lang-ua.ts");
// app/translate/translation.ts

// import translations


// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('translations');
// all translations
var dictionary = {
    // 'en': LANG_EN_TRANS,
    'ru': __WEBPACK_IMPORTED_MODULE_1__lang_ru__["a" /* LANG_RU_TRANS */],
    'uk': __WEBPACK_IMPORTED_MODULE_2__lang_ua__["a" /* LANG_UA_TRANS */],
};
// providers
var TRANSLATION_PROVIDERS = [{
        provide: TRANSLATIONS,
        useValue: dictionary
    }];
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_global_service__ = __webpack_require__("../../../../../src/app/_services/global.service.ts");




Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
var platform = Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
if (__WEBPACK_IMPORTED_MODULE_3__app_services_global_service__["a" /* GlobalService */].hideConsole) {
    window.console.log = function () {
    };
    window.console.warn = function () {
    };
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map