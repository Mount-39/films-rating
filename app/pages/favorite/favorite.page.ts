import {Component} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {FilmsLoading} from "../filmsLoading";

@Component({
    selector: 'favorite',
    styleUrls: ['app/pages/favorite/favorite.css'],
    template: `
<div>
    <h1>Favorite movies:</h1>
    <spinner *ngIf="films.size === 0"></spinner>
    <div class="center posters  animated fadeIn">
        <poster *ngFor="let film of store.films | async | favorite: favorites" 
        [isActive]="favorites.includes(film.idIMDB)" [movie]="film" (addFavorite)="favorite($event)"></poster>
    </div>
</div>
`
})
export class Favorite extends FilmsLoading {
    constructor(private dataStore:DataStorage){
        super(dataStore);
    }
}
