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
var Poster = (function () {
    function Poster() {
    }
    Poster = __decorate([
        core_1.Component({
            selector: 'poster',
            styleUrls: ['app/components/dummy/poster/poster.css'],
            template: "\n<div>\n    <img [src]=\"'app/assets/img/poster.jpg'\" alt=\"Iron Man 2\"/>\n    <div class=\"movieinfo\">\n        <h3>Iron Man 2</h3>\n        <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony...</p>\n        <a title=\"Iron Man 2\">More info</a>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Poster);
    return Poster;
}());
exports.Poster = Poster;
//# sourceMappingURL=poster.js.map