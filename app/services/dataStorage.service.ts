import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {List} from 'immutable';
import {MoviesModel} from "../models/movies.model";
import {UrlBuilderService} from "./urlBuilder.service";


@Injectable()
export class DataStorage {

    private _films: BehaviorSubject<List<MoviesModel>> = new BehaviorSubject(List([]));
    private _favorites: BehaviorSubject<List<number>> = new BehaviorSubject(List([]));

    constructor (private request: UrlBuilderService) { }

    public get films() {
        return this._films.asObservable();
    }

    public get favorites() {
        return this._favorites.asObservable();
    }

    public set favorites(index:any) {
        let
            index = this._favorites.getValue().find(
                (i:number) => i === index
            );

        index != -1 ?
            this._favorites.next(List(this._favorites.getValue().delete(index))):
            this._favorites.next(List(<List<number>>(this._favorites.getValue().concat(index))));
    }

    public loadFilms():void {
        this.request.TOP20()
            .subscribe(
                (data:any) => {
                    let
                        {data:{movies}} = data,
                        films = this.assignData(movies);
                    this._films.next(List(films));
                },
                (err:any) => console.log(err)
            )
    }

    private assignData(data:any):MoviesModel[] {
        return data.map((film:any) =>
            Object.assign(new MoviesModel(), film));
    }

}