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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'RDV';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _doc_doc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./doc/doc.component */ "./src/app/doc/doc.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _ncm_ncm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ncm/ncm.component */ "./src/app/ncm/ncm.component.ts");
/* harmony import */ var _service_ncm_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/ncm.service */ "./src/app/service/ncm.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_graph_layout_graph_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/graph-layout/graph-layout.component */ "./src/app/shared/graph-layout/graph-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ROUTES = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'doc', component: _doc_doc_component__WEBPACK_IMPORTED_MODULE_14__["DocComponent"] },
    { path: 'viewer', component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_15__["ViewerComponent"] },
    { path: 'ncm', component: _ncm_ncm_component__WEBPACK_IMPORTED_MODULE_18__["NCMComponent"] },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _doc_doc_component__WEBPACK_IMPORTED_MODULE_14__["DocComponent"],
                _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_15__["ViewerComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _ncm_ncm_component__WEBPACK_IMPORTED_MODULE_18__["NCMComponent"],
                _shared_graph_layout_graph_layout_component__WEBPACK_IMPORTED_MODULE_21__["GraphLayoutComponent"]
            ],
            imports: [
                primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_11__["PanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_8__["DataViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DataScrollerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(ROUTES),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [_service_ncm_service__WEBPACK_IMPORTED_MODULE_19__["NCMService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/doc/doc.component.css":
/*!***************************************!*\
  !*** ./src/app/doc/doc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doc/doc.component.html":
/*!****************************************!*\
  !*** ./src/app/doc/doc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  doc works!\n</p>\n"

/***/ }),

/***/ "./src/app/doc/doc.component.ts":
/*!**************************************!*\
  !*** ./src/app/doc/doc.component.ts ***!
  \**************************************/
/*! exports provided: DocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocComponent", function() { return DocComponent; });
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

var DocComponent = /** @class */ (function () {
    function DocComponent() {
    }
    DocComponent.prototype.ngOnInit = function () {
    };
    DocComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doc',
            template: __webpack_require__(/*! ./doc.component.html */ "./src/app/doc/doc.component.html"),
            styles: [__webpack_require__(/*! ./doc.component.css */ "./src/app/doc/doc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocComponent);
    return DocComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark sticky-top\" style=\"background-color: #2e0051;\">\r\n  <a class=\"navbar-brand\" href=\"#\">RNA Dynamic Viewer</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Acceuil</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/doc\" routerLinkActive=\"active\">Documentation</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/viewer\" routerLinkActive=\"active\">testRNA</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/ncm\" routerLinkActive=\"active\">NCM</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">Information</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>-->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/ncm/ncm.component.css":
/*!***************************************!*\
  !*** ./src/app/ncm/ncm.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ncm/ncm.component.html":
/*!****************************************!*\
  !*** ./src/app/ncm/ncm.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dataView #dv [value]=\"ncms\" [paginator]=\"true\" [rows]=\"5\" paginatorPosition=\"both\" filterBy=\"brand\"\r\n    [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\r\n  <p-header>\r\n    <div class=\"ui-helper-clearfix\">\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n          <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Trier par\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-6 ui-md-4 filter-container\">\r\n          <div style=\"position:relative\">\r\n            <input type=\"search\" pInputText placeholder=\"Rechercher par Id\" (keyup)=\"dv.filter($event.target.value)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\r\n          <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-header>\r\n  <ng-template let-ncm pTemplate=\"listItem\">\r\n    <div class=\"ui-g\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\r\n      <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\r\n        <app-graph-layout \r\n                          [_id]=\"ncm._id\"\r\n                          [score]=\"ncm.scoreMoy\">\r\n        </app-graph-layout>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-8 ncm-details\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 ui-sm-6\">Id: </div>\r\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{ncm._id}}</b></div>\r\n\r\n          <div class=\"ui-g-2 ui-sm-6\">Écart type: </div>\r\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{ncm.stdDev}}</b></div>\r\n\r\n          <div class=\"ui-g-2 ui-sm-6\">Score moyen: </div>\r\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{ncm.scoreMoy}}</b></div>\r\n\r\n          <div class=\"ui-g-2 ui-sm-6\">Nombre d'occurence: </div>\r\n          <div class=\"ui-g-10 ui-sm-6\"><b>{{ncm.count}}</b></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-1 search-icon\">\r\n        <p-button label=\"Détails\" icon=\"fa fa-fw fa-search\" (click)=\"selectNcm($event, ncm)\"></p-button>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-1\" >\r\n        <p-button label=\"Process\" icon=\"fa fa-fw fa-check\" (click)=\"processNcm($event, ncm)\"></p-button>\r\n      </div>\r\n    </div>\r\n</ng-template>\r\n  <ng-template let-ncm pTemplate=\"gridItem\">\r\n    <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\r\n      <p-panel [header]=\"ncm._id\" [style]=\"{'text-align':'center'}\">\r\n        <app-graph-layout [_id]=\"ncm._id\"\r\n                          [score]=\"ncm.scoreMoy\">\r\n        </app-graph-layout>\r\n        <div class=\"ncm-detail\">{{ncm.scoreMoy}}</div>\r\n        <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n        <p-button label=\"Détails\" icon=\"fa fa-fw fa-search\" (click)=\"selectNcm($event, ncm)\"></p-button>\r\n        <p-button label=\"Process\" icon=\"fa fa-fw fa-check\" (click)=\"processNcm($event, ncm)\"></p-button>\r\n      </p-panel>\r\n    </div>\r\n  </ng-template>\r\n</p-dataView>\r\n\r\n<p-dialog header=\"NCM Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"400\" (onAfterHide)=\"onDialogHide()\">\r\n  <div class=\"ui-g\" *ngIf=\"selectedNcm\">\r\n    <div class=\"ui-g-12\" style=\"text-align:center\">\r\n      <app-graph-layout\r\n                        [_id]=\"ncm._id\"\r\n                        [score]=\"ncm.scoreMoy\">\r\n      </app-graph-layout>\r\n    </div>\r\n    <div class=\"ui-g-4\">Id: </div>\r\n    <div class=\"ui-g-8\">{{selectedNcm._id}}</div>\r\n\r\n    <div class=\"ui-g-4\">Écart type: </div>\r\n    <div class=\"ui-g-8\">{{selectedNcm.stdDev}}</div>\r\n\r\n    <div class=\"ui-g-4\">Score moyen: </div>\r\n    <div class=\"ui-g-8\">{{selectedNcm.scoreMoy}}</div>\r\n\r\n    <div class=\"ui-g-4\">Nombre d'occurence: </div>\r\n    <div class=\"ui-g-8\">{{selectedNcm.count}}</div>\r\n  </div>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/ncm/ncm.component.ts":
/*!**************************************!*\
  !*** ./src/app/ncm/ncm.component.ts ***!
  \**************************************/
/*! exports provided: NCMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NCMComponent", function() { return NCMComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ncm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/ncm.service */ "./src/app/service/ncm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NCMComponent = /** @class */ (function () {
    function NCMComponent(ncmService) {
        this.ncmService = ncmService;
        this.ncms = [];
        this.skip = 0;
        this.limit = 20;
        this.cmin = 2;
        this.stdDevMax = 10;
        this.ncm1_Only_seq = "";
        this.ncm2_Only_seq = "";
        this.ncm_graph = {};
    }
    NCMComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then(function (ncms) { _this.ncms = ncms; });
        this.sortOptions = [
            { label: 'Nombre (ordre croissant)', value: 'count' },
            { label: 'Nombre (ordre décroissant)', value: '!count' },
            { label: 'Écart Type', value: 'stdDev' }
        ];
    };
    /*
    loadData(event) {
      //event.first = First row offset
      //event.rows = Number of rows per page
      this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms.push.apply(this.ncms, ncms); this.skip += this.limit; });
  
    }
    */
    NCMComponent.prototype.selectNcm = function (event, ncm) {
        this.selectedNcm = ncm;
        this.displayDialog = true;
        event.preventDefault();
    };
    NCMComponent.prototype.processNcm = function (event, ncm) {
        console.log("process");
    };
    NCMComponent.prototype.onSortChange = function (event) {
        var value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    };
    NCMComponent.prototype.onDialogHide = function () {
        this.selectedNcm = null;
    };
    NCMComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ncm',
            template: __webpack_require__(/*! ./ncm.component.html */ "./src/app/ncm/ncm.component.html"),
            styles: [__webpack_require__(/*! ./ncm.component.css */ "./src/app/ncm/ncm.component.css")]
        }),
        __metadata("design:paramtypes", [_service_ncm_service__WEBPACK_IMPORTED_MODULE_1__["NCMService"]])
    ], NCMComponent);
    return NCMComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/ncm.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/ncm.service.ts ***!
  \****************************************/
/*! exports provided: NCMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NCMService", function() { return NCMService; });
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


//import { Http, Response } from 'angular2/http';
var NCMService = /** @class */ (function () {
    function NCMService(http) {
        this.http = http;
    }
    NCMService.prototype.getNCM = function (skip, limit, cmin, stdDevMax) {
        var configUrl = "https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev/skip=" + skip + "/limit=" + limit + "/countMin=" + cmin + "/stdDevMax=" + stdDevMax;
        return this.http.get(configUrl)
            .toPromise()
            .then(function (data) { return data; });
    };
    NCMService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NCMService);
    return NCMService;
}());



/***/ }),

/***/ "./src/app/shared/graph-layout/graph-layout.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/graph-layout/graph-layout.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".links line {\r\n  stroke: #999;\r\n  stroke-opacity: 0.6;\r\n}\r\n\r\n.nodes circle {\r\n  stroke: #fff;\r\n  stroke-width: 1.5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/graph-layout/graph-layout.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/graph-layout/graph-layout.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3-chart\" #chart></div>\r\n"

/***/ }),

/***/ "./src/app/shared/graph-layout/graph-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/graph-layout/graph-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: GraphLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphLayoutComponent", function() { return GraphLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphLayoutComponent = /** @class */ (function () {
    function GraphLayoutComponent() {
        var _this = this;
        //fonction util
        this.color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        this.colorScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_1__["interpolatePlasma"])
            .domain([0, 2]);
        this.fillcolorNode = function (d) {
            if (d.group == 1) {
                return "white";
            }
            else {
                return _this.colorScale(Number(_this.score));
            }
        };
        this.fillcolorRect = function () {
            return _this.colorScale(Number(_this.score));
        };
        this.range = function (start, end) { return Array.from({ length: (end - start) }, function (v, k) { return k + start; }); };
        this.fromMergedToGraphLayout = function (merged) {
            var graphLayout = {};
            if (merged.indexOf("&") != -1) {
                this.manageMerged(merged);
            }
            else {
                this.unNcm_tx_togL(merged);
            }
        };
        this.manageMerged = function (merged) {
            var stringSplited = merged.split("&");
            this.ncm1 = stringSplited[0];
            this.ncm2 = stringSplited[1];
            var ncm1_splitted = [];
            var ncm2_splitted = [];
            if (this.ncm1 != "" && this.ncm2 != "") {
                ncm1_splitted = this.ncm1.split("-");
                ncm2_splitted = this.ncm2.split("-");
            }
            var ncm1_end = "";
            var pos = "";
            if (ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {
                ncm1_end = ncm1_splitted[2].split("_")[0];
                pos = ncm1_splitted[2].split("_")[2];
                console.log("pos : ", pos);
                console.log("ncm1 : ", ncm1_splitted[1], ncm1_end);
                this.ncm1_Only_seq = ncm1_splitted[1] + ":" + ncm1_end;
            }
            var ncm2_end = "";
            if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1) {
                ncm2_end = ncm2_splitted[2].split("_")[0];
                console.log("ncm2 : ", ncm2_splitted[1], ncm2_end);
                this.ncm2_Only_seq = ncm2_splitted[1] + ":" + ncm2_end;
            }
            if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1 && ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {
                this.graphLayout = this.deuxNcm_tx_togL(ncm1_splitted[1], ncm1_end, ncm2_splitted[1], ncm2_end, pos);
            }
            else {
                this.createRedCircle();
            }
        };
        this.unNcm_tx_togL = function (loop) {
            var _this = this;
            var ticked = function () {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });
                node
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; });
                if (_this.graph) {
                    text
                        .attr("x", function (d, i) { return _this.graph.nodes[i].x - 8; })
                        .attr("y", function (d, i) { return _this.graph.nodes[i].y + 8; });
                }
            };
            var nodeTab = [];
            var linkTab = [];
            var pos = loop.split("_")[2];
            var seq = loop.split("---")[1].split("_")[0];
            console.log("s : ", loop, " pos : ", pos, " seq : ", seq);
            nodeTab = this.createNodes1(seq, pos);
            linkTab = this.createLinks1(seq, pos);
            this.graph = { "nodes": nodeTab, "links": linkTab };
            console.log("graph : ", this.graph);
            var element = this.chartContainer.nativeElement;
            this.height = 200;
            this.width = 200;
            var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg')
                .attr('width', element.offsetWidth)
                .attr('height', element.offsetHeight);
            svg.append("rect")
                .style("fill", "red")
                .attr("width", 30)
                .attr("height", 30)
                .attr("x", 5)
                .attr("y", 5)
                .on('click', function (d, i) {
                console.log("graph : ", _this.graph);
                console.log("seq : ", seq, "pos : ", pos);
            });
            var simulation = d3__WEBPACK_IMPORTED_MODULE_1__["forceSimulation"]()
                .force("link", d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"]().distance(20))
                .force("charge", d3__WEBPACK_IMPORTED_MODULE_1__["forceManyBody"]().strength(-20))
                .force("center", d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](this.width / 2, this.height / 2));
            var link = svg.append("g")
                .attr("class", "links")
                .selectAll("line")
                .data(this.graph.links)
                .enter().append("line")
                .attr("stroke-width", function (d) { return Number(d.value) + 1; });
            console.log("nodes : ", this.graph.nodes);
            var node = svg.append("g")
                .attr("class", "nodes")
                .selectAll("circle")
                .data(this.graph.nodes)
                .enter().append("circle")
                .attr("r", function (d) { return Number(d.group) * 5 + 8; })
                .attr("fill", this.fillcolor)
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            var text = svg.append('g').attr('class', 'label_ss_g')
                .selectAll("text")
                .data(this.graph.nodes)
                .enter()
                .append("text")
                .style("cursor", "pointer")
                .attr("id", "label")
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            text
                .attr("x", function (d, i) { return _this.graph.nodes[i].x - 8; })
                .attr("y", function (d, i) { return _this.graph.nodes[i].y + 8; })
                .text(function (d) { return d.id; })
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("font-weigth", "bold")
                .attr("fill", "black")
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            node.append("title")
                .text(function (d) { return d.id; });
            simulation
                .nodes(this.graph.nodes)
                .on("tick", ticked);
            simulation.force('link').links(this.graph.links);
            function dragstarted(d) {
                if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active)
                    simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }
            function dragged(d) {
                d.fx = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
                d.fy = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
            }
            function dragended(d) {
                if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active)
                    simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
            //return this.graph;
        };
        // test
        this.createNodes1 = function (seq, pos) {
            var nodes = [];
            for (var _i = 0, _a = seq.split(""); _i < _a.length; _i++) {
                var c = _a[_i];
                nodes.push(this.nodeGen(c, 1));
            }
            nodes[Number(pos)].group = 2;
            return nodes;
        };
        this.createLinks1 = function (seq) {
            var links = [];
            for (var _i = 0, _a = this.range(0, seq.length - 1); _i < _a.length; _i++) {
                var i = _a[_i];
                links.push(this.linkGen(i, i + 1, 1));
            }
            links.push(this.linkGen(0, seq.length - 1, 2));
            return links;
        };
        this.deuxNcm_tx_togL = function (s11, s12, s21, s22, pos) {
            var _this = this;
            var nodeTab = [];
            var linkTab = [];
            console.log("s : ", s11, s12, s21, s22);
            nodeTab = this.createNodes2(s11, s12, s21, s22, pos);
            linkTab = this.createLinks2(s11, s12, s21, s22);
            var graph = { "nodes": nodeTab, "links": linkTab };
            if (!graph.nodes) {
                graph = { "nodes": [], "links": [] };
            }
            var element = this.chartContainer.nativeElement;
            this.height = 200;
            this.width = 200;
            var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg')
                .attr('width', element.offsetWidth)
                .attr('height', element.offsetHeight);
            svg.append("rect")
                .style("fill", this.fillcolorRect())
                .attr("width", 30)
                .attr("height", 30)
                .attr("x", 5)
                .attr("y", 5)
                .on('click', function (d, i) {
                console.log("ncm1 : ", _this.ncm1, " ncm2 : ", _this.ncm2);
                console.log("linkTab : ");
                console.log(linkTab);
            });
            var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
            var simulation = d3__WEBPACK_IMPORTED_MODULE_1__["forceSimulation"]()
                .force("link", d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"]().distance(20))
                .force("charge", d3__WEBPACK_IMPORTED_MODULE_1__["forceManyBody"]().strength(-30))
                .force("center", d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](this.width / 2, this.height / 2));
            var link = svg.append("g")
                .attr("class", "links")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line")
                .attr("stroke-width", function (d) { return d.value + 1; });
            console.log("nodes : ", graph.nodes);
            var node = svg.append("g")
                .attr("class", "nodes")
                .selectAll("circle")
                .data(graph.nodes)
                .enter().append("circle")
                .attr("r", function (d) { return d.group * 5 + 8; })
                .attr("fill", this.fillcolorNode)
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            var text = svg.append('g').attr('class', 'label_ss_g')
                .selectAll("text")
                .data(graph.nodes)
                .enter()
                .append("text")
                .style("cursor", "pointer")
                .attr("id", "label")
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            text
                .attr("x", function (d, i) { return graph.nodes[i].x - 8; })
                .attr("y", function (d, i) { return graph.nodes[i].y + 8; })
                .text(function (d) { return d.id; })
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("font-weigth", "bold")
                .attr("fill", "black")
                .call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            node.append("title")
                .text(function (d) { return d.id; });
            simulation
                .nodes(graph.nodes)
                .on("tick", ticked);
            simulation.force('link').links(graph.links);
            function ticked() {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });
                node
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; });
                text
                    .attr("x", function (d, i) { return graph.nodes[i].x - 8; })
                    .attr("y", function (d, i) { return graph.nodes[i].y + 8; });
            }
            function dragstarted(d) {
                if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active)
                    simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }
            function dragged(d) {
                d.fx = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
                d.fy = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
            }
            function dragended(d) {
                if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active)
                    simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
        };
        // --------------- fonctions utiles
        this.createNodes2 = function (s11, s12, s21, s22, pos) {
            var nodes = [];
            console.log("nodes creation");
            for (var _i = 0, _a = s11.split(""); _i < _a.length; _i++) {
                var c = _a[_i];
                nodes.push(this.nodeGen(c, 1));
            }
            for (var _b = 0, _c = s12.split(""); _b < _c.length; _b++) {
                var c = _c[_b];
                nodes.push(this.nodeGen(c, 1));
            }
            for (var _d = 0, _e = s21.split("").slice(1); _d < _e.length; _d++) {
                var c = _e[_d];
                nodes.push(this.nodeGen(c, 1));
            }
            for (var _f = 0, _g = s22.split("").slice(0, s22.length - 1); _f < _g.length; _f++) {
                var c = _g[_f];
                nodes.push(this.nodeGen(c, 1));
            }
            console.log("nodes : ", nodes);
            nodes[Number(pos)].group = 2;
            return nodes;
        };
        this.createLinks2 = function (s11, s12, s21, s22) {
            var links = [];
            console.log("Links creation");
            var l_s1 = s11.length + s12.length;
            var l_s2 = s21.length + s22.length;
            var index2eLink1 = s11.length - 1;
            var index2eLink2 = s11.length;
            // lien des paires de bases
            links.push(this.linkGen(0, l_s1 - 1, 1));
            links.push(this.linkGen(index2eLink1, index2eLink2, 1));
            links.push(this.linkGen(l_s1 + s21.length - 2, l_s1 + s21.length - 1, 1));
            // lien phosphate
            // premier segment
            for (var _i = 0, _a = this.range(0, index2eLink1); _i < _a.length; _i++) {
                var i = _a[_i];
                links.push(this.linkGen(i, i + 1, 2));
            }
            // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
            for (var _b = 0, _c = this.range(index2eLink2, l_s1 - 1); _b < _c.length; _b++) {
                var i = _c[_b];
                links.push(this.linkGen(i, i + 1, 2));
            }
            // troisieme segment
            for (var _d = 0, _e = this.range(l_s1, l_s1 + s21.length - 2); _d < _e.length; _d++) {
                var i = _e[_d];
                links.push(this.linkGen(i, i + 1, 2));
            }
            // quatrieme segment
            for (var _f = 0, _g = this.range(l_s1 + s21.length - 1, l_s1 + l_s2 - 3); _f < _g.length; _f++) {
                var i = _g[_f];
                links.push(this.linkGen(i, i + 1, 2));
            }
            // connecter les deux ncm
            links.push(this.linkGen(index2eLink1, l_s1, 2));
            links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3, 2));
            console.log("Links : ", links);
            return links;
        };
        this.nodeGen = function (name, group) {
            return { "id": name, "group": group };
        };
        this.linkGen = function (source, target, value) {
            return { "source": source, "target": target, "value": value };
        };
    }
    GraphLayoutComponent.prototype.ngOnInit = function () {
        console.log("id : ", this._id);
        console.log("score : ", this.score);
    };
    GraphLayoutComponent.prototype.ngAfterViewInit = function () {
        this.fromMergedToGraphLayout(this._id);
    };
    GraphLayoutComponent.prototype.createRedCircle = function () {
        var element = this.chartContainer.nativeElement;
        this.height = 200;
        this.width = 200;
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        svg.append("circle").attr("cx", function (d) { return 100; })
            .attr("cy", function (d) { return 100; })
            .attr("r", function (d) { return 100; })
            .style("fill", function (d) { return "red"; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GraphLayoutComponent.prototype, "chartContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GraphLayoutComponent.prototype, "_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GraphLayoutComponent.prototype, "score", void 0);
    GraphLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph-layout',
            template: __webpack_require__(/*! ./graph-layout.component.html */ "./src/app/shared/graph-layout/graph-layout.component.html"),
            styles: [__webpack_require__(/*! ./graph-layout.component.css */ "./src/app/shared/graph-layout/graph-layout.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GraphLayoutComponent);
    return GraphLayoutComponent;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.component.css":
/*!*********************************************!*\
  !*** ./src/app/viewer/viewer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewer/viewer.component.html":
/*!**********************************************!*\
  !*** ./src/app/viewer/viewer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewer works!\n</p>\n"

/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
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

var ViewerComponent = /** @class */ (function () {
    function ViewerComponent() {
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewerComponent);
    return ViewerComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Phil\Desktop\still-castle-69053\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map