(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart-page/cart-page.component */ "./src/app/components/cart-page/cart-page.component.ts");
/* harmony import */ var _components_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/category-page/category-page.component */ "./src/app/components/category-page/category-page.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkout-page/checkout-page.component */ "./src/app/components/checkout-page/checkout-page.component.ts");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "./src/app/components/product-page/product-page.component.ts");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/index-page/index-page.component */ "./src/app/components/index-page/index-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '',
        component: _components_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_8__["IndexPageComponent"]
    },
    {
        path: 'login',
        component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
    },
    {
        path: 'register',
        component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"]
    },
    {
        path: 'cart',
        component: _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__["CartPageComponent"]
    },
    {
        path: 'checkout',
        component: _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageComponent"]
    },
    {
        path: 'category',
        component: _components_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_3__["CategoryPageComponent"]
    },
    {
        path: 'product',
        component: _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__["ProductPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shop_services_shop_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shop-services/shop-services.component */ "./src/app/components/shop-services/shop-services.component.ts");
/* harmony import */ var _components_discount_carousel_discount_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/discount-carousel/discount-carousel.component */ "./src/app/components/discount-carousel/discount-carousel.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-footer/my-footer.component */ "./src/app/components/my-footer/my-footer.component.ts");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart-page/cart-page.component */ "./src/app/components/cart-page/cart-page.component.ts");
/* harmony import */ var _components_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/category-page/category-page.component */ "./src/app/components/category-page/category-page.component.ts");
/* harmony import */ var _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkout-page/checkout-page.component */ "./src/app/components/checkout-page/checkout-page.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-page/product-page.component */ "./src/app/components/product-page/product-page.component.ts");
/* harmony import */ var _components_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/index-page/index-page.component */ "./src/app/components/index-page/index-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_shop_services_shop_services_component__WEBPACK_IMPORTED_MODULE_4__["ShopServicesComponent"],
                _components_discount_carousel_discount_carousel_component__WEBPACK_IMPORTED_MODULE_5__["DiscountCarouselComponent"],
                _components_my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_7__["MyFooterComponent"],
                _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"],
                _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_9__["CartPageComponent"],
                _components_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_10__["CategoryPageComponent"],
                _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutPageComponent"],
                _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
                _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPageComponent"],
                _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_14__["ProductPageComponent"],
                _components_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_15__["IndexPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cart-page/cart-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/cart-page/cart-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n/* --- Shopping Cart --- */\r\n\r\nsection.cart{\r\n    margin-top: 16px;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\nsection.cart .table-content{\r\n    margin-top: 64px;\r\n  }"

/***/ }),

/***/ "./src/app/components/cart-page/cart-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-page/cart-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n  <div class=\"container\">\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n      Cart\n  </div>\n</div>\n\n<!-- Shopping Cart -->\n<section  class=\"cart\">\n  <div class=\"container\">\n      <h1 class=\"text-center\">Καλάθι</h1>\n      <div class=\"row table-content\">\n              <div class=\"col-12\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\"text-center\">\n                                  <th>Εικόνα</th>\n                                  <th>Προιόν</th>\n                                  <th>Ποσότητα</th>\n                                  <th>Τιμή</th>\n                                  <th>Σύνολο</th>\n                              </thead>\n      \n                              <tbody>\n                                  <tr>\n                                      <td><img class=\"d-block mx-auto\" src=\"https://dummyimage.com/50x50/55595c/fff\" /></td>\n                                      <td class=\"text-center\">Source Natural's B12</td>\n                                      <td><input class=\"form-control\" type=\"text\" value=\"1\" /></td>\n                                      <td class=\"text-center\">18€</td>\n                                      <td class=\"text-center\">18€</td>\n                                  </tr>\n      \n                                  <tr>\n                                      <td><img class=\"d-block mx-auto\" src=\"https://dummyimage.com/50x50/55595c/fff\" /></td>\n                                      <td class=\"text-center\">Now Folic Acid 400mg</td>\n                                      <td><input class=\"form-control\" type=\"text\" value=\"1\" /></td>\n                                      <td class=\"text-center\">20€</td>\n                                      <td class=\"text-center\">20€</td>\n                                  </tr>\n      \n                                  <tr>\n                                      <td><img class=\"d-block mx-auto\" src=\"https://dummyimage.com/50x50/55595c/fff\" /></td>\n                                      <td class=\"text-center\">Solgar Vitamin C 1000mg</td>\n                                      <td><input class=\"form-control\" type=\"text\" value=\"1\" /></td>\n                                      <td class=\"text-center\">12€</td>\n                                      <td class=\"text-center\">12€</td>\n                                  </tr>\n      \n                                  <tr>\n                                      <td></td>\n                                      <td></td>\n                                      <td></td>\n                                      <td class=\"text-center\">Μεταφορικά</td>\n                                      <td class=\"text-center\">6€</td>\n                                  </tr>\n      \n                                  <tr>\n                                      <td></td>\n                                      <td></td>\n                                      <td></td>\n                                      <td class=\"text-center\">Σύνολο</td>\n                                      <td class=\"text-center\">56€</td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n              </div>\n              \n      </div>\n      \n      <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n              <button class=\"btn btn-block btn-light\">Συνέχισε τις αγορές</button>\n          </div>\n\n          <div class=\"col-sm-12 col-md-6\">\n              <button class=\"btn btn-block btn-primary\">Ολοκλήρωση αγοράς</button>\n          </div>\n      </div>\n      \n  </div>  \n</section>\n\n<my-footer></my-footer>\n"

