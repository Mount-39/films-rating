export class API {

    private TOKEN:string = '95ffd438-9f28-44e6-b426-a3044222d5a0';

    constructor(public URL:string = '') {
        this.URL = `http://www.myapifilms.com/${URL}&token=${this.TOKEN}&format=json`;
    }
}