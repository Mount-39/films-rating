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
var chart_service_1 = require("./chart.service");
var ByDecade = (function () {
    function ByDecade(dataStorage, chart) {
        this.dataStorage = dataStorage;
        this.chart = chart;
    }
    ByDecade.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriber = this.dataStorage.byDecades.subscribe(function (res) {
            if (res) {
                _this.chartData = Object.keys(res).reduce(function (data, key) {
                    return data = data.concat([{ decade: key, count: res[key] }]);
                }, []);
                _this.chart.build(_this.chartData);
            }
        });
    };
    ByDecade.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    ByDecade = __decorate([
        core_1.Component({
            selector: 'by-decade',
            template: "\n<div>\n    <h1>Chart is showing films by decades</h1>\n    <span id=\"chart\"></span>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [dataStorage_service_1.DataStorage, chart_service_1.ChartBuilder])
    ], ByDecade);
    return ByDecade;
}());
exports.ByDecade = ByDecade;
//# sourceMappingURL=byDecade.page.js.map