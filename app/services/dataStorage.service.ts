import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Top20Model} from "../pages/top20/top20.model";
import {List} from "immutable";


interface IDataStorage {
    _films: List<Top20Model>
}

@Injectable()
export class DataStorage implements IDataStorage {
    _films = List([]);

    public set films(collection:any) {
        this._films = List(collection);
    }

}