"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var filmsLoading_1 = require("../filmsLoading");
var Favorite = (function (_super) {
    __extends(Favorite, _super);
    function Favorite(dataStore) {
        _super.call(this, dataStore);
        this.dataStore = dataStore;
    }
    Favorite = __decorate([
        core_1.Component({
            selector: 'favorite',
            styleUrls: ['app/pages/favorite/favorite.css'],
            template: "\n<div>\n    <h1>Favorite movies:</h1>\n    <spinner *ngIf=\"films.size === 0\"></spinner>\n    <div class=\"center posters  animated fadeIn\">\n        <poster *ngFor=\"let film of store.films | async | favorite: favorites\" \n        [isActive]=\"favorites.includes(film.idIMDB)\" [movie]=\"film\" (addFavorite)=\"favorite($event)\"></poster>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage])
    ], Favorite);
    return Favorite;
}(filmsLoading_1.FilmsLoading));
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.page.js.map