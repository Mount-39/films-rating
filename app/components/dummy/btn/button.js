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
var Btn = (function () {
    function Btn() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Btn.prototype, "text", void 0);
    Btn = __decorate([
        core_1.Component({
            selector: 'btn',
            styleUrls: ['app/components/dummy/btn/button.css'],
            template: "\n<button>\n    <ng-content></ng-content>\n</button>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Btn);
    return Btn;
}());
exports.Btn = Btn;
//# sourceMappingURL=button.js.map