/***/ }),

/***/ "./src/app/components/cart-page/cart-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-page/cart-page.component.ts ***!
  \*************************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartPageComponent = /** @class */ (function () {
    function CartPageComponent() {
    }
    CartPageComponent.prototype.ngOnInit = function () {
    };
    CartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/components/cart-page/cart-page.component.html"),
            styles: [__webpack_require__(/*! ./cart-page.component.css */ "./src/app/components/cart-page/cart-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartPageComponent);
    return CartPageComponent;
}());



/***/ }),

/***/ "./src/app/components/category-page/category-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/category-page/category-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}"

/***/ }),

/***/ "./src/app/components/category-page/category-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/category-page/category-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n  <div class=\"container\">\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n      Category\n  </div>\n</div>\n\n<my-footer></my-footer>\n\n"

/***/ }),

/***/ "./src/app/components/category-page/category-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-page/category-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageComponent", function() { return CategoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryPageComponent = /** @class */ (function () {
    function CategoryPageComponent() {
    }
    CategoryPageComponent.prototype.ngOnInit = function () {
    };
    CategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'category-page',
            template: __webpack_require__(/*! ./category-page.component.html */ "./src/app/components/category-page/category-page.component.html"),
            styles: [__webpack_require__(/*! ./category-page.component.css */ "./src/app/components/category-page/category-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryPageComponent);
    return CategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout-page/checkout-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/checkout-page/checkout-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n/* --- Checkout --- */\r\n\r\nsection.checkout{\r\n    margin-top: 16px;\r\n    margin-bottom: 48px;\r\n  }"

/***/ }),

/***/ "./src/app/components/checkout-page/checkout-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/checkout-page/checkout-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n  <div class=\"container\">\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n      Ολοκλήρωση Αγοράς\n  </div>\n</div>\n\n<!-- Checkout -->\n<section  class=\"checkout\">\n<div class=\"container\">\n  <h1 class=\"text-center\">Ολοκλήρωση Αγοράς</h1>\n  <div class=\"row\">\n      \n  </div>\n</div>  \n</section>\n\n<my-footer></my-footer><p>\n  checkout-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/checkout-page/checkout-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/checkout-page/checkout-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutPageComponent = /** @class */ (function () {
    function CheckoutPageComponent() {
    }
    CheckoutPageComponent.prototype.ngOnInit = function () {
    };
    CheckoutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkout-page',
            template: __webpack_require__(/*! ./checkout-page.component.html */ "./src/app/components/checkout-page/checkout-page.component.html"),
            styles: [__webpack_require__(/*! ./checkout-page.component.css */ "./src/app/components/checkout-page/checkout-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutPageComponent);
    return CheckoutPageComponent;
}());



/***/ }),

/***/ "./src/app/components/discount-carousel/discount-carousel.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/discount-carousel/discount-carousel.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/discount-carousel/discount-carousel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/discount-carousel/discount-carousel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Discount Carousel -->\n<section  class=\"carousel-section\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div id=\"carousel-discounts\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ul class=\"carousel-indicators\">\n                  <li data-target=\"#carousel-discounts\" *ngFor = \"let deal of deals; let i = index; let isFirstItem = first\" \n                      [attr.data-slide-to] = \"i\" [ngClass] = \"{'active' : isFirstItem}\">\n                  </li>\n              </ul>\n                      \n              <div class=\"carousel-inner\">\n                  <div *ngFor = \"let deal of deals; let isFirstItem = first\" [ngClass] = \" isFirstItem ? 'carousel-item active' : 'carousel-item'\">\n                      <img class=\"img-fluid\" src=\"{{deal.imageUrl}}\" alt=\"\">\n                  </div>\n              </div>\n      \n              <a class=\"carousel-control-prev\" href=\"#carousel-discounts\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\"></span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carousel-discounts\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\"></span>\n              </a>\n          </div>\n      </div>\n      \n  </div>  \n</section>\n"

/***/ }),

