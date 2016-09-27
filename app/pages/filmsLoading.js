"use strict";
var FilmsLoading = (function () {
    function FilmsLoading(store) {
        var _this = this;
        this.store = store;
        this.modal = true;
        this.filmsSubscriber = store.films.subscribe(function (films) {
            _this.films = films;
        });
        this.favoriteSubscriber = store.favorites.subscribe(function (ids) {
            _this.favorites = ids;
        });
    }
    FilmsLoading.prototype.ngOnDestroy = function () {
        this.filmsSubscriber.unsubscribe();
        this.favoriteSubscriber.unsubscribe();
    };
    FilmsLoading.prototype.favorite = function (id) {
        this.store.favorites = id;
    };
    FilmsLoading.prototype.openModal = function (trailers) {
        this.trailers = trailers;
        this.modal = false;
    };
    return FilmsLoading;
}());
exports.FilmsLoading = FilmsLoading;
//# sourceMappingURL=filmsLoading.js.map