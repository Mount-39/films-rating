"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var urlBuilder_service_1 = require("../services/urlBuilder.service");
var backend_service_1 = require("../services/backend.service");
var errorHandler_1 = require("../services/errorHandler");
var dataStorage_service_1 = require("../services/dataStorage.service");
var chart_service_1 = require("./byDecade/chart.service");
var favorites_pipe_1 = require("../pipes/favorites.pipe");
var top20_page_1 = require("./top20/top20.page");
var favorite_page_1 = require("./favorite/favorite.page");
var byDecade_page_1 = require("./byDecade/byDecade.page");
var button_1 = require("../components/dummy/btn/button");
var poster_1 = require("../components/dummy/poster/poster");
var spinner_1 = require("../components/dummy/spinner/spinner");
var modal_1 = require("../components/dummy/modal/modal");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [backend_service_1.BackendService, errorHandler_1.ErrorHandler, urlBuilder_service_1.UrlBuilderService, dataStorage_service_1.DataStorage, chart_service_1.ChartBuilder]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [favorites_pipe_1.FavoritesPipe, button_1.Btn, top20_page_1.Top20, favorite_page_1.Favorite, byDecade_page_1.ByDecade, poster_1.Poster, spinner_1.Spinner, modal_1.Modal],
            exports: [favorites_pipe_1.FavoritesPipe, common_1.CommonModule, forms_1.FormsModule, button_1.Btn, top20_page_1.Top20, favorite_page_1.Favorite, byDecade_page_1.ByDecade, poster_1.Poster, spinner_1.Spinner, modal_1.Modal]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map