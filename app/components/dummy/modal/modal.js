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
var platform_browser_1 = require("@angular/platform-browser");
var Modal = (function () {
    function Modal(sanitizer) {
        this.sanitizer = sanitizer;
        this.isClose = new core_1.EventEmitter();
    }
    Modal.prototype.sanitizeHTML = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Modal.prototype.close = function () {
        this.isClose.emit(true);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Modal.prototype, "trailers", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Modal.prototype, "isClose", void 0);
    Modal = __decorate([
        core_1.Component({
            selector: 'modal',
            styleUrls: ['app/components/dummy/modal/modal.css'],
            template: "\n<div class=\"modal\" (click)=\"close()\">\n    <div class=\"center animated zoomIn\">\n        <h2>Trailers:</h2>\n        <span *ngFor=\"let trailer of trailers\" [innerHTML]=\"sanitizeHTML(trailer.embed)\">\n        </span>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map