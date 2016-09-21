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
var Rx_1 = require("rxjs/Rx");
var immutable_1 = require('immutable');
var movies_model_1 = require("../models/movies.model");
var urlBuilder_service_1 = require("./urlBuilder.service");
var DataStorage = (function () {
    function DataStorage(request) {
        this.request = request;
        this._films = new Rx_1.BehaviorSubject(immutable_1.List([]));
        this._favorites = new Rx_1.BehaviorSubject(immutable_1.List([]));
    }
    Object.defineProperty(DataStorage.prototype, "films", {
        get: function () {
            return this._films.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorage.prototype, "favorites", {
        get: function () {
            return this._favorites.asObservable();
        },
        set: function (index) {
            var index = this._favorites.getValue().find(function (i) { return i === index; });
            index != -1 ?
                this._favorites.next(immutable_1.List(this._favorites.getValue().delete(index))) :
                this._favorites.next(immutable_1.List((this._favorites.getValue().concat(index))));
        },
        enumerable: true,
        configurable: true
    });
    DataStorage.prototype.loadFilms = function () {
        var _this = this;
        this.request.TOP20()
            .subscribe(function (data) {
            var movies = data.data.movies, films = _this.assignData(movies);
            _this._films.next(immutable_1.List(films));
        }, function (err) { return console.log(err); });
    };
    DataStorage.prototype.assignData = function (data) {
        return data.map(function (film) {
            return Object.assign(new movies_model_1.MoviesModel(), film);
        });
    };
    DataStorage = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [urlBuilder_service_1.UrlBuilderService])
    ], DataStorage);
    return DataStorage;
}());
exports.DataStorage = DataStorage;
//# sourceMappingURL=dataStorage.service.js.map