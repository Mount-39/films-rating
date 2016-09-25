import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {List} from 'immutable';
import {MoviesModel} from "../models/movies.model";
import {UrlBuilderService} from "./urlBuilder.service";


@Injectable()
export class DataStorage {
    private _isLoading:BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _films: BehaviorSubject<List<MoviesModel>> = new BehaviorSubject(List([]));
    private _favorites: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));

    constructor (private request: UrlBuilderService) { }

    public get isLoading() {
        return this._isLoading.asObservable();
    }

    public get films() {
        return this._films.asObservable();
    }

    public get favorites() {
        return this._favorites.asObservable();
    }

    public set favorites(id:any) {
        let
            index = this._favorites.getValue().indexOf(id);

        index != -1 ?
            this._favorites.next(List(this._favorites.getValue().delete(index))):
            this._favorites.next(List(<List<string>>(this._favorites.getValue().push(id))));
    }

    public loadFilms():void {
        this._isLoading.next(true);

        this.request.TOP20()
            .subscribe(
                (data:any) => {
                    let
                        {data:{movies}} = data,
                        films = this.assignData(movies);
                    this.loadAdditionalData(films);
                    // this._films.next(List(films));
                },
                (err:any) => console.log(err)
            )
    }

    private loadAdditionalData(data:MoviesModel[]):void {
        Observable.from(data)
            .flatMap(
                (film:MoviesModel) =>
                    Observable.forkJoin([
                        // this.loadDirector(film.directors),
                        this.loadTrailers(film.idIMDB)
                    ]).map((data:any) => {
                        // let {data:{actor}} = data[0]
                        // let {data:{trailer}} = data[0]
                        console.log("INSIDE ", data);
                        // film.trailers = trailer;
                        return film;
                    })
            )
            .subscribe(
                (res:any) => {
                    console.log("RES ",res);
                    this._films.next(List(this._films.getValue().push(res)))
                },
                (err:any) => console.error(err),
                (complete:any) => this._isLoading.next(false)
            )
    }

    private loadDirector(directors:any[]):Observable<any> {
        return Observable.forkJoin(
            directors.map((director:any) =>
                this.request.DIRECTOR(director.name)
            ));

    }

    private loadTrailers(idIMDB:string):Observable<any> {
        return this.request.TRAILERS(idIMDB);
    }

    private assignData(data:any):MoviesModel[] {
        return data.map((film:any) =>
            Object.assign(new MoviesModel(), film));
    }

}