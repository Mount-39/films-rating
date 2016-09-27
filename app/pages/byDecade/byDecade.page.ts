import {Component, OnInit} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {ChartBuilder} from "./chart.service";

@Component({
    selector: 'by-decade',
    template: `
<div>
    <h1>Chart is showing films by decades</h1>
    <span id="chart"></span>
</div>
`
})
export class ByDecade implements OnInit{
    private chartData: any;
    private subscriber: any;

    constructor(private dataStorage: DataStorage, private chart: ChartBuilder) {
    }

    ngOnInit() {
        this.subscriber = this.dataStorage.byDecades.subscribe((res: any) => {
            if (res) {
                this.chartData = Object.keys(res).reduce((data: any, key: string) =>
                        data = [...data, { decade: key, count: res[key]}]
                    , []);

                this.chart.build(this.chartData)
            }
        });
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}
