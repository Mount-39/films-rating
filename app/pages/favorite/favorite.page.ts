import {Component} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {MoviesModel} from "../../models/movies.model";

@Component({
    selector: 'favorite',
    styleUrls: ['app/pages/favorite/favorite.css'],
    template: `
<div>
    <h1>Favorite movies:</h1>
    <div class="favorite">
        <poster *ngFor="let film of store.favorites | async" [movie]="film" (click)="favorite(film)"></poster>
    </div>
</div>
`
})
export class Favorite {
    constructor(private store:DataStorage) { }

    private favorite(movie:MoviesModel):void {
        this.store.favorites = movie;
    }
}
