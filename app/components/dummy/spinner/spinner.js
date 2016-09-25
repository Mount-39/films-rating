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
var Spinner = (function () {
    function Spinner() {
    }
    Spinner = __decorate([
        core_1.Component({
            selector: 'spinner',
            styleUrls: ['app/components/dummy/spinner/spinner.css'],
            template: "\n<div class=\"sk-folding-cube\">\n    <div class=\"sk-cube1 sk-cube\"></div>\n    <div class=\"sk-cube2 sk-cube\"></div>\n    <div class=\"sk-cube4 sk-cube\"></div>\n    <div class=\"sk-cube3 sk-cube\"></div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Spinner);
    return Spinner;
}());
exports.Spinner = Spinner;
//# sourceMappingURL=spinner.js.map