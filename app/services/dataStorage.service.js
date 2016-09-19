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
var immutable_1 = require("immutable");
var DataStorage = (function () {
    function DataStorage() {
        this._films = immutable_1.List([]);
    }
    Object.defineProperty(DataStorage.prototype, "films", {
        set: function (collection) {
            this._films = immutable_1.List(collection);
        },
        enumerable: true,
        configurable: true
    });
    DataStorage = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataStorage);
    return DataStorage;
}());
exports.DataStorage = DataStorage;
//# sourceMappingURL=dataStorage.service.js.map