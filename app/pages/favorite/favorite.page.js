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
var dataStorage_service_1 = require("../../services/dataStorage.service");
var Favorite = (function () {
    function Favorite(store) {
        this.store = store;
    }
    Favorite.prototype.favorite = function (movie) {
        this.store.favorites = movie;
    };
    Favorite = __decorate([
        core_1.Component({
            selector: 'favorite',
            styleUrls: ['app/pages/favorite/favorite.css'],
            template: "\n<div>\n    <h1>Favorite movies:</h1>\n    <div class=\"favorite\">\n        <poster *ngFor=\"let film of store.favorites | async\" [movie]=\"film\" (click)=\"favorite(film)\"></poster>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage])
    ], Favorite);
    return Favorite;
}());
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.page.js.map