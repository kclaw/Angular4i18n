webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  html {\n    width: 80%;\n    margin: 0 auto;\n    font-size: 12px;\n  }\n  \n  main {\n    min-height: 500px;\n  }\n\n  .navbar-wrapper {\n    background: url(" + __webpack_require__("./src/assets/cat2.svg") + ") no-repeat right top;\n  }\n\n  .navbar {\n    border-bottom: 0.33em double #d2d2d2;\n    padding-top: 2.2em;\n    margin-bottom: 2.2em;\n  }\n\n\n  .navbar.top-right-corner {\n    border-bottom: 0;\n    float: right;\n  }\n\n  .navbar.top-right-corner::after {\n    clear: both;\n  }\n\n  .navbar .button {\n    background-color: #e00dc4;\n    border: none;\n    color: white;\n    padding: 2em 2.5em;\n    font-size: 2em;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin: 1em 0.5em;\n    cursor: pointer;\n    width: 200px;\n  }\n\n  @media only screen and (max-width: 608px) {\n    .navbar.top-right-corner .language {\n      width: 100%;\n    }\n    .navbar.top-right-corner {\n      width: 100%;\n      height: 50em;\n    }\n    .navbar-wrapper {\n      background: url(" + __webpack_require__("./src/assets/cat2.svg") + ") no-repeat right 45.6em;\n    }\n    .navbar.top-right-corner .button {\n      width: 100%;\n      font-size: 2em !important;\n    }\n    .navbar .button{\n      width: 100%;\n      margin: 1em 0; \n    }\n\n    html {\n      font-size: 24px;\n    }\n  }\n\n  @media only screen and (min-width: 609px) {\n    .navbar.top-right-corner .button {\n      width: 12em;\n    }\n  }\n\n  .navbar.top-right-corner {\n    min-height: 20em;\n  }\n\n  .navbar.top-right-corner .button {\n    display: inline-block;\n    position: relative;\n    top: 0;\n    z-index: 3;\n    background: lightgray;\n    color: #1172c4;\n    border-color: #1172c4;\n    border-style: solid;\n    border-width: 0.2em;\n    border-radius: 1.5em;\n    padding: 0.5em 3em;\n    white-space: nowrap;\n    text-transform: uppercase;\n    transition: all 0.2s linear;\n    font-size: 1em;\n    text-overflow: clip;\n    overflow: hidden;\n    height: 3em;\n    vertical-align: top;\n  }\n  \n  .navbar.top-right-corner .button:hover {\n    background-color: #696869;\n  }\n\n  .navbar.top-right-corner .button::before {\n    position: absolute;\n    content: url(" + __webpack_require__("./src/assets/test.svg") + ");\n    top: calc(50% - 0.5em);\n    left: 1em;\n    width: 1em;\n    height: 1em;\n  }\n\n  .navbar.top-right-corner .language {\n    position: relative;\n    display: inline-block;\n  }\n\n  .navbar.top-right-corner .button.button-language + ul {\n    display: none;\n    position: relative;\n    right: 0;\n    background-color: #f9f9f9;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    list-style-type: none;\n  }\n\n  .navbar.top-right-corner .button.button-language + ul.show {\n    display: block;\n  }\n\n  .navbar.top-right-corner .button.button-language + ul li {\n    display: block;\n    text-align: center;\n    line-height: 2em;\n    font-size: 2em;\n    height: 2em;\n  }\n\n  .navbar.top-right-corner .button.button-language + ul li.current-language {\n    background-color: palegoldenrod;\n  }\n\n  .navbar .button:hover {\n    background-color: #0813e0;\n    color: white;\n  }\n\n  footer {\n    border-top: 0.33em double #d2d2d2;\n    font-size: 1.5em;\n  }\n\n  footer ul {\n    list-style: none;\n    color: grey;\n  }\n\n  footer ul li {\n    cursor: pointer;\n  }\n\n  footer .license {\n    color: lightcoral;\n    text-align: center;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <header>\n    <div class=\"navbar-wrapper\">\n      <nav class=\"navbar top-right-corner\">\n        <button i18n class=\"button button-register\">\n          Register\n        </button>\n        <button i18n class=\"button button-shoppingcart\">\n          Cart\n        </button>\n        <span class=\"language\">\n          <button i18n class=\"button button-language\" #language (mouseover)=\"showLanguages()\">\n            Language          \n          </button>\n          <ul [ngClass]=\"{'show': LanguagesDisplay}\">\n            <li (click)=\"changeLanguage('en')\" [ngClass]=\"{'current-language': currentLanguage=='en'}\">English</li>\n            <li (click)=\"changeLanguage('cn')\" [ngClass]=\"{'current-language': currentLanguage=='cn'}\">繁體</li>\n          </ul>\n        </span>\n      </nav>\n      <svg viewBox=\"0 0 482 239\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g>\n           <text stroke=\"#000\" transform=\"matrix(5.421545505523682,0,0,1,-963.2060537189245,0) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"Arvo, sans-serif\" font-size=\"24\" id=\"svg_2\" y=\"162.5\" x=\"204.5\" stroke-opacity=\"null\" stroke-width=\"0\" fill=\"#e00dc4\"/>\n           <g stroke=\"null\" id=\"svg_5\">\n            <g stroke=\"null\" id=\"svg_6\">\n             <text stroke=\"#000\" transform=\"matrix(4.511603494040369,0,0,6.1904971279016,-429.8077073796526,-647.7798973388112) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"Arvo, sans-serif\" font-size=\"24\" id=\"svg_4\" y=\"135.924681\" x=\"139.048624\" stroke-opacity=\"null\" stroke-width=\"0\" fill=\"#0813e0\">Shop</text>\n             <text stroke=\"#000\" font-style=\"italic\" font-weight=\"bold\" transform=\"matrix(6.212138336581791,0,0,6.402754395528727,-417.89967625896566,-702.535034933866) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"Arvo, sans-serif\" font-size=\"24\" id=\"svg_1\" y=\"133.411022\" x=\"70.553689\" stroke-width=\"0\" fill=\"#e00dc4\">PET</text>\n            </g>\n           </g>\n          </g>\n      </svg>\n\n      <!-- Navigation with router directives-->\n      <nav class=\"navbar\">\n        <button i18n class=\"button\" [routerLink]=\"['/news']\">News</button>\n        <button i18n class=\"button\" [routerLink]=\"['/discounts']\">Discounts</button>\n        <button i18n class=\"button\" [routerLink]=\"['/delivery']\">Delivery</button>\n        <button i18n class=\"button\" [routerLink]=\"['/contact']\">Contact</button>\n      </nav>\n    </div>\n  </header>\n\n  <main>\n      <router-outlet></router-outlet>\n  </main>\n\n  <footer>\n    <ul>\n      <li i18n>Terms and Conditions</li>\n      <li i18n>Refund Policy</li>\n    </ul>\n    <div i18n class=\"license\">\n      @2017 license under .....\n    </div>\n    <div class=\"payment-method\">\n\n    </div>\n  </footer>\n</html>\n\n<!-- Router Outlet -->\n";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__("./src/app/i18n.service.ts");
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



var AppComponent = (function () {
    function AppComponent(document, i18nService) {
        this.document = document;
        this.i18nService = i18nService;
        //title = 'app';
        this.LanguagesDisplay = false;
        this.currentLanguage = document['locale'];
    }
    AppComponent.prototype.showLanguages = function () {
        this.LanguagesDisplay = true;
        console.log(this.LanguagesDisplay);
    };
    AppComponent.prototype.hideLanguages = function () {
        this.LanguagesDisplay = false;
    };
    AppComponent.prototype.changeLanguage = function (language) {
        document['locale'] = language;
        this.i18nService.applyLanguage(language);
    };
    AppComponent.prototype.onClick = function ($event) {
        var children = this.language.nativeElement.parentNode.childNodes;
        var contains = false;
        for (var i = 0; i < children.length; i++) {
            if (children[i].contains(event.target))
                contains = true;
        }
        if (!contains)
            this.hideLanguages();
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("language"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "language", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onClick", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* i18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* i18nService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cats_cat_list_component__ = __webpack_require__("./src/app/cats/cat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dogs_dog_list_component__ = __webpack_require__("./src/app/dogs/dog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_delivery_component__ = __webpack_require__("./src/app/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discounts_discounts_component__ = __webpack_require__("./src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_default_component__ = __webpack_require__("./src/app/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_route__ = __webpack_require__("./src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__appbootstrap_service__ = __webpack_require__("./src/app/appbootstrap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__i18n_service__ = __webpack_require__("./src/app/i18n.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__cats_cat_list_component__["a" /* CatListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__dogs_dog_list_component__["a" /* DogListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_6__delivery_delivery_component__["a" /* DeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__discounts_discounts_component__["a" /* DiscountsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__default_default_component__["a" /* DefaultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_route__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__i18n_service__["a" /* i18nService */],
            __WEBPACK_IMPORTED_MODULE_11__appbootstrap_service__["a" /* AppBootstrapService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_delivery_component__ = __webpack_require__("./src/app/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_default_component__ = __webpack_require__("./src/app/default/default.component.ts");
// ====== ./app/app.routes.ts ======




// Route Configuration
var routes = [
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_1__news_news_component__["a" /* NewsComponent */] },
    { path: 'discounts', component: __WEBPACK_IMPORTED_MODULE_3__default_default_component__["a" /* DefaultComponent */] },
    { path: 'delivery', component: __WEBPACK_IMPORTED_MODULE_2__delivery_delivery_component__["a" /* DeliveryComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__default_default_component__["a" /* DefaultComponent */] },
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__default_default_component__["a" /* DefaultComponent */] }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "./src/app/appbootstrap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBootstrapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBootstrapService = (function () {
    function AppBootstrapService(ngZone) {
        this.ngZone = ngZone;
    }
    AppBootstrapService.prototype.defaultLaunchApp = function (transaction, locale_id) {
        this.launchApp(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */], transaction, "xlf", locale_id);
    };
    AppBootstrapService.prototype.launchApp = function (appModule, transaction, format, locale_id) {
        this.ngZone.runOutsideAngular(function () {
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(appModule, { providers: [
                    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TRANSLATIONS */], useValue: transaction },
                    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* TRANSLATIONS_FORMAT */], useValue: format },
                    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: locale_id }
                ] });
        });
    };
    return AppBootstrapService;
}());
AppBootstrapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], AppBootstrapService);

