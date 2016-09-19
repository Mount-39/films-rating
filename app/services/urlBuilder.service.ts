import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BackendService} from "./backend.service";
import {URLs} from "../config/URLs";


@Injectable()
export class UrlBuilderService {

    constructor(private backend:BackendService){}

    public TOP20 ():Observable<any> {
       return this.backend.get(URLs.TOP20);
    }

}