import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Injectable()
export class ErrorHandler {

    public handleError(serverResponse: any):Observable<{}> {
        let
            errMsg = serverResponse.error ? serverResponse.error : serverResponse,
            returnedMessage:string;

        if(errMsg.code)
            returnedMessage = `Error! Status: ${errMsg.code}. Message: ${errMsg.message || 
            'Something wrong with request to server. Please check url!'}`;
        else
            returnedMessage = `Error : ${errMsg}`;

        console.error(returnedMessage);

        return Observable.of({data:{}});
    }
}