var _a;
//# sourceMappingURL=appbootstrap.service.js.map

/***/ }),

/***/ "./src/app/cats/cat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var CatListComponent = (function () {
    // Component class
    function CatListComponent() {
    }
    return CatListComponent;
}());
CatListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n    <h2>Cats</h2>\n    <p>List of cats</p>"
    })
    // Component class
], CatListComponent);

//# sourceMappingURL=cat-list.component.js.map

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var ContactComponent = (function () {
    // Component class
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n    <h2>Cats</h2>\n    <p>List of cats</p>"
    })
    // Component class
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "./src/app/default/default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, .h1 {\n    font-size:5em;\n    text-align: center;\n    line-height: 500%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    Coming Soon\n</h1>";

/***/ }),

/***/ "./src/app/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var DefaultComponent = (function () {
    // Component class
    function DefaultComponent() {
    }
    return DefaultComponent;
}());
DefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/default/default.component.html"),
        styles: [__webpack_require__("./src/app/default/default.component.css"), __webpack_require__("./src/app/app.component.css")]
    })
    // Component class
], DefaultComponent);

//# sourceMappingURL=default.component.js.map

/***/ }),

/***/ "./src/app/delivery/delivery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delivery {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n\n.arrangement, .charge,  .condition{\n    width: calc(50% - 10em);\n    padding: 5em 5em;\n}\n    \n.arrangement ul {\n    list-style-type: none;\n    margin: 0;\n    margin-left: 1em;\n    padding: 0;\n}\n\n.arrangement ul li {\n    position: relative;\n    margin-bottom: 1.5em;\n    padding: 1em;\n    background-color: #F0D756;\n    text-align: center;\n}\n    \n.arrangement a {\n    text-decoration:none;\n    color:black;\n    font-size:15px;\n    font-family: 'Raleway', sans-serif;\n}\n    \n.arrangement li:hover {\n    box-shadow:inset -1em 0 #6CD6CC; /* For Safari 3.1 to 6.0 */\n    transition: box-shadow 0.5s;\n}\n    \n.arrangement ul li span {\n    position: absolute;\n    top: -0.3em;\n    left: -0.5em;\n    width: 6em;\n    height: 1.2em;\n    font-size: 2em;\n    line-height: 1.2;\n    font-weight: bold;\n    text-align: center;\n    color: white;\n    background-color: #6CD6CC;\n    transform: rotate(-20deg);\n    -ms-transform: rotate(-20deg);\n    -webkit-transform: rotate(-20deg);\n    z-index: 99;\n    overflow: hidden;\n    \n}\n\n.arrangement ul li span:before {\n    position: absolute;\n    content: attr(marquee);\n    -webkit-animation: example1 8s linear infinite;\n            animation: example1 8s linear infinite;\n}\n@-webkit-keyframes example1 {\n  0%   { -webkit-transform: translateX(100%); }\n  100% { -webkit-transform: translateX(-100%); }\n}\n@keyframes example1 {\n  0% { /* Firefox bug fix */\n    -webkit-transform: translateX(100%); /* Firefox bug fix */\n    transform: translateX(100%); \t\t\n  }\n  100% { /* Firefox bug fix */\n    -webkit-transform: translateX(-100%); /* Firefox bug fix */\n    transform: translateX(-100%); \n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"delivery\">\n    <div class=\"arrangement\">\n        <ul>\n            <li class=\"delivery-time\"><span marquee=\"delivery time\"></span>Monday to Friday 1pm - 6pm</li>\n            <li class=\"office-time\"><span marquee=\"office time\"></span>Monday to Friday 10am - 6pm</li>\n            <li class=\"contact-number\"><span marquee=\"contact number\"></span>1234 5678</li>\n            <li class=\"whatsapp-number\"><span marquee=\"whatsapp\"></span>1234 5678</li>\n        </ul>\n    </div>\n    <div class=\"charge\">\n        <ul>\n            <li></li>\n            <li></li>\n        </ul>\n    </div>\n    <div class=\"condition\">\n        <ul>\n          <li>Only deliver to truck reachable region</li>\n          <li>delivery by lifting up stairs will be addtionally charged</li>\n          <li>delivery not within delivery time will be addtionally charged</li>\n          <li>delivery is not available on public holiday</li>\n          <li>delivery would be cancelled because of bad weather</li>\n        </ul> \n    </div>\n</section>";

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var DeliveryComponent = (function () {
    // Component class
    function DeliveryComponent() {
    }
    return DeliveryComponent;
}());
DeliveryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/delivery/delivery.component.html"),
        styles: [__webpack_require__("./src/app/delivery/delivery.component.css")]
    })
    // Component class
], DeliveryComponent);

