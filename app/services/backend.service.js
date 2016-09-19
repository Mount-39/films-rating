"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var API_1 = require("../config/API");
var errorHandler_1 = require("./errorHandler");
var BackendService = (function () {
    function BackendService(http, error) {
        this.http = http;
        this.error = error;
    }
    BackendService.prototype.get = function (url) {
        var _this = this;
        var api = new API_1.API(url);
        return this.http.get(api.URL)
            .cache()
            .map(function (res) { return res.json(); })
            .map(function (data) { return data.error ? _this.error.handleError(data) : data; });
    };
    BackendService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, errorHandler_1.ErrorHandler])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map