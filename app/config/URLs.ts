export class URLs {
    public static get TOP20() {
        return 'imdb/top?start=1&end=20&data=1';
    }
    public static get MOCKS_TOP20() {
        return 'app/config/data.json';
    }
    public static DIRECTOR(name:string):string {
        return `imdb/idIMDB?name=${name}&language=en-us&filmography=0&exactFilter=0&limit=1&bornDied=0&starSign=0&uniqueName=0&actorActress=0&actorTrivia=0&actorPhotos=0&actorVideos=0&salary=0&spouses=0&tradeMark=0&personalQuotes=0&starMeter=0&fullSize=0`;
    }
    public static TRAILERS(idIMDB:string):string {
        return `trailerAddict/taapi?idIMDB=${idIMDB}&featured=&count=8&credit=`;
    }
}