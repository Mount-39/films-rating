import {Component, OnInit} from '@angular/core';
import {Top20Store} from "./top20.store";

@Component({
    selector: 'top-20',
    styleUrls: ['app/pages/top20/top20.css'],
    template: `
<div>
    <div class="posters">
        <poster></poster>
        <poster></poster>
        <poster></poster>
        <poster></poster>
        <poster></poster>
    </div>
</div>
`
})
export class Top20 implements OnInit{
    constructor(private top20Store:Top20Store) {
        top20Store.films.subscribe((f:any) => console.log(f));
    }

    ngOnInit() {
        this.top20Store.loadFilms()
    }
}
