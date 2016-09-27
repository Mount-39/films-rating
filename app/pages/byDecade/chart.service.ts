import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as d3 from 'd3';


@Injectable()
export class ChartBuilder {
    private width: number = 300;
    private height: number = 300;
    private outerRadius: number = this.width / 2;
    private innerRadius: number = 100;

    constructor() {
    }

    public build(dataset: any): void {
        const pie = d3.layout.pie()
            .value(function (d) {
                return d.count
            })
            .sort(null)
            .padAngle(.03);

        const color = d3.scale.category10();

        const arc = d3.svg.arc()
            .outerRadius(this.outerRadius)
            .innerRadius(this.innerRadius);

        const svg = d3.select("#chart")
            .append("svg")
            .attr({
                width: this.width,
                height: this.height,
                class: 'shadow'
            }).append('g')
            .attr({
                transform: 'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
            });

        const path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr({
                d: arc,
                fill: function (d, i) {
                    return color(d.data.decade);
                }
            });
    }

}