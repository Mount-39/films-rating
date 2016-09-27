import {Component, OnInit} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {List} from 'immutable';
import {MoviesModel} from "../../models/movies.model";
import {FilmsLoading} from "../filmsLoading";

@Component({
    selector: 'top-20',
    template: `
<div>
    <spinner *ngIf="films.size === 0"></spinner>
    
    <modal *ngIf="!modal" [trailers]="trailers" (isClose)="modal = $event"></modal>
    
    <div class="center posters animated zoomIn">
        <poster *ngFor="let film of films" [isActive]="favorites.includes(film.idIMDB)" 
        [movie]="film" (addFavorite)="favorite($event)" 
        (trailers)="openModal($event)"></poster>
    </div>
</div>
`
})
export class Top20 extends FilmsLoading{
    constructor(private dataStore:DataStorage){
        super(dataStore);
    }
}
