import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {List} from 'immutable';
import {MoviesModel} from "../models/movies.model";
import {UrlBuilderService} from "./urlBuilder.service";

const FAVORITES = 'favorites';

@Injectable()
export class DataStorage {
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _films: BehaviorSubject<List<MoviesModel>> = new BehaviorSubject(List([]));
    private _favorites: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    private _byDecades: BehaviorSubject<{}> = new BehaviorSubject({});

    constructor(private request: UrlBuilderService) {
        //Init load data
        this.loadFilms();

        //Check localStorage
        const local = localStorage.getItem(FAVORITES);
        if (local) {
            this._favorites.next(List(<List<string>>local.split(',')));
        }

        //Subscribe for update localStorage w
        this._favorites.subscribe((updated: List<string>) => this.favoritsLocalstorage(updated.toArray()))
    }

    public get isLoading() {
        return this._isLoading.asObservable();
    }

    public get byDecades() {
        return this._byDecades.asObservable();
    }

    public get films() {
        return this._films.asObservable();
    }

    public get favorites() {
        return this._favorites.asObservable();
    }

    public set favorites(id: any) {
        let
            index = this._favorites.getValue().indexOf(id);

        index != -1 ?
            this._favorites.next(List(this._favorites.getValue().delete(index))) :
            this._favorites.next(List(<List<string>>(this._favorites.getValue().push(id))));
    }

    public loadFilms(): void {
        this._isLoading.next(true);

        this.request.TOP20()
            .flatMap((data: any) =>
                Observable.if(
                    () => data ? true : false,
                    this.request.MOCKS_TOP20()
                )
            )
            .subscribe(
                (data: any) => {
                    let
                        {data:{movies}} = data,
                        films = this.assignData(movies);

                    this._films.next(List(films));
                    this._byDecades.next(this.parseByDecades(films));
                    this.loadAdditionalData(films);
                },
                err => console.error(err)
            )
    }

    private parseByDecades(data: MoviesModel[]): any {
        return data.reduce((byDecades: any, film: MoviesModel) => {
            let decade = film.year.toString().slice(0, -1) + '0x';
            byDecades[decade] ? byDecades[decade] += 1 : byDecades[decade] = 1;
            return byDecades;
        }, {})
    }

    private loadAdditionalData(data: MoviesModel[]): void {
        Observable.from(data)
            .flatMap(
                (film: MoviesModel) =>
                    this.loadTrailers(film.idIMDB)
                        .map((data: any) => {
                            let {data:{trailer}} = data;
                            film.trailers = trailer || [];
                            return film;
                        })
            )
            .subscribe(
                (res: MoviesModel) => {
                    this._films.next(this.updateFilm(res))
                },
                (err: any) => console.error(err),
                () => this._isLoading.next(false)
            )
    }

    private updateFilm(film: MoviesModel): any {
        const index = this._films.getValue().findIndex(
            (obj: MoviesModel) =>
            obj.idIMDB === film.idIMDB
        );

        return this._films.getValue().update(index, (movie: MoviesModel) => film)
    }

    // private loadDirector(directors:any[]):Observable<any> {
    //     return Observable.forkJoin(
    //         directors.map((director:any) =>
    //             this.request.DIRECTOR(director.name)
    //         ));
    // }

    private loadTrailers(idIMDB: string): Observable<any> {
        return this.request.TRAILERS(idIMDB);
    }

    private assignData(data: any): MoviesModel[] {
        return data.map((film: any) =>
            Object.assign(new MoviesModel(), film));
    }

    private favoritsLocalstorage(items: string[]): void {
        localStorage.setItem(FAVORITES, items.toString());
    }
}