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
    private films:Array<any>;
    private subscriber:any;

    constructor(private top20Store:Top20Store) {
         this.subscriber = top20Store.films.subscribe((films:Array<any>) => {
            console.log(films);
            this.films = films;
        });
    }

    ngOnInit() {
        if (this.films.length === 0)
            this.top20Store.loadFilms()
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }


}
