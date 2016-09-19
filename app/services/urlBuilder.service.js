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
var backend_service_1 = require("./backend.service");
var URLs_1 = require("../config/URLs");
var UrlBuilderService = (function () {
    function UrlBuilderService(backend) {
        this.backend = backend;
    }
    UrlBuilderService.prototype.TOP20 = function () {
        return this.backend.get(URLs_1.URLs.TOP20);
    };
    UrlBuilderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [backend_service_1.BackendService])
    ], UrlBuilderService);
    return UrlBuilderService;
}());
exports.UrlBuilderService = UrlBuilderService;
//# sourceMappingURL=urlBuilder.service.js.map