import {OnInit} from "@angular/core";
import {DataStorage} from "../services/dataStorage.service";
import {MoviesModel} from "../models/movies.model";
import {List} from "immutable";

export class FilmsLoading implements OnInit {
    public films: List<MoviesModel>;
    public favorites: string[];
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

    public favorite(id: string): void {
        this.store.favorites = id;
    }
}
