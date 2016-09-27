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
    
    <modal [isClose]="modal" [trailers]="trailers"></modal>
    
    <div class="center posters animated zoomIn">
        <poster *ngFor="let film of films" [isActive]="favorites.includes(film.idIMDB)" 
        [movie]="film" (addFavorite)="favorite($event)" 
        (trailers)="openModal($event)"></poster>
    </div>
</div>
`
})
export class Top20 extends FilmsLoading{
    private modal:boolean = true;
    private trailers:any[];

    constructor(private dataStore:DataStorage){
        super(dataStore);
    }

    private openModal(trailers:any[]):void {
        this.trailers = trailers;
        this.modal = false;
    }
}
