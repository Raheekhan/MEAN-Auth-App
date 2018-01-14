webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#flash-msg {\n  position: relative;\n  text-align: center;\n\n}\n\nbody {\n  margin-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-navbar></app-navbar>\n  <div class=\"container\">\n    <flash-messages class=\"flash\" id=\"flash-msg\"></flash-messages>\n    <router-outlet></router-outlet>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pricing_pricing_component__ = __webpack_require__("../../../../../src/app/components/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_platinumplan_platinumplan_component__ = __webpack_require__("../../../../../src/app/components/platinumplan/platinumplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_goldplan_goldplan_component__ = __webpack_require__("../../../../../src/app/components/goldplan/goldplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_silverplan_silverplan_component__ = __webpack_require__("../../../../../src/app/components/silverplan/silverplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_bronzeplan_bronzeplan_component__ = __webpack_require__("../../../../../src/app/components/bronzeplan/bronzeplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_notes_notes_component__ = __webpack_require__("../../../../../src/app/components/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_apidocs_apidocs_component__ = __webpack_require__("../../../../../src/app/components/apidocs/apidocs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_account_show_account_show_component__ = __webpack_require__("../../../../../src/app/components/account-show/account-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_account_show_id_account_show_id_component__ = __webpack_require__("../../../../../src/app/components/account-show-id/account-show-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_contactform_show_contactform_show_component__ = __webpack_require__("../../../../../src/app/components/contactform-show/contactform-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_contactform_show_id_contactform_show_id_component__ = __webpack_require__("../../../../../src/app/components/contactform-show-id/contactform-show-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_account_create_account_create_component__ = __webpack_require__("../../../../../src/app/components/account-create/account-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_contactform_create_contactform_create_component__ = __webpack_require__("../../../../../src/app/components/contactform-create/contactform-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_account_update_id_account_update_id_component__ = __webpack_require__("../../../../../src/app/components/account-update-id/account-update-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_account_delete_id_account_delete_id_component__ = __webpack_require__("../../../../../src/app/components/account-delete-id/account-delete-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_13__components_pricing_pricing_component__["a" /* PricingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'platinumplan', component: __WEBPACK_IMPORTED_MODULE_14__components_platinumplan_platinumplan_component__["a" /* PlatinumplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'goldplan', component: __WEBPACK_IMPORTED_MODULE_15__components_goldplan_goldplan_component__["a" /* GoldplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'silverplan', component: __WEBPACK_IMPORTED_MODULE_16__components_silverplan_silverplan_component__["a" /* SilverplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bronzeplan', component: __WEBPACK_IMPORTED_MODULE_17__components_bronzeplan_bronzeplan_component__["a" /* BronzeplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_18__components_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__["a" /* MessagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_21__components_notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'apidocs', component: __WEBPACK_IMPORTED_MODULE_22__components_apidocs_apidocs_component__["a" /* ApidocsComponent */] },
    { path: 'account-show', component: __WEBPACK_IMPORTED_MODULE_23__components_account_show_account_show_component__["a" /* AccountShowComponent */] },
    { path: 'account-show-id', component: __WEBPACK_IMPORTED_MODULE_24__components_account_show_id_account_show_id_component__["a" /* AccountShowIdComponent */] },
    { path: 'contactform-show', component: __WEBPACK_IMPORTED_MODULE_25__components_contactform_show_contactform_show_component__["a" /* ContactformShowComponent */] },
    { path: 'contactform-show-id', component: __WEBPACK_IMPORTED_MODULE_26__components_contactform_show_id_contactform_show_id_component__["a" /* ContactformShowIdComponent */] },
    { path: 'account-create', component: __WEBPACK_IMPORTED_MODULE_27__components_account_create_account_create_component__["a" /* AccountCreateComponent */] },
    { path: 'contactform-create', component: __WEBPACK_IMPORTED_MODULE_28__components_contactform_create_contactform_create_component__["a" /* ContactformCreateComponent */] },
    { path: 'account-update-id', component: __WEBPACK_IMPORTED_MODULE_29__components_account_update_id_account_update_id_component__["a" /* AccountUpdateIdComponent */] },
    { path: 'account-delete-id', component: __WEBPACK_IMPORTED_MODULE_30__components_account_delete_id_account_delete_id_component__["a" /* AccountDeleteIdComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_platinumplan_platinumplan_component__["a" /* PlatinumplanComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_goldplan_goldplan_component__["a" /* GoldplanComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_silverplan_silverplan_component__["a" /* SilverplanComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_bronzeplan_bronzeplan_component__["a" /* BronzeplanComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_apidocs_apidocs_component__["a" /* ApidocsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_account_show_account_show_component__["a" /* AccountShowComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_account_show_id_account_show_id_component__["a" /* AccountShowIdComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_contactform_show_contactform_show_component__["a" /* ContactformShowComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_contactform_show_id_contactform_show_id_component__["a" /* ContactformShowIdComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_account_create_account_create_component__["a" /* AccountCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_contactform_create_contactform_create_component__["a" /* ContactformCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_account_update_id_account_update_id_component__["a" /* AccountUpdateIdComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_account_delete_id_account_delete_id_component__["a" /* AccountDeleteIdComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_33_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_31__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_32__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-create/account-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-create/account-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-create/account-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountCreateComponent = /** @class */ (function () {
    function AccountCreateComponent() {
    }
    AccountCreateComponent.prototype.ngOnInit = function () {
    };
    AccountCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-create',
            template: __webpack_require__("../../../../../src/app/components/account-create/account-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-create/account-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountCreateComponent);
    return AccountCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-delete-id/account-delete-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-delete-id/account-delete-id.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-delete-id works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-delete-id/account-delete-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDeleteIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDeleteIdComponent = /** @class */ (function () {
    function AccountDeleteIdComponent() {
    }
    AccountDeleteIdComponent.prototype.ngOnInit = function () {
    };
    AccountDeleteIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-delete-id',
            template: __webpack_require__("../../../../../src/app/components/account-delete-id/account-delete-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-delete-id/account-delete-id.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountDeleteIdComponent);
    return AccountDeleteIdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-show-id/account-show-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-show-id/account-show-id.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-show-id works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-show-id/account-show-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountShowIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountShowIdComponent = /** @class */ (function () {
    function AccountShowIdComponent() {
    }
    AccountShowIdComponent.prototype.ngOnInit = function () {
    };
    AccountShowIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-show-id',
            template: __webpack_require__("../../../../../src/app/components/account-show-id/account-show-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-show-id/account-show-id.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountShowIdComponent);
    return AccountShowIdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-show/account-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-show/account-show.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-show works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-show/account-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountShowComponent = /** @class */ (function () {
    function AccountShowComponent() {
    }
    AccountShowComponent.prototype.ngOnInit = function () {
    };
    AccountShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-show',
            template: __webpack_require__("../../../../../src/app/components/account-show/account-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-show/account-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountShowComponent);
    return AccountShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/account-update-id/account-update-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account-update-id/account-update-id.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-update-id works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/account-update-id/account-update-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountUpdateIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountUpdateIdComponent = /** @class */ (function () {
    function AccountUpdateIdComponent() {
    }
    AccountUpdateIdComponent.prototype.ngOnInit = function () {
    };
    AccountUpdateIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-update-id',
            template: __webpack_require__("../../../../../src/app/components/account-update-id/account-update-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account-update-id/account-update-id.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountUpdateIdComponent);
    return AccountUpdateIdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/apidocs/apidocs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/apidocs/apidocs.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <ul class=\"nav nav-pills nav-stacked admin-menu\">\n          <li><b>GET</b></li>\n          <li><a [routerLink]=\"['/account-show']\" id=\"acc-show\">account/show</a></li>\n          <li><a [routerLink]=\"['/']\" id=\"acc-show-id\">account/show/:id</a></li>\n          <li><a [routerLink]=\"['/']\" id=\"cont-show\">contactform/show</a></li>\n          <li><a [routerLink]=\"['/']\" id=\"cont-show-id\">contactform/show/:id</a></li>\n          <li><b>POST</b></li>\n          <li><a [routerLink]=\"['/']\" id=\"acc-create\">account/create</a></li>\n          <li><a [routerLink]=\"['/']\" id=\"cont-create\">contactform/create</a></li>\n          <li><b>PATCH</b></li>\n          <li><a [routerLink]=\"['/']\" id=\"acc-upt\">account/update/:id</a></li>\n          <li><b>DELETE</b></li>\n          <li><a [routerLink]=\"['/']\" id=\"acc-del\">account/delete/:id</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-9 well admin-content\">\n        <div class=\"jumbotron\">\n          <h2>REST API Docs</h2>\n          <p>Browse through the list on the left for desired API calls</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/apidocs/apidocs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApidocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApidocsComponent = /** @class */ (function () {
    function ApidocsComponent() {
    }
    ApidocsComponent.prototype.ngOnInit = function () {
    };
    ApidocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apidocs',
            template: __webpack_require__("../../../../../src/app/components/apidocs/apidocs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/apidocs/apidocs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApidocsComponent);
    return ApidocsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/bronzeplan/bronzeplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart tbody td .form-control{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions .btn{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\n\t.actions .btn-info{\n\t\tfloat:left;\n\t}\n\t.actions .btn-danger{\n\t\tfloat:right;\n\t}\n\n\ttable#cart thead { display: none; }\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\n\ttable#cart tbody td:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\n\n\n\ttable#cart tfoot td{display:block; }\n\ttable#cart tfoot td .btn{display:block;}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bronzeplan/bronzeplan.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"container\">\n\t<table id=\"cart\" class=\"table table-hover table-condensed\">\n    \t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://placehold.it/100x100\" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">Bronze</h4>\n\t\t\t\t\t\t\t\t\t\t<p>Bronze provides you 5 projects</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Price\">$0.00</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" value=\"1\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">0.00</td>\n\t\t\t\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\"><button class=\"btn btn-info btn-sm\"><i class=\"glyphicon glyphicon-refresh\"></i></button></a>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total 0.00</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/pricing']\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Go Back</a></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $0.00</strong></td>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/cart']\" class=\"btn btn-success btn-block\">Cart <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/bronzeplan/bronzeplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BronzeplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BronzeplanComponent = /** @class */ (function () {
    function BronzeplanComponent() {
    }
    BronzeplanComponent.prototype.ngOnInit = function () {
    };
    BronzeplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bronzeplan',
            template: __webpack_require__("../../../../../src/app/components/bronzeplan/bronzeplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bronzeplan/bronzeplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BronzeplanComponent);
    return BronzeplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <p>\n  cart works!\n  </p>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 5px;\n}\n\n.form-control {\n    border-radius: 0px;\n    color: #6b6c6d;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n    height: 52px;\n    padding: 0px;\n    line-height: 1.42857143;\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: transparent;\n    letter-spacing: 0px;\n    margin-bottom: 10px;\n    -webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n}\n\n.form-control:focus {\n    color: #34b2a4 !important;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-bottom-color: #34b2a4;\n    font-size: 12px;\n}\n\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n    margin: 8px 0 0;\n    margin-top: 12px;\n    line-height: normal;\n}\n\ninput::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n}\n\ntextarea::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n    font-size: 12px;\n}\n\n.input-group-addon {\n    background-color: transparent;\n    border: 1px solid #34b2a4;\n    border-radius: 0px;\n}\n\n.focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: #fff;\n}\n\n.focus:focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n\n.btn {\n    font-family: 'PT Sans', sans-serif;\n    font-size: 18px;\n    text-transform: capitalize;\n    font-weight: 600;\n    padding: 11px 30px;\n    border-radius: 6px;\n    line-height: 1.8;\n    letter-spacing: 0px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    word-wrap: break-word;\n    white-space: normal !important;\n}\n\n.btn-primary {\n    background-color: #f8591b;\n    color: #fff;\n    border: 1px solid #f8591b;\n}\n\n.space-medium {\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.pdt20 {\n    padding-top: 20px;\n}\n\n.contact-caption {\n    position: relative;\n    top: 130px;\n}\n\n.contact-title {\n    font-family: 'PT Serif', serif;\n    font-size: 50px;\n    font-style: italic;\n    margin-bottom: 40px;\n    line-height:80px;\n}\n\n.contact-form {\n    background-color: #fff;\n    padding: 30px;\n    text-align: center;\n    position: relative;\n    bottom: 0px;\n    top: 100px;\n    -webkit-box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n    box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"contact-pageheader\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                    <div class=\"contact-caption\">\n                        <h1 class=\"contact-title\">Don’t Be Shy, Talk to Me.</h1>\n                    </div>\n                </div>\n                <div class=\"col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12\">\n                    <div class=\"contact-form\">\n                        <h3 class=\"contact-info-title\">Contact Me</h3>\n                        <div class=\"row\">\n                            <form (submit)=\"onSendMessageSubmit()\">\n                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label sr-only \" for=\"Name\"></label>\n                                        <input [(ngModel)]=\"name\" id=\"name\" name=\"name\" type=\"text\" placeholder=\"NAME\" class=\"form-control\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label sr-only \" for=\"Email\"></label>\n                                        <input [(ngModel)]=\"email\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"EMAIL\" class=\"form-control\" required>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label sr-only\" for=\"textarea\"></label>\n                                        <textarea class=\"form-control pdt20\" [(ngModel)]=\"message\" id=\"message\" name=\"message\" rows=\"4\" placeholder=\"MESSAGE\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-12\">\n                                    <button class=\"btn btn-primary btn-lg\">Send message</button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSendMessageSubmit = function () {
        var _this = this;
        var form = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        if (!this.validateService.validateEmail(form.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.sendMessageContactForm(form).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/contact']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/contact']);
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contactform-create/contactform-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contactform-create/contactform-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contactform-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/contactform-create/contactform-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactformCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactformCreateComponent = /** @class */ (function () {
    function ContactformCreateComponent() {
    }
    ContactformCreateComponent.prototype.ngOnInit = function () {
    };
    ContactformCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactform-create',
            template: __webpack_require__("../../../../../src/app/components/contactform-create/contactform-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contactform-create/contactform-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactformCreateComponent);
    return ContactformCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contactform-show-id/contactform-show-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contactform-show-id/contactform-show-id.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contactform-show-id works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/contactform-show-id/contactform-show-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactformShowIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactformShowIdComponent = /** @class */ (function () {
    function ContactformShowIdComponent() {
    }
    ContactformShowIdComponent.prototype.ngOnInit = function () {
    };
    ContactformShowIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactform-show-id',
            template: __webpack_require__("../../../../../src/app/components/contactform-show-id/contactform-show-id.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contactform-show-id/contactform-show-id.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactformShowIdComponent);
    return ContactformShowIdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contactform-show/contactform-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contactform-show/contactform-show.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contactform-show works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/contactform-show/contactform-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactformShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactformShowComponent = /** @class */ (function () {
    function ContactformShowComponent() {
    }
    ContactformShowComponent.prototype.ngOnInit = function () {
    };
    ContactformShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contactform-show',
            template: __webpack_require__("../../../../../src/app/components/contactform-show/contactform-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contactform-show/contactform-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactformShowComponent);
    return ContactformShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.placeholders h4 {\n  margin-bottom: 0;\n}\n\n.placeholder {\n  margin-bottom: 20px;\n}\n\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a [routerLink]=\"['/dashboard']\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Reports</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Analytics</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Export</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/notes']\">Notes</a></li>\n            <li><a [routerLink]=\"['/messages']\">Messages</a></li>\n            <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li><a [routerLink]=\"['/settings']\">Settings</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li id=\"logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Dashboard</h1>\n\n          <div class=\"row placeholders\">\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n            <div class=\"col-xs-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/goldplan/goldplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart tbody td .form-control{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions .btn{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\n\t.actions .btn-info{\n\t\tfloat:left;\n\t}\n\t.actions .btn-danger{\n\t\tfloat:right;\n\t}\n\n\ttable#cart thead { display: none; }\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\n\ttable#cart tbody td:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\n\n\n\ttable#cart tfoot td{display:block; }\n\ttable#cart tfoot td .btn{display:block;}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/goldplan/goldplan.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"container\">\n\t\t<table id=\"cart\" class=\"table table-hover table-condensed\">\n    \t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://placehold.it/100x100\" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">Gold</h4>\n\t\t\t\t\t\t\t\t\t\t<p>Gold provides you 30 projects, you will be charged monthly</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Price\">$10.00</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" value=\"1\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">10.00</td>\n\t\t\t\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\"><button class=\"btn btn-info btn-sm\"><i class=\"glyphicon glyphicon-refresh\"></i></button></a>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total 10.00</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/pricing']\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Go Back</a></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $10.00</strong></td>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/cart']\" class=\"btn btn-success btn-block\">Cart <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t</div>\n\t</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/goldplan/goldplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoldplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoldplanComponent = /** @class */ (function () {
    function GoldplanComponent() {
    }
    GoldplanComponent.prototype.ngOnInit = function () {
    };
    GoldplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-goldplan',
            template: __webpack_require__("../../../../../src/app/components/goldplan/goldplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/goldplan/goldplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoldplanComponent);
    return GoldplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.links {\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"jumbotron text-center\">\n    <h1>MEAN Authentication App</h1>\n    <p class=\"lead\">Welcome to the MEAN Authetication Application.<br/> This is an application built for Selenium Automation practice,<br/> with functions with no real purpose.\n    </p>\n    <div>\n      <a class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a>\n      <a class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>PRICING</h3>\n      <p><a class=\"links\" [routerLink]=\"['/pricing']\">Check out the pricing for sweet deals!</a></p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>CONTACT ME</h3>\n      <p><a class=\"links\" [routerLink]=\"['/contact']\">Get in touch with me by filling out the contact form!</a></p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>GITHUB</h3>\n      <p><a class=\"links\" href=\"https://github.com/Raheekhan\">If you're interested, check out my GitHub page!</a></p>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 5px;\n}\n\n.form-control {\n    border-radius: 0px;\n    color: #6b6c6d;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n    height: 52px;\n    padding: 0px;\n    line-height: 1.42857143;\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: transparent;\n    letter-spacing: 0px;\n    margin-bottom: 10px;\n    -webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n}\n\n.form-control:focus {\n    color: #34b2a4 !important;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-bottom-color: #34b2a4;\n    font-size: 12px;\n}\n\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n    margin: 8px 0 0;\n    margin-top: 12px;\n    line-height: normal;\n}\n\ninput::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n}\n\ntextarea::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n    font-size: 12px;\n}\n\n.input-group-addon {\n    background-color: transparent;\n    border: 1px solid #34b2a4;\n    border-radius: 0px;\n}\n\n.focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: #fff;\n}\n\n.focus:focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n\n.btn {\n    font-family: 'PT Sans', sans-serif;\n    font-size: 18px;\n    text-transform: capitalize;\n    font-weight: 600;\n    padding: 11px 30px;\n    border-radius: 6px;\n    line-height: 1.8;\n    letter-spacing: 0px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    word-wrap: break-word;\n    white-space: normal !important;\n}\n\n.btn-primary {\n    background-color: #f8591b;\n    color: #fff;\n    border: 1px solid #f8591b;\n}\n\n.space-medium {\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.pdt20 {\n    padding-top: 20px;\n}\n\n.contact-caption {\n    position: relative;\n    top: 130px;\n}\n\n.contact-title {\n    font-family: 'PT Serif', serif;\n    font-size: 50px;\n    font-style: italic;\n    margin-bottom: 40px;\n    line-height:80px;\n}\n\n.contact-form {\n    background-color: #fff;\n    padding: 30px;\n    text-align: center;\n    position: relative;\n    bottom: 0px;\n    top: 100px;\n    -webkit-box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n    box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"contact-pageheader\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n          <div class=\"contact-caption\">\n            <h1 class=\"contact-title\">Log in to your profile</h1>\n          </div>\n        </div>\n        <div class=\"col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12\">\n          <div class=\"contact-form\">\n            <h3 class=\"contact-info-title\">Login</h3>\n            <div class=\"row\">\n              <form (submit)=\"onLoginSubmit()\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Username\"></label>\n                    <input [(ngModel)]=\"username\" id=\"username\" name=\"username\" type=\"text\" placeholder=\"USERNAME\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Password\"></label>\n                    <input [(ngModel)]=\"password\" id=\"password\" name=\"password\" type=\"password\" placeholder=\"PASSWORD\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-12\">\n                  <button class=\"btn btn-primary btn-lg\">Login</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.placeholders h4 {\n  margin-bottom: 0;\n}\n\n.placeholder {\n  margin-bottom: 20px;\n}\n\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/dashboard']\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Reports</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Analytics</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Export</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/notes']\">Notes</a></li>\n            <li class=\"active\"><a [routerLink]=\"['/messages']\">Messages</a></li>\n            <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li><a [routerLink]=\"['/settings']\">Settings</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Messages</h1>\n\n        </div>\n      </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\n\nbody {\n  padding-top: 100px;\n}\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.placeholders h4 {\n  margin-bottom: 0;\n}\n\n.placeholder {\n  margin-bottom: 20px;\n}\n\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN Auth App</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li id=\"home\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/']\">Home</a></li>\n            <li id=\"contact\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/contact']\">Contact</a></li>\n            <li id=\"contact\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/apidocs']\">API</a></li>\n            <li id=\"pricing\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/pricing']\">Pricing</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li id=\"cart\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/cart']\">Cart</a></li>\n            <li id=\"dashboard\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li id=\"profile\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li id=\"login\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li id=\"register\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li id=\"logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n<!-- <div class=\"container-fluid\" >\n  <div class=\"row\">\n    <div *ngIf=\"authService.loggedIn()\" class=\"col-sm-3 col-md-2 sidebar\">\n      <ul class=\"nav nav-sidebar\">\n        <li class=\"active\"><a [routerLink]=\"['/dashboard']\">Overview <span class=\"sr-only\">(current)</span></a></li>\n        <li><a [routerLink]=\"['/dashboard']\">Reports</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">Analytics</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">Export</a></li>\n      </ul>\n      <ul class=\"nav nav-sidebar\">\n        <li><a [routerLink]=\"['/notes']\">Notes</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">ss</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">One more nav</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">Another nav item</a></li>\n        <li><a [routerLink]=\"['/dashboard']\">More navigation</a></li>\n      </ul>\n      <ul class=\"nav nav-sidebar\">\n        <li><a [routerLink]=\"['/messages']\">Messages</a></li>\n        <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li><a [routerLink]=\"['/settings']\">Settings</a></li>\n      </ul>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notes/notes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.placeholders h4 {\n  margin-bottom: 0;\n}\n\n.placeholder {\n  margin-bottom: 20px;\n}\n\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/dashboard']\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Reports</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Analytics</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Export</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li class=\"active\"><a [routerLink]=\"['/notes']\">Notes</a></li>\n            <li><a [routerLink]=\"['/messages']\">Messages</a></li>\n            <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li><a [routerLink]=\"['/settings']\">Settings</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Notes</h1>\n\n        </div>\n      </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__("../../../../../src/app/components/notes/notes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/platinumplan/platinumplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart tbody td .form-control{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions .btn{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\n\t.actions .btn-info{\n\t\tfloat:left;\n\t}\n\t.actions .btn-danger{\n\t\tfloat:right;\n\t}\n\n\ttable#cart thead { display: none; }\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\n\ttable#cart tbody td:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\n\n\n\ttable#cart tfoot td{display:block; }\n\ttable#cart tfoot td .btn{display:block;}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/platinumplan/platinumplan.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"container\">\n\t\t<table id=\"cart\" class=\"table table-hover table-condensed\">\n    \t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://placehold.it/100x100\" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">Platinum</h4>\n\t\t\t\t\t\t\t\t\t\t<p>Platinum provides you unlimited projects, you will be charged monthly</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Price\">$20.00</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" value=\"1\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">20.00</td>\n\t\t\t\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\"><button class=\"btn btn-info btn-sm\"><i class=\"glyphicon glyphicon-refresh\"></i></button></a>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total 20.00</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/pricing']\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Go Back</a></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $20.00</strong></td>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['/cart']\" class=\"btn btn-success btn-block\">Cart <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/platinumplan/platinumplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatinumplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlatinumplanComponent = /** @class */ (function () {
    function PlatinumplanComponent() {
    }
    PlatinumplanComponent.prototype.ngOnInit = function () {
    };
    PlatinumplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-platinumplan',
            template: __webpack_require__("../../../../../src/app/components/platinumplan/platinumplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/platinumplan/platinumplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlatinumplanComponent);
    return PlatinumplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-bottom: 40px;\n}\n\n\t/* COMMON PRICING STYLES */\n\n\t.panel.price,\n\t\t.panel.price>.panel-heading{\n\t\t\tborder-radius:0px;\n\t\t\t -moz-transition: all .3s ease;\n\t\t\t-o-transition:  all .3s ease;\n\t\t\t-webkit-transition:  all .3s ease;\n\t\t}\n\n\t.panel.price:hover{\n\t\t\t-webkit-box-shadow: 0px 0px 30px rgba(0,0,0, .2);\n\t\t\t        box-shadow: 0px 0px 30px rgba(0,0,0, .2);\n\t\t}\n\n\t.panel.price:hover>.panel-heading{\n\t\t\t-webkit-box-shadow: 0px 0px 30px rgba(0,0,0, .2) inset;\n\t\t\t        box-shadow: 0px 0px 30px rgba(0,0,0, .2) inset;\n\t\t}\n\n\t.panel.price>.panel-heading{\n\t\t\t-webkit-box-shadow: 0px 5px 0px rgba(50,50,50, .2) inset;\n\t\t\t        box-shadow: 0px 5px 0px rgba(50,50,50, .2) inset;\n\t\t\ttext-shadow:0px 3px 0px rgba(50,50,50, .6);\n\t\t}\n\n\t.price .list-group-item{\n\t\t\tborder-bottom-:1px solid rgba(250,250,250, .5);\n\t\t}\n\n\t.panel.price .list-group-item:last-child {\n\t\t\tborder-bottom-right-radius: 0px;\n\t\t\tborder-bottom-left-radius: 0px;\n\t\t}\n\n\t.panel.price .list-group-item:first-child {\n\t\t\tborder-top-right-radius: 0px;\n\t\t\tborder-top-left-radius: 0px;\n\t\t}\n\n\t.price .panel-footer {\n\t\t\tcolor: #fff;\n\t\t\tborder-bottom:0px;\n\t\t\tbackground-color:  rgba(0,0,0, .1);\n\t\t\t-webkit-box-shadow: 0px 3px 0px rgba(0,0,0, .3);\n\t\t\t        box-shadow: 0px 3px 0px rgba(0,0,0, .3);\n\t\t}\n\n\t.panel.price .btn{\n\t\t\t-webkit-box-shadow: 0 -1px 0px rgba(50,50,50, .2) inset;\n\t\t\t        box-shadow: 0 -1px 0px rgba(50,50,50, .2) inset;\n\t\t\tborder:0px;\n\t\t}\n\n\t/* green panel */\n\n\t.price.panel-green>.panel-heading {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #57AC57;\n\t\t\tborder-color: #71DF71;\n\t\t\tborder-bottom: 1px solid #71DF71;\n\t\t}\n\n\t.price.panel-green>.panel-body {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #65C965;\n\t\t}\n\n\t.price.panel-green>.panel-body .lead{\n\t\t\t\ttext-shadow: 0px 3px 0px rgba(50,50,50, .3);\n\t\t}\n\n\t.price.panel-green .list-group-item {\n\t\t\tcolor: #333;\n\t\t\tbackground-color: rgba(50,50,50, .01);\n\t\t\tfont-weight:600;\n\t\t\ttext-shadow: 0px 1px 0px rgba(250,250,250, .75);\n\t\t}\n\n\t/* blue panel */\n\n\t.price.panel-blue>.panel-heading {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #608BB4;\n\t\t\tborder-color: #78AEE1;\n\t\t\tborder-bottom: 1px solid #78AEE1;\n\t\t}\n\n\t.price.panel-blue>.panel-body {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #73A3D4;\n\t\t}\n\n\t.price.panel-blue>.panel-body .lead{\n\t\t\t\ttext-shadow: 0px 3px 0px rgba(50,50,50, .3);\n\t\t}\n\n\t.price.panel-blue .list-group-item {\n\t\t\tcolor: #333;\n\t\t\tbackground-color: rgba(50,50,50, .01);\n\t\t\tfont-weight:600;\n\t\t\ttext-shadow: 0px 1px 0px rgba(250,250,250, .75);\n\t\t}\n\n\t/* red price */\n\n\t.price.panel-red>.panel-heading {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #D04E50;\n\t\t\tborder-color: #FF6062;\n\t\t\tborder-bottom: 1px solid #FF6062;\n\t\t}\n\n\t.price.panel-red>.panel-body {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #EF5A5C;\n\t\t}\n\n\t.price.panel-red>.panel-body .lead{\n\t\t\t\ttext-shadow: 0px 3px 0px rgba(50,50,50, .3);\n\t\t}\n\n\t.price.panel-red .list-group-item {\n\t\t\tcolor: #333;\n\t\t\tbackground-color: rgba(50,50,50, .01);\n\t\t\tfont-weight:600;\n\t\t\ttext-shadow: 0px 1px 0px rgba(250,250,250, .75);\n\t\t}\n\n\t/* grey price */\n\n\t.price.panel-grey>.panel-heading {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #6D6D6D;\n\t\t\tborder-color: #B7B7B7;\n\t\t\tborder-bottom: 1px solid #B7B7B7;\n\t\t}\n\n\t.price.panel-grey>.panel-body {\n\t\t\tcolor: #fff;\n\t\t\tbackground-color: #808080;\n\t\t}\n\n\t.price.panel-grey>.panel-body .lead{\n\t\t\t\ttext-shadow: 0px 3px 0px rgba(50,50,50, .3);\n\t\t}\n\n\t.price.panel-grey .list-group-item {\n\t\t\tcolor: #333;\n\t\t\tbackground-color: rgba(50,50,50, .01);\n\t\t\tfont-weight:600;\n\t\t\ttext-shadow: 0px 1px 0px rgba(250,250,250, .75);\n\t\t}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n\t\t\t\t<div class=\"panel price panel-red\">\n\t\t\t\t\t<div class=\"panel-heading  text-center\">\n\t\t\t\t\t\t<h3>PLATINUM</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p class=\"lead\" style=\"font-size:40px\"><strong>$20 / month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group list-group-flush text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-danger\"></i> Personal use</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-danger\"></i> Unlimited projects</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-danger\"></i> 27/7 support</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block btn-danger\" [routerLink]=\"['/platinumplan']\">BUY NOW!</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n\n\t\t\t\t<div class=\"panel price panel-blue\">\n\t\t\t\t\t<div class=\"panel-heading arrow_box text-center\">\n\t\t\t\t\t\t<h3>GOLD</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p class=\"lead\" style=\"font-size:40px\"><strong>$10 / month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group list-group-flush text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-info\"></i> Personal use</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-info\"></i> 30 projects</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-info\"></i> 27/7 support</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block btn-info\" [routerLink]=\"['/goldplan']\">BUY NOW!</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n\n\t\t\t\t<div class=\"panel price panel-green\">\n\t\t\t\t\t<div class=\"panel-heading arrow_box text-center\">\n\t\t\t\t\t\t<h3>SILVER</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p class=\"lead\" style=\"font-size:40px\"><strong>$5 / month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group list-group-flush text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> Personal use</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> 10 projects</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> 27/7 support</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block btn-success\" [routerLink]=\"['/silverplan']\">BUY NOW!</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n\n\t\t\t\t<div class=\"panel price panel-grey\">\n\t\t\t\t\t<div class=\"panel-heading arrow_box text-center\">\n\t\t\t\t\t\t<h3>BRONZE</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p class=\"lead\" style=\"font-size:40px\"><strong>$0 / month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group list-group-flush text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> Personal use</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> 5 projects</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"><i class=\"icon-ok text-success\"></i> 27/7 support</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block btn-primary\" [routerLink]=\"['/bronzeplan']\">BUY NOW!</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__("../../../../../src/app/components/pricing/pricing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div *ngIf=\"user\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <h2 class=\"page-header\">{{user.name}}</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><b>Username:</b> {{user.username}}</li>\n        <li class=\"list-group-item\"><b>Email:</b> {{user.email}}</li>\n        <li class=\"list-group-item\"><b>Address:</b> {{user.address}}</li>\n        <li class=\"list-group-item\"><b>City:</b> {{user.city}}</li>\n        <li class=\"list-group-item\"><b>Zip Code:</b> {{user.zipcode}}</li>\n      </ul>\n    </div>\n\n<div class=\"contact-pageheader\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12\">\n        <div class=\"contact-form\">\n          <h3 class=\"contact-info-title\">Account Details</h3>\n          <div class=\"row\">\n            <form (submit)=\"onUpdateAccountSubmit()\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label sr-only \" for=\"Address\"></label>\n                  <input [(ngModel)]=\"address\" id=\"address\" name=\"address\" type=\"text\" placeholder=\"ADDRESS\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label sr-only \" for=\"City\"></label>\n                  <input [(ngModel)]=\"city\" id=\"city\" name=\"city\" type=\"text\" placeholder=\"CITY\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label sr-only \" for=\"Zipcode\"></label>\n                  <input [(ngModel)]=\"zipcode\" id=\"zipcode\" name=\"zipcode\" type=\"text\" placeholder=\"ZIP CODE\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label sr-only \" for=\"Oldpassword\"></label>\n                  <input [(ngModel)]=\"oldpassword\" id=\"oldpassword\" name=\"oldpassword\" type=\"password\" placeholder=\"OLD PASSWORD\" class=\"form-control\" required>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label sr-only \" for=\"Newpassword\"></label>\n                  <input [(ngModel)]=\"newpassword\" id=\"newpassword\" name=\"newpassword\" type=\"password\" placeholder=\"NEW PASSWORD\" class=\"form-control\" required>\n                </div>\n              </div>\n              <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-12\">\n                <button class=\"btn btn-primary btn-lg\">Update Details</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    // name: String;
    // username: String;
    // email: String;
    // password: String;
    // newpassword: String;
    // address: String;
    // city: String;
    // zipcode: String;
    function ProfileComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n    margin-bottom: 5px;\n}\n\n.form-control {\n    border-radius: 0px;\n    color: #6b6c6d;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n    height: 52px;\n    padding: 0px;\n    line-height: 1.42857143;\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: transparent;\n    letter-spacing: 0px;\n    margin-bottom: 10px;\n    -webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 0px 0px rgba(0, 0, 0, .075);\n}\n\n.form-control:focus {\n    color: #34b2a4 !important;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-bottom-color: #34b2a4;\n    font-size: 12px;\n}\n\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n    margin: 8px 0 0;\n    margin-top: 12px;\n    line-height: normal;\n}\n\ninput::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n}\n\ntextarea::-webkit-input-placeholder {\n    color: #6b6c6d !important;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n    color: #34b2a4 !important;\n    bottom: 20px;\n    position: relative;\n    font-size: 12px;\n}\n\n.input-group-addon {\n    background-color: transparent;\n    border: 1px solid #34b2a4;\n    border-radius: 0px;\n}\n\n.focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    background-color: #fff;\n}\n\n.focus:focus {\n    border-top: transparent;\n    border-left: transparent;\n    border-right: transparent;\n    border-bottom: 1px solid #cbcfce;\n    outline: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n\n.btn {\n    font-family: 'PT Sans', sans-serif;\n    font-size: 18px;\n    text-transform: capitalize;\n    font-weight: 600;\n    padding: 11px 30px;\n    border-radius: 6px;\n    line-height: 1.8;\n    letter-spacing: 0px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    word-wrap: break-word;\n    white-space: normal !important;\n}\n\n.btn-primary {\n    background-color: #f8591b;\n    color: #fff;\n    border: 1px solid #f8591b;\n}\n\n.space-medium {\n    padding-top: 80px;\n    padding-bottom: 80px;\n}\n\n.pdt20 {\n    padding-top: 20px;\n}\n\n.contact-caption {\n    position: relative;\n    top: 130px;\n}\n\n.contact-title {\n    font-family: 'PT Serif', serif;\n    font-size: 50px;\n    font-style: italic;\n    margin-bottom: 40px;\n    line-height:80px;\n}\n\n.contact-form {\n    background-color: #fff;\n    padding: 30px;\n    text-align: center;\n    position: relative;\n    bottom: 0px;\n    top: 100px;\n    -webkit-box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n    box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.29);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"contact-pageheader\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n          <div class=\"contact-caption\">\n            <h1 class=\"contact-title\">Register an account</h1>\n          </div>\n        </div>\n        <div class=\"col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12\">\n          <div class=\"contact-form\">\n            <h3 class=\"contact-info-title\">Register</h3>\n            <div class=\"row\">\n              <form (submit)=\"onRegisterSubmit()\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Name\"></label>\n                    <input [(ngModel)]=\"name\" id=\"name\" name=\"name\" type=\"text\" placeholder=\"NAME\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Username\"></label>\n                    <input [(ngModel)]=\"username\" id=\"username\" name=\"username\" type=\"text\" placeholder=\"USERNAME\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Email\"></label>\n                    <input [(ngModel)]=\"email\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"EMAIL\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label sr-only \" for=\"Password\"></label>\n                    <input [(ngModel)]=\"password\" id=\"password\" name=\"password\" type=\"password\" placeholder=\"PASSWORD\" class=\"form-control\" required>\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-6 col-xs-12\">\n                  <button class=\"btn btn-primary btn-lg\">Register</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Email and/or Username already exists', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n\n.main .page-header {\n  margin-top: 0;\n}\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.placeholders h4 {\n  margin-bottom: 0;\n}\n\n.placeholder {\n  margin-bottom: 20px;\n}\n\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/dashboard']\">Overview <span class=\"sr-only\">(current)</span></a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Reports</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Analytics</a></li>\n            <li><a [routerLink]=\"['/dashboard']\">Export</a></li>\n          </ul>\n          <ul class=\"nav nav-sidebar\">\n            <li><a [routerLink]=\"['/notes']\">Notes</a></li>\n            <li><a [routerLink]=\"['/messages']\">Messages</a></li>\n            <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li class=\"active\"><a [routerLink]=\"['/settings']\">Settings</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n          <h1 class=\"page-header\">Settings</h1>\n\n        </div>\n      </div>\n    </div>\n  </body>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/silverplan/silverplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/silverplan/silverplan.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"container\">\n\t\t<table id=\"cart\" class=\"table table-hover table-condensed\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://placehold.it/100x100\" alt=\"...\" class=\"img-responsive\" /></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">Silver</h4>\n\t\t\t\t\t\t\t\t<p>Platinum provides you 10 projects, you will be charged monthly</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td data-th=\"Price\">$5.00</td>\n\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" value=\"1\">\n\t\t\t\t\t</td>\n\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">5.00</td>\n\t\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t<a href=\"\"><button class=\"btn btn-info btn-sm\"><i class=\"glyphicon glyphicon-refresh\"></i></button></a>\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t<tfoot>\n\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t<td class=\"text-center\"><strong>Total 5.00</strong></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><a [routerLink]=\"['/pricing']\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Go Back</a></td>\n\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $5.00</strong></td>\n\t\t\t\t\t<td><a [routerLink]=\"['/cart']\" class=\"btn btn-success btn-block\">Cart <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t</tr>\n\t\t\t</tfoot>\n\t\t</table>\n\t</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/silverplan/silverplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SilverplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SilverplanComponent = /** @class */ (function () {
    function SilverplanComponent() {
    }
    SilverplanComponent.prototype.ngOnInit = function () {
    };
    SilverplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-silverplan',
            template: __webpack_require__("../../../../../src/app/components/silverplan/silverplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/silverplan/silverplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SilverplanComponent);
    return SilverplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.sendMessageContactForm = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/contacts/contact', form, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // updateUser(user) {
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.put('http://localhost:3000/users/profile', user, {headers: headers})
    //     .map(res => res.json());
    // }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        // JWT automatically looks for id_token by default
        localStorage.setItem('id_token', token);
        // Local Storage only stores String, so we parse it back to JSON to use it
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map