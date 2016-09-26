"use strict";
var FilmsLoading = (function () {
    function FilmsLoading(store) {
        var _this = this;
        this.store = store;
        this.filmsSubscriber = store.films.subscribe(function (films) {
            _this.films = films;
        });
        this.favoriteSubscriber = store.favorites.subscribe(function (ids) {
            _this.favorites = ids;
        });
    }
    FilmsLoading.prototype.ngOnInit = function () {
        if (this.films.size === 0)
            this.store.loadFilms();
    };
    FilmsLoading.prototype.ngOnDestroy = function () {
        this.filmsSubscriber.unsubscribe();
        this.favoriteSubscriber.unsubscribe();
    };
    FilmsLoading.prototype.favorite = function (id) {
        this.store.favorites = id;
    };
    return FilmsLoading;
}());
exports.FilmsLoading = FilmsLoading;
//# sourceMappingURL=filmsLoading.js.map