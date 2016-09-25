import {Component, OnInit} from '@angular/core';
import {DataStorage} from "../../services/dataStorage.service";
import {List} from 'immutable';
import {MoviesModel} from "../../models/movies.model";

@Component({
    selector: 'top-20',
    template: `
<div>
    <spinner *ngIf="films.size === 0"></spinner>
    
    <div class="center posters animated zoomIn">
        <poster *ngFor="let film of films" [isActive]="favorites.includes(film.idIMDB)" 
        [movie]="film" (addFavorite)="favorite($event)"></poster>
    </div>
</div>
`
})
export class Top20 implements OnInit {
    private films: List<MoviesModel>;
    private favorites: string[];
    private filmsSubscriber: any;
    private favoriteSubscriber: any;

    constructor(private store: DataStorage) {
        this.filmsSubscriber = store.films.subscribe((films: List<MoviesModel>) => {
            this.films = films;
        });

        this.favoriteSubscriber = store.favorites.subscribe((ids: string[]) => {
            this.favorites = ids;
        });
    }

    ngOnInit() {
        if (this.films.size === 0)
            this.store.loadFilms()
    }

    ngOnDestroy() {
        this.filmsSubscriber.unsubscribe();
        this.favoriteSubscriber.unsubscribe();
    }

    private favorite(id: string): void {
        this.store.favorites = id;
    }

}