/***/ "./src/app/components/discount-carousel/discount-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/discount-carousel/discount-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DiscountCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCarouselComponent", function() { return DiscountCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_deal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/deal.service */ "./src/app/services/deal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscountCarouselComponent = /** @class */ (function () {
    function DiscountCarouselComponent(dealService) {
        this.dealService = dealService;
    }
    DiscountCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dealService.getDeals()
            .subscribe(function (deals) { return _this.deals = deals; });
    };
    DiscountCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'discount-carousel',
            template: __webpack_require__(/*! ./discount-carousel.component.html */ "./src/app/components/discount-carousel/discount-carousel.component.html"),
            styles: [__webpack_require__(/*! ./discount-carousel.component.css */ "./src/app/components/discount-carousel/discount-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_deal_service__WEBPACK_IMPORTED_MODULE_1__["DealService"]])
    ], DiscountCarouselComponent);
    return DiscountCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/index-page/index-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/index-page/index-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index-page/index-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/index-page/index-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n<discount-carousel></discount-carousel>\n<shop-services></shop-services>\n<my-footer></my-footer>\n"

/***/ }),

/***/ "./src/app/components/index-page/index-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/index-page/index-page.component.ts ***!
  \***************************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent() {
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/components/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.css */ "./src/app/components/index-page/index-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n/* --- Login --- */\r\n\r\nsection.login{\r\n  padding-bottom: 32px;\r\n}\r\n\r\nsection.login h1{\r\n  text-align: center;\r\n  margin-bottom: 32px;\r\n}\r\n\r\nsection.login form .form-group input{\r\n  background:\t#E0E0E0;\r\n}\r\n\r\nsection.login form .submit{\r\n  text-align: center;\r\n  margin-top: 32px\r\n}\r\n\r\nsection.login form .submit button{\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  margin-right: 16px;\r\n}\r\n\r\nsection.login form .submit a{\r\n  text-decoration: underline;\r\n}\r\n\r\nsection.login form .submit a:hover{\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n    <div class=\"container\">\n        <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n        Είσοδος\n    </div>\n</div>\n\n<!-- Login -->\n<section class=\"login\">\n        <div class=\"container\">\n            <h1>Είσοδος</h1>\n\n            <form>\n                <div class=\"form-group\">\n                    <label>E-mail</label>\n                    <input type=\"email\" class=\"form-control\"placeholder=\"E-Mail\" name=\"email\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Kωδικός</label>\n                    <input type=\"password\" class=\"form-control\"  placeholder=\"Κωδικός\" name=\"password\">\n                </div>\n                <div class=\"submit\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Είσοδος</button><a href=\"#\">Ξέχασες τον κωδικό σου?</a>\n                </div>\n               </form>\n        </div>\n</section>\n\n<my-footer></my-footer>\n\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/components/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Footer --- */\r\nfooter{\r\n    text-align: left;\r\n    padding-top: 64px;\r\n    padding-bottom: 64px;\r\n  }\r\nfooter h3{\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\nfooter .menu a{\r\n    font-size: 16px;\r\n    display: block;\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n    text-decoration: none;\r\n  }\r\n@media (max-width: 768px){\r\n    footer .container .row{\r\n      text-align: center;\r\n    }\r\n  \r\n    footer .container .row .col-sm-4:nth-child(2){\r\n      margin-top: 16px;\r\n      margin-bottom: 16px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer  class=\"footer\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-4\">\n              <h3>Πληροφοριες</h3>\n              <div class=\"menu\">\n                  <a href=\"#\">Η Εταιρία μας</a>\n                  <a href=\"#\">Όροι Χρήσης</a>\n                  <a href=\"#\">Ασφάλεια συναλλαγών</a>\n                  <a href=\"#\">Προστασία Προσωπικών Δεδομένων</a>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <h3>Παραγγελιες</h3>\n              <div class=\"menu\">\n                  <a href=\"#\">Τρόποι Παραγγελίας</a>\n                  <a href=\"#\">Τρόποι Πληρωμής</a>\n                  <a href=\"#\">Τρόποι Αποστολής</a>\n                  <a href=\"#\">Επιστροφές Προιόντων</a>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <h3>Επικοινωνια</h3>\n              <div class=\"menu\">\n                  <a href=\"#\"><i class=\"fas fa-map-marker-alt mr-2\"></i>My Company Glasgow D04 89GR</a>\n                  <a href=\"#\"><i class=\"fas fa-phone mr-2\"></i>231044444</a>\n                  <a href=\"#\"><i class=\"fas fa-envelope mr-2\"></i>livedemo-admin@templatemonster.me</a>\n                  <a href=\"#\"><i class=\"fas fa-clock mr-2\"></i>7 days a week from 8:00 am to 5:00 pm</a>\n              </div>\n          </div>\n      </div>\n  </div>  \n</footer>\n\n"

/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: MyFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFooterComponent", function() { return MyFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyFooterComponent = /** @class */ (function () {
    function MyFooterComponent() {
    }
    MyFooterComponent.prototype.ngOnInit = function () {
    };
    MyFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-footer',
            template: __webpack_require__(/*! ./my-footer.component.html */ "./src/app/components/my-footer/my-footer.component.html"),
            styles: [__webpack_require__(/*! ./my-footer.component.css */ "./src/app/components/my-footer/my-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyFooterComponent);
    return MyFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- First Navbar --- */\r\n\r\n#firstNavbar{\r\n    padding-bottom: 0;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand{\r\n    font-size: 40px;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand span{\r\n    color: #04BF00;\r\n    font-weight: 700;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand:hover{\r\n      color: #333333;\r\n    }\r\n\r\n#firstNavbar input.form-control{\r\n    border: 2px solid #04BF00;\r\n    width: 360px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link{\r\n    font-size: 20px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link i{\r\n    color: #04BF00;\r\n  }\r\n\r\n@media (max-width: 768px){\r\n    #firstNavbar a.navbar-brand{\r\n      font-size: 28px;\r\n    }\r\n  \r\n    #firstNavbar input.form-control{\r\n      width: 160px;\r\n    }\r\n  }\r\n\r\n/* --- Second Navbar --- */\r\n\r\n#secondNavbar ul.navbar-nav a.nav-link{\r\n    font-size: 20px;\r\n  }\r\n\r\n#secondNavbar{\r\n    padding-top: 0;\r\n  }"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-md\" id=\"firstNavbar\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\"> <span>Super</span>Pharmacy</a>\n\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\n           Menu<i class=\"fa fa-bars\"></i>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n\n           <form class=\"form-inline mx-auto\">\n               <div class=\"input-group\">\n                   <input class=\"form-control\" type=\"text\" placeholder=\"\">\n                   <div class=\"input-group-append\">\n                       <button type=\"button\" class=\"btn btn-primary\">Αναζήτηση</button>\n                   </div>\n               </div>    \n           </form>\n\n          <ul class=\"navbar-nav\">\n               <li class=\"nav-item\">\n                   <a class=\"nav-link\" routerLink=\"/register\">Εγγραφή</a>\n               </li>\n               <li class=\"nav-item\">\n                   <a class=\"nav-link\" routerLink=\"/login\">Είσοδος</a>\n               </li>\n               <li class=\"nav-item\">\n                   <a class=\"nav-link\" routerLink=\"/cart\">\n                       <i class=\"fas fa-shopping-cart mr-2\" ></i>Καλάθι\n                   </a>\n               </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-md\" id=\"secondNavbar\">\n  <div class=\"container\">\n      <ul class=\"navbar-nav mx-md-auto\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Βιταμίνες</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Μέταλλα</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Λιπαρά Οξέα</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Λιποδιαλυτικά</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Υπερτροφές</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Αντιηλιακά</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Σαμπουάν</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Ομοιοπαθητικά</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/category\">Προσφορές</a>\n          </li>\n      </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/product-page/product-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n  }\r\n\r\n/* --- Addition Product Information--- */\r\n\r\nsection.product-information{\r\n      margin-top: 24px;\r\n      margin-bottom: 32px;\r\n    }\r\n\r\nsection.product-information .tab-content #description p{\r\n      margin-bottom: 0;\r\n    }\r\n\r\nsection.product-information ul li.nav-item a.active{\r\n      background-color: #04BF00;\r\n    }"

/***/ }),

/***/ "./src/app/components/product-page/product-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n    <div class=\"container\">\n        <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n        Now Food B-100\n    </div>\n</div>\n\n<!-- Additional Product Informaition -->\n<section class=\"product-information\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <ul class=\"nav nav-pills\">\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#description\">Περιγραφή</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#additional-info\">Επιπλέον Πληροφοριες</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#reviews\">Αξιολογήσεις</a>\n                  </li>\n              </ul>\n\n              <div class=\"tab-content\">\n                  <div id=\"description\" class=\"container tab-pane active\">\n                      <br>\n                      <p><strong>NOW Foods Vitamin B-100 High Potency B Complex - 250 Capsules </strong></p>\n                      <p>Now Foods Vitamin B-100 Caps are a blend of key B vitamins combined with other nutritional factors for enhanced synergism. Now Foods Vitamin B-100 High Potency B Complex provides recommended potencies of the most important B vitamins and is designed to supply your body's required daily intake in one complete supplement.</p>\n                      <p><strong>Why do some B vitamin supplements from NOW® have an odor? Is this normal?</strong></p>\n                      <p>\n                          B vitamins by nature do not have a pleasant aroma. This is normal and does not indicate the product is expired or otherwise compromised. The expiration date of any NOW supplement is printed on the bottom of the bottle. \n                          Sometimes you may get B vitamin powder residue on the capsules, usually yellow in color. \n                          Again, this is a normal occurrence. \n                          There is often a small amount of powder that escapes during the encapsulation process, and it sometimes coats the outside of the capsules.\n                      </p>\n\n                      <p><strong>I noticed that your Coenzyme B-complex is enteric coated. Does this mean it's considered slow release?</strong></p>\n                      <p>\n                          The enteric coating does slow the release of the nutrients somewhat by allowing them to pass through the stomach intact but no this does not create a time release product. \n                          It is tested to readily disintegrate in simulated intestinal conditions.\n                      </p>\n                      \n                  </div> \n                  <div id=\"additional-info\" class=\"container tab-pane fade\">\n                      <br>\n                      <p><strong>Health is one of most important things in our life.</strong> \n                          We think that it is a real luck to have a strong health. \n                          Our way of life doesn’t increase the physiological condition of our body. \n                          Alcohol, cigarettes, unhealthy food, stresses and other factors have a great influence on our health. \n                          The human’s immune system is very uncertain thing because there is a countless quantity of different dangerous viruses and bacteria. From ancient times plague and other infectious diseases have been killing people without leaving them any chance to survive.</p>\n                  </div>\n                  <div id=\"reviews\" class=\"container tab-pane fade\">\n                      <br>\n                      <p>There are no reviews for this product.</p>\n                      <button type=\"button\" class=\"btn btn-primary\">Γράψτε μια αξιολόγηση</button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n<my-footer></my-footer>\n\n"

/***/ }),