//# sourceMappingURL=delivery.component.js.map

/***/ }),

/***/ "./src/app/discounts/discounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var DiscountsComponent = (function () {
    // Component class
    function DiscountsComponent() {
    }
    return DiscountsComponent;
}());
DiscountsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n    <h2>Cats</h2>\n    <p>List of cats</p>"
    })
    // Component class
], DiscountsComponent);

//# sourceMappingURL=discounts.component.js.map

/***/ }),

/***/ "./src/app/dogs/dog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Dogs/dog-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var DogListComponent = (function () {
    // Component class
    function DogListComponent() {
    }
    return DogListComponent;
}());
DogListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n    <h2>Dogs</h2>\n    <p>List of dogs</p>"
    })
    // Component class
], DogListComponent);

//# sourceMappingURL=dog-list.component.js.map

/***/ }),

/***/ "./src/app/i18n.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i18nService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_cn__ = __webpack_require__("./src/app/messages.cn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_en__ = __webpack_require__("./src/app/messages.en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbootstrap_service__ = __webpack_require__("./src/app/appbootstrap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
//import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
//import { CompilerConfig } from '@angular/compiler';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*export function getTranslationProviders(): Object[] {

  // Get the locale id from the global
  const locale = document['locale'] as string;
    console.log(locale);
  // return no providers if fail to get translation file for locale
  const noProviders: Object[] = [];
 
  // No locale or U.S. English: no translation providers
  /*if (!locale || locale === 'en') {
    return Promise.resolve(noProviders);
  }*/
// Ex: 'locale/messages.es.xlf`
/*const translationFile = `./locale/messages.${locale}.xlf`;
console.log('hi'+translationFile);
return getTranslationsWithSystemJs(translationFile)
.then( (translations: string ) => [
 { provide: TRANSLATIONS, useValue: translations },
 { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
 { provide: LOCALE_ID, useValue: locale },
 { provide: CompilerConfig, useValue: new CompilerConfig({ missingTranslation: MissingTranslationStrategy.Error }) }
])
.catch(() => noProviders);
}

let array = [
{ provide: TRANSLATIONS, useValue: cn },
{ provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
{ provide: LOCALE_ID, useValue: 'cn' },
{ provide: CompilerConfig, useValue: new CompilerConfig({ missingTranslation: MissingTranslationStrategy.Error }) }
];

return this.array;

function getTranslationsWithSystemJs(file: string) {
console.log(cn);
let noProviders: string  = "";
return Promise.resolve(noProviders); // relies on text plugin
}
}*/
var i18nService = (function () {
    function i18nService(app) {
        this.app = app;
        this.language = [];
        this.registerLanguageFile('cn', __WEBPACK_IMPORTED_MODULE_0__messages_cn__["a" /* cn */]);
        this.registerLanguageFile('en', __WEBPACK_IMPORTED_MODULE_1__messages_en__["a" /* en */]);
    }
    i18nService.prototype.registerLanguageFile = function (name, file) {
        this.language.push({ 'name': name, 'file': file });
    };
    i18nService.prototype.applyLanguage = function (name) {
        var language = this.findLanguageByName(name);
        if (null != language) {
            this.app.defaultLaunchApp(language.file, language.name);
            return true;
        }
        return false;
    };
    i18nService.prototype.findLanguageByName = function (name) {
        for (var i = 0; i < this.language.length; i++) {
            if (this.language[i].name === name)
                return this.language[i];
        }
        return null;
    };
    return i18nService;
}());
i18nService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__appbootstrap_service__["a" /* AppBootstrapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__appbootstrap_service__["a" /* AppBootstrapService */]) === "function" && _a || Object])
], i18nService);

var _a;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ "./src/app/messages.cn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cn; });
var cn = "\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"2c6f29f21098be0c8d364a680c9df6ea9e932080\" datatype=\"html\">\n        <source>\n  <x id=\"TAG_IMG\" ctype=\"image\"/>\n  Our pet shop is a retail business which sells different kinds of animals to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums. Some pet stores provide engraving services for pet tags, which have the owner\u2019s contact information in case the pet gets lost.\n</source>\n<target>\n\u6211\u5011\u7684\u5BF5\u7269\u5E97\u662F\u5F9E\u4E8B\u8CB7\u8CE3\u72D7\u3001\u8C93\u3001\u9EC3\u91D1\u9F20\u7B49\u5404\u7A2E\u5BF5\u7269\uFF0C\u53CA\u5BF5\u7269\u65E5\u5E38\u98DF\u7269\u3001\u5BB6\u5C45\u7528\u5177\u3001\u8A2D\u65BD\u7684\u96F6\u552E\u5E97\u3002 \u5728\u4F9B\u61C9\u93C8\u4E2D\uFF0C\u5BF5\u7269\u5E97\u7684\u4E0A\u6E38\u4F9B\u61C9\u5546\u662F\u5927\u91CF\u7E41\u6B96\u8C93\u72D7\u5BF5\u7269\u7684\u990A\u6B96\u5834\uFF1B\u800C\u5BF5\u7269\u5E97\u7684\u9867\u5BA2\u662F\u559C\u611B\u5BF5\u7269\u7684\u6D88\u8CBB\u8005\u3002\u4E5F\u6709\u4E00\u4E9B\u662F\u8CB7\u5BF5\u7269\u7D66\u5B50\u5973\u4F5C\u70BA\u79AE\u7269\u7684\u5BB6\u9577\uFF0C\u6216\u662F\u6200\u611B\u8FFD\u6C42\u8005\u8CB7\u7D66\u670B\u53CB\u7684\u79AE\u7269\u7B49\u3002\n</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/news/news.component.ts</context>\n          <context context-type=\"linenumber\">2</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"189b4b4fe578676e674d4f617fdc826204b552fc\" datatype=\"html\">\n        <source>\n          Register\n        </source>\n\t<target>\n\t  \u8A3B\u518A\n\t</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">5</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"a6228e97c7cb4e381f16f1152c432234a58dbf84\" datatype=\"html\">\n        <source>\n          Cart\n        </source>\n\t<target>\n\t  \u8CFC\u7269\u8ECA\n\t</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">8</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"57e5b0dfe51994bda1b13184ee34a90f2b2ddc97\" datatype=\"html\">\n        <source>\n            Language          \n          </source>\n\t  <target>\n\t  \u8A9E\u8A00\n\t</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">12</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"1d0974afae70914072a4fbf19e53328e517bae73\" datatype=\"html\">\n        <source>News</source>\n\t<target>\u65B0\u805E</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">38</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"7543f1f91d44f96fedca8b0e6530fe73f44d1f01\" datatype=\"html\">\n        <source>Discounts</source>\n\t<target>\u512A\u60E0</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">39</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"4a0616affe6cad277c518ae67decf34ebab652f7\" datatype=\"html\">\n        <source>Delivery</source>\n\t<target>\u9001\u8CA8</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">40</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"34746fb1c7f3d2194d99652bdff89e6e14c9c4f4\" datatype=\"html\">\n        <source>Contact</source>\n\t<target>\u806F\u7E6B</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">41</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"e9048704780ed5bb3fc1af4f94d4fc5fdeb72cab\" datatype=\"html\">\n        <source>Terms and Conditions</source>\n\t<target>\u689D\u6B3E\u53CA\u7D30\u5247</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">52</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"c85caed94bd76ad556d77bff7a566bec46fa1489\" datatype=\"html\">\n        <source>Refund Policy</source>\n\t<target>\u9000\u6B3E\u653F\u7B56</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">53</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"3d4d754caa83f5068d23b97fe1cf010916078152\" datatype=\"html\">\n        <source>\n      @2017 license under .....\n    </source>\n\t<target>@2017 \u7248\u6B0A .....</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">55</context>\n        </context-group>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n";
//# sourceMappingURL=messages.cn.js.map

/***/ }),

/***/ "./src/app/messages.en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return en; });
var en = "\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"c32d7ed66e6bfccb540c8d7e258d66ab050dca3b\" datatype=\"html\">\n        <source>\n          1\n        </source>\n\t<target>\n          Hi\n\t</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">5</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"60d450830433f37a0f2512cc06642c25ebdc72b9\" datatype=\"html\">\n        <source>\n          2\n        </source>\n\t<target>\n          Test\t\t\n\t</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">src/app/app.component.ts</context>\n          <context context-type=\"linenumber\">8</context>\n        </context-group>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n";
//# sourceMappingURL=messages.en.js.map

/***/ }),

/***/ "./src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section { \n    color: #685206; \n    font-family: 'Helvetica Neue', sans-serif; \n    margin: 1em 1em; \n    text-align: justify; \n    text-justify: inter-word;\n    font-family: MyFont;\n    line-height: 1.3em;\n    font-size: 3em;\n}\n\nimg {\n    float: right;\n    margin: 0 0 10px 10px;\n    width: 12em;\n    height: 12em;\n}\n\n@font-face {\n    font-family: MyFont;\n    src: url(" + __webpack_require__("./src/assets/KBZipaDeeDooDah.ttf") + ");\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section i18n>\n  <img src=\"../../assets/pet-shop.svg\" alt=\"pet shop\"/>\n  Our pet shop is a retail business which sells different kinds of animals to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums. Some pet stores provide engraving services for pet tags, which have the owner’s contact information in case the pet gets lost.\n</section>\n";

/***/ }),

/***/ "./src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// ====== ./app/Cats/cat-list.component.ts ======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import component decorator

var NewsComponent = (function () {
    // Component class
    function NewsComponent() {
    }
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("./src/app/news/news.component.html"),
        styles: [__webpack_require__("./src/app/news/news.component.css"), __webpack_require__("./src/app/app.component.css")]
    })
    // Component class
], NewsComponent);

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "./src/assets/KBZipaDeeDooDah.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "KBZipaDeeDooDah.68d917708f21f5cfd29e.ttf";

/***/ }),

/***/ "./src/assets/cat2.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cat2.39a007f3019aeef70f85.svg";

/***/ }),

/***/ "./src/assets/test.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "test.376305e2f37a573d6083.svg";

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_messages_cn__ = __webpack_require__("./src/app/messages.cn.ts");



//import { getTranslationProviders } from './app/i18n-providers';


//import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
//platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.log(err));
/*getTranslationProviders().then(providers => {
  console.log(providers);
  const options = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule, options);
}); */
//let array = getTranslationProviders();
//const options = { providers: array };
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], { providers: [
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TRANSLATIONS */], useValue: __WEBPACK_IMPORTED_MODULE_4__app_messages_cn__["a" /* cn */] },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* TRANSLATIONS_FORMAT */], useValue: 'xlf' },
        { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: 'cn' }
    ] });
//getTranslationProviders().then(providers => {
//console.log(providers);
//const options = { providers };
console.log('Running AOT compiled');
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//});  
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map