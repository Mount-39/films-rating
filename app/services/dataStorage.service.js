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
var FAVORITES = 'favorites';
var DataStorage = (function () {
    function DataStorage(request) {
        var _this = this;
        this.request = request;
        this._isLoading = new Rx_1.BehaviorSubject(true);
        this._films = new Rx_1.BehaviorSubject(immutable_1.List([]));
        this._favorites = new Rx_1.BehaviorSubject(immutable_1.List([]));
        this._byDecades = new Rx_1.BehaviorSubject({});
        //Init load data
        this.loadFilms();
        //Check localStorage
        var local = localStorage.getItem(FAVORITES);
        if (local) {
            this._favorites.next(immutable_1.List(local.split(',')));
        }
        //Subscribe for update localStorage w
        this._favorites.subscribe(function (updated) { return _this.favoritsLocalstorage(updated.toArray()); });
    }
    Object.defineProperty(DataStorage.prototype, "isLoading", {
        get: function () {
            return this._isLoading.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorage.prototype, "byDecades", {
        get: function () {
            return this._byDecades.asObservable();
        },
        enumerable: true,
        configurable: true
    });
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
        set: function (id) {
            var index = this._favorites.getValue().indexOf(id);
            index != -1 ?
                this._favorites.next(immutable_1.List(this._favorites.getValue().delete(index))) :
                this._favorites.next(immutable_1.List((this._favorites.getValue().push(id))));
        },
        enumerable: true,
        configurable: true
    });
    DataStorage.prototype.loadFilms = function () {
        var _this = this;
        this._isLoading.next(true);
        this.request.TOP20()
            .flatMap(function (data) {
            return Rx_1.Observable.if(function () { return data ? true : false; }, _this.request.MOCKS_TOP20());
        })
            .subscribe(function (data) {
            var movies = data.data.movies, films = _this.assignData(movies);
            _this._films.next(immutable_1.List(films));
            _this._byDecades.next(_this.parseByDecades(films));
            _this.loadAdditionalData(films);
        }, function (err) { return console.error(err); });
    };
    DataStorage.prototype.parseByDecades = function (data) {
        return data.reduce(function (byDecades, film) {
            var decade = film.year.toString().slice(0, -1) + '0x';
            byDecades[decade] ? byDecades[decade] += 1 : byDecades[decade] = 1;
            return byDecades;
        }, {});
    };
    DataStorage.prototype.loadAdditionalData = function (data) {
        var _this = this;
        Rx_1.Observable.from(data)
            .flatMap(function (film) {
            return _this.loadTrailers(film.idIMDB)
                .map(function (data) {
                var trailer = data.data.trailer;
                film.trailers = trailer || [];
                return film;
            });
        })
            .subscribe(function (res) {
            _this._films.next(_this.updateFilm(res));
        }, function (err) { return console.error(err); }, function () { return _this._isLoading.next(false); });
    };
    DataStorage.prototype.updateFilm = function (film) {
        var index = this._films.getValue().findIndex(function (obj) {
            return obj.idIMDB === film.idIMDB;
        });
        return this._films.getValue().update(index, function (movie) { return film; });
    };
    // private loadDirector(directors:any[]):Observable<any> {
    //     return Observable.forkJoin(
    //         directors.map((director:any) =>
    //             this.request.DIRECTOR(director.name)
    //         ));
    // }
    DataStorage.prototype.loadTrailers = function (idIMDB) {
        return this.request.TRAILERS(idIMDB);
    };
    DataStorage.prototype.assignData = function (data) {
        return data.map(function (film) {
            return Object.assign(new movies_model_1.MoviesModel(), film);
        });
    };
    DataStorage.prototype.favoritsLocalstorage = function (items) {
        localStorage.setItem(FAVORITES, items.toString());
    };
    DataStorage = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [urlBuilder_service_1.UrlBuilderService])
    ], DataStorage);
    return DataStorage;
}());
exports.DataStorage = DataStorage;
//# sourceMappingURL=dataStorage.service.js.map