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
var Top20 = (function () {
    function Top20(store) {
        var _this = this;
        this.store = store;
        this.filmsSubscriber = store.films.subscribe(function (films) {
            _this.films = films;
        });
        this.favoriteSubscriber = store.favorites.subscribe(function (ids) {
            _this.favorites = ids;
        });
    }
    Top20.prototype.ngOnInit = function () {
        if (this.films.size === 0)
            this.store.loadFilms();
    };
    Top20.prototype.ngOnDestroy = function () {
        this.filmsSubscriber.unsubscribe();
        this.favoriteSubscriber.unsubscribe();
    };
    Top20.prototype.favorite = function (id) {
        this.store.favorites = id;
    };
    Top20 = __decorate([
        core_1.Component({
            selector: 'top-20',
            template: "\n<div>\n    <spinner *ngIf=\"films.size === 0\"></spinner>\n    \n    <div class=\"center posters animated zoomIn\">\n        <poster *ngFor=\"let film of films\" [isActive]=\"favorites.includes(film.idIMDB)\" \n        [movie]=\"film\" (addFavorite)=\"favorite($event)\"></poster>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage])
    ], Top20);
    return Top20;
}());
exports.Top20 = Top20;
//# sourceMappingURL=top20.page.js.map