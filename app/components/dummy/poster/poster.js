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
var movies_model_1 = require("../../../models/movies.model");
var Poster = (function () {
    function Poster() {
        this.addFavorite = new core_1.EventEmitter();
    }
    Poster.prototype.favorite = function (id) {
        this.addFavorite.emit(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', movies_model_1.MoviesModel)
    ], Poster.prototype, "movie", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Poster.prototype, "isActive", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Poster.prototype, "addFavorite", void 0);
    Poster = __decorate([
        core_1.Component({
            selector: 'poster',
            styleUrls: ['app/components/dummy/poster/poster.css'],
            template: "\n<div>\n    <img [src]=\"movie?.urlPoster || 'app/assets/img/poster.jpg'\" [alt]=\"movie?.title\"/>\n    <div class=\"movieinfo\">\n        <span class=\"favorite\" [class.active]=\"isActive\" (click)=\"favorite(movie.idIMDB)\"></span>\n        <h3>{{movie?.title}}</h3>\n        <p>year: {{movie?.year}}</p>\n        <p>rating: {{movie?.rating}}</p>\n        <p>genre: \n            <span *ngFor=\"let genre of movie?.genres\">\n            {{genre}}</span>\n        </p>\n         <p>country: \n            <span *ngFor=\"let country of movie?.countries\">\n            {{country}}</span>\n        </p>\n         <p>director: \n            <span *ngFor=\"let director of movie?.directors\">\n            {{director.name}}</span>\n        </p>\n        <a title=\"movie?.title\" >More info</a>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Poster);
    return Poster;
}());
exports.Poster = Poster;
//# sourceMappingURL=poster.js.map