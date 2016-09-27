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
var d3 = require('d3');
var ChartBuilder = (function () {
    function ChartBuilder() {
        this.width = 300;
        this.height = 300;
        this.outerRadius = this.width / 2;
        this.innerRadius = 100;
    }
    ChartBuilder.prototype.build = function (dataset) {
        var pie = d3.layout.pie()
            .value(function (d) {
            return d.count;
        })
            .sort(null)
            .padAngle(.03);
        var color = d3.scale.category10();
        var arc = d3.svg.arc()
            .outerRadius(this.outerRadius)
            .innerRadius(this.innerRadius);
        var svg = d3.select("#chart")
            .append("svg")
            .attr({
            width: this.width,
            height: this.height,
            class: 'shadow'
        }).append('g')
            .attr({
            transform: 'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
        });
        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr({
            d: arc,
            fill: function (d, i) {
                return color(d.data.decade);
            }
        });
    };
    ChartBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChartBuilder);
    return ChartBuilder;
}());
exports.ChartBuilder = ChartBuilder;
//# sourceMappingURL=chart.service.js.map