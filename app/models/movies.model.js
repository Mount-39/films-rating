"use strict";
var MoviesModel = (function () {
    function MoviesModel(title, year, releaseDate, directors, countries, genres, urlPoster, idIMDB, rating, ranking) {
        if (title === void 0) { title = ""; }
        if (year === void 0) { year = null; }
        if (releaseDate === void 0) { releaseDate = null; }
        if (directors === void 0) { directors = []; }
        if (countries === void 0) { countries = []; }
        if (genres === void 0) { genres = []; }
        if (urlPoster === void 0) { urlPoster = ""; }
        if (idIMDB === void 0) { idIMDB = ""; }
        if (rating === void 0) { rating = ""; }
        if (ranking === void 0) { ranking = null; }
        this.title = title;
        this.year = year;
        this.releaseDate = releaseDate;
        this.directors = directors;
        this.countries = countries;
        this.genres = genres;
        this.urlPoster = urlPoster;
        this.idIMDB = idIMDB;
        this.rating = rating;
        this.ranking = ranking;
    }
    return MoviesModel;
}());
exports.MoviesModel = MoviesModel;
//# sourceMappingURL=movies.model.js.map