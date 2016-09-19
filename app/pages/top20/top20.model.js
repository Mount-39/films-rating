"use strict";
var Top20Model = (function () {
    function Top20Model(title, year, urlPoster, idIMDB, rating, ranking) {
        if (title === void 0) { title = ""; }
        if (year === void 0) { year = null; }
        if (urlPoster === void 0) { urlPoster = ""; }
        if (idIMDB === void 0) { idIMDB = ""; }
        if (rating === void 0) { rating = ""; }
        if (ranking === void 0) { ranking = null; }
        this.title = title;
        this.year = year;
        this.urlPoster = urlPoster;
        this.idIMDB = idIMDB;
        this.rating = rating;
        this.ranking = ranking;
    }
    return Top20Model;
}());
exports.Top20Model = Top20Model;
//# sourceMappingURL=top20.model.js.map