/***/ "./src/app/components/product-page/product-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent() {
    }
    ProductPageComponent.prototype.ngOnInit = function () {
    };
    ProductPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-page',
            template: __webpack_require__(/*! ./product-page.component.html */ "./src/app/components/product-page/product-page.component.html"),
            styles: [__webpack_require__(/*! ./product-page.component.css */ "./src/app/components/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 32px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\n/* --- Register --- */\r\n\r\nsection.register{\r\n  padding-bottom: 32px;\r\n}\r\n\r\nsection.register h1{\r\n  text-align: center;\r\n  margin-bottom: 32px;\r\n}\r\n\r\nsection.register form h4{\r\n  margin-top:32px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\nsection.register form .submit p{\r\n  display: inline;\r\n}\r\n\r\nsection.register form .form-group input{\r\n  background:\t#E0E0E0;\r\n}\r\n\r\nsection.register form .submit{\r\n  text-align: center;\r\n  margin-top: 32px\r\n}\r\n\r\nsection.register form .submit button{\r\npadding-left: 24px;\r\npadding-right: 24px;\r\n}"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Breadcrumbs -->\n<div class=\"breadcrumbs\">\n    <div class=\"container\">\n            <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\n            Εγγραφή\n    </div>\n</div>\n\n<!-- Register -->\n<section class=\"register\">\n    <div class=\"container\">\n        <h1>Εγγραφή</h1>\n        <p>Εάν έχετε ήδη λογαριασμό, μπορείτε να εισέλθετε <a routerLink=\"/login\">εδώ</a>.</p>\n           \n        <form>\n            <h4>Προσωπικά στοιχεία</h4>\n            <div class=\"form-group\">\n                <label>Όνομα</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Όνομα\" name=\"fname\">\n            </div>\n            <div class=\"form-group\">\n                <label>Επώνυμο</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Επώνυμο\" name=\"lname\">\n            </div>\n            <div class=\"form-group\">\n                <label>E-mail</label>\n                <input type=\"email\" class=\"form-control\"placeholder=\"E-Mail\" name=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label>Τηλέφωνο</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"Τηλέφωνο\" name=\"phone\">\n            </div>\n            <h4>Ο Κωδικός</h4>\n            <div class=\"form-group\">\n                <label>Kωδικός</label>\n                <input type=\"password\" class=\"form-control\"  placeholder=\"Κωδικός\" name=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <label>Επαλήθευση Κωδικού</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Επαλήθευση Κωδικού\" name=\"confirmpassword\">\n            </div>\n            <div class=\"submit\">\n                <p>Συμφωνώ με τους όρους πολιτικής</p>\n                <button type=\"submit\" class=\"btn btn-primary\">Εγγραφή</button>\n            </div>\n           </form>\n    </div>\n</section>\n\n<my-footer></my-footer>\n\n"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/components/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/components/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/components/shop-services/shop-services.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shop-services/shop-services.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Services --- */\r\nsection.services{\r\n    background-color: #04BF00;\r\n    color:#fff;\r\n    text-align: center;\r\n    padding-top: 64px;\r\n    padding-bottom: 64px;\r\n  }\r\nsection.services h3{\r\n    font-size: 18px;\r\n    text-align: left;\r\n  }\r\nsection.services p{\r\n    font-size: 16px;\r\n    text-align: left;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n  }\r\n@media (max-width: 768px){\r\n    section.services p:nth-child(2){\r\n      margin-top: 24px;\r\n      margin-bottom: 24px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/components/shop-services/shop-services.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shop-services/shop-services.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Services -->\n<section  class=\"services\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <h3><i class=\"fas fa-truck fa-lg mr-3\"></i>ΓΡΗΓΟΡΗ ΚΑΙ ΔΩΡΕΑΝ ΔΙΑΝΟΜΗ</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n          <div class=\"col-md-4\">\n              <h3><i class=\"fas fa-lock fa-lg mr-3\"></i> ΑΣΦΑΛΕΙΣ ΠΛΗΡΩΜΕΣ</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n          <div class=\"col-md-4\">\n              <h3><i class=\"far fa-credit-card fa-lg mr-3\"></i>ΕΓΓΥΗΣΗ ΕΠΙΣΤΡΟΦΗΣ ΧΡΗΜΑΤΩΝ</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n      </div>\n  </div>  \n</section>"

/***/ }),

/***/ "./src/app/components/shop-services/shop-services.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shop-services/shop-services.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShopServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopServicesComponent", function() { return ShopServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopServicesComponent = /** @class */ (function () {
    function ShopServicesComponent() {
    }
    ShopServicesComponent.prototype.ngOnInit = function () {
    };
    ShopServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shop-services',
            template: __webpack_require__(/*! ./shop-services.component.html */ "./src/app/components/shop-services/shop-services.component.html"),
            styles: [__webpack_require__(/*! ./shop-services.component.css */ "./src/app/components/shop-services/shop-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopServicesComponent);
    return ShopServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/deal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/deal.service.ts ***!
  \******************************************/
/*! exports provided: DealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealService", function() { return DealService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealService = /** @class */ (function () {
    function DealService(http) {
        this.http = http;
        this.dealsApi = '/api/deals';
    }
    DealService.prototype.getDeals = function () {
        return this.http.get(this.dealsApi);
    };
    DealService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DealService);
    return DealService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kostas\Documents\workspace-sts-3.8.4.RELEASE\SpringEshop\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map