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

    public MOCKS_TOP20 ():Observable<any> {
        return this.backend.getMOCKS(URLs.MOCKS_TOP20);
    }

    public DIRECTOR (director:string):Observable<any> {
       return this.backend.get(URLs.DIRECTOR(director))
    }
    public TRAILERS (idIMDB:string):Observable<any> {
       return this.backend.get(URLs.TRAILERS(idIMDB));
    }
}