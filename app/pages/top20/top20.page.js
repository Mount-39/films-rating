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
var Top20 = (function (_super) {
    __extends(Top20, _super);
    function Top20(dataStore) {
        _super.call(this, dataStore);
        this.dataStore = dataStore;
        this.modal = true;
    }
    Top20.prototype.openModal = function (trailers) {
        this.trailers = trailers;
        this.modal = false;
    };
    Top20 = __decorate([
        core_1.Component({
            selector: 'top-20',
            template: "\n<div>\n    <spinner *ngIf=\"films.size === 0\"></spinner>\n    \n    <modal [isClose]=\"modal\" [trailers]=\"trailers\"></modal>\n    \n    <div class=\"center posters animated zoomIn\">\n        <poster *ngFor=\"let film of films\" [isActive]=\"favorites.includes(film.idIMDB)\" \n        [movie]=\"film\" (addFavorite)=\"favorite($event)\" \n        (trailers)=\"openModal($event)\"></poster>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage])
    ], Top20);
    return Top20;
}(filmsLoading_1.FilmsLoading));
exports.Top20 = Top20;
//# sourceMappingURL=top20.page.js.map