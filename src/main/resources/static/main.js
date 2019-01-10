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
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
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
        path: 'category/:name',
        component: _components_category_page_category_page_component__WEBPACK_IMPORTED_MODULE_3__["CategoryPageComponent"]
    },
    {
        path: 'order/:id',
        component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"]
    },
    {
        path: 'product/:name',
        component: _components_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__["ProductPageComponent"]
    },
    {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, cartService) {
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.title = 'frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.authenticationService.isAuthenticated) {
            this.authenticationService.getAnonymousSession();
            this.cartService.createAnonymousUserCart();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
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
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/products-carousel/products-carousel.component */ "./src/app/components/products-carousel/products-carousel.component.ts");
/* harmony import */ var _components_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/category-sidebar/category-sidebar.component */ "./src/app/components/category-sidebar/category-sidebar.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _interceptors_authenticationStatusChangeInterceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interceptors/authenticationStatusChangeInterceptor */ "./src/app/interceptors/authenticationStatusChangeInterceptor.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_search_sidebar_search_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/search-sidebar/search-sidebar.component */ "./src/app/components/search-sidebar/search-sidebar.component.ts");
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
                _components_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_15__["IndexPageComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"],
                _components_products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_17__["ProductsCarouselComponent"],
                _components_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["CategorySidebarComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_19__["RatingComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_23__["OrderComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"],
                _components_search_sidebar_search_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SearchSidebarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_authenticationStatusChangeInterceptor__WEBPACK_IMPORTED_MODULE_22__["AuthenticationStatusChangeInterceptor"],
                    multi: true
                }
            ],
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

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n/* --- Shopping Cart --- */\r\n\r\nsection.cart{\r\n    margin-top: 16px;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\nsection.cart .table-content{\r\n    margin-top: 64px;\r\n  }\r\n\r\nsection.cart .table-responsive{\r\n    overflow-x: hidden;\r\n  }\r\n\r\nsection.cart table tr td{\r\n    padding-top: 1.25rem;\r\n    padding-bottom: 1.25rem;\r\n  }\r\n\r\nsection.cart table tr, section.cart table tr{\r\n    border-left: 1px solid #dee2e6;\r\n    border-right: 1px solid #dee2e6;\r\n  }\r\n\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n  }\r\n\r\nsection.cart table td input.form-control{\r\n    width: 75%;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.spinner{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 999;\r\n  }\r\n\r\nsection.cart table td a.brand{\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    margin-bottom:8px;\r\n  }\r\n\r\nsection.cart table td a.brand:hover, section.cart table td a.name:hover{\r\n    -webkit-text-decoration-style: none;\r\n            text-decoration-style: none;\r\n  }\r\n\r\nsection.cart table td a.name{\r\n    display: block;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-bottom:8px;\r\n  }\r\n\r\nsection.cart table td a.delete{\r\n    font-size:14px;\r\n    font-weight: 400;\r\n    display: inline-block;\r\n    margin-top: 16px;\r\n  }\r\n\r\nsection.cart a:not([href]):not([tabindex]):hover{\r\n    color:red;\r\n    cursor: pointer;\r\n  }\r\n\r\nsection.cart a:not([href]):not([tabindex]){\r\n    color:red;\r\n  }"

/***/ }),

