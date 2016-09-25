import {Pipe} from '@angular/core';
import {DataStorage} from "../services/dataStorage.service";
import {MoviesModel} from "../models/movies.model";

@Pipe({
    name: "favorite"
})
export class FavoritesPipe {
    constructor(private store:DataStorage) {}

    transform(films:MoviesModel[], args:any[]) {
        return films.filter((film:MoviesModel) =>
            args.includes(film.idIMDB)
        )
    }
}