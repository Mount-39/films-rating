"use strict";
var URLs = (function () {
    function URLs() {
    }
    Object.defineProperty(URLs, "TOP20", {
        get: function () {
            return 'imdb/top?start=1&end=20&data=1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URLs, "MOCKS_TOP20", {
        get: function () {
            return 'app/config/data.json';
        },
        enumerable: true,
        configurable: true
    });
    URLs.DIRECTOR = function (name) {
        return "imdb/idIMDB?name=" + name + "&language=en-us&filmography=0&exactFilter=0&limit=1&bornDied=0&starSign=0&uniqueName=0&actorActress=0&actorTrivia=0&actorPhotos=0&actorVideos=0&salary=0&spouses=0&tradeMark=0&personalQuotes=0&starMeter=0&fullSize=0";
    };
    URLs.TRAILERS = function (idIMDB) {
        return "trailerAddict/taapi?idIMDB=" + idIMDB + "&featured=&count=8&credit=";
    };
    return URLs;
}());
exports.URLs = URLs;
//# sourceMappingURL=URLs.js.map