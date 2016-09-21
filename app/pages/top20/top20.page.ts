import {Component, OnInit} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {MoviesModel} from "../../models/movies.model";

@Component({
    selector: 'top-20',
    styleUrls: ['app/pages/top20/top20.css'],
    template: `
<div>
    <div class="posters animated zoomIn">
        <poster *ngFor="let film of films" [movie]="film" (addFavorite)="favorite($event)"></poster>
    </div>
</div>
`
})
export class Top20 implements OnInit{
    private films:any;
    private subscriber:any;

    constructor(private store:DataStorage) {
         this.subscriber = store.films.subscribe((films:any) => {
            console.log("HEY",films);
            this.films = films;
        });
    }

    ngOnInit() {
        if (this.films.size === 0)
            this.store.loadFilms()
    }

    ngOnDestroy(){
        this.subscriber.unsubscribe();
    }

    private favorite(movie:MoviesModel):void {
        this.store.favorites = movie;
    }

}
