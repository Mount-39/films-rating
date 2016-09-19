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
var top20_store_1 = require("./top20.store");
var Top20 = (function () {
    function Top20(top20Store) {
        var _this = this;
        this.top20Store = top20Store;
        this.subscriber = top20Store.films.subscribe(function (films) {
            console.log(films);
            _this.films = films;
        });
    }
    Top20.prototype.ngOnInit = function () {
        if (this.films.length === 0)
            this.top20Store.loadFilms();
    };
    Top20.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    Top20 = __decorate([
        core_1.Component({
            selector: 'top-20',
            styleUrls: ['app/pages/top20/top20.css'],
            template: "\n<div>\n    <div class=\"posters\">\n        <poster></poster>\n        <poster></poster>\n        <poster></poster>\n        <poster></poster>\n        <poster></poster>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [top20_store_1.Top20Store])
    ], Top20);
    return Top20;
}());
exports.Top20 = Top20;
//# sourceMappingURL=top20.page.js.map