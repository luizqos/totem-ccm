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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _unidade_unidade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidade/unidade.component */ "./src/app/unidade/unidade.component.ts");
/* harmony import */ var _servico_servico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servico/servico.component */ "./src/app/servico/servico.component.ts");
/* harmony import */ var _tipo_atendimento_tipo_atendimento_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipo-atendimento/tipo-atendimento.component */ "./src/app/tipo-atendimento/tipo-atendimento.component.ts");
/* harmony import */ var _tipo_prioridade_tipo_prioridade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipo-prioridade/tipo-prioridade.component */ "./src/app/tipo-prioridade/tipo-prioridade.component.ts");
/* harmony import */ var _imprimindo_imprimindo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imprimindo/imprimindo.component */ "./src/app/imprimindo/imprimindo.component.ts");
/* harmony import */ var _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configuracoes/configuracoes.component */ "./src/app/configuracoes/configuracoes.component.ts");
/* harmony import */ var _configuracoes_servidor_configuracoes_servidor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./configuracoes-servidor/configuracoes-servidor.component */ "./src/app/configuracoes-servidor/configuracoes-servidor.component.ts");
/* harmony import */ var _configuracoes_unidades_configuracoes_unidades_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuracoes-unidades/configuracoes-unidades.component */ "./src/app/configuracoes-unidades/configuracoes-unidades.component.ts");
/* harmony import */ var _configuracoes_outras_configuracoes_outras_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configuracoes-outras/configuracoes-outras.component */ "./src/app/configuracoes-outras/configuracoes-outras.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'unidade', component: _unidade_unidade_component__WEBPACK_IMPORTED_MODULE_3__["UnidadeComponent"] },
    { path: 'servico/:id', component: _servico_servico_component__WEBPACK_IMPORTED_MODULE_4__["ServicoComponent"] },
    { path: 'tipoatendimento/:id', component: _tipo_atendimento_tipo_atendimento_component__WEBPACK_IMPORTED_MODULE_5__["TipoAtendimentoComponent"] },
    { path: 'prioridade/:id', component: _tipo_prioridade_tipo_prioridade_component__WEBPACK_IMPORTED_MODULE_6__["TipoPrioridadeComponent"] },
    { path: 'imprimindo/:id/:prioridade', component: _imprimindo_imprimindo_component__WEBPACK_IMPORTED_MODULE_7__["ImprimindoComponent"] },
    { path: 'configuracao', component: _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_8__["ConfiguracoesComponent"] },
    { path: 'configuracao/servidor', component: _configuracoes_servidor_configuracoes_servidor_component__WEBPACK_IMPORTED_MODULE_9__["ConfiguracoesServidorComponent"] },
    { path: 'configuracao/unidade', component: _configuracoes_unidades_configuracoes_unidades_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguracoesUnidadesComponent"] },
    { path: 'configuracao/outras', component: _configuracoes_outras_configuracoes_outras_component__WEBPACK_IMPORTED_MODULE_11__["ConfiguracoesOutrasComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = ".btn{\n    text-transform: uppercase !important;\n}\n.custom-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.custom-modal-content {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.3);\n  min-width: 320px;\n}\n.password-display input {\n  width: 100%;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #f8f9fa;\n}\n.numeric-keyboard {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.keyboard-row {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.numeric-keyboard button, .spacer {\n  width: 65px;\n  height: 60px;\n}\n.numeric-keyboard button {\n  font-size: 20px;\n  font-weight: bold;\n  border: 1px solid #ddd;\n  background: #f9f9f9;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.numeric-keyboard button:active {\n  background: #e0e0e0;\n}\n/* Estilo específico para o botão de apagar */\n.btn-clear {\n  background-color: #fff3f3 !important;\n  color: #dc3545;\n}\n/* Rodapé com botões lado a lado */\n.modal-footer {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  margin-top: 20px;\n}\n.modal-footer button {\n  flex: 1;\n  padding: 12px;\n  border: none;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.btn-confirm {\n  background-color: #28a745;\n  color: white;\n}\n.btn-cancel {\n  background-color: #dc3545;\n  color: white;\n}\n.modal-footer button:hover {\n  opacity: 0.9;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"root\">\n  <div class=\"col-md-4 columns\" id=\"esquerdo\">\n    <img src=\"assets/img/logo.png\" (click)=\"onLogoClick()\" style=\"cursor: pointer;\" />\n  </div>\n  <div class=\"col-md-8 columns\" id=\"direito\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div class=\"custom-modal-overlay\" *ngIf=\"showModal\">\n  <div class=\"custom-modal-content\">\n    <h3>Configurações</h3>\n    <p>Digite a senha de acesso:</p>\n    \n    <div class=\"password-display\">\n      <input type=\"password\" [value]=\"enteredPassword\" readonly placeholder=\"********\" />\n    </div>\n\n    <div class=\"numeric-keyboard\">\n      <div class=\"keyboard-row\">\n        <button (click)=\"addDigit('1')\">1</button>\n        <button (click)=\"addDigit('2')\">2</button>\n        <button (click)=\"addDigit('3')\">3</button>\n      </div>\n      <div class=\"keyboard-row\">\n        <button (click)=\"addDigit('4')\">4</button>\n        <button (click)=\"addDigit('5')\">5</button>\n        <button (click)=\"addDigit('6')\">6</button>\n      </div>\n      <div class=\"keyboard-row\">\n        <button (click)=\"addDigit('7')\">7</button>\n        <button (click)=\"addDigit('8')\">8</button>\n        <button (click)=\"addDigit('9')\">9</button>\n      </div>\n      <div class=\"keyboard-row\">\n        <div class=\"spacer\"></div> <button (click)=\"addDigit('0')\">0</button>\n        <button (click)=\"clearDigits()\" class=\"btn-clear\">\n          <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path>\n            <line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line>\n            <line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button (click)=\"cancel()\" class=\"btn-cancel\">Cancelar</button>\n      <button (click)=\"confirm()\" class=\"btn-confirm\">OK</button>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router) {
        this.router = router;
        this.clickTimes = [];
        this.showModal = false;
        this.enteredPassword = '';
    }
    AppComponent.prototype.onLogoClick = function () {
        var now = Date.now();
        this.clickTimes.push(now);
        if (this.clickTimes.length > 10)
            this.clickTimes.shift();
        if (this.clickTimes.length === 10) {
            if (this.clickTimes[9] - this.clickTimes[0] <= 5000) {
                this.openModal();
                this.clickTimes = [];
            }
        }
    };
    AppComponent.prototype.openModal = function () {
        this.showModal = true;
        this.enteredPassword = '';
        this.resetTimer();
    };
    AppComponent.prototype.closeModal = function () {
        this.showModal = false;
        this.clearTimer();
    };
    AppComponent.prototype.addDigit = function (digit) {
        if (this.enteredPassword.length < 8) {
            this.enteredPassword += digit;
            this.resetTimer();
        }
    };
    AppComponent.prototype.clearDigits = function () {
        // Apaga o último dígito ou limpa tudo se preferir
        this.enteredPassword = this.enteredPassword.slice(0, -1);
        this.resetTimer();
    };
    AppComponent.prototype.confirm = function () {
        var correctPass = this.getCurrentDatePassword();
        if (this.enteredPassword === correctPass) {
            this.closeModal();
            this.router.navigate(['/configuracao']);
        }
        else {
            alert('Senha incorreta!');
            this.enteredPassword = '';
            this.resetTimer();
        }
    };
    AppComponent.prototype.cancel = function () {
        this.closeModal();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.resetTimer = function () {
        var _this = this;
        this.clearTimer();
        this.modalTimeout = setTimeout(function () { return _this.closeModal(); }, 30000);
    };
    AppComponent.prototype.clearTimer = function () {
        if (this.modalTimeout)
            clearTimeout(this.modalTimeout);
    };
    AppComponent.prototype.getCurrentDatePassword = function () {
        var now = new Date();
        var day = String(now.getDate()).padStart(2, '0');
        var month = String(now.getMonth() + 1).padStart(2, '0');
        var year = String(now.getFullYear());
        return "" + day + month + year;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _unidade_unidade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unidade/unidade.component */ "./src/app/unidade/unidade.component.ts");
/* harmony import */ var _servico_servico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servico/servico.component */ "./src/app/servico/servico.component.ts");
/* harmony import */ var _tipo_atendimento_tipo_atendimento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tipo-atendimento/tipo-atendimento.component */ "./src/app/tipo-atendimento/tipo-atendimento.component.ts");
/* harmony import */ var _tipo_prioridade_tipo_prioridade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tipo-prioridade/tipo-prioridade.component */ "./src/app/tipo-prioridade/tipo-prioridade.component.ts");
/* harmony import */ var _imprimindo_imprimindo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imprimindo/imprimindo.component */ "./src/app/imprimindo/imprimindo.component.ts");
/* harmony import */ var _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configuracoes/configuracoes.component */ "./src/app/configuracoes/configuracoes.component.ts");
/* harmony import */ var _configuracoes_servidor_configuracoes_servidor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuracoes-servidor/configuracoes-servidor.component */ "./src/app/configuracoes-servidor/configuracoes-servidor.component.ts");
/* harmony import */ var _configuracoes_unidades_configuracoes_unidades_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./configuracoes-unidades/configuracoes-unidades.component */ "./src/app/configuracoes-unidades/configuracoes-unidades.component.ts");
/* harmony import */ var _configuracoes_outras_configuracoes_outras_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configuracoes-outras/configuracoes-outras.component */ "./src/app/configuracoes-outras/configuracoes-outras.component.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _unidade_unidade_component__WEBPACK_IMPORTED_MODULE_6__["UnidadeComponent"],
                _servico_servico_component__WEBPACK_IMPORTED_MODULE_7__["ServicoComponent"],
                _tipo_atendimento_tipo_atendimento_component__WEBPACK_IMPORTED_MODULE_8__["TipoAtendimentoComponent"],
                _tipo_prioridade_tipo_prioridade_component__WEBPACK_IMPORTED_MODULE_9__["TipoPrioridadeComponent"],
                _imprimindo_imprimindo_component__WEBPACK_IMPORTED_MODULE_10__["ImprimindoComponent"],
                _configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_11__["ConfiguracoesComponent"],
                _configuracoes_servidor_configuracoes_servidor_component__WEBPACK_IMPORTED_MODULE_12__["ConfiguracoesServidorComponent"],
                _configuracoes_unidades_configuracoes_unidades_component__WEBPACK_IMPORTED_MODULE_13__["ConfiguracoesUnidadesComponent"],
                _configuracoes_outras_configuracoes_outras_component__WEBPACK_IMPORTED_MODULE_14__["ConfiguracoesOutrasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuracoes-outras/configuracoes-outras.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/configuracoes-outras/configuracoes-outras.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#configs{\n    overflow-y: auto;\n}"

/***/ }),

/***/ "./src/app/configuracoes-outras/configuracoes-outras.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/configuracoes-outras/configuracoes-outras.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>CONFIGURAÇÕES</h1>\n<div id=\"configs\">\n  <h5>OUTRAS CONFIGURAÇÕES</h5>\n  <div class=\"form-group\">\n    <label for=\"nome\">Nome da Entidade/Empresa</label>\n    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome da Entidade/Empresa\" value=\"{{entidade.nome}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 columns\">\n        <a routerLink=\"/configuracao\" class=\"btn btn-light\">VOLTAR</a>\n      </div>\n      <div class=\"col-md-6 columns\">\n        <button type=\"button\" class=\"btn btn-light bg-success\" (click)=\"save()\">SALVAR</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/configuracoes-outras/configuracoes-outras.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/configuracoes-outras/configuracoes-outras.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfiguracoesOutrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesOutrasComponent", function() { return ConfiguracoesOutrasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfiguracoesOutrasComponent = /** @class */ (function () {
    function ConfiguracoesOutrasComponent(router, http) {
        this.router = router;
        this.http = http;
        this.getStorage();
    }
    ConfiguracoesOutrasComponent.prototype.getStorage = function () {
        if (localStorage.getItem("totem.entidade") !== null) {
            this.entidade = JSON.parse(localStorage.getItem("totem.entidade"));
        }
        else {
            this.entidade = JSON.parse('{"nome":""}');
            localStorage.setItem("totem.entidade", JSON.stringify(this.entidade));
        }
    };
    ConfiguracoesOutrasComponent.prototype.save = function () {
        this.entidade.nome = jquery__WEBPACK_IMPORTED_MODULE_1__("#nome").val();
        localStorage.setItem("totem.entidade", JSON.stringify(this.entidade));
        this.router.navigateByUrl('/configuracao');
    };
    ConfiguracoesOutrasComponent.prototype.ngOnInit = function () {
    };
    ConfiguracoesOutrasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracoes-outras',
            template: __webpack_require__(/*! ./configuracoes-outras.component.html */ "./src/app/configuracoes-outras/configuracoes-outras.component.html"),
            styles: [__webpack_require__(/*! ./configuracoes-outras.component.css */ "./src/app/configuracoes-outras/configuracoes-outras.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConfiguracoesOutrasComponent);
    return ConfiguracoesOutrasComponent;
}());



/***/ }),

/***/ "./src/app/configuracoes-servidor/configuracoes-servidor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/configuracoes-servidor/configuracoes-servidor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#configs{\n    overflow-y: auto;\n}"

/***/ }),

/***/ "./src/app/configuracoes-servidor/configuracoes-servidor.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/configuracoes-servidor/configuracoes-servidor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>CONFIGURAÇÕES</h1>\n<div id=\"configs\">\n  <h5>SERVIDOR</h5>\n  <div class=\"form-group\">\n    <label for=\"url\">URL do Servidor</label>\n    <input type=\"text\" class=\"form-control\" id=\"url\" placeholder=\"http://****.***\" value=\"{{servidor.url}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"client_id\">Client ID</label>\n    <input type=\"text\" class=\"form-control\" id=\"client_id\" value=\"{{servidor.client_id}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"client_secret\">Client Secret</label>\n    <input type=\"text\" class=\"form-control\" id=\"client_secret\" value=\"{{servidor.client_secret}}\">\n  </div>\n  <hr/>\n  <h5>CREDENCIAIS</h5>\n  <div class=\"form-group\">\n    <label for=\"user\">Usuário</label>\n    <input type=\"text\" class=\"form-control\" id=\"user\" value=\"{{credenciais.user}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Senha</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" value=\"{{credenciais.password}}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 columns\">\n        <a routerLink=\"/configuracao\" class=\"btn btn-light\">VOLTAR</a>\n      </div>\n      <div class=\"col-md-6 columns\">\n        <button type=\"button\" class=\"btn btn-light bg-success\" (click)=\"save()\">SALVAR</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/configuracoes-servidor/configuracoes-servidor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/configuracoes-servidor/configuracoes-servidor.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfiguracoesServidorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesServidorComponent", function() { return ConfiguracoesServidorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfiguracoesServidorComponent = /** @class */ (function () {
    function ConfiguracoesServidorComponent(router, http) {
        this.router = router;
        this.http = http;
        this.getStorage();
    }
    ConfiguracoesServidorComponent.prototype.getStorage = function () {
        if (localStorage.getItem("totem.servidor") !== null && localStorage.getItem("totem.credenciais") !== null) {
            this.servidor = JSON.parse(localStorage.getItem("totem.servidor"));
            this.credenciais = JSON.parse(localStorage.getItem("totem.credenciais"));
        }
        else {
            this.servidor = JSON.parse('{"url":"","client_id":"","client_secret":""}');
            this.credenciais = JSON.parse('{"user":"","password":""}');
            localStorage.setItem("totem.servidor", JSON.stringify(this.servidor));
            localStorage.setItem("totem.credenciais", JSON.stringify(this.credenciais));
        }
    };
    ConfiguracoesServidorComponent.prototype.save = function () {
        this.servidor.url = jquery__WEBPACK_IMPORTED_MODULE_1__("#url").val();
        this.servidor.client_id = jquery__WEBPACK_IMPORTED_MODULE_1__("#client_id").val();
        this.servidor.client_secret = jquery__WEBPACK_IMPORTED_MODULE_1__("#client_secret").val();
        this.credenciais.user = jquery__WEBPACK_IMPORTED_MODULE_1__("#user").val();
        this.credenciais.password = jquery__WEBPACK_IMPORTED_MODULE_1__("#password").val();
        localStorage.setItem("totem.servidor", JSON.stringify(this.servidor));
        localStorage.setItem("totem.credenciais", JSON.stringify(this.credenciais));
        this.router.navigateByUrl('/configuracao');
    };
    ConfiguracoesServidorComponent.prototype.ngOnInit = function () {
    };
    ConfiguracoesServidorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracoes-servidor',
            template: __webpack_require__(/*! ./configuracoes-servidor.component.html */ "./src/app/configuracoes-servidor/configuracoes-servidor.component.html"),
            styles: [__webpack_require__(/*! ./configuracoes-servidor.component.css */ "./src/app/configuracoes-servidor/configuracoes-servidor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConfiguracoesServidorComponent);
    return ConfiguracoesServidorComponent;
}());



/***/ }),

/***/ "./src/app/configuracoes-unidades/configuracoes-unidades.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/configuracoes-unidades/configuracoes-unidades.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    display: block;\n}\n#configs{\n    overflow-y: visible;\n}"

/***/ }),

/***/ "./src/app/configuracoes-unidades/configuracoes-unidades.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/configuracoes-unidades/configuracoes-unidades.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>CONFIGURAÇÕES</h1>\n<div id=\"configs\">\n  <p>Para essa tela, ao selecionar ou deselecionar um item o mesmo será automaticamente salvo.</p>\n  <h5>UNIDADES</h5>\n  <div class=\"form-group\" *ngFor=\"let unidade of unidades\">\n    <label>\n      <input type=\"checkbox\" id=\"unidade_{{unidade.id}}\" (click)=\"click_unidade(unidade.id)\" [checked]=\"isUnidadeSelecionadaById(unidade.id)\"\n      /> {{unidade.nome}}</label>\n  </div>\n  <h5>SERVIÇOS</h5>\n  <div class=\"form-group\" *ngFor=\"let servico of servicos\">\n    <label>\n      <input type=\"checkbox\" id=\"servico_{{servico.servico.id}}\" (click)=\"click_servico(servico.servico.id)\" [checked]=\"isServicoSelecionadoById(servico.servico.id)\"\n      /> {{servico.unidade.nome}} - {{servico.servico.nome}}</label>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 columns\">\n        <a routerLink=\"/configuracao\" class=\"btn btn-light\">VOLTAR</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<iframe id=\"frame-impressao\" width=\"0\" height=\"0\" style=\"border:none;\"></iframe>"

/***/ }),

/***/ "./src/app/configuracoes-unidades/configuracoes-unidades.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/configuracoes-unidades/configuracoes-unidades.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfiguracoesUnidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesUnidadesComponent", function() { return ConfiguracoesUnidadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfiguracoesUnidadesComponent = /** @class */ (function () {
    function ConfiguracoesUnidadesComponent(router, http) {
        this.router = router;
        this.http = http;
        this.unidades = [];
        this.unidades_selecionadas_object = [];
        this.servicos = [];
        this.servicos_count = 0;
        this.servicos_selecionados = [];
        this.servicos_selecionados_count = 0;
        if (localStorage.getItem("totem.servidor") !== null && localStorage.getItem("totem.credenciais") !== null) {
            this.servidor = JSON.parse(localStorage.getItem("totem.servidor"));
            this.credenciais = JSON.parse(localStorage.getItem("totem.credenciais"));
            this.verifyToken();
        }
        else {
            alert("Não há configuração de servidor e usuário neste aparelho. Por favor, configure isto primeiro.");
            this.router.navigateByUrl('/configuracao/servidor');
        }
    }
    ConfiguracoesUnidadesComponent.prototype.ngOnInit = function () {
    };
    ConfiguracoesUnidadesComponent.prototype.getUnidades = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            type: "get",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.access_token,
            },
            url: this.servidor.url.concat("api/unidades"),
            dataType: "json",
            success: function (data, textStatus, xhr) {
                while (_this.unidades.length != 0) {
                    _this.unidades.pop();
                }
                _this.unidades = JSON.parse(JSON.stringify(data));
                localStorage.setItem("totem.unidades_dados", JSON.stringify(_this.unidades));
            },
            error: function (data, textStatus, xhr) {
                window.alert("Algo deu errado... Favor tentar novamente mais tarde");
                _this.router.navigateByUrl("/configuracao");
            }
        });
    };
    ConfiguracoesUnidadesComponent.prototype.getUnidadeById = function (id) {
        var unidade = "";
        this.unidades.forEach(function (element) {
            if (element.id == id) {
                unidade = element;
            }
        });
        return unidade;
    };
    ConfiguracoesUnidadesComponent.prototype.getServicoById = function (id) {
        var servico = "";
        this.servicos.forEach(function (element) {
            if (element.id == id) {
                servico = element;
            }
        });
        return servico;
    };
    ConfiguracoesUnidadesComponent.prototype.isUnidadeSelecionadaById = function (id) {
        var ret = false;
        this.unidades_selecionadas_object.forEach(function (element) {
            if (element.id == id) {
                ret = true;
            }
        });
        return ret;
    };
    ConfiguracoesUnidadesComponent.prototype.isServicoSelecionadoById = function (id) {
        var ret = false;
        this.servicos_selecionados.forEach(function (element) {
            if (element.servico.id == id) {
                ret = true;
            }
        });
        return ret;
    };
    ConfiguracoesUnidadesComponent.prototype.popServicoSelecionadoById = function (id) {
        var _this = this;
        var servicos_selecionados = this.servicos_selecionados;
        while (this.servicos_selecionados.length != 0) {
            this.servicos_selecionados.pop();
        }
        servicos_selecionados.forEach(function (e) {
            if (id != e.servico.id) {
                _this.servicos_selecionados.push(e);
            }
        });
        localStorage.setItem("totem.servicos_selecionados", JSON.stringify(this.servicos_selecionados));
    };
    ConfiguracoesUnidadesComponent.prototype.popServicoSelecionadoByUnidadeId = function (id) {
        var _this = this;
        var servicos_selecionados = this.servicos_selecionados;
        while (this.servicos_selecionados.length != 0) {
            this.servicos_selecionados.pop();
        }
        servicos_selecionados.forEach(function (e) {
            if (id != e.unidade.id) {
                _this.servicos_selecionados.push(e);
            }
        });
        localStorage.setItem("totem.servicos_selecionados", JSON.stringify(this.servicos_selecionados));
    };
    ConfiguracoesUnidadesComponent.prototype.verifyToken = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            type: "post",
            url: this.servidor.url.concat("api/token"),
            data: "client_id=".concat(this.servidor.client_id).concat("&client_secret=").concat(this.servidor.client_secret).concat("&grant_type=password&username=").concat(this.credenciais.user).concat("&password=").concat(this.credenciais.password),
            dataType: "json",
            success: function (data, textStatus, xhr) {
                _this.access_token = data.access_token;
                _this.unidades_selecionadas_object = JSON.parse(localStorage.getItem("totem.unidades_completo"));
                _this.servicos = JSON.parse(localStorage.getItem("totem.servicos"));
                _this.servicos_selecionados = JSON.parse(localStorage.getItem("totem.servicos_selecionados"));
                _this.getUnidades();
            },
            error: function (data, textStatus, xhr) {
                window.alert("O Client ID, Client Secret, Usuário ou Senha estão incorretos. Por favor, verificar e tentar novamente mais tarde.");
                _this.router.navigateByUrl("/configuracao/servidor");
            }
        });
    };
    ConfiguracoesUnidadesComponent.prototype.get_services = function () {
        var _this = this;
        while (this.servicos.length != 0) {
            this.servicos.pop();
        }
        this.unidades_selecionadas_object.forEach(function (value) {
            if (value !== null) {
                jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
                    type: "get",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + _this.access_token,
                    },
                    url: _this.servidor.url.concat("api/unidades/").concat(value.id).concat("/servicos"),
                    dataType: "json",
                    success: function (data, textStatus, xhr) {
                        JSON.parse(JSON.stringify(data)).forEach(function (element) {
                            var servico = element;
                            servico.unidade = value;
                            _this.servicos.push(servico);
                        });
                    },
                    error: function (data, textStatus, xhr) {
                        window.alert("Algo deu errado... Favor tentar novamente mais tarde");
                        _this.router.navigateByUrl("/configuracao");
                    }
                });
            }
        });
        setTimeout(function () {
            localStorage.setItem("totem.servicos", JSON.stringify(_this.servicos));
        }, 800);
    };
    ConfiguracoesUnidadesComponent.prototype.click_unidade = function (id) {
        var _this = this;
        while (this.unidades_selecionadas_object.length != 0) {
            this.unidades_selecionadas_object.pop();
        }
        this.unidades.forEach(function (element) {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__("#unidade_".concat(element.id)).is(":checked")) {
                _this.unidades_selecionadas_object.push(element);
            }
        });
        if (!jquery__WEBPACK_IMPORTED_MODULE_1__("#unidade_".concat(id)).is(":checked")) {
            this.popServicoSelecionadoByUnidadeId(id);
        }
        localStorage.setItem("totem.unidades_completo", JSON.stringify(this.unidades_selecionadas_object));
        this.unidades_selecionadas_object = JSON.parse(localStorage.getItem("totem.unidades_completo"));
        this.get_services();
    };
    ConfiguracoesUnidadesComponent.prototype.click_servico = function (id) {
        var _this = this;
        while (this.servicos_selecionados.length != 0) {
            this.servicos_selecionados.pop();
        }
        var servicos = [];
        this.servicos_selecionados.forEach(function (e) {
            if (_this.isUnidadeSelecionadaById(e.unidade.id)) {
                servicos.push(e.servico.id);
            }
        });
        Object.entries(this.servicos).forEach(function (_a) {
            var key = _a[0], servico = _a[1];
            if (jquery__WEBPACK_IMPORTED_MODULE_1__("#servico_".concat(servico.servico.id)).is(":checked")) {
                _this.servicos_selecionados.push(servico);
            }
        });
        localStorage.setItem("totem.servicos_selecionados", JSON.stringify(this.servicos_selecionados));
    };
    ConfiguracoesUnidadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracoes-unidades',
            template: __webpack_require__(/*! ./configuracoes-unidades.component.html */ "./src/app/configuracoes-unidades/configuracoes-unidades.component.html"),
            styles: [__webpack_require__(/*! ./configuracoes-unidades.component.css */ "./src/app/configuracoes-unidades/configuracoes-unidades.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConfiguracoesUnidadesComponent);
    return ConfiguracoesUnidadesComponent;
}());



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.html":
/*!************************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>CONFIGURAÇÕES</h1>\n<div>\n  <a routerLink=\"/configuracao/servidor\" class=\"btn btn-light\">SERVIDOR E CREDENCIAIS</a>\n  <a routerLink=\"/configuracao/unidade\" class=\"btn btn-light\">UNIDADES E SERVIÇOS</a>\n  <a routerLink=\"/configuracao/outras\" class=\"btn btn-light\">OUTRAS CONFIGURAÇÕES</a>\n  <a class=\"btn btn-danger\" (click)=\"resetar()\">RESETAR CONFIGURAÇÕES</a>\n  <hr/>\n  <a routerLink=\"/\" class=\"btn btn-light\">VOLTAR</a>\n</div>"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfiguracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function() { return ConfiguracoesComponent; });
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

var ConfiguracoesComponent = /** @class */ (function () {
    function ConfiguracoesComponent() {
    }
    ConfiguracoesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("totem.credenciais") == "" || localStorage.getItem("totem.credenciais") === null)
            localStorage.setItem("totem.credenciais", "{}");
        if (localStorage.getItem("totem.servidor") == "" || localStorage.getItem("totem.servidor") === null)
            localStorage.setItem("totem.servidor", "{}");
        if (localStorage.getItem("totem.servicos") == "" || localStorage.getItem("totem.servicos") === null)
            localStorage.setItem("totem.servicos", "[]");
        if (localStorage.getItem("totem.servicos_selecionados") == "" || localStorage.getItem("totem.servicos_selecionados") === null)
            localStorage.setItem("totem.servicos_selecionados", "[]");
    };
    ConfiguracoesComponent.prototype.resetar = function () {
        localStorage.setItem("totem.servicos", "[]");
        localStorage.setItem("totem.servicos_selecionados", "[]");
        localStorage.setItem("totem.unidades", "[]");
        localStorage.setItem("totem.unidades_dados", "[]");
        localStorage.setItem("totem.unidades_completo", "[]");
    };
    ConfiguracoesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuracoes',
            template: __webpack_require__(/*! ./configuracoes.component.html */ "./src/app/configuracoes/configuracoes.component.html"),
            styles: [__webpack_require__(/*! ./configuracoes.component.css */ "./src/app/configuracoes/configuracoes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfiguracoesComponent);
    return ConfiguracoesComponent;
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

module.exports = "<h1>OLÁ!</h1>\n<h2>PARA CONTINUAR, TOQUE NO BOTÃO ABAIXO PARA DEIXAR O TOTEM ACESSÍVEL OU EM CONFIGURAR PARA ACESSAR AS CONFIGURAÇÕES!</h2>\n<div>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"go()\">CONTINUAR</button>\n    <!-- O botão de Configurações só será exibido se totem.unidades_completo não existir ou for vazio -->\n    <button *ngIf=\"!isUnidadesCompleto()\"\n            type=\"button\" \n            class=\"btn btn-light\" \n            routerLink=\"/configuracao\">CONFIGURAÇÕES</button>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        this.unidades_selecionadas = [null];
        this.unidades_selecionadas_object = [null];
        this.unidade_padrao = 0;
        if (localStorage.getItem("totem.credenciais") == "" ||
            localStorage.getItem("totem.credenciais") === null)
            localStorage.setItem("totem.credenciais", "{}");
        if (localStorage.getItem("totem.servidor") == "" ||
            localStorage.getItem("totem.servidor") === null)
            localStorage.setItem("totem.servidor", "{}");
        if (localStorage.getItem("totem.servicos") == "" ||
            localStorage.getItem("totem.servicos") === null)
            localStorage.setItem("totem.servicos", "[]");
        if (localStorage.getItem("totem.servicos_selecionados") == "" ||
            localStorage.getItem("totem.servicos_selecionados") === null)
            localStorage.setItem("totem.servicos_selecionados", "[]");
        setTimeout(function () {
            if (localStorage.getItem("totem.unidades_completo") == null ||
                localStorage.getItem("totem.unidades_completo") == "[]" ||
                localStorage.getItem("totem.unidades_completo") == "") {
                localStorage.setItem("totem.unidades_completo", "[]");
                _this.router.navigateByUrl("/configuracao");
            }
            else {
                _this.unidades_selecionadas_object = JSON.parse(localStorage.getItem("totem.unidades_completo"));
                if (_this.unidades_selecionadas_object.length == 0) {
                    _this.router.navigateByUrl("/configuracao");
                }
            }
        }, 1000);
    }
    HomeComponent.prototype.isUnidadesCompleto = function () {
        var unidadesCompleto = localStorage.getItem("totem.unidades_completo");
        return (unidadesCompleto !== null &&
            unidadesCompleto !== "[]" &&
            unidadesCompleto !== "");
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var unidadesCompleto = JSON.parse(localStorage.getItem("totem.unidades_completo"));
        if (unidadesCompleto.length) {
            setTimeout(function () {
                _this.router.navigateByUrl("/unidade");
            }, 3000);
        }
    };
    HomeComponent.prototype.quantasUnidades = function () {
        var count = 0;
        this.unidades_selecionadas_object.forEach(function (e) {
            count++;
        });
        return count;
    };
    HomeComponent.prototype.go = function () {
        if (this.quantasUnidades() == 0) {
            window.alert("Não há unidades selecionadas! Por favor, efetue essa configuração. Erro: O número de unidades em unidades_selecionas_object é 0.");
            this.router.navigateByUrl("/configuracao");
        }
        else {
            this.router.navigateByUrl("/unidade");
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/imprimindo/imprimindo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/imprimindo/imprimindo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    width: 95%;\n    border-radius:25px;\n    background: #4d0f0fa2;\n    padding: 50px 10px;\n}\ndiv h1,\ndiv h2,\ndiv h3,\ndiv h4,\ndiv h5,\ndiv h6{  \n    color: #000;\n    text-transform: uppercase !important;\n}\ndiv h1{\n    font-size: 5rem;\n}\n.btn{\n    text-transform: uppercase !important;\n}"

/***/ }),

/***/ "./src/app/imprimindo/imprimindo.component.html":
/*!******************************************************!*\
  !*** ./src/app/imprimindo/imprimindo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>IMPRIMINDO SUA SENHA...</h1>\n<h2>POR FAVOR, AGUARDE...</h2>\n<div>\n  <h2>{{getServico().servico.nome}}</h2>\n  <h2 *ngIf=\"prioridade == 1\">NORMAL</h2>\n  <h2 *ngIf=\"prioridade == 2\">PRIORITARIO</h2>\n  <h2 *ngIf=\"prioridade == 3\">PRIORITARIO 1</h2>\n  <h1>{{senha_codigo}}</h1>\n  <iframe id=\"frame-impressao\" width=\"0\" height=\"0\" border=\"0\" [srcdoc]=\"displayString\" style=\"border: none;\"></iframe><audio id=\"audio\">\n    <source src=\"assets/imprimindo.ogg\" type=\"audio/ogg\" autoplay=\"autoplay\">\n    Seu navegador não suporta a tag audio.\n  </audio>\n</div>"

/***/ }),

/***/ "./src/app/imprimindo/imprimindo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/imprimindo/imprimindo.component.ts ***!
  \****************************************************/
/*! exports provided: ImprimindoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprimindoComponent", function() { return ImprimindoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImprimindoComponent = /** @class */ (function () {
    function ImprimindoComponent(route, router, domSanitizer) {
        this.route = route;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.servicos = [];
        this.senha_codigo = "";
        if (localStorage.getItem("totem.servidor") !== null && localStorage.getItem("totem.credenciais") !== null) {
            this.servidor = JSON.parse(localStorage.getItem("totem.servidor"));
            this.credenciais = JSON.parse(localStorage.getItem("totem.credenciais"));
            this.verifyToken();
        }
        else {
            alert("Não há configuração de servidor e usuário neste aparelho. Por favor, configure isto primeiro.");
            this.router.navigateByUrl('/configuracao/servidor');
        }
    }
    ImprimindoComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.prioridade = +this.route.snapshot.paramMap.get('prioridade');
        this.servicos = JSON.parse(localStorage.getItem("totem.servicos_selecionados"));
        this.entidade = JSON.parse(localStorage.getItem("totem.entidade"));
        var audio = jquery__WEBPACK_IMPORTED_MODULE_3__("#audio").get(0);
        audio.volume = 0.25;
        audio.play();
    };
    ImprimindoComponent.prototype.getServico = function () {
        var _this = this;
        var servico = "";
        this.servicos.forEach(function (element) {
            if (element.servico.id == _this.id) {
                servico = element;
            }
        });
        return servico;
    };
    ImprimindoComponent.prototype.verifyToken = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__["ajax"]({
            type: "post",
            url: this.servidor.url.concat("api/token"),
            data: "client_id=".concat(this.servidor.client_id).concat("&client_secret=").concat(this.servidor.client_secret).concat("&grant_type=password&username=").concat(this.credenciais.user).concat("&password=").concat(this.credenciais.password),
            dataType: "json",
            success: function (data, textStatus, xhr) {
                _this.access_token = data.access_token;
                _this.callSenha();
            },
            error: function (data, textStatus, xhr) {
                window.alert("O Client ID, Client Secret, Usuário ou Senha estão incorretos. Por favor, verificar e tentar novamente mais tarde.");
                _this.router.navigateByUrl("/configuracao/servidor");
            }
        });
    };
    ImprimindoComponent.prototype.callSenha = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__["ajax"]({
            type: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.access_token,
            },
            data: JSON.stringify({
                'unidade': this.getServico().unidade.id,
                'servico': this.id,
                'prioridade': this.prioridade,
                'cliente': {},
            }),
            url: this.servidor.url.concat("api/distribui"),
            dataType: "json",
            success: function (data, textStatus, xhr) {
                _this.senha_id = data.id;
                _this.senha_codigo = data.senha.format;
                _this.senha_hash = data.hash;
                _this.senha = data;
                _this.imprime();
            },
            error: function (data, textStatus, xhr) {
                window.alert("Algo deu errado... Favor tentar novamente mais tarde. Erro: " + textStatus);
                _this.router.navigateByUrl("/");
            }
        });
    };
    ImprimindoComponent.prototype.imprime = function () {
        var _this = this;
        var separador = '-'.repeat(50);
        var dataChegada = new Date(this.senha.dataChegada)
            .toLocaleString("pt-BR")
            .replace(",", "")
            .replace(" ", " - ");
        var html = "<html><head><style>@page :left{margin:0; margin-left:0;}@page :top{margin:0; margin-top:0;}@page :right{margin:0; margin-right:0;}@page{margin:0; margin-left:0; margin-top:0; margin-right:0; margin-bottom:0;}*{margin:0;padding:0;}body{font-family: Red Ring, Arial, Helvetica, sans-serif; text-align:center;}p{margin:0;padding:0;}.bold{font-weight:bold}#senha{font-size: 3rem}</style><title>".concat(this.senha_codigo).concat("</title></head><body onload=\"print()\">")
            .concat("<p>").concat(separador).concat("</p>")
            .concat("<p class=\"bold\" style=\"font-size:85%\">").concat(this.getServico().unidade.impressao.cabecalho).concat("</p>")
            .concat("<p>").concat(this.senha.servico.nome).concat("</p>")
            .concat("<p class=\"bold\">").concat(this.senha.prioridade.nome).concat("</p>")
            .concat("<p id=\"senha\" class=\"bold\">").concat(this.senha_codigo).concat("</p>")
            .concat("<p class=\"bold\">Chegada")
            .concat("</p>")
            .concat("<p>").concat(dataChegada)
            .concat("</p>")
            .concat("<p>").concat(this.getServico().unidade.impressao.rodape).concat("</p>")
            .concat("<p>").concat(separador).concat("</p>")
            .concat(!(this.getServico().mensagem)
            ? ''
            : "<p class=\"bold\" style=\"font-size:85%; color: white; background-color: black; padding: 5px;\">" + this.getServico().mensagem + "</p>")
            .concat("</body></html>");
        var iframe = jquery__WEBPACK_IMPORTED_MODULE_3__("#frame-impressao").get(0);
        iframe = iframe.contentWindow || (iframe.contentDocument.document || iframe.contentDocument);
        iframe.document.open();
        iframe.document.write(html);
        iframe.document.close();
        clearTimeout(Number(localStorage.getItem("totem.timeout")));
        localStorage.setItem("totem.timeout", "");
        setTimeout(function () {
            _this.router.navigateByUrl("/unidade");
        }, 5000);
    };
    ImprimindoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imprimindo',
            template: __webpack_require__(/*! ./imprimindo.component.html */ "./src/app/imprimindo/imprimindo.component.html"),
            styles: [__webpack_require__(/*! ./imprimindo.component.css */ "./src/app/imprimindo/imprimindo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ImprimindoComponent);
    return ImprimindoComponent;
}());



/***/ }),

/***/ "./src/app/servico/servico.component.css":
/*!***********************************************!*\
  !*** ./src/app/servico/servico.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    text-transform: uppercase !important;\n}"

/***/ }),

/***/ "./src/app/servico/servico.component.html":
/*!************************************************!*\
  !*** ./src/app/servico/servico.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>TOQUE NO SERVIÇO QUE DESEJA ATENDIMENTO</h2>\n<div *ngFor=\"let servico of servicos\">\n  <div *ngIf=\"id == servico.unidade.id\">\n    <div *ngIf=\"servico.prioridade\">\n      <a routerLink=\"/tipoatendimento/{{servico.servico.id}}\" class=\"btn btn-light\">{{servico.servico.nome}}</a>\n    </div>\n    <div *ngIf=\"!servico.prioridade\">\n      <a routerLink=\"/imprimindo/{{servico.servico.id}}/1\" class=\"btn btn-light\">{{servico.servico.nome}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/servico/servico.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servico/servico.component.ts ***!
  \**********************************************/
/*! exports provided: ServicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoComponent", function() { return ServicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicoComponent = /** @class */ (function () {
    function ServicoComponent(route, router) {
        this.route = route;
        this.router = router;
        this.servicos = [];
    }
    ServicoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        var chavesObrigatorias = [
            "totem.servicos",
            "totem.servicos_selecionados",
            "totem.unidades_completo",
            "totem.unidades_dados"
        ];
        var precisaLimparERedirecionar = chavesObrigatorias.some(function (key) {
            var dado = localStorage.getItem(key);
            if (!dado)
                return true;
            try {
                var parsed = JSON.parse(dado);
                return Array.isArray(parsed) && parsed.length === 0;
            }
            catch (e) {
                return true;
            }
        });
        if (precisaLimparERedirecionar) {
            this.executarLimpezaGeral();
            return;
        }
        this.servicos = JSON.parse(localStorage.getItem("totem.servicos_selecionados"));
        this.timeout = setTimeout(function () {
            localStorage.setItem("totem.timeout", "");
            _this.router.navigateByUrl("/unidade");
        }, 30000);
        localStorage.setItem("totem.timeout", this.timeout.toString());
    };
    ServicoComponent.prototype.executarLimpezaGeral = function () {
        var prefixosParaRemover = ['totem.servicos', 'totem.unidades'];
        Object.keys(localStorage)
            .filter(function (key) { return prefixosParaRemover.some(function (prefixo) { return key.startsWith(prefixo); }); })
            .forEach(function (key) { return localStorage.removeItem(key); });
        this.router.navigateByUrl('/');
    };
    ServicoComponent.prototype.ngOnDestroy = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };
    ServicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servico',
            template: __webpack_require__(/*! ./servico.component.html */ "./src/app/servico/servico.component.html"),
            styles: [__webpack_require__(/*! ./servico.component.css */ "./src/app/servico/servico.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ServicoComponent);
    return ServicoComponent;
}());



/***/ }),

/***/ "./src/app/tipo-atendimento/tipo-atendimento.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tipo-atendimento/tipo-atendimento.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    text-transform: uppercase !important;\n}"

/***/ }),

/***/ "./src/app/tipo-atendimento/tipo-atendimento.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tipo-atendimento/tipo-atendimento.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>QUAL O TIPO DE ATENDIMENTO?</h2>\n<div>\n  <a routerLink=\"/imprimindo/{{id}}/1\" class=\"btn btn-light\">NORMAL</a>\n  <a routerLink=\"/prioridade/{{id}}\" class=\"btn btn-danger\">PRIORITÁRIO</a>\n  <button (click)=\"goBack()\" class=\"btn btn-light voltar-btn\">VOLTAR</button>\n</div>"

/***/ }),

/***/ "./src/app/tipo-atendimento/tipo-atendimento.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tipo-atendimento/tipo-atendimento.component.ts ***!
  \****************************************************************/
/*! exports provided: TipoAtendimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoAtendimentoComponent", function() { return TipoAtendimentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipoAtendimentoComponent = /** @class */ (function () {
    function TipoAtendimentoComponent(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
    }
    TipoAtendimentoComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
    };
    TipoAtendimentoComponent.prototype.goBack = function () {
        this.location.back();
    };
    TipoAtendimentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-atendimento',
            template: __webpack_require__(/*! ./tipo-atendimento.component.html */ "./src/app/tipo-atendimento/tipo-atendimento.component.html"),
            styles: [__webpack_require__(/*! ./tipo-atendimento.component.css */ "./src/app/tipo-atendimento/tipo-atendimento.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TipoAtendimentoComponent);
    return TipoAtendimentoComponent;
}());



/***/ }),

/***/ "./src/app/tipo-prioridade/tipo-prioridade.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tipo-prioridade/tipo-prioridade.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-danger{\n    margin: 3px 0;\n}\n.btn{\n    text-transform: uppercase !important;\n}"

/***/ }),

/***/ "./src/app/tipo-prioridade/tipo-prioridade.component.html":
/*!****************************************************************!*\
  !*** ./src/app/tipo-prioridade/tipo-prioridade.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center;\">QUAL O TIPO DE PRIORIDADE?</h2>\n<div style=\"display: flex; flex-direction: column; gap: 20px; align-items: center; padding: 20px;\">\n  <a \n    routerLink=\"/imprimindo/{{id}}/2\" \n    class=\"btn btn-danger prioridade-link\"\n    style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; width: 90%; max-width: 800px; padding: 15px;\">\n    <span style=\"flex: 1; text-align: left; padding-left: 20px;\">PRIORITARIO</span>\n    <img src=\"assets/img/prioritario.png\" style=\"width: 100%; max-width: 450px; height: auto;\" />\n  </a>\n  <a \n    routerLink=\"/imprimindo/{{id}}/3\" \n    class=\"btn btn-danger prioridade-link\"\n    style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; width: 90%; max-width: 800px; padding: 15px;\">\n    <span style=\"flex: 1; text-align: left; padding-left: 20px;\">PRIORITARIO 1</span>\n    <img src=\"assets/img/prioritario1.png\" style=\"width: 100%; max-width: 450px; height: auto;\" />\n  </a>\n\n  <button (click)=\"goBack()\" class=\"btn btn-light voltar-btn\" style=\"margin-top: 20px;\">VOLTAR</button>\n</div>\n"

/***/ }),

/***/ "./src/app/tipo-prioridade/tipo-prioridade.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tipo-prioridade/tipo-prioridade.component.ts ***!
  \**************************************************************/
/*! exports provided: TipoPrioridadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPrioridadeComponent", function() { return TipoPrioridadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipoPrioridadeComponent = /** @class */ (function () {
    function TipoPrioridadeComponent(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
    }
    TipoPrioridadeComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
    };
    TipoPrioridadeComponent.prototype.goBack = function () {
        this.location.back();
    };
    TipoPrioridadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-prioridade',
            template: __webpack_require__(/*! ./tipo-prioridade.component.html */ "./src/app/tipo-prioridade/tipo-prioridade.component.html"),
            styles: [__webpack_require__(/*! ./tipo-prioridade.component.css */ "./src/app/tipo-prioridade/tipo-prioridade.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TipoPrioridadeComponent);
    return TipoPrioridadeComponent;
}());



/***/ }),

/***/ "./src/app/unidade/unidade.component.css":
/*!***********************************************!*\
  !*** ./src/app/unidade/unidade.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    text-transform: uppercase !important;\n}"

/***/ }),

/***/ "./src/app/unidade/unidade.component.html":
/*!************************************************!*\
  !*** ./src/app/unidade/unidade.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>OLÁ!</h1>\n<h2>PARA QUAL UNIDADE DESEJA ATENDIMENTO?</h2>\n<div *ngFor=\"let unidade of unidades\">\n  <a routerLink=\"/servico/{{unidade.id}}\" class=\"btn btn-light\">{{unidade.nome}}</a>\n</div>"

/***/ }),

/***/ "./src/app/unidade/unidade.component.ts":
/*!**********************************************!*\
  !*** ./src/app/unidade/unidade.component.ts ***!
  \**********************************************/
/*! exports provided: UnidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadeComponent", function() { return UnidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnidadeComponent = /** @class */ (function () {
    function UnidadeComponent(router) {
        this.router = router;
        this.unidades = [];
        var unidadesData = localStorage.getItem("totem.unidades_completo");
        this.unidades = unidadesData ? JSON.parse(unidadesData) : [];
    }
    UnidadeComponent.prototype.ngOnInit = function () {
        if (this.unidades.length === 1) {
            var unicaUnidade = this.unidades[0];
            this.router.navigate(["/servico/" + unicaUnidade.id]);
        }
    };
    UnidadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unidade',
            template: __webpack_require__(/*! ./unidade.component.html */ "./src/app/unidade/unidade.component.html"),
            styles: [__webpack_require__(/*! ./unidade.component.css */ "./src/app/unidade/unidade.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UnidadeComponent);
    return UnidadeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /home/luiz/Projetos/Pessoal/painelSGA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map