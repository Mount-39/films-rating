import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {API} from "../config/API";
import {ErrorHandler} from "./errorHandler";


@Injectable()
export class BackendService {

    constructor(private http: Http, private error: ErrorHandler) { }

    public get(url: any): Observable<{}> {
        const
            api: API = new API(url);

        return this.http.get(api.URL)
            .cache()
            .map((res:Response) => <Object[]>res.json())
            .flatMap((data:any) => data.error ? this.error.handleError(data) : Observable.of(data))
    }

    public getMOCKS(url:string): Observable<{}> {
        return this.http.get(url)
            .cache()
            .map((res:Response) => <Object[]>res.json())
    }
}