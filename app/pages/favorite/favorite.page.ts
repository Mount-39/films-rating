import {Component} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";

@Component({
    selector: 'favorite',
    styleUrls: ['app/pages/favorite/favorite.css'],
    template: `
<div>
    <h1>Favorite movies:</h1>
    
    <div class="center posters  animated fadeIn">
        <poster *ngFor="let film of store.films | async | favorite: favorites" 
        [isActive]="favorites.includes(film.idIMDB)" [movie]="film" (addFavorite)="favorite($event)"></poster>
    </div>
</div>
`
})
export class Favorite {
    private favorites:string[];

    constructor(private store:DataStorage) {
        store.favorites.subscribe(
            (ids:string[]) => this.favorites = ids
        )
    }

    private favorite(id:string):void {
        this.store.favorites = id;
    }
}