/***/ "./src/app/components/cart-page/cart-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-page/cart-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n  <div class=\"container\">\r\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/ Καλάθι\r\n  </div>\r\n</div>\r\n\r\n<!-- Shopping Cart -->\r\n<section  class=\"cart\">\r\n  <div class=\"container\">\r\n      <h1 class=\"text-center\">Καλάθι</h1>\r\n      <div *ngIf=\"!isUserCartEmpty()\" class=\"row table-content\">\r\n              <div class=\"col-12\">\r\n                      <div class=\"table-responsive\">\r\n                          <table class=\"table\">\r\n                              <thead class=\"text-center\">\r\n                                  <th>Εικόνα</th>\r\n                                  <th>Προιόν</th>\r\n                                  <th>Ποσότητα</th>\r\n                                  <th>Τιμή</th>\r\n                                  <th>Σύνολο</th>\r\n                              </thead>\r\n      \r\n                              <tbody>\r\n                                  <tr *ngFor=\"let product of cartProducts\">\r\n                                      <td><img class=\"d-block mx-auto\" src=\"{{product.imageUrl}}\" /></td>\r\n                                      <td class=\"text-left\">\r\n                                          <a routerLink=\"/product/{{product.name}}\" class=\"brand\">{{product.brand}}</a>\r\n                                          <a routerLink=\"/product/{{product.name}}\" class=\"name\">{{product.name}}</a>\r\n                                          <a class=\"delete\" (click)=\"deleteProduct(product)\" >Αφαίρεση</a>\r\n                                     </td>\r\n                                      <td>\r\n                                          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.quantity\" (input)=\"updateCart(product)\">\r\n                                      </td>\r\n                                      <td class=\"text-center\">{{product.price}}€</td>\r\n                                      <td class=\"text-center\">{{product.price * product.quantity}}€</td>\r\n                                  </tr>\r\n      \r\n                                  <tr>\r\n                                      <td></td>\r\n                                      <td></td>\r\n                                      <td></td>\r\n                                      <td class=\"text-center\">Σύνολο</td>\r\n                                      <td class=\"text-center\">{{getTotalCartPrice()}}€</td>\r\n                                  </tr>\r\n                              </tbody>\r\n                          </table>\r\n                      </div>\r\n              </div>\r\n              \r\n      </div>\r\n\r\n      <div *ngIf=\"isUserCartEmpty()\" class=\"mt-4\"><p>Το καλάθι σου είναι άδειο!.</p></div>\r\n\r\n      <i *ngIf=\"!isUpdateProductRequestDone\" class=\"fas fa-sync-alt fa-2x fa-spin spinner\" ></i>\r\n      \r\n      <div *ngIf=\"!isUserCartEmpty()\" class=\"row\">\r\n          <div class=\"col-sm-12 col-md-6\">\r\n              <button class=\"btn btn-block btn-light\" (click)=\"navigateToIndex()\">Συνέχισε τις αγορές</button>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-6\">\r\n              <button class=\"btn btn-block btn-primary\" (click)=\"navigateToCheckout()\">Checkout</button>\r\n          </div>\r\n      </div>\r\n      \r\n  </div>  \r\n</section>\r\n\r\n<my-footer></my-footer>\r\n"

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
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function CartPageComponent(router, authenticationService, cartService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.isUpdateProductRequestDone = true;
        this.isUserLoggedIn = false;
        this.isLocalStorageEmpty = localStorage.length === 0;
    }
    CartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = [];
        this.isUserLoggedIn = this.authenticationService.isAuthenticated;
        if (this.isUserLoggedIn && !this.isLocalStorageEmpty) {
            var userId = localStorage.getItem('userid');
            this.httpSubscription = this.cartService.getCartProducts(userId)
                .subscribe(function (cartProducts) { return _this.cartProducts = cartProducts; }, function (error) { return console.log(error); });
        }
        else if (!this.isUserLoggedIn && this.cartService.doesAnonymousUserCartExist) {
            this.cartProducts = this.cartService.getAnonymousUserCart();
        }
    };
    CartPageComponent.prototype.isUserCartEmpty = function () {
        return this.cartProducts.length === 0;
    };
    CartPageComponent.prototype.getTotalCartPrice = function () {
        var totalPrice = 0;
        if (this.cartProducts.length !== 0) {
            this.cartProducts.forEach(function (product) {
                totalPrice += product.price * product.quantity;
            });
        }
        return totalPrice;
    };
    CartPageComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        if (this.isUserLoggedIn) {
            this.cartService.deleteCartProduct(product.userid, product.productid).toPromise()
                .then(function (response) {
                _this.navigationBar.setCartCount(_this.navigationBar.userId);
                _this.removeProductFromArray(product);
            })
                .catch(function (errorResponse) { return console.log(errorResponse); });
        }
        else {
            this.removeProductFromArray(product);
            this.cartService.updateAnonymousUserCart(this.cartProducts);
            this.navigationBar.setAnonymousUserCartCount();
        }
    };
    CartPageComponent.prototype.removeProductFromArray = function (product) {
        var index = this.cartProducts.indexOf(product);
        this.cartProducts.splice(index, 1);
    };
    CartPageComponent.prototype.updateCart = function (product) {
        var _this = this;
        if (product.quantity !== null) {
            console.log('updating cart');
            if (this.isUserLoggedIn) {
                this.isUpdateProductRequestDone = false;
                this.cartService.updateCartProduct(product).toPromise()
                    .then(function (response) {
                    _this.navigationBar.setCartCount(_this.navigationBar.userId);
                    _this.isUpdateProductRequestDone = true;
                })
                    .catch(function (erroResponse) { return _this.isUpdateProductRequestDone = true; });
            }
            else {
                this.cartService.updateUserCartProduct(product);
                this.cartProducts = this.cartService.getAnonymousUserCart();
                this.navigationBar.setAnonymousUserCartCount();
            }
        }
    };
    CartPageComponent.prototype.navigateToIndex = function () {
        this.router.navigate(['']);
    };
    CartPageComponent.prototype.navigateToCheckout = function () {
        this.router.navigate(['/checkout']);
    };
    CartPageComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"]),
        __metadata("design:type", _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"])
    ], CartPageComponent.prototype, "navigationBar", void 0);
    CartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/components/cart-page/cart-page.component.html"),
            styles: [__webpack_require__(/*! ./cart-page.component.css */ "./src/app/components/cart-page/cart-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
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

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\nsection h1{\r\n    text-align: center;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n.sidebar{\r\n    border-right: 1px solid #333333;\r\n}\r\n\r\n.category-content{\r\n    margin-bottom:48px;\r\n}\r\n\r\n.product-content{\r\n    margin-bottom:48px;\r\n}\r\n\r\nul{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left : 50%;\r\n}\r\n\r\n.page-link{\r\n    color:#04BF00;\r\n    background : #fff;\r\n    border-color : #dee2e6;\r\n}\r\n\r\n.page-link:focus{\r\n    box-shadow: none;\r\n}\r\n\r\n.page-item.active .page-link{\r\n    color:white;\r\n    background : #04BF00;\r\n    border-color : #04BF00;\r\n}\r\n\r\n.spinner{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 999;\r\n  }"

/***/ }),

/***/ "./src/app/components/category-page/category-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/category-page/category-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n  <div class=\"container\">\r\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/ {{categoryTitle}}\r\n  </div>\r\n</div>\r\n\r\n<!-- Content -->\r\n<section class=\"container\">\r\n  <h1>{{categoryTitle}}</h1>\r\n  <div class=\"row category-content\">\r\n    <div class=\"col-md-3 sidebar\">\r\n        <category-sidebar [category] = \"category\"></category-sidebar>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <div class=\"mb-5\">\r\n          <span class=\"mx-4\">Προιόντα {{productNumberLow}}-{{productNumberHigh}} από {{productPage?.totalElements}}</span>\r\n          <span>Κατάταξη ως προς:</span>\r\n          <select class=\"ml-2\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onOrderChange($event)\">\r\n            <option *ngFor=\"let option of selectOptions;\" [value]=\"option.value\">{{option.name}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"row product-content\">\r\n            <div class=\"col-sm-6 col-md-6 col-lg-4 mb-5\" *ngFor=\"let productItem of products\">\r\n                 <product-item [product] = \"productItem\"></product-item>\r\n            </div>\r\n        </div>\r\n\r\n        <ul class=\"pagination\">\r\n            <li *ngFor=\"let page of pageNumbers; let i = index;\" [ngClass] = \" i == currentPage ? 'page-item active' : 'page-item'\">\r\n              <a class=\"page-link\" routerLink=\"/category/{{category}}\" [queryParams]=\"{ page: i , fn : 'no', brand : brandParameters, range : rangeParameters}\">{{page}}</a>\r\n            </li>\r\n        </ul> \r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<i *ngIf=\"!isGetCategoryProductsRequestDone\" class=\"fas fa-sync-alt fa-2x fa-spin spinner\" ></i>\r\n\r\n<my-footer></my-footer>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-sidebar/category-sidebar.component */ "./src/app/components/category-sidebar/category-sidebar.component.ts");
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
    function CategoryPageComponent(route, categoryService) {
        this.route = route;
        this.categoryService = categoryService;
        this.currentPage = 0;
        this.brandParameters = [];
        this.rangeParameters = [];
        this.isGetCategoryProductsRequestDone = true;
        this.isClickFromNavigationBar = false;
        this.greekCategories = {
            vitamins: 'Βιταμίνες',
            minerals: 'Μέταλλα',
            fishoils: 'Ιχθυέλαια',
            superfoods: 'Υπερτροφές',
            fragrances: 'Αρώματα',
            shampoos: 'Σαμπουάν'
        };
        this.selectOptions = [
            {
                name: 'Αύξουσα Τιμή',
                value: 'asc'
            },
            {
                name: 'Φθίνουσα Τιμή',
                value: 'desc'
            }
        ];
    }
    CategoryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramRouteSubscription = this.route.params.subscribe(function (params) {
            _this.isGetCategoryProductsRequestDone = false;
            _this.brandParameters = [];
            _this.selectedValue = 'asc';
            _this.category = params['name'];
            _this.currentPage = _this.route.snapshot.queryParams['page'];
            _this.categoryTitle = params['name'] === 'fish-oils' ? _this.greekCategories['fishoils'] : _this.greekCategories[params['name']];
            _this.httpSubscription = _this.categoryService.getCategoryProductsPage(_this.category, _this.currentPage, _this.selectedValue, _this.brandParameters, _this.rangeParameters).subscribe(function (productPage) {
                _this.pageNumbers = [];
                _this.productPage = productPage;
                _this.products = productPage.content;
                _this.setProductRange(_this.productPage.number, _this.productPage.numberOfElements);
                _this.isGetCategoryProductsRequestDone = true;
                _this.initializePageNumberArray(_this.pageNumbers, _this.productPage.totalPages);
            }, function (error) {
                console.log(error);
                _this.isGetCategoryProductsRequestDone = true;
            });
        });
        this.queryParamRouteSubscription = this.route.queryParams.subscribe(function (queryParams) {
            _this.isGetCategoryProductsRequestDone = false;
            var oldCategory = _this.category;
            var oldPage = _this.currentPage;
            var isClickFromNavigationBarParam = queryParams['fn'] === 'yes';
            _this.currentPage = queryParams['page'];
            var oldBrandParametersLength = _this.brandParameters.length;
            var newBrandParametersLength;
            if (queryParams['brand'] !== undefined) {
                _this.brandParameters = queryParams['brand'];
                newBrandParametersLength = _this.brandParameters.length;
            }
            var didBrandParametersChange = false;
            if (newBrandParametersLength !== undefined) {
                didBrandParametersChange = oldBrandParametersLength !== newBrandParametersLength ? true : false;
            }
            var oldRangeParametersLength = _this.rangeParameters.length;
            var newRangeParametersLength;
            if (queryParams['range'] !== undefined) {
                _this.rangeParameters = queryParams['range'];
                newRangeParametersLength = _this.rangeParameters.length;
            }
            var didRangeParametersChange = false;
            if (newRangeParametersLength !== undefined) {
                didRangeParametersChange = oldRangeParametersLength !== newRangeParametersLength ? true : false;
            }
            _this.category = _this.route.snapshot.params['name'];
            _this.categoryTitle = _this.category === 'fish-oils' ? _this.greekCategories['fishoils'] : _this.greekCategories[_this.category];
            if (oldCategory === _this.category && (_this.currentPage != oldPage || didBrandParametersChange || didRangeParametersChange)) {
                if (isClickFromNavigationBarParam && (didBrandParametersChange || didRangeParametersChange) && (_this.brandParameters.length === 0 && _this.rangeParameters.length === 0)) {
                    _this.sidebar.updateSidebar();
                }
                _this.httpSubscription2 = _this.categoryService.getCategoryProductsPage(_this.category, _this.currentPage, _this.selectedValue, _this.brandParameters, _this.rangeParameters).subscribe(function (productPage) {
                    _this.pageNumbers = [];
                    _this.productPage = productPage;
                    _this.products = productPage.content;
                    _this.setProductRange(_this.productPage.number, _this.productPage.numberOfElements);
                    _this.isGetCategoryProductsRequestDone = true;
                    _this.initializePageNumberArray(_this.pageNumbers, _this.productPage.totalPages);
                }, function (error) {
                    console.log(error);
                    _this.isGetCategoryProductsRequestDone = true;
                });
            }
        });
    };
    CategoryPageComponent.prototype.onOrderChange = function (order) {
        var _this = this;
        this.isGetCategoryProductsRequestDone = false;
        this.categoryService.getCategoryProductsPage(this.category, this.currentPage, order, this.brandParameters, this.rangeParameters).toPromise()
            .then(function (productPage) {
            _this.productPage = productPage;
            _this.products = productPage.content;
            _this.isGetCategoryProductsRequestDone = true;
        })
            .catch(function (errorResponse) {
            console.log(errorResponse);
            _this.isGetCategoryProductsRequestDone = true;
        });
    };
    CategoryPageComponent.prototype.initializePageNumberArray = function (pageNumbers, pageCount) {
        for (var i = 0; i < pageCount; i++) {
            pageNumbers[i] = i + 1;
        }
    };
    CategoryPageComponent.prototype.setProductRange = function (pageNumber, pageNumberOfElements) {
        this.productNumberLow = pageNumber * 6 + 1;
        this.productNumberHigh = this.productNumberLow + pageNumberOfElements - 1;
    };
    CategoryPageComponent.prototype.ngOnDestroy = function () {
        this.paramRouteSubscription.unsubscribe();
        this.queryParamRouteSubscription.unsubscribe();
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
        if (this.httpSubscription2 !== undefined)
            this.httpSubscription2.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["CategorySidebarComponent"]),
        __metadata("design:type", _category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["CategorySidebarComponent"])
    ], CategoryPageComponent.prototype, "sidebar", void 0);
    CategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'category-page',
            template: __webpack_require__(/*! ./category-page.component.html */ "./src/app/components/category-page/category-page.component.html"),
            styles: [__webpack_require__(/*! ./category-page.component.css */ "./src/app/components/category-page/category-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryPageComponent);
    return CategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/components/category-sidebar/category-sidebar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/category-sidebar/category-sidebar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    margin-top: 8px;\r\n    margin-bottom: 48px;\r\n}\r\n\r\nspan{\r\n    margin-left: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/category-sidebar/category-sidebar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/category-sidebar/category-sidebar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 >Εταιρίες</h4>\r\n<ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let currentBrand of numberOfProductsPerBrand\">\r\n        <input type=\"checkbox\" class=\"mr-2\" value=\"{{currentBrand?.brand}}\" [(ngModel)]=\"currentBrand.checked\" (change)=\"onSelectedBrand()\" [disabled] = \"currentBrand?.number === 0\">{{currentBrand?.brand}}\r\n        <span>({{currentBrand?.number}})</span>\r\n      </li>\r\n</ul>\r\n\r\n<h4>Τιμή</h4>\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\"  *ngFor=\"let priceRange of numberOfProductsPerPriceRange\">\r\n      <input type=\"checkbox\" class=\"mr-2\" value=\"{{priceRange?.rangeId}}\" [(ngModel)]=\"priceRange.checked\" (change)=\"onSelectedPriceRange()\" [disabled] = \"priceRange?.number === 0\">{{priceRange?.min}}€ - {{priceRange?.max}}€\r\n      <span>({{priceRange?.number}})</span>\r\n    </li>\r\n</ul>\r\n\r\n<!-- <h4>Αξιολογήσεις</h4>\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let currentRating of ratings\" class=\"list-group-item\">\r\n      <rating [uncheckedStars] = \"currentRating.uncheckedStars\"></rating>\r\n  </li>\r\n</ul>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/components/category-sidebar/category-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/category-sidebar/category-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategorySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySidebarComponent", function() { return CategorySidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategorySidebarComponent = /** @class */ (function () {
    function CategorySidebarComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.selectedBrands = [];
        this.selectedPriceRanges = [];
    }
    CategorySidebarComponent.prototype.ngOnInit = function () {
    };
    CategorySidebarComponent.prototype.ngOnChanges = function (changes) {
        this.updateSidebar();
    };
    CategorySidebarComponent.prototype.updateSidebar = function () {
        this.selectedBrands = [];
        this.selectedPriceRanges = [];
        this.getPriceRanges();
        this.getBrands();
    };
    CategorySidebarComponent.prototype.getBrands = function () {
        var _this = this;
        this.numberOfProductsPerBrand = [];
        this.categoryService.getCategoryBrands(this.category).toPromise()
            .then(function (brands) {
            _this.categoryBrands = brands;
            _this.httpSubscription2 = _this.categoryService.getCategoryProductsNumberByBrand(_this.category, _this.categoryBrands, _this.selectedPriceRanges).subscribe(function (item) {
                _this.numberOfProductsPerBrand.push(item);
                _this.numberOfProductsPerBrand.sort(function (a, b) {
                    var aIndex = brands.findIndex(function (brand) { return brand.name === a.brand; });
                    var bIndex = brands.findIndex(function (brand) { return brand.name === b.brand; });
                    return aIndex - bIndex;
                });
            }, function (error) {
                console.log(error);
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    CategorySidebarComponent.prototype.updateBrands = function () {
        var _this = this;
        var numberOfProdsPerBrandArray = [];
        this.httpSubscription4 = this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands, this.selectedPriceRanges)
            .subscribe(function (item) {
            item.checked = _this.numberOfProductsPerBrand[_this.numberOfProductsPerBrand.findIndex(function (x) { return x.brand === item.brand; })].checked;
            numberOfProdsPerBrandArray.push(item);
            numberOfProdsPerBrandArray.sort(function (a, b) {
                var aIndex = _this.categoryBrands.findIndex(function (brand) { return brand.name === a.brand; });
                var bIndex = _this.categoryBrands.findIndex(function (brand) { return brand.name === b.brand; });
                return aIndex - bIndex;
            });
            if (numberOfProdsPerBrandArray.length === _this.categoryBrands.length) {
                _this.numberOfProductsPerBrand = numberOfProdsPerBrandArray;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CategorySidebarComponent.prototype.getPriceRanges = function () {
        var _this = this;
        this.initializePriceRanges();
        this.numberOfProductsPerPriceRange = [];
        this.httpSubscription = this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges, this.selectedBrands).subscribe(function (range) {
            _this.numberOfProductsPerPriceRange.push(range);
            _this.numberOfProductsPerPriceRange.sort(function (a, b) {
                var aIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === a.rangeId; });
                var bIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === b.rangeId; });
                return aIndex - bIndex;
            });
        }, function (error) {
            console.log(error);
        });
    };
    CategorySidebarComponent.prototype.updatePriceRanges = function () {
        var _this = this;
        this.initializePriceRanges();
        var numberOfProdsArray = [];
        this.httpSubscription3 = this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges, this.selectedBrands)
            .subscribe(function (range) {
            range.checked = _this.numberOfProductsPerPriceRange[_this.numberOfProductsPerPriceRange.findIndex(function (x) { return x.rangeId === range.rangeId; })].checked;
            numberOfProdsArray.push(range);
            numberOfProdsArray.sort(function (a, b) {
                var aIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === a.rangeId; });
                var bIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === b.rangeId; });
                return aIndex - bIndex;
            });
            if (numberOfProdsArray.length === 4) {
                _this.numberOfProductsPerPriceRange = numberOfProdsArray;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CategorySidebarComponent.prototype.initializeRatings = function () {
        this.ratings = [];
        for (var i = 0; i < 5; i++) {
            var rating = {};
            rating.uncheckedStars = i;
            this.ratings.push(rating);
        }
    };
    CategorySidebarComponent.prototype.initializePriceRanges = function () {
        this.priceRanges = [];
        var zeroToTen = {};
        var tenToTwenty = {};
        var TwentyToThirty = {};
        var ThirtyToFifty = {};
        zeroToTen.id = 1;
        tenToTwenty.id = 2;
        TwentyToThirty.id = 3;
        ThirtyToFifty.id = 4;
        this.priceRanges.push(zeroToTen);
        this.priceRanges.push(tenToTwenty);
        this.priceRanges.push(TwentyToThirty);
        this.priceRanges.push(ThirtyToFifty);
        this.priceRanges.sort(function (a, b) { return a.id - b.id; });
    };
    CategorySidebarComponent.prototype.onSelectedBrand = function () {
        this.selectedBrands = this.numberOfProductsPerBrand
            .filter(function (brandOption) { return brandOption.checked; })
            .map(function (brandOption) { return brandOption.brand; });
        this.router.navigate(['/category', this.category], { queryParams: { page: 0, fn: 'no', brand: this.selectedBrands, range: this.selectedPriceRanges } });
        this.updatePriceRanges();
    };
    CategorySidebarComponent.prototype.onSelectedPriceRange = function () {
        this.selectedPriceRanges = this.numberOfProductsPerPriceRange
            .filter(function (priceRangeOption) { return priceRangeOption.checked; })
            .map(function (priceRangeOption) { return priceRangeOption.rangeId; });
        this.router.navigate(['/category', this.category], { queryParams: { page: 0, fn: 'no', brand: this.selectedBrands, range: this.selectedPriceRanges } });
        this.updateBrands();
    };
    CategorySidebarComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
        if (this.httpSubscription2 !== undefined)
            this.httpSubscription2.unsubscribe();
        if (this.httpSubscription3 !== undefined)
            this.httpSubscription3.unsubscribe();
        if (this.httpSubscription4 !== undefined)
            this.httpSubscription4.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CategorySidebarComponent.prototype, "category", void 0);
    CategorySidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'category-sidebar',
            template: __webpack_require__(/*! ./category-sidebar.component.html */ "./src/app/components/category-sidebar/category-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./category-sidebar.component.css */ "./src/app/components/category-sidebar/category-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategorySidebarComponent);
    return CategorySidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout-page/checkout-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/checkout-page/checkout-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n/* --- Checkout --- */\r\n\r\nsection.checkout{\r\n    margin-top: 16px;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\nsection.checkout .form-group input{\r\n    background:\t#E0E0E0;\r\n  }\r\n\r\nsection.checkout table tbody tr td.radio-button{\r\n    padding-right: 0;\r\n  }\r\n\r\nsection.checkout table tbody tr td.shipping-price{\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    text-align: left;\r\n  }\r\n\r\nsection.checkout table tbody tr td.shipping-method{\r\n    padding-left: 0;\r\n  }\r\n\r\nsection.checkout div.billing-method{\r\n    padding: 0.75rem;\r\n    border: 1px solid #E0E0E0;\r\n  }\r\n\r\nsection.checkout div.billing-method span{\r\n    padding-left: 24px;\r\n  }\r\n\r\nsection.checkout div.same-address{\r\n    padding-top: 16px;\r\n    padding-bottom: 16px;\r\n  }\r\n\r\nsection.checkout .summary div{\r\n    margin-bottom: 16px;\r\n  }\r\n\r\nsection.checkout .summary div span.title{\r\n    float: left;\r\n  }\r\n\r\nsection.checkout .summary div span.price{\r\n    float: right;\r\n  }\r\n\r\nsection.checkout .summary #total{\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\nsection.checkout .summary div::after{\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\nsection.checkout h5{\r\n    text-align: center;\r\n    padding: 12px;\r\n    margin-top: 24px;\r\n    margin-bottom: 0;\r\n    background-color: #E0E0E0;\r\n  }\r\n\r\nsection.checkout div.cart-item{\r\n    border: 1.5px solid #E0E0E0;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    margin-left: 0 ;\r\n    margin-right : 0 ;\r\n  }\r\n\r\nsection.checkout div.cart-item div.product-name{\r\n    font-weight: 300;\r\n    font-size: 18px;\r\n  }\r\n\r\nsection.checkout div.cart-item div.product-price{\r\n    font-weight: 600;\r\n  }\r\n\r\nsection.checkout div.cart-item div.product-quantity span{\r\n    font-weight: 600;\r\n  }\r\n\r\n.spinner{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 999;\r\n  }\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/checkout-page/checkout-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/checkout-page/checkout-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n  <div class=\"container\">\r\n      <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\r\n      Ολοκλήρωση Αγοράς\r\n  </div>\r\n</div>\r\n\r\n<!-- Checkout -->\r\n<section  class=\"checkout\">\r\n<div class=\"container\">\r\n  <h1 class=\"text-center\">Ολοκλήρωση Αγοράς</h1>\r\n\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-sm-7\">\r\n        <form (ngSubmit)=\"f.form.valid && onSubmit()\" id=\"ngForm\" #f=\"ngForm\" novalidate>\r\n            <h4>Email</h4>\r\n\r\n             <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"orderDetails.email\" #email=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted &&  email.invalid}\" required email>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"email.errors.required\">Πρέπει να συμπληρώσετε το email</div>\r\n                    <div *ngIf=\"email.errors.email\">Το email πρέπει να έχει τη σωστή μορφή</div>\r\n                </div>\r\n            </div>\r\n\r\n            <h4 class=\"mt-4 mb-3\">Διεύθυνση αποστολής</h4>\r\n\r\n            <div class=\"form-group\">\r\n               <label>Όνομα</label>\r\n               <input type=\"text\" name=\"firstname\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.first_name\" #firstname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && firstname.invalid}\" required minlength=\"2\">\r\n               <div *ngIf=\"f.submitted && firstname.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"firstname.errors.required\">Πρέπει να συμπληρώσετε το όνομα</div>\r\n                <div *ngIf=\"firstname.errors.minlength\">Το όνομα πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n               <label>Επίθετο</label>\r\n               <input type=\"text\" name=\"lastname\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.last_name\" #lastname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && lastname.invalid}\" required minlength=\"2\">\r\n               <div *ngIf=\"f.submitted && lastname.invalid\" class=\"invalid-feedback\">\r\n                 <div *ngIf=\"lastname.errors.required\">Πρέπει να συμπληρώσετε το επίθετο</div>\r\n                 <div *ngIf=\"lastname.errors.minlength\">Το επίθετο πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n               </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n               <label>Διεύθυνση</label>\r\n               <input type=\"text\" name=\"street\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.street\" #street=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && street.invalid}\" required minlength=\"2\">\r\n               <div *ngIf=\"f.submitted && street.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"street.errors.required\">Πρέπει να συμπληρώσετε την διέυθυνση</div>\r\n                <div *ngIf=\"street.errors.minlength\">Η διεύθυνση πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n               <label>Ταχυδρομικός κώδικας</label>\r\n               <input type=\"number\" name=\"postcode\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.post_code\" #postcode=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && postcode.invalid}\" required>\r\n               <div *ngIf=\"f.submitted && postcode.invalid\" class=\"invalid-feedback\">\r\n                 <div *ngIf=\"postcode.errors.required\">Πρέπει να συμπληρώσετε τον ταχυδρομικό κώδικα</div>\r\n              </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n               <label>Πόλη</label>\r\n               <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.city\" #city=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && city.invalid}\" required minlength=\"2\">\r\n               <div *ngIf=\"f.submitted && city.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"city.errors.required\">Πρέπει να συμπληρώσετε την πόλη</div>\r\n                <div *ngIf=\"city.errors.minlength\">Η πόλη πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n               <label>Τηλέφωνο</label>\r\n               <input type=\"number\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"orderDetails.shipping_info.phone\" #phone=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && phone.invalid}\" required tel>\r\n               <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"phone.errors.required\">Πρέπει να συμπληρώσετε το τηλέφωνο</div>\r\n                <div *ngIf=\"phone.errors.phone\">Το τηλέφωνο πρέπει να έχει τη σωστή μορφή</div>\r\n               </div>\r\n           </div>\r\n\r\n           <h4 class=\"mt-4 mb-3\">Μέθοδοι αποστολής</h4>\r\n\r\n           <table class=\"table\">\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"radio-button\"><input type=\"radio\" name=\"shipping-cost\" [checked] =\"isCourierChecked\" (change)=\"changeShippingCost()\"></td>\r\n                        <td class=\"shipping-price\">2€</td>\r\n                        <td class=\"shipping-method\">Courier</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"radio-button\"><input type=\"radio\" name=\"shipping-cost\" [checked] =\"!isCourierChecked\" (change)=\"changeShippingCost()\"></td>\r\n                        <td class=\"shipping-price\">0€</td>\r\n                        <td class=\"shipping-method\">Παραλαβή από το κατάστημα</td>\r\n                    </tr>\r\n                </tbody>\r\n           </table>\r\n\r\n           <h4 class=\"mt-4 mb-3\">Μέθοδοι πληρωμής</h4>\r\n\r\n           <div class=\"billing-method\"><input type=\"radio\" checked=\"checked\"><span>Αντικαταβολή</span></div>\r\n\r\n           <h4 class=\"mt-4 mb-3\">Διεύθυνση πληρωμής</h4>\r\n\r\n           <div class=\"same-address\"><input type=\"checkbox\" [checked] = \"orderDetails.isShippingAddressSameWithBillingAddress\" \r\n            (change)=\"changeisShippingAddressSameWithBillingAddress()\"> \r\n            Η διεύθυνση πληρωμής είναι ίδια με την διεύθυνση αποστολής</div>\r\n\r\n            <section *ngIf=\"!orderDetails.isShippingAddressSameWithBillingAddress\" class=\"billing-address\">\r\n                    <div class=\"form-group\">\r\n                      <label>Όνομα</label>\r\n                      <input type=\"text\" name=\"bfirstname\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.first_name\" #bfirstname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && bfirstname.invalid}\" required minlength=\"2\">\r\n                      <div *ngIf=\"f.submitted && bfirstname.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"bfirstname.errors.required\">Πρέπει να συμπληρώσετε το όνομα</div>\r\n                        <div *ngIf=\"bfirstname.errors.minlength\">Το όνομα πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                      </div>\r\n                    </div>\r\n            \r\n                    <div class=\"form-group\">\r\n                      <label>Επίθετο</label>\r\n                      <input type=\"text\" name=\"blastname\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.last_name\" #blastname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && blastname.invalid}\" required minlength=\"2\">\r\n                      <div *ngIf=\"f.submitted && blastname.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"blastname.errors.required\">Πρέπει να συμπληρώσετε το επίθετο</div>\r\n                        <div *ngIf=\"blastname.errors.minlength\">Το επίθετο πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                      </div>\r\n                    </div>\r\n            \r\n                    <div class=\"form-group\">\r\n                      <label>Διεύθυνση</label>\r\n                      <input type=\"text\" name=\"bstreet\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.street\" #bstreet=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && bstreet.invalid}\" required minlength=\"2\">\r\n                      <div *ngIf=\"f.submitted && bstreet.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"bstreet.errors.required\">Πρέπει να συμπληρώσετε την διέυθυνση</div>\r\n                        <div *ngIf=\"bstreet.errors.minlength\">Η διεύθυνση πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                      </div>\r\n                    </div>\r\n            \r\n                    <div class=\"form-group\">\r\n                      <label>Ταχυδρομικός κώδικας</label>\r\n                       <input type=\"number\" name=\"bpostcode\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.post_code\" #bpostcode=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && bpostcode.invalid}\" required>\r\n                       <div *ngIf=\"f.submitted && bpostcode.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"bpostcode.errors.required\">Πρέπει να συμπληρώσετε τον ταχυδρομικό κώδικα</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Πόλη</label>\r\n                        <input type=\"text\" name=\"bcity\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.city\" #bcity=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && bcity.invalid}\" required minlength=\"2\">\r\n                        <div *ngIf=\"f.submitted && bcity.invalid\" class=\"invalid-feedback\">\r\n                         <div *ngIf=\"bcity.errors.required\">Πρέπει να συμπληρώσετε την πόλη</div>\r\n                         <div *ngIf=\"bcity.errors.minlength\">Η πόλη πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                       </div>\r\n                     </div>\r\n            \r\n                    <div class=\"form-group\">\r\n                      <label>Τηλέφωνο</label>\r\n                      <input type=\"number\" name=\"bphone\" class=\"form-control\" [(ngModel)]=\"orderDetails.billing_info.phone\" #bphone=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && bphone.invalid}\" required tel>\r\n                      <div *ngIf=\"f.submitted && bphone.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"bphone.errors.required\">Πρέπει να συμπληρώσετε το τηλέφωνο</div>\r\n                        <div *ngIf=\"bphone.errors.phone\">Το τηλέφωνο πρέπει να έχει τη σωστή μορφή</div>\r\n                      </div>\r\n                    </div>\r\n            </section>\r\n        </form>   \r\n\r\n    </div>\r\n\r\n    <div class=\"col-sm-5\">\r\n        <h4 class=\"text-center\">Περίληψη Παραγγελίας</h4>\r\n\r\n        <div class=\"summary mt-4\">\r\n            <div><span class=\"title \">Υποσύνολο</span> <span class=\"price\">{{getTotalCartPrice()}}€</span></div>\r\n            <div><span class=\"title\">Μεταφορικά</span> <span class=\"price\">{{shippingCost}}€</span></div>\r\n            <div id=\"total\"><span class=\"title\">Συνολο</span> <span class=\"price\">{{getTotalCartPrice() + shippingCost}}€</span></div>\r\n        </div>\r\n        <button class=\"btn btn-block btn-primary mt-2\" form=\"ngForm\" [disabled] = \"!isAddOrderRequestDone\" >Ολοκλήρωση αγοράς</button>\r\n\r\n        <h5>Καλάθι</h5>\r\n\r\n        <div *ngFor=\"let cartProduct of cartProducts\" class=\"row cart-item\">\r\n            <div class=\"col-sm-4\">\r\n                <img class=\"d-block mx-auto\" src=\"{{cartProduct?.imageUrl}}\" alt=\"img\"/>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n                <div class=\"product-name\">{{cartProduct?.name}}</div>\r\n                <div class=\"product-price\">{{cartProduct?.price}} €</div>\r\n                <div class=\"product-quantity\">Ποσότητα : <span>{{cartProduct?.quantity}}</span></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <i *ngIf=\"!isAddOrderRequestDone\" class=\"fas fa-sync-alt fa-2x fa-spin spinner\" ></i>\r\n\r\n</div>  \r\n</section>\r\n\r\n<my-footer></my-footer>\r\n"

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
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function CheckoutPageComponent(authenticationService, cartService, checkoutService, router) {
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.router = router;
        this.orderDetails = {};
        this.isSameAddressChecked = true;
        this.isCourierChecked = true;
        this.isAddOrderRequestDone = true;
        this.isUserLoggedIn = false;
        this.isLocalStorageEmpty = localStorage.length === 0;
    }
    CheckoutPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderDetails.isShippingAddressSameWithBillingAddress = true;
        this.orderDetails.shipping_info = {};
        this.orderDetails.billing_info = {};
        this.shippingCost = this.isCourierChecked ? 2 : 0;
        this.cartProducts = [];
        this.isUserLoggedIn = this.authenticationService.isAuthenticated;
        if (this.isUserLoggedIn && !this.isLocalStorageEmpty) {
            var userId = localStorage.getItem('userid');
            this.httpSubscription = this.cartService.getCartProducts(userId).subscribe(function (cartProducts) { return _this.cartProducts = cartProducts; });
        }
        else if (!this.isUserLoggedIn && this.cartService.doesAnonymousUserCartExist) {
            this.cartProducts = this.cartService.getAnonymousUserCart();
        }
    };
    CheckoutPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isAddOrderRequestDone = false;
        this.orderDetails.cartProducts = this.cartProducts;
        this.orderDetails.shipping_info.method = this.isCourierChecked ? 'Courier' : 'Takeaway';
        this.orderDetails.billing_info.method = 'Cash On Delivery';
        if (this.orderDetails.isShippingAddressSameWithBillingAddress)
            this.copyShippingInfoToBillingInfo();
        this.checkoutService.addOrder(this.orderDetails).toPromise()
            .then(function (order) {
            _this.isAddOrderRequestDone = true;
            _this.checkoutService.order = order;
            _this.checkoutService.setOrderProducts(_this.cartProducts);
            _this.deleteUserCart();
            _this.router.navigate(['/order', order.id]);
        })
            .catch(function (errorResponse) {
            console.log(errorResponse);
            _this.isAddOrderRequestDone = true;
        });
    };
    CheckoutPageComponent.prototype.deleteUserCart = function () {
        if (this.isUserLoggedIn) {
            var userId = localStorage.getItem('userid');
            this.cartService.deleteUserCart(Number(userId)).toPromise()
                .then()
                .catch(function (errorResponse) { return console.log(errorResponse); });
        }
        else {
            this.cartService.updateAnonymousUserCart([]);
        }
    };
    CheckoutPageComponent.prototype.copyShippingInfoToBillingInfo = function () {
        this.orderDetails.billing_info.first_name = this.orderDetails.shipping_info.first_name;
        this.orderDetails.billing_info.last_name = this.orderDetails.shipping_info.last_name;
        this.orderDetails.billing_info.street = this.orderDetails.shipping_info.street;
        this.orderDetails.billing_info.post_code = this.orderDetails.shipping_info.post_code;
        this.orderDetails.billing_info.city = this.orderDetails.shipping_info.city;
        this.orderDetails.billing_info.phone = this.orderDetails.shipping_info.phone;
    };
    CheckoutPageComponent.prototype.getTotalCartPrice = function () {
        var totalPrice = 0;
        if (this.cartProducts.length !== 0) {
            this.cartProducts.forEach(function (product) {
                totalPrice += product.price * product.quantity;
            });
        }
        return totalPrice;
    };
    CheckoutPageComponent.prototype.changeShippingCost = function () {
        this.isCourierChecked = !this.isCourierChecked;
        this.shippingCost = this.isCourierChecked ? 2 : 0;
    };
    CheckoutPageComponent.prototype.changeisShippingAddressSameWithBillingAddress = function () {
        this.orderDetails.isShippingAddressSameWithBillingAddress = !this.orderDetails.isShippingAddressSameWithBillingAddress;
        if (!this.orderDetails.isShippingAddressSameWithBillingAddress) {
            this.orderDetails.billing_info = {};
        }
    };
    CheckoutPageComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
    };
    CheckoutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkout-page',
            template: __webpack_require__(/*! ./checkout-page.component.html */ "./src/app/components/checkout-page/checkout-page.component.html"),
            styles: [__webpack_require__(/*! ./checkout-page.component.css */ "./src/app/components/checkout-page/checkout-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<!-- Discount Carousel -->\n<section  class=\"carousel-section\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div id=\"carousel-discounts\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ul class=\"carousel-indicators\">\n                  <li data-target=\"#carousel-discounts\" *ngFor = \"let deal of deals; let i = index; let isFirstItem = first\" \n                      [attr.data-slide-to] = \"i\" [ngClass] = \"{'active' : isFirstItem}\">\n                  </li>\n              </ul>\n                      \n              <div class=\"carousel-inner\">\n                  <div *ngFor = \"let deal of deals; let isFirstItem = first\" [ngClass] = \" isFirstItem ? 'carousel-item active' : 'carousel-item'\">\n                      <img class=\"img-fluid\" src=\"{{deal?.imageUrl}}\" alt=\"\">\n                  </div>\n              </div>\n      \n              <a class=\"carousel-control-prev\" href=\"#carousel-discounts\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\"></span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#carousel-discounts\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\"></span>\n              </a>\n          </div>\n      </div>\n      \n  </div>  \n</section>\n"

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
        this.httpSubscription = this.dealService.getDeals()
            .subscribe(function (deals) { return _this.deals = deals; }, function (error) { return console.log(error); });
    };
    DiscountCarouselComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
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

module.exports = "<navigation-bar></navigation-bar>\n<discount-carousel></discount-carousel>\n<products-carousel [carouselType] = \"popularCarouselType\" [carouselTitle] = \"popularProductCarouselTitle\" [carouselHtmlId] = \"popularProductCarouselHtmlId\" ></products-carousel>\n<products-carousel [carouselType] = \"newCarouselType\" [carouselTitle] = \"newProductCarouselTitle\" [carouselHtmlId] = \"newProductCarouselHtmlId\"></products-carousel>\n<shop-services></shop-services>\n<my-footer></my-footer>\n"

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
        this.popularProductCarouselTitle = 'Δημοφιλή Προιόντα';
        this.newProductCarouselTitle = 'Νέα Προιόντα';
        this.popularProductCarouselHtmlId = 'carousel-popular-products';
        this.newProductCarouselHtmlId = 'carousel-new-products';
        this.popularCarouselType = 'favorite';
        this.newCarouselType = 'new';
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

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n/* --- Login --- */\r\n\r\nsection.login{\r\n  padding-bottom: 32px;\r\n}\r\n\r\nsection.login h1{\r\n  text-align: center;\r\n  margin-bottom: 32px;\r\n}\r\n\r\nsection.login form .form-group input{\r\n  background:\t#E0E0E0;\r\n}\r\n\r\nsection.login form .submit{\r\n  text-align: center;\r\n  margin-top: 32px\r\n}\r\n\r\nsection.login form .submit button{\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  margin-right: 16px;\r\n}\r\n\r\nsection.login form .submit a{\r\n  text-decoration: underline;\r\n}\r\n\r\nsection.login form .submit a:hover{\r\n  text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n    <div class=\"container\">\r\n        <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\r\n        Είσοδος\r\n    </div>\r\n</div>\r\n\r\n<section *ngIf=\"isRedirectedFromRegister\" class=\"my-4\">\r\n    <div class=\"container\">\r\n        <div  class=\"alert alert-success text-center\">\r\n             Η εγγραφή πραγματοποιήθηκε επιτυχώς\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Login -->\r\n<section class=\"login\">\r\n        <div class=\"container\">\r\n            <h1>Είσοδος</h1>\r\n\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label>E-mail</label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"userCredentials.email\" #email = \"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && (email.invalid || emailDoesNotExist)}\" required email>\r\n                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"email.errors.required\">Πρέπει να συμπληρώσετε το email</div>\r\n                        <div *ngIf=\"email.errors.email\">Το email πρέπει να έχει τη σωστή μορφή</div>\r\n                    </div>\r\n                    <div *ngIf=\"emailDoesNotExist\" class=\"invalid-feedback\">{{emailDoesNotExistErrorMessage}}</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Kωδικός</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userCredentials.password\" #password = \"ngModel\" [ngClass]=\"{'is-invalid': f.submitted && (password.invalid || passwordIsNotCorrect)}\" required>\r\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"password.errors.required\">Πρέπει να πληκτρολογήσετε έναν κωδικό</div>\r\n                    </div>\r\n                    <div *ngIf=\"passwordIsNotCorrect\" class=\"invalid-feedback\">{{passwordIsNotCorrectErrorMessage}}</div>\r\n                </div>\r\n\r\n                <div class=\"submit\">\r\n                    <button class=\"btn btn-primary\">Είσοδος</button>\r\n                </div>\r\n               </form>\r\n        </div>\r\n</section>\r\n\r\n<my-footer></my-footer>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.emailDoesNotExistErrorMessage = 'Δεν υπάρχει λογαριασμός με αυτό το email';
        this.passwordIsNotCorrectErrorMessage = 'Ο κωδικός δεν είναι σωστός';
        this.genericError = 'Κάτι πήγε στραβά';
        this.emailDoesNotExist = false;
        this.passwordIsNotCorrect = false;
        this.isRedirectedFromRegister = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCredentials = {};
        this.routeSubscription = this.route.queryParams.subscribe(function (params) {
            if (params['redirect'] === 'register')
                _this.isRedirectedFromRegister = true;
        });
    };
    LoginPageComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.login(this.userCredentials)];
                    case 1:
                        authenticationMessage = _a.sent();
                        if (authenticationMessage === this.emailDoesNotExistErrorMessage) {
                            this.emailDoesNotExist = true;
                            this.passwordIsNotCorrect = false;
                        }
                        else if (authenticationMessage === this.passwordIsNotCorrectErrorMessage) {
                            this.emailDoesNotExist = false;
                            this.passwordIsNotCorrect = true;
                        }
                        else if (authenticationMessage === this.genericError) {
                            this.emailDoesNotExist = false;
                            this.passwordIsNotCorrect = false;
                        }
                        else {
                            this.router.navigate(['']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscription !== undefined)
            this.routeSubscription.unsubscribe();
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/components/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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

module.exports = "<!-- Footer -->\r\n<footer  class=\"footer\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n              <h3>Πληροφοριες</h3>\r\n              <div class=\"menu\">\r\n                  <a>Η Εταιρία μας</a>\r\n                  <a>Όροι Χρήσης</a>\r\n                  <a>Ασφάλεια συναλλαγών</a>\r\n                  <a>Προστασία Προσωπικών Δεδομένων</a>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n              <h3>Παραγγελιες</h3>\r\n              <div class=\"menu\">\r\n                  <a>Τρόποι Παραγγελίας</a>\r\n                  <a>Τρόποι Πληρωμής</a>\r\n                  <a>Τρόποι Αποστολής</a>\r\n                  <a>Επιστροφές Προιόντων</a>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n              <h3>Επικοινωνια</h3>\r\n              <div class=\"menu\">\r\n                  <a><i class=\"fas fa-map-marker-alt mr-2\"></i>My Company Glasgow D04 89GR</a>\r\n                  <a><i class=\"fas fa-phone mr-2\"></i>231044444</a>\r\n                  <a><i class=\"fas fa-envelope mr-2\"></i>livedemo-admin@templatemonster.me</a>\r\n                  <a><i class=\"fas fa-clock mr-2\"></i>7 days a week from 8:00 am to 5:00 pm</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>  \r\n</footer>\r\n\r\n"

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

module.exports = "/* --- First Navbar --- */\r\n\r\n#firstNavbar{\r\n    padding-bottom: 0;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand{\r\n    font-size: 40px;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand span{\r\n    color: #04BF00;\r\n    font-weight: 700;\r\n  }\r\n\r\n#firstNavbar a.navbar-brand:hover{\r\n      color: #333333;\r\n    }\r\n\r\n#firstNavbar input.form-control{\r\n    border: 2px solid #04BF00;\r\n    width: 270px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link{\r\n    font-size: 20px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link i{\r\n    color: #04BF00;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link.cart-name{\r\n    padding: 0;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav div.cart-items{\r\n    font-size : 14px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav li.nav-item.user-info{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding-left:8px;\r\n    padding-right:8px;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav li.nav-item.user-info div.username{\r\n    font-size:16px;\r\n    font-style: italic;\r\n    font-weight: 600;\r\n  }\r\n\r\n#firstNavbar ul.navbar-nav a.nav-link.logout:hover{\r\n    color: #04BF00;\r\n    cursor: pointer;\r\n  }\r\n\r\n@media (max-width: 992px){\r\n    #firstNavbar a.navbar-brand{\r\n      font-size: 28px;\r\n    }\r\n  \r\n    #firstNavbar input.form-control{\r\n      border: 2px solid #04BF00;\r\n      width: 200px;\r\n    }\r\n\r\n    #secondNavbar ul.navbar-nav li a{\r\n      padding: 2px;\r\n    }\r\n  }\r\n\r\n/* --- Second Navbar --- */\r\n\r\n#secondNavbar ul.navbar-nav a.nav-link{\r\n    font-size: 20px;\r\n  }\r\n\r\n#secondNavbar{\r\n    padding-top: 0;\r\n  }\r\n\r\n#secondNavbar ul.navbar-nav li{\r\n    margin-right: 40px;\r\n  }"

/***/ }),

/***/ "./src/app/components/navigation-bar/navigation-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg\" id=\"firstNavbar\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\"> <span>Super</span>Pharmacy</a>\r\n\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\r\n           Menu<i class=\"fa fa-bars\"></i>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n\r\n           <form class=\"form-inline mx-auto\">\r\n               <div class=\"input-group\">\r\n                   <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchText\" name=\"search\">\r\n                   <div class=\"input-group-append\">\r\n                       <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSearchClicked()\">\r\n                           <i class=\"fas fa-search\"></i>\r\n                        </button>\r\n                   </div>\r\n               </div>    \r\n           </form>\r\n\r\n          <ul class=\"navbar-nav\">\r\n               <li *ngIf=\"!isUserLoggedIn\" class=\"nav-item\">\r\n                   <a class=\"nav-link\" routerLink=\"/register\">Εγγραφή</a>\r\n               </li>\r\n\r\n               <li *ngIf=\"!isUserLoggedIn\" class=\"nav-item\">\r\n                   <a class=\"nav-link\" routerLink=\"/login\">Είσοδος</a>\r\n               </li>\r\n\r\n               <li *ngIf=\"isUserLoggedIn\" class=\"nav-item user-info\">\r\n                  <div>Καλώς ήρθες,</div>\r\n                  <div class=\"username\">{{user}}</div>\r\n               </li>\r\n\r\n               <li class=\"nav-item\">\r\n                 <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <a class=\"nav-link\" routerLink=\"/cart\">\r\n                          <i class=\"fas fa-shopping-cart\"></i>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-9\">\r\n                        <div><a class=\"nav-link cart-name\" routerLink=\"/cart\">Καλάθι</a></div>\r\n                        <div class=\"cart-items\">{{cartProductCount}} προιόντα</div>\r\n                    </div>\r\n                </div>\r\n               </li>\r\n\r\n               <li *ngIf=\"isUserLoggedIn\" class=\"nav-item\">\r\n                 <a class=\"nav-link logout\" (click)=\"logout()\">Αποσύνδεση</a>\r\n               </li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-md\" id=\"secondNavbar\">\r\n  <div class=\"container\">\r\n      <ul class=\"navbar-nav mx-md-auto\">\r\n          <li *ngFor=\"let category of categories\" class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/category/{{category.englishName}}\" [queryParams]=\"{ page: pageParam, fn : 'yes',  brand : brandParams, range : rangeParams}\">{{category.greekName}}</a>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</nav>\r\n"

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
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(authenticationService, cartService, searchService, router) {
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.searchService = searchService;
        this.router = router;
        this.greekCategoryNames = ['Βιταμίνες', 'Μέταλλα', 'Ιχθυέλαια', 'Υπερτροφές', 'Αρώματα', 'Σαμπουάν'];
        this.englishCategoryNames = ['vitamins', 'minerals', 'fish-oils', 'superfoods', 'fragrances', 'shampoos'];
        this.pageParam = 0;
        this.brandParams = [];
        this.rangeParams = [];
        this.cartProductCount = 0;
        this.isUserLoggedIn = false;
        this.isLocalStorageEmpty = localStorage.length === 0;
        this.user = '';
        this.userId = '';
        this.searchText = "";
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initialiseCategories();
                        this.isUserLoggedIn = this.authenticationService.isAuthenticated;
                        if (!this.isUserLoggedIn) return [3 /*break*/, 4];
                        if (!!this.isLocalStorageEmpty) return [3 /*break*/, 1];
                        this.storeUserName();
                        this.setCartCount(this.userId);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.authenticationService.getSessionDataAgain()];
                    case 2:
                        _a.sent();
                        this.storeUserName();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.setAnonymousUserCartCount();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NavigationBarComponent.prototype.storeUserName = function () {
        var storedUser = localStorage.getItem('user');
        var storedUserId = localStorage.getItem('userid');
        if (storedUser !== undefined)
            this.user = storedUser;
        if (storedUserId !== undefined)
            this.userId = storedUserId;
    };
    NavigationBarComponent.prototype.initialiseCategories = function () {
        this.categories = [];
        for (var i = 0; i < this.greekCategoryNames.length; i++) {
            var navigationCategory = {};
            navigationCategory.greekName = this.greekCategoryNames[i];
            navigationCategory.englishName = this.englishCategoryNames[i];
            this.categories.push(navigationCategory);
        }
    };
    NavigationBarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    NavigationBarComponent.prototype.setCartCount = function (userId) {
        var _this = this;
        this.cartService.getCartProductsCount(userId).toPromise()
            .then(function (cartProductCount) { return _this.cartProductCount = cartProductCount.count; })
            .catch(function (errorResponse) { return console.log(errorResponse); });
    };
    NavigationBarComponent.prototype.setAnonymousUserCartCount = function () {
        this.cartProductCount = this.cartService.getAnonymousUserCartCount();
    };
    NavigationBarComponent.prototype.onSearchClicked = function () {
        var regularExpression = /[^0-9^a-z]+/;
        var keywords = this.searchText.split(regularExpression);
        this.router.navigate(['/search'], { queryParams: { keyword: keywords, page: 0 } });
    };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/components/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/components/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 32px;\r\n}\r\n\r\nsection.order .order-products{\r\n    margin-top: 32px;\r\n  }\r\n\r\nsection.order .table-responsive{\r\n    overflow-x: hidden;\r\n  }\r\n\r\nsection.order table tr, section.cart table tr{\r\n    border-left: 1px solid #dee2e6;\r\n    border-right: 1px solid #dee2e6;\r\n  }\r\n\r\nsection.order table tr td{\r\n    padding-top: 1.25rem;\r\n    padding-bottom: 1.25rem;\r\n  }\r\n\r\nsection.order table td a.brand{\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    margin-bottom:8px;\r\n  }\r\n\r\nsection.order table td a.brand:hover, section.cart table td a.name:hover{\r\n    -webkit-text-decoration-style: none;\r\n            text-decoration-style: none;\r\n  }\r\n\r\nsection.order table td a.name{\r\n    display: block;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-bottom:8px;\r\n  }\r\n\r\nsection.order div.order-info{\r\n    text-align: center;\r\n    margin-bottom: 48px;\r\n    margin-top : 8px;\r\n  }\r\n\r\nsection.order div.order-info h3{\r\n    margin-bottom: 16px;\r\n  }\r\n\r\nsection.order div.order-info div{\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n\r\nsection.order div.shipping-info{\r\n    border-right: 1px solid black;\r\n  }\r\n\r\nsection.order button{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }"

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n    <div class=\"container\">\r\n            <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a> / Παραγγελία / {{order.id}}\r\n    </div>\r\n</div>\r\n\r\n<!-- Order Summary -->\r\n<section class=\"order container\">\r\n\r\n    <h1 class=\"text-center mb-4\">Λεπτομέρειες Παραγγελίας</h1>\r\n    <p class=\"mb-4\">Αγαπητέ <strong>{{user}}</strong>, η παραγγελίας σας πραγματοποιήθηκε επιτυχώς.</p>\r\n\r\n    <p><strong>Ημερομηνία : </strong> {{date}}</p>\r\n    <p><strong>Αριθμός : </strong> {{order.id}}</p>\r\n    <p><strong>Κατάσταση : </strong>{{order.status}}</p>\r\n\r\n    <div class=\"row order-products\">\r\n            <div class=\"col-12\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-center\">\r\n                                <th>Εικόνα</th>\r\n                                <th>Προιόν</th>\r\n                                <th>Ποσότητα</th>\r\n                                <th>Τιμή</th>\r\n                                <th>Σύνολο</th>\r\n                            </thead>\r\n    \r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of orderProducts\">\r\n                                    <td><img class=\"d-block mx-auto\" src=\"{{product.imageUrl}}\" /></td>\r\n                                    <td class=\"text-left\">\r\n                                        <a routerLink=\"/product/{{product.name}}\" class=\"brand\">{{product.brand}}</a>\r\n                                        <a routerLink=\"/product/{{product.name}}\" class=\"name\">{{product.name}}</a>\r\n                                   </td>\r\n                                    <td>\r\n                                        <div class=\"text-center\">{{product.quantity}}</div>\r\n                                    </td>\r\n                                    <td class=\"text-center\">{{product.price}}€</td>\r\n                                    <td class=\"text-center\">{{product.price * product.quantity}}€</td>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-center\">Μεταφορικά</td>\r\n                                    <td class=\"text-center\">{{shippingCost}}€</td>\r\n                                </tr>\r\n    \r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td class=\"text-center\">Σύνολο</td>\r\n                                    <td class=\"text-center\">{{getTotalCartPrice()}}€</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n            </div>    \r\n    </div>\r\n\r\n    <div class=\"row order-info\">\r\n        <div class=\"col-sm-6 shipping-info\">\r\n            <h3>Πληροφορίες αποστολής</h3>\r\n            <div>{{order.shippingInfo.first_name}} {{order.shippingInfo.last_name}}</div>\r\n            <div>{{order.shippingInfo.email}}</div>\r\n            <div>{{order.shippingInfo.street}}</div>\r\n            <div>{{order.shippingInfo.post_code}}</div>\r\n            <div>{{order.shippingInfo.city}}</div>\r\n            <div>{{order.shippingInfo.phone}}</div>\r\n            <div><strong>Μέθοδος αποστολής : </strong>{{order.shippingInfo.method}}</div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 billing-info\">\r\n            <h3>Πληροφορίες χρέωσης</h3>\r\n            <div>{{order.billingInfo.first_name}} {{order.billingInfo.last_name}}</div>\r\n            <div>{{order.billingInfo.email}}</div>\r\n            <div>{{order.billingInfo.street}}</div>\r\n            <div>{{order.billingInfo.post_code}}</div>\r\n            <div>{{order.billingInfo.city}}</div>\r\n            <div>{{order.billingInfo.phone}}</div>\r\n            <div><strong>Μέθοδος χρέωσης : </strong>{{order.billingInfo.method}}</div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"navigateToIndex()\">Επιστροφή στην αρχική</button>\r\n</section>\r\n\r\n<my-footer></my-footer>\r\n"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, checkoutService) {
        this.router = router;
        this.checkoutService = checkoutService;
        this.order = {};
        this.orderProducts = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.order = this.checkoutService.getCurrentOrder();
        this.date = this.getOrderDate();
        this.orderProducts = this.checkoutService.getOrderProducts();
        this.shippingCost = this.order.shippingInfo.method === 'Courier' ? 2 : 0;
        this.user = this.order.user === null ? 'χρήστη' : this.order.user.first_name + ' ' + this.order.user.last_name;
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscription !== undefined)
            this.routeSubscription.unsubscribe();
    };
    OrderComponent.prototype.getOrderDate = function () {
        var date = new Date(new Date(this.order.order_date)).getDate();
        var month = new Date(new Date(this.order.order_date)).getMonth();
        var year = new Date(new Date(this.order.order_date)).getFullYear();
        return date + '/' + month + '/' + year;
    };
    OrderComponent.prototype.getTotalCartPrice = function () {
        var totalPrice = 0;
        if (this.orderProducts.length !== 0) {
            this.orderProducts.forEach(function (product) {
                totalPrice += product.price * product.quantity;
            });
        }
        return totalPrice + this.shippingCost;
    };
    OrderComponent.prototype.navigateToIndex = function () {
        this.router.navigate(['/']);
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/product-page/product-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n.breadcrumbs a.route:hover{\r\n  text-decoration: none;\r\n}\r\n\r\n/* --- Product --- */\r\n\r\n.product-details{\r\n  margin-top: 16px;\r\n}\r\n\r\n.product-details h3{\r\n  color: #E00000 ;\r\n}\r\n\r\np span.checked{\r\n  color: orange;\r\n}\r\n\r\ndiv.product-details div.input-group{\r\n    width: 176px;\r\n\r\n    margin-bottom: 16px;\r\n  }\r\n\r\ndiv.product-details div.input-group button{\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\ndiv.input-group span{\r\n    width: 96px;\r\n    line-height: 40px;\r\n    text-align:center;\r\n    border:0.5px inset black;\r\n    display: inline-block;\r\n  }\r\n\r\n.spinner{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 999;\r\n  }\r\n\r\n@media (max-width: 576px){\r\n\r\n.product-image img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.product-details{\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/* --- Addition Product Information--- */\r\n\r\nsection.product-information{\r\n      margin-top: 24px;\r\n      margin-bottom: 32px;\r\n    }\r\n\r\nsection.product-information .tab-content #description p{\r\n      margin-bottom: 0;\r\n    }\r\n\r\nsection.product-information ul li.nav-item a.active{\r\n      background-color: #04BF00;\r\n    }"

/***/ }),

/***/ "./src/app/components/product-page/product-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-page/product-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n    <div class=\"container\">\r\n        <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>\r\n        / <a routerLink=\"/category/{{categoryRoute}}\" class=\"route\" [queryParams]=\"{ page: pageParam}\">{{productCategory}}</a>\r\n        / {{product?.name}}\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-sm-4 product-image\">\r\n            <img class=\"img-fluid\" src=\"{{product?.largeImageUrl}}\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-sm-4 product-details\">\r\n            <h4>{{product?.name}}</h4>\r\n            <h3>{{product?.price}}€</h3>\r\n            <p><span class=\"fa fa-star checked\"></span>\r\n                <span class=\"fa fa-star checked\"></span>\r\n                <span class=\"fa fa-star checked\"></span>\r\n                <span class=\"fa fa-star checked\"></span>\r\n                <span class=\"fa fa-star\"></span>\r\n            </p>\r\n            <p><strong>Εταιρία</strong> : {{product?.brand.name}}</p>\r\n            <p><strong>Κωδικός Προιόντος</strong> : 14325</p>\r\n            <p><strong>Πόντοι ανταμοιβής</strong> : 250</p>\r\n            <p><strong>Διαθεσιμότητα</strong> : {{productAvailability}}</p>\r\n\r\n            <div *ngIf=\"isProductAvailable\" class=\"input-group\">\r\n                <button type=\"button\" (click)=\"decreaseProductQuantity()\" [disabled] = \"isProductQuantityOne()\" >-</button>\r\n                <span>{{wantedQuantity}}</span>\r\n                <button type=\"button\" (click)=\"increaseProductQuantity()\">+</button>\r\n            </div>\r\n\r\n            <button *ngIf=\"isProductAvailable\" type=\"button\" class=\"btn btn-primary\" [disabled] = \"!isAddProductRequestDone\" (click)=\"addProductToCart()\">\r\n                <i class=\"fas fa-cart-plus mr-2\"></i>Προσθήκη στο καλάθι\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<i *ngIf=\"!isAddProductRequestDone\" class=\"fas fa-sync-alt fa-2x fa-spin spinner\" ></i>\r\n\r\n<!-- Additional Product Informaition -->\r\n<section class=\"product-information\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n              <ul class=\"nav nav-pills\">\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#description\">Περιγραφή</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#additional-info\">Επιπλέον Πληροφοριες</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#reviews\">Αξιολογήσεις</a>\r\n                  </li>\r\n              </ul>\r\n\r\n              <div class=\"tab-content\">\r\n                  <div id=\"description\" class=\"container tab-pane active\">\r\n                      <br>\r\n                      <p>{{product?.description}}</p>\r\n   \r\n                      \r\n                  </div> \r\n                  <div id=\"additional-info\" class=\"container tab-pane fade\">\r\n                      <br>\r\n                      <p><strong>Health is one of most important things in our life.</strong> \r\n                          We think that it is a real luck to have a strong health. \r\n                          Our way of life doesn’t increase the physiological condition of our body. \r\n                          Alcohol, cigarettes, unhealthy food, stresses and other factors have a great influence on our health. \r\n                          The human’s immune system is very uncertain thing because there is a countless quantity of different dangerous viruses and bacteria. From ancient times plague and other infectious diseases have been killing people without leaving them any chance to survive.</p>\r\n                  </div>\r\n                  <div id=\"reviews\" class=\"container tab-pane fade\">\r\n                      <br>\r\n                      <p>There are no reviews for this product.</p>\r\n                      <button type=\"button\" class=\"btn btn-primary\">Γράψτε μια αξιολόγηση</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<my-footer></my-footer>\r\n\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "./src/app/components/navigation-bar/navigation-bar.component.ts");
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
    function ProductPageComponent(route, authenticationService, cartService, productService) {
        this.route = route;
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.productService = productService;
        this.available = "Σε απόθεμα";
        this.notAvailable = "Δεν είναι διαθέσιμο";
        this.productAvailability = "";
        this.wantedQuantity = 1;
        this.isProductAvailable = false;
        this.isAddProductRequestDone = true;
        this.pageParam = 0;
        this.categories = {
            Vitamins: { greekName: 'Βιταμίνες', route: 'vitamins' },
            Minerals: { greekName: 'Μέταλλα', route: 'minerals' },
            Fishoils: { greekName: 'Ιχθυέλαια', route: 'fish-oils' },
            Superfoods: { greekName: 'Υπερτροφές', route: 'superfoods' },
            Fragrances: { greekName: 'Αρώματα', route: 'fragrances' },
            Shampoos: { greekName: 'Σαμπουάν', route: 'shampoos' }
        };
        this.isUserLoggedIn = false;
        this.isLocalStorageEmpty = localStorage.length === 0;
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserLoggedIn = this.authenticationService.isAuthenticated;
        this.routeSubscription = this.route.params.subscribe(function (params) { return _this.productNameParam = params['name']; });
        this.httpSubscription = this.productService.getSingleProduct(this.productNameParam)
            .subscribe(function (product) {
            _this.product = product;
            _this.productCategory = product.category.name === 'Fish-Oils' ? _this.categories.Fishoils.greekName : _this.categories[product.category.name].greekName;
            _this.categoryRoute = product.category.name === 'Fish-Oils' ? _this.categories.Fishoils.route : _this.categories[product.category.name].route;
            _this.isProductAvailable = product.quantity > 0;
            _this.productAvailability = _this.isProductAvailable ? _this.available : _this.notAvailable;
        });
    };
    ProductPageComponent.prototype.increaseProductQuantity = function () {
        this.wantedQuantity += 1;
    };
    ProductPageComponent.prototype.decreaseProductQuantity = function () {
        this.wantedQuantity -= 1;
    };
    ProductPageComponent.prototype.isProductQuantityOne = function () {
        return this.wantedQuantity == 1;
    };
    ProductPageComponent.prototype.addProductToCart = function () {
        var _this = this;
        if (this.isUserLoggedIn && !this.isLocalStorageEmpty) {
            var userId_1 = localStorage.getItem('userid');
            this.isAddProductRequestDone = false;
            this.cartService.getCartProduct(Number(userId_1), this.product.id).toPromise()
                .then(function (cartProduct) {
                cartProduct.quantity = cartProduct.quantity + _this.wantedQuantity;
                _this.cartService.updateCartProduct(cartProduct).toPromise()
                    .then(function (response) {
                    _this.navigationBar.setCartCount(_this.navigationBar.userId);
                    _this.isAddProductRequestDone = true;
                })
                    .catch(function (errorResponse) {
                    console.log(errorResponse);
                });
            })
                .catch(function (errorResponse) {
                _this.cartService.addProductTocart(Number(userId_1), _this.product.id, _this.wantedQuantity)
                    .toPromise()
                    .then(function (cartProduct) {
                    _this.navigationBar.setCartCount(_this.navigationBar.userId);
                    _this.isAddProductRequestDone = true;
                })
                    .catch(function (errorResponse) {
                    console.log(errorResponse);
                    _this.isAddProductRequestDone = true;
                });
            });
        }
        else if (!this.isUserLoggedIn) {
            var cartProduct = {};
            cartProduct.productid = this.product.id;
            cartProduct.name = this.product.name;
            cartProduct.brand = this.product.brand.name;
            cartProduct.price = this.product.price;
            cartProduct.quantity = this.wantedQuantity;
            cartProduct.imageUrl = this.product.verySmallImageUrl;
            this.cartService.addProductToAnonymousUserCart(cartProduct);
            this.navigationBar.setAnonymousUserCartCount();
        }
    };
    ProductPageComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscription !== undefined)
            this.routeSubscription.unsubscribe();
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"]),
        __metadata("design:type", _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"])
    ], ProductPageComponent.prototype, "navigationBar", void 0);
    ProductPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-page',
            template: __webpack_require__(/*! ./product-page.component.html */ "./src/app/components/product-page/product-page.component.html"),
            styles: [__webpack_require__(/*! ./product-page.component.css */ "./src/app/components/product-page/product-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product img{\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.product a:hover{\r\n  text-decoration: none;\r\n}\r\n\r\n.product p.brand{\r\n  font-size: 16px;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.product p.name{\r\n   font-size: 18px;\r\n   text-align: center;\r\n   font-weight: 400;\r\n   margin-bottom: 8px;\r\n   min-height: 52px;\r\n }\r\n\r\n.product p.price{\r\n  font-size: 20px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product\">\r\n  <a routerLink=\"/product/{{product.name}}\"><img class=\"img-fluid d-block mx-auto\" src=\"{{product?.smallImageUrl}}\" alt=\"\"></a>\r\n  <a routerLink=\"/product/{{product.name}}\"><p class=\"brand\">{{product?.brand.name}}</p></a>\r\n  <a routerLink=\"/product/{{product.name}}\"><p class=\"name\">{{product?.name}}</p></a>\r\n  <p class=\"price\">{{product?.price}}€</p>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-item',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/products-carousel/products-carousel.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/products-carousel/products-carousel.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n  margin-top: 40px;\r\n  margin-bottom: 80px;\r\n}\r\n\r\nh1{\r\n    margin-bottom: 64px;\r\n}\r\n\r\n.carousel-control-prev-icon{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23333333' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\") !important;\r\n}\r\n\r\n.carousel-control-next-icon{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23333333' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\") !important;\r\n}\r\n\r\na.carousel-control-prev{\r\n    width: 60px;\r\n    height:60px;\r\n    display: block;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n }\r\n\r\na.carousel-control-next{\r\n    width: 60px;\r\n    height:60px;\r\n    display: block;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/products-carousel/products-carousel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/products-carousel/products-carousel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <h1 class=\"text-center\">{{carouselTitle}}</h1>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div id=\"{{carouselHtmlId}}\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n\n                              \n              <div class=\"carousel-inner\">\n\n                  <div *ngFor = \"let productPage of productPages; let isFirstItem = first\" [ngClass] = \" isFirstItem ? 'carousel-item active' : 'carousel-item'\">\n\n                      <div class=\"row\">\n\n                          <div class=\"col-sm-6 col-md-6 col-lg-3\" *ngFor=\"let productItem of productPage.content\">\n                              <product-item [product] = \"productItem\"></product-item>\n                          </div>\n\n                      </div>\n\n                  </div>                         \n\n\n              </div>\n              \n              <a class=\"carousel-control-prev\" href=\"#{{carouselHtmlId}}\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\"></span>\n              </a>\n              <a class=\"carousel-control-next\" href=\"#{{carouselHtmlId}}\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\"></span>\n              </a>\n          </div>\n      </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "./src/app/components/products-carousel/products-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/products-carousel/products-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function() { return ProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsCarouselComponent = /** @class */ (function () {
    function ProductsCarouselComponent(productService) {
        this.productService = productService;
    }
    ProductsCarouselComponent.prototype.ngOnInit = function () {
        this.productPages = [];
        this.pageNumber = [];
        if (this.carouselType === 'favorite') {
            this.addFavoriteProductsToCarousel();
        }
        else if (this.carouselType === 'new') {
            this.addNewProductsToCarousel();
        }
    };
    ProductsCarouselComponent.prototype.addFavoriteProductsToCarousel = function () {
        var _this = this;
        this.httpSubscription = this.productService.getFavoriteProductsInformation().subscribe(function (productPage) {
            _this.productPagesInformation = productPage;
            _this.initializePageNumber(_this.productPagesInformation.totalPages);
            _this.httpSubscription2 = _this.productService.getFavoriteProducts(_this.pageNumber).subscribe(function (productPage) { return _this.productPages.push(productPage); });
        });
    };
    ProductsCarouselComponent.prototype.addNewProductsToCarousel = function () {
        var _this = this;
        this.httpSubscription = this.productService.getNewProductsInformation().subscribe(function (productPage) {
            _this.productPagesInformation = productPage;
            _this.initializePageNumber(_this.productPagesInformation.totalPages);
            _this.httpSubscription2 = _this.productService.getNewProducts(_this.pageNumber).subscribe(function (productPage) { return _this.productPages.push(productPage); });
        });
    };
    ProductsCarouselComponent.prototype.initializePageNumber = function (pages) {
        for (var i = 0; i < pages; i++)
            this.pageNumber[i] = i;
    };
    ProductsCarouselComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
        if (this.httpSubscription2 !== undefined)
            this.httpSubscription2.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductsCarouselComponent.prototype, "carouselTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductsCarouselComponent.prototype, "carouselHtmlId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductsCarouselComponent.prototype, "carouselType", void 0);
    ProductsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'products-carousel',
            template: __webpack_require__(/*! ./products-carousel.component.html */ "./src/app/components/products-carousel/products-carousel.component.html"),
            styles: [__webpack_require__(/*! ./products-carousel.component.css */ "./src/app/components/products-carousel/products-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsCarouselComponent);
    return ProductsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/rating/rating.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/rating/rating.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.checked{\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/components/rating/rating.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/rating/rating.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\" class=\"mr-2\">\n<span *ngFor=\"let checkedStar of counter(checkedStars)\" class=\"fa fa-star checked\"></span>\n<ng-container *ngIf=\"areThereUncheckedstars\">\n    <span *ngFor=\"let uncheckedStar of counter(uncheckedStars)\" class=\"fa fa-star\"></span>\n</ng-container>\n<span class=\"ml-2\">(303)</span>\n"

/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.totalStars = 5;
        this.checkedStars = this.totalStars - this.uncheckedStars;
        this.areThereUncheckedstars = this.uncheckedStars > 0;
    };
    RatingComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "uncheckedStars", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/components/rating/rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --- Breadcrumbs --- */\r\n\r\n.breadcrumbs{\r\n    padding-top: 8px;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n/* --- Register --- */\r\n\r\nsection.register{\r\n  padding-bottom: 32px;\r\n}\r\n\r\nsection.register h1{\r\n  text-align: center;\r\n  margin-bottom: 32px;\r\n}\r\n\r\nsection.register form h4{\r\n  margin-top:32px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\nsection.register form .submit p{\r\n  display: inline;\r\n}\r\n\r\nsection.register form .form-group input{\r\n  background:\t#E0E0E0;\r\n}\r\n\r\nsection.register form .submit{\r\n  text-align: center;\r\n  margin-top: 32px\r\n}\r\n\r\nsection.register form .submit button{\r\npadding-left: 24px;\r\npadding-right: 24px;\r\n}"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"breadcrumbs\">\r\n    <div class=\"container\">\r\n            <a routerLink=\"/\"><i class=\"fas fa-home mr-1\"></i></a>/\r\n            Εγγραφή\r\n    </div>\r\n</div>\r\n\r\n<!-- Register -->\r\n<section class=\"register\">\r\n    <div class=\"container\">\r\n        <h1>Εγγραφή</h1>\r\n        <p>Εάν έχετε ήδη λογαριασμό, μπορείτε να εισέλθετε <a routerLink=\"/login\">εδώ</a>.</p>\r\n           \r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n            <h4>Προσωπικά στοιχεία</h4>\r\n            <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" #username=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && (username.invalid || usernameError)}\" required minlength=\"2\">\r\n                <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"username.errors.required\">Πρέπει να συμπληρώσετε το Username</div>\r\n                    <div *ngIf=\"username.errors.minlength\">Το Username πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                </div>\r\n                <div *ngIf=\"usernameError\" class=\"invalid-feedback\">Το username υπάρχει ήδη</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Όνομα</label>\r\n                <input type=\"text\" name=\"firstname\" class=\"form-control\" [(ngModel)]=\"user.first_name\" #firstname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && firstname.invalid}\" required minlength=\"2\">\r\n                <div *ngIf=\"f.submitted && firstname.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"firstname.errors.required\">Πρέπει να συμπληρώσετε το όνομα</div>\r\n                    <div *ngIf=\"firstname.errors.minlength\">Το όνομα πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Επώνυμο</label>\r\n                <input type=\"text\" name=\"lastname\" class=\"form-control\" [(ngModel)]=\"user.last_name\" #lastname=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && lastname.invalid}\" required minlength=\"2\">\r\n                <div *ngIf=\"f.submitted && lastname.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"lastname.errors.required\">Πρέπει να συμπληρώσετε το επίθετο</div>\r\n                    <div *ngIf=\"lastname.errors.minlength\">Το επίθετο πρέπει να έχει μήκος τουλάχιστον δύο χαρακτήρες</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>E-mail</label>\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" #email=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted &&  (email.invalid || emailError)}\" required email>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"email.errors.required\">Πρέπει να συμπληρώσετε το email</div>\r\n                    <div *ngIf=\"email.errors.email\">Το email πρέπει να έχει τη σωστή μορφή</div>\r\n                </div>\r\n                <div *ngIf=\"emailError\" class=\"invalid-feedback\">Το email υπάρχει ήδη</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Τηλέφωνο</label>\r\n                <input type=\"number\"  name=\"phone\" class=\"form-control\" [(ngModel)]=\"user.phone\" #phone=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && phone.invalid}\" required tel>\r\n                <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"phone.errors.required\">Πρέπει να συμπληρώσετε το τηλέφωνο</div>\r\n                    <div *ngIf=\"phone.errors.phone\">Το τηλέφωνο πρέπει να έχει τη σωστή μορφή</div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <h4>Ο Κωδικός</h4>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Kωδικός</label>\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && password.invalid}\" required minlength=\"6\">\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"password.errors.required\">Πρέπει να πληκτρολογήσετε έναν κωδικό</div>\r\n                    <div *ngIf=\"password.errors.minlength\">Ο κωδικός πρέπει να έχει μήκος τουλάχιστον 6 χαρακτήρες</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Επαλήθευση Κωδικού</label>\r\n                <input type=\"password\" name=\"confirmpassword\" class=\"form-control\" [(ngModel)]=\"user.confirm_password\" #confirmpassword=\"ngModel\" [ngClass]=\"{'is-invalid' : f.submitted && !arePasswordsFieldsTheSame()}\">\r\n                <div *ngIf=\"f.submitted && !arePasswordsFieldsTheSame()\" class=\"invalid-feedback\">Οι κωδικοί δεν είναι ίδιοι</div>\r\n            </div>\r\n\r\n            <div class=\"submit\">\r\n                <button class=\"btn btn-primary\">Εγγραφή</button>\r\n            </div>\r\n\r\n           </form>\r\n    </div>\r\n</section>\r\n\r\n<my-footer></my-footer>\r\n\r\n"

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
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RegisterPageComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.usernameError = false;
        this.emailError = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.user = {};
        this.errorMessage = {};
    };
    RegisterPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.httpSubscription = this.registerService.registerUser(this.user).subscribe(function (user) { return _this.router.navigate(['/login'], { queryParams: { redirect: 'register' } }); }, function (errorResponse) {
            _this.setProperFieldError(errorResponse.error.errorMessage);
        });
    };
    RegisterPageComponent.prototype.setProperFieldError = function (message) {
        if (message.includes('username')) {
            this.usernameError = true;
            this.emailError = false;
        }
        else if (message.includes('email')) {
            this.usernameError = false;
            this.emailError = true;
        }
    };
    RegisterPageComponent.prototype.arePasswordsFieldsTheSame = function () {
        return this.user.password === this.user.confirm_password;
    };
    RegisterPageComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/components/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/components/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/components/search-sidebar/search-sidebar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-sidebar/search-sidebar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    margin-top: 8px;\r\n    margin-bottom: 48px;\r\n}\r\n\r\nspan{\r\n    margin-left: 8px;\r\n}"

/***/ }),

/***/ "./src/app/components/search-sidebar/search-sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-sidebar/search-sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 >Εταιρίες</h4>\n<ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let currentBrand of numberOfProductsPerBrand\">\n        <input type=\"checkbox\" class=\"mr-2\" value=\"{{currentBrand?.brand}}\" [(ngModel)]=\"currentBrand.checked\" (change)=\"onSelectedBrand()\" [disabled] = \"currentBrand?.number === 0\">{{currentBrand?.brand}}\n        <span>({{currentBrand?.number}})</span>\n      </li>\n</ul>\n\n<h4>Τιμή</h4>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\"  *ngFor=\"let priceRange of numberOfProductsPerPriceRange\">\n      <input type=\"checkbox\" class=\"mr-2\" value=\"{{priceRange?.rangeId}}\" [(ngModel)]=\"priceRange.checked\" (change)=\"onSelectedPriceRange()\" [disabled] = \"priceRange?.number === 0\">{{priceRange?.min}}€ - {{priceRange?.max}}€\n      <span>({{priceRange?.number}})</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/search-sidebar/search-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-sidebar/search-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSidebarComponent", function() { return SearchSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchSidebarComponent = /** @class */ (function () {
    function SearchSidebarComponent(searchService) {
        this.searchService = searchService;
        this.selectedBrands = [];
        this.selectedPriceRanges = [];
    }
    SearchSidebarComponent.prototype.ngOnInit = function () {
        this.getPriceRanges();
        this.getBrands();
    };
    SearchSidebarComponent.prototype.getBrands = function () {
        var _this = this;
        this.numberOfProductsPerBrand = [];
        this.searchService.getSearchBrands(this.searchTerms).toPromise()
            .then(function (brands) {
            _this.searchBrands = brands;
            _this.httpSubscription2 = _this.searchService.getSearchProductsNumberByBrand(_this.searchTerms, _this.searchBrands).subscribe(function (item) {
                _this.numberOfProductsPerBrand.push(item);
                _this.numberOfProductsPerBrand.sort(function (a, b) {
                    var aIndex = brands.findIndex(function (brand) { return brand.name === a.brand; });
                    var bIndex = brands.findIndex(function (brand) { return brand.name === b.brand; });
                    return aIndex - bIndex;
                });
            }, function (error) {
                console.log(error);
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    SearchSidebarComponent.prototype.getPriceRanges = function () {
        var _this = this;
        this.initializePriceRanges();
        this.numberOfProductsPerPriceRange = [];
        this.httpSubscription = this.searchService.getSearchProductsNumberByPriceRange(this.searchTerms, this.priceRanges, this.selectedBrands).subscribe(function (range) {
            _this.numberOfProductsPerPriceRange.push(range);
            _this.numberOfProductsPerPriceRange.sort(function (a, b) {
                var aIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === a.rangeId; });
                var bIndex = _this.priceRanges.findIndex(function (priceRange) { return priceRange.id === b.rangeId; });
                return aIndex - bIndex;
            });
        }, function (error) {
            console.log(error);
        });
    };
    SearchSidebarComponent.prototype.initializePriceRanges = function () {
        this.priceRanges = [];
        var zeroToTen = {};
        var tenToTwenty = {};
        var TwentyToThirty = {};
        var ThirtyToFifty = {};
        zeroToTen.id = 1;
        tenToTwenty.id = 2;
        TwentyToThirty.id = 3;
        ThirtyToFifty.id = 4;
        this.priceRanges.push(zeroToTen);
        this.priceRanges.push(tenToTwenty);
        this.priceRanges.push(TwentyToThirty);
        this.priceRanges.push(ThirtyToFifty);
        this.priceRanges.sort(function (a, b) { return a.id - b.id; });
    };
    SearchSidebarComponent.prototype.onSelectedPriceRange = function () {
    };
    SearchSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
        if (this.httpSubscription2 !== undefined)
            this.httpSubscription2.unsubscribe();
        if (this.httpSubscription3 !== undefined)
            this.httpSubscription3.unsubscribe();
        if (this.httpSubscription4 !== undefined)
            this.httpSubscription4.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchSidebarComponent.prototype, "searchTerms", void 0);
    SearchSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-sidebar',
            template: __webpack_require__(/*! ./search-sidebar.component.html */ "./src/app/components/search-sidebar/search-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./search-sidebar.component.css */ "./src/app/components/search-sidebar/search-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], SearchSidebarComponent);
    return SearchSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section h2{\r\n    text-align: center;\r\n    margin-bottom: 48px;\r\n    margin-top: 48px;\r\n}\r\n\r\n.sidebar{\r\n    border-right: 1px solid #333333;\r\n}\r\n\r\n.category-content{\r\n    margin-bottom:48px;\r\n}\r\n\r\n.product-content{\r\n    margin-bottom:48px;\r\n}\r\n\r\n.page-link{\r\n    color:#04BF00;\r\n    background : #fff;\r\n    border-color : #dee2e6;\r\n}\r\n\r\n.page-link:focus{\r\n    box-shadow: none;\r\n}\r\n\r\n.page-item.active .page-link{\r\n    color:white;\r\n    background : #04BF00;\r\n    border-color : #04BF00;\r\n}\r\n\r\n.spinner{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 999;\r\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation-bar></navigation-bar>\n\n<!-- Content -->\n<section class=\"container\">\n\n  <h2>Αναζήτηση για : {{userSearchString}}</h2>\n\n  <div class=\"row category-content\">\n\n    <div class=\"col-md-3 sidebar\">\n        <search-sidebar [searchTerms] = \"keywords\"></search-sidebar>\n    </div>\n\n    <div class=\"col-md-9\">\n        <div class=\"mb-5\">\n          <span class=\"mx-4\">Προιόντα {{productNumberLow}}-{{productNumberHigh}} από {{productPage?.totalElements}}</span>\n          <span>Κατάταξη ως προς:</span>\n          <select class=\"ml-2\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onOrderChange($event)\">\n            <option *ngFor=\"let option of selectOptions;\" [value]=\"option.value\">{{option.name}}</option>\n          </select>\n        </div>\n\n        <div class=\"row product-content\">\n            <div class=\"col-sm-6 col-md-6 col-lg-4 mb-5\" *ngFor=\"let productItem of products\">\n                 <product-item [product] = \"productItem\"></product-item>\n            </div>\n        </div>\n\n        <ul class=\"pagination\">\n            <li *ngFor=\"let page of pageNumbers; let i = index;\" [ngClass] = \" i == currentPage ? 'page-item active' : 'page-item'\">\n              <a class=\"page-link\" routerLink=\"/search\" [queryParams]=\"{ keyword : keywords, page: i}\">{{page}}</a>\n            </li>\n        </ul> \n\n    </div>\n  </div>\n</section>\n\n<i *ngIf=\"!isGetSearchProductsRequestDone\" class=\"fas fa-sync-alt fa-2x fa-spin spinner\" ></i>\n\n<my-footer></my-footer>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.currentPage = 0;
        this.isGetSearchProductsRequestDone = true;
        this.keywords = [];
        this.userSearchString = '';
        this.selectOptions = [
            {
                name: 'Αύξουσα Τιμή',
                value: 'asc'
            },
            {
                name: 'Φθίνουσα Τιμή',
                value: 'desc'
            }
        ];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryParamRouteSubscription = this.route.queryParams.subscribe(function (queryParams) {
            _this.isGetSearchProductsRequestDone = false;
            _this.currentPage = queryParams['page'];
            _this.keywords = queryParams['keyword'];
            _this.keywords.forEach(function (keyword) { return _this.userSearchString = _this.userSearchString + ' ' + keyword; });
            _this.selectedValue = 'asc';
            _this.httpSubscription = _this.searchService.getSearchProducts(_this.keywords, _this.currentPage).subscribe(function (productPage) {
                _this.pageNumbers = [];
                _this.productPage = productPage;
                _this.products = productPage.content;
                _this.setProductRange(_this.productPage.number, _this.productPage.numberOfElements);
                _this.isGetSearchProductsRequestDone = true;
                _this.initializePageNumberArray(_this.pageNumbers, _this.productPage.totalPages);
            }, function (error) {
                _this.isGetSearchProductsRequestDone = true;
                console.log(error);
            });
        });
    };
    SearchComponent.prototype.onOrderChange = function (order) {
    };
    SearchComponent.prototype.initializePageNumberArray = function (pageNumbers, pageCount) {
        for (var i = 0; i < pageCount; i++) {
            pageNumbers[i] = i + 1;
        }
    };
    SearchComponent.prototype.setProductRange = function (pageNumber, pageNumberOfElements) {
        this.productNumberLow = pageNumber * 6 + 1;
        this.productNumberHigh = this.productNumberLow + pageNumberOfElements - 1;
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.queryParamRouteSubscription.unsubscribe();
        if (this.httpSubscription !== undefined)
            this.httpSubscription.unsubscribe();
        // /if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
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

/***/ "./src/app/interceptors/authenticationStatusChangeInterceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/interceptors/authenticationStatusChangeInterceptor.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationStatusChangeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationStatusChangeInterceptor", function() { return AuthenticationStatusChangeInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationStatusChangeInterceptor = /** @class */ (function () {
    function AuthenticationStatusChangeInterceptor(authenticationService, cartService, cookieService, router) {
        this.authenticationService = authenticationService;
        this.cartService = cartService;
        this.cookieService = cookieService;
        this.router = router;
    }
    AuthenticationStatusChangeInterceptor.prototype.intercept = function (request, next) {
        var isUserCurrentlyAuthenticated = this.authenticationService.isAuthenticated;
        var isAuthenticatedCookieDeletedOrNo = this.cookieService.get('IS_AUTHENTICATED') === 'no' || !this.cookieService.check('IS_AUTHENTICATED');
        var wasLocalStorageDeleted = localStorage.length === 0;
        return this.handleReqeuestsWhereAuthenticationStatusChanged(isUserCurrentlyAuthenticated, isAuthenticatedCookieDeletedOrNo, wasLocalStorageDeleted, request, next);
    };
    AuthenticationStatusChangeInterceptor.prototype.handleReqeuestsWhereAuthenticationStatusChanged = function (isUserCurrentlyAuthenticated, isAuthenticatedCookieDeletedOrNo, wasLocalStorageDeleted, request, next) {
        if (isUserCurrentlyAuthenticated && isAuthenticatedCookieDeletedOrNo) {
            this.authenticationService.isAuthenticated = false;
            if (!wasLocalStorageDeleted)
                localStorage.clear();
            this.cartService.createAnonymousUserCart();
            this.authenticationService.getAnonymousSession();
            this.navigateToIndexPage();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
        }
        return next.handle(request);
    };
    AuthenticationStatusChangeInterceptor.prototype.navigateToIndexPage = function () {
        if (this.router.url === '/') {
            window.location.reload();
        }
        else {
            this.router.navigate(['']);
        }
    };
    AuthenticationStatusChangeInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationStatusChangeInterceptor);
    return AuthenticationStatusChangeInterceptor;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, cookieService, cartService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.cartService = cartService;
        this.router = router;
        this.isAuthenticated = false;
        this.wasServiceJustInitialized = false;
        this.validateUserApiEndpoint = '/authentication/validateuser';
        this.sessionApiEndpoint = '/authentication/session';
        this.logoutApiEndpoint = '/authentication/logout';
        this.anonymousApiEndpoint = '/anonymous/session';
        this.checkIfUserLoggedInPreviously();
    }
    AuthenticationService.prototype.checkIfUserLoggedInPreviously = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuthenticatedCookieDeletedOrNo, wasLocalStorageDeleted;
            return __generator(this, function (_a) {
                this.wasServiceJustInitialized = true;
                isAuthenticatedCookieDeletedOrNo = this.cookieService.get('IS_AUTHENTICATED') === 'no' || !this.cookieService.check('IS_AUTHENTICATED');
                wasLocalStorageDeleted = localStorage.length === 0;
                if (isAuthenticatedCookieDeletedOrNo) {
                    this.isAuthenticated = false;
                    if (!wasLocalStorageDeleted && !this.cartService.doesAnonymousUserCartExist)
                        localStorage.clear();
                    this.navigateToIndexPage();
                }
                else {
                    this.isAuthenticated = true;
                }
                this.wasServiceJustInitialized = false;
                return [2 /*return*/];
            });
        });
    };
    AuthenticationService.prototype.login = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = '';
                        return [4 /*yield*/, this.http.post(this.validateUserApiEndpoint, credentials).toPromise()
                                .then(function (user) { return __awaiter(_this, void 0, void 0, function () {
                                var headers;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                                            headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + credentials.password));
                                            return [4 /*yield*/, this.http.get(this.sessionApiEndpoint, { headers: headers }).toPromise()
                                                    .then(function (session) { return __awaiter(_this, void 0, void 0, function () {
                                                    var _this = this;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                message = "Επιτυχημένη είσοδος χρήστη";
                                                                this.writeSessionToLocalStorage(session);
                                                                this.isAuthenticated = true;
                                                                if (!(this.cartService.doesAnonymousUserCartExist() && this.cartService.getAnonymousUserCartCount() > 0)) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, this.cartService.deleteUserCart(Number(session.userid)).toPromise()
                                                                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                                                        var cartProducts;
                                                                        return __generator(this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0:
                                                                                    cartProducts = this.cartService.getAnonymousUserCart();
                                                                                    this.addUserToCartProducts(cartProducts, Number(session.userid));
                                                                                    return [4 /*yield*/, this.cartService.addMultipleProductsTocart(cartProducts).toPromise()
                                                                                            .then(function (response) { return console.log('products added successfuly'); })
                                                                                            .catch(function (errorResponse) { return console.log(errorResponse); })];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); })
                                                                        .catch(function (errorResponse) { return __awaiter(_this, void 0, void 0, function () {
                                                                        var cartProducts;
                                                                        return __generator(this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0:
                                                                                    if (!(errorResponse.status === 400)) return [3 /*break*/, 2];
                                                                                    cartProducts = this.cartService.getAnonymousUserCart();
                                                                                    this.addUserToCartProducts(cartProducts, Number(session.userid));
                                                                                    return [4 /*yield*/, this.cartService.addMultipleProductsTocart(cartProducts).toPromise()
                                                                                            .then(function (response) { return console.log('products added successfuly'); })
                                                                                            .catch(function (errorResponse) { return console.log(errorResponse); })];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    _a.label = 2;
                                                                                case 2: return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); })];
                                                            case 1:
                                                                _a.sent();
                                                                _a.label = 2;
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })
                                                    .catch(function (errorResponse) {
                                                    message = "Κάτι πήγε στραβά";
                                                    _this.isAuthenticated = false;
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function (errorResponse) {
                                message = errorResponse.error.errorMessage;
                                _this.isAuthenticated = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, message];
                }
            });
        });
    };
    AuthenticationService.prototype.addUserToCartProducts = function (cartProducts, userid) {
        cartProducts.forEach(function (cartProduct) { return cartProduct.userid = userid; });
    };
    AuthenticationService.prototype.writeSessionToLocalStorage = function (session) {
        localStorage.setItem("session_id", session.id);
        localStorage.setItem("user", session.username);
        localStorage.setItem("userid", session.userid);
        localStorage.setItem("type", session.type);
    };
    AuthenticationService.prototype.getSessionDataAgain = function () {
        var _this = this;
        return this.http.get(this.sessionApiEndpoint).toPromise().then(function (session) { return _this.writeSessionToLocalStorage(session); })
            .catch(function (errorResponse) { return console.log(errorResponse); });
    };
    AuthenticationService.prototype.getAnonymousSession = function () {
        return this.http.get(this.anonymousApiEndpoint).toPromise().then(function (session) { return console.log(session); })
            .catch(function (errorResponse) { return console.log(errorResponse); });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.logoutApiEndpoint, {}).toPromise()
            .then(function (response) {
            _this.isAuthenticated = false;
            _this.getAnonymousSession();
            if (localStorage.length > 0)
                localStorage.clear();
            _this.cartService.createAnonymousUserCart();
            _this.navigateToIndexPage();
        })
            .catch();
    };
    AuthenticationService.prototype.navigateToIndexPage = function () {
        if (this.router.url === '/' && !this.wasServiceJustInitialized) {
            window.location.reload(); // User logins correctly, navigates to index and logouts from index
        }
        else if (this.router.url === '/' && this.wasServiceJustInitialized) {
            // User logins correctly, deletes session cookie and request localhost:8080 again
        }
        else {
            this.router.navigate(['']);
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.cartApiEndpoint = '/api/carts';
        this.productsPath = '/products';
        this.countPath = '/count';
    }
    CartService.prototype.getCartProducts = function (userId) {
        return this.http.get(this.cartApiEndpoint + '/' + userId);
    };
    CartService.prototype.deleteUserCart = function (userId) {
        return this.http.delete(this.cartApiEndpoint + '/' + userId);
    };
    CartService.prototype.getCartProductsCount = function (userId) {
        return this.http.get(this.cartApiEndpoint + '/' + userId + this.countPath);
    };
    CartService.prototype.addProductTocart = function (userId, productId, quantity) {
        var cartProduct = {};
        cartProduct.userid = userId;
        cartProduct.productid = productId;
        cartProduct.quantity = quantity;
        return this.http.post(this.cartApiEndpoint, cartProduct);
    };
    CartService.prototype.addMultipleProductsTocart = function (cartProducts) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(cartProducts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (cartProduct) { return _this.http.post(_this.cartApiEndpoint, cartProduct); }));
    };
    CartService.prototype.getCartProduct = function (userId, productId) {
        return this.http.get(this.cartApiEndpoint + '/' + userId + this.productsPath + '/' + productId);
    };
    CartService.prototype.deleteCartProduct = function (userId, productId) {
        return this.http.delete(this.cartApiEndpoint + '/' + userId + this.productsPath + '/' + productId);
    };
    CartService.prototype.updateCartProduct = function (cartProduct) {
        return this.http.patch(this.cartApiEndpoint + '/' + cartProduct.userid + this.productsPath + '/' + cartProduct.productid, cartProduct);
    };
    //Anonymous
    CartService.prototype.createAnonymousUserCart = function () {
        if (!this.doesAnonymousUserCartExist()) {
            var cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    CartService.prototype.updateAnonymousUserCart = function (cart) {
        if (this.doesAnonymousUserCartExist()) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    CartService.prototype.getAnonymousUserCart = function () {
        var cart = JSON.parse(localStorage.getItem('cart'));
        return cart;
    };
    CartService.prototype.doesAnonymousUserCartExist = function () {
        return localStorage.getItem('cart') !== null;
    };
    CartService.prototype.getAnonymousUserCartCount = function () {
        var count = 0;
        if (!this.doesAnonymousUserCartExist)
            return count;
        this.getAnonymousUserCart().forEach(function (cartProduct) { return count += cartProduct.quantity; });
        return count;
    };
    CartService.prototype.getAnonymousUserCartProduct = function (cart, productid) {
        var index = cart.findIndex(function (x) { return x.productid === productid; });
        return cart[index];
    };
    CartService.prototype.doesAnonymousUserCartContaintProduct = function (productid) {
        var cart = this.getAnonymousUserCart();
        return cart.find(function (x) { return x.productid === productid; }) !== undefined;
    };
    CartService.prototype.addProductToAnonymousUserCart = function (cartProduct) {
        if (!this.doesAnonymousUserCartExist())
            this.createAnonymousUserCart();
        var cart = this.getAnonymousUserCart();
        if (this.doesAnonymousUserCartContaintProduct(cartProduct.productid)) {
            var existingProduct = this.getAnonymousUserCartProduct(cart, cartProduct.productid);
            existingProduct.quantity += cartProduct.quantity;
        }
        else {
            cart.push(cartProduct);
        }
        this.updateAnonymousUserCart(cart);
    };
    CartService.prototype.updateUserCartProduct = function (cartProduct) {
        var cart = this.getAnonymousUserCart();
        var existingProduct = this.getAnonymousUserCartProduct(cart, cartProduct.productid);
        existingProduct.quantity = cartProduct.quantity;
        this.updateAnonymousUserCart(cart);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.categoryProductsApi = '/api/categories/';
        this.categoryBrands = "/api/brands";
        this.countPath = "/count";
        this.brandsPath = '/brands';
        this.rangesPath = '/ranges';
        this.productsPath = '/products';
        this.categoryParameter = "?category=";
        this.brandParameter = '?brand=';
        this.brandParameterAnd = '&brand=';
        this.rangeParameter = "?range=";
        this.rangeParameterAnd = "&range=";
        this.pageParameter = "?page=";
        this.orderParameter = "&order=";
    }
    CategoryService.prototype.getCategoryProductsPage = function (category, page, order, brandParameters, rangeParameters) {
        var _this = this;
        if (brandParameters.length === 0 && rangeParameters.length === 0) {
            return this.http.get(this.categoryProductsApi + category + this.pageParameter + page + this.orderParameter + order);
        }
        else {
            var paramString_1 = '';
            if (brandParameters.length > 0) {
                brandParameters.forEach(function (brand) { return paramString_1 = paramString_1 + _this.brandParameterAnd + brand; });
            }
            if (rangeParameters.length > 0) {
                rangeParameters.forEach(function (range) { return paramString_1 = paramString_1 + _this.rangeParameterAnd + range; });
            }
            return this.http.get(this.categoryProductsApi + category + this.pageParameter + page + this.orderParameter + order + paramString_1);
        }
    };
    CategoryService.prototype.getCategoryBrands = function (category) {
        return this.http.get(this.categoryBrands + this.categoryParameter + category);
    };
    CategoryService.prototype.getCategoryProductsNumberByBrand = function (category, brands, rangeParameters) {
        var _this = this;
        if (rangeParameters.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(brands).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (brand) { return _this.http.get(_this.categoryProductsApi + category + _this.brandsPath + '/' + brand.name + _this.productsPath + _this.countPath); }));
        }
        else {
            var paramString_2 = '';
            rangeParameters.forEach(function (range, index) {
                paramString_2 = index === 0 ? paramString_2 + _this.rangeParameter + range : paramString_2 + _this.rangeParameterAnd + range;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(brands).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (brand) { return _this.http.get(_this.categoryProductsApi + category + _this.brandsPath + '/' + brand.name + _this.productsPath + _this.countPath + paramString_2); }));
        }
    };
    CategoryService.prototype.getCategoryProductsNumberByPriceRange = function (category, priceRanges, brandParameters) {
        var _this = this;
        if (brandParameters.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(priceRanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (range) { return _this.http.get(_this.categoryProductsApi + category + _this.rangesPath + '/' + range.id + _this.productsPath + _this.countPath); }));
        }
        else {
            var paramString_3 = '';
            brandParameters.forEach(function (brand, index) {
                paramString_3 = index === 0 ? paramString_3 + _this.brandParameter + brand : paramString_3 + _this.brandParameterAnd + brand;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(priceRanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (range) { return _this.http.get(_this.categoryProductsApi + category + _this.rangesPath + '/' + range.id + _this.productsPath + _this.countPath + paramString_3); }));
        }
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
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


var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
        this.orderApiEndpoint = '/api/orders';
        this.order = {};
        this.orderProducts = [];
    }
    CheckoutService.prototype.addOrder = function (orderDetails) {
        return this.http.post(this.orderApiEndpoint, orderDetails);
    };
    CheckoutService.prototype.getCurrentOrder = function () {
        return this.order;
    };
    CheckoutService.prototype.setCurrentOrder = function (order) {
        this.order = order;
    };
    CheckoutService.prototype.getOrderProducts = function () {
        return this.orderProducts;
    };
    CheckoutService.prototype.setOrderProducts = function (orderProducts) {
        this.orderProducts = orderProducts;
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CheckoutService);
    return CheckoutService;
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

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productListsApi = '/api/products';
        this.favoriteParam = '?filter=favorite';
        this.newParam = '?filter=new';
        this.pageParam = '&page=';
    }
    ProductService.prototype.getFavoriteProductsInformation = function () {
        return this.http.get(this.productListsApi + this.favoriteParam + this.pageParam + '0');
    };
    ProductService.prototype.getNewProductsInformation = function () {
        return this.http.get(this.productListsApi + this.newParam + this.pageParam + '0');
    };
    ProductService.prototype.getFavoriteProducts = function (pages) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(pages).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (page) { return _this.http.get(_this.productListsApi + _this.favoriteParam + _this.pageParam + page); }));
    };
    ProductService.prototype.getNewProducts = function (pages) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(pages).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (page) { return _this.http.get(_this.productListsApi + _this.newParam + _this.pageParam + page); }));
    };
    ProductService.prototype.getSingleProduct = function (name) {
        return this.http.get(this.productListsApi + '/' + name);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
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


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.registerApiEndpoint = '/api/register';
    }
    RegisterService.prototype.registerUser = function (user) {
        return this.http.post(this.registerApiEndpoint, user);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.searchApi = '/api/search';
        this.brandsPath = '/brands';
        this.countPath = '/count';
        this.productsPath = '/products';
        this.rangesPath = '/ranges';
        this.brandParam = '&brand=';
        this.pageParam = "?page=";
        this.searchParam = "?keyword=";
        this.searchParamAnd = '&keyword=';
    }
    SearchService.prototype.getSearchProducts = function (searchParameters, page) {
        var _this = this;
        var paramString = this.pageParam + page;
        searchParameters.forEach(function (keyword) { return paramString = paramString + _this.searchParamAnd + keyword; });
        return this.http.get(this.searchApi + paramString);
    };
    SearchService.prototype.getSearchProductsNumberByPriceRange = function (searchTerms, priceRanges, brandParameters) {
        var _this = this;
        var paramString = '';
        searchTerms.forEach(function (keyword, index) {
            paramString = index === 0 ? paramString = paramString + _this.searchParam + keyword : paramString = paramString + _this.searchParamAnd + keyword;
        });
        if (brandParameters.length === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(priceRanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (range) { return _this.http.get(_this.searchApi + _this.rangesPath + '/' + range.id + _this.productsPath + _this.countPath + paramString); }));
        }
        else {
            brandParameters.forEach(function (brand) {
                paramString = paramString + _this.brandParam + brand;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(priceRanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (range) { return _this.http.get(_this.searchApi + _this.rangesPath + '/' + range.id + _this.productsPath + _this.countPath + paramString); }));
        }
    };
    SearchService.prototype.getSearchBrands = function (searchParameters) {
        var _this = this;
        var paramString = '';
        searchParameters.forEach(function (keyword, index) {
            paramString = index === 0 ? paramString = paramString + _this.searchParam + keyword : paramString = paramString + _this.searchParamAnd + keyword;
        });
        return this.http.get(this.searchApi + this.brandsPath + paramString);
    };
    SearchService.prototype.getSearchProductsNumberByBrand = function (searchTerms, brands) {
        var _this = this;
        var paramString = '';
        searchTerms.forEach(function (keyword, index) {
            paramString = index === 0 ? paramString = paramString + _this.searchParam + keyword : paramString = paramString + _this.searchParamAnd + keyword;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(brands).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (brand) { return _this.http.get(_this.searchApi + _this.brandsPath + '/' + brand.name + _this.productsPath + _this.countPath + paramString); }));
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
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