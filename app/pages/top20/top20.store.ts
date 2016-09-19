import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {List} from 'immutable';

import {Top20Model} from "./top20.model";
import {UrlBuilderService} from "../../services/urlBuilder.service";
import {DataStorage} from "../../services/dataStorage.service";

@Injectable()
export class Top20Store {

    private _films: BehaviorSubject<List<Top20Model>> = new BehaviorSubject(List([]));

    constructor (private request: UrlBuilderService
                 // private dataStorage: DataStorage
    ) { }

    public get films() {
        return this._films.asObservable();
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

    private assignData(data:any):Top20Model[] {
       return data.map((film:any) =>
           Object.assign(new Top20Model(), film));
    }

}