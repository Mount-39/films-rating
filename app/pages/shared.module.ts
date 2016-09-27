import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";

import {UrlBuilderService} from "../services/urlBuilder.service";
import {BackendService} from "../services/backend.service";
import {ErrorHandler} from "../services/errorHandler";
import {DataStorage} from "../services/dataStorage.service";

import {FavoritesPipe} from "../pipes/favorites.pipe";

import {Top20} from "./top20/top20.page";
import {Favorite} from "./favorite/favorite.page";
import {ByDecade} from "./byDecade/byDecade.page";

import {Btn} from "../components/dummy/btn/button";
import {Poster} from "../components/dummy/poster/poster";
import {Spinner} from "../components/dummy/spinner/spinner";
import {Modal} from "../components/dummy/modal/modal";


@NgModule({
    imports:      [ CommonModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ FavoritesPipe, Btn, Top20, Favorite, ByDecade, Poster, Spinner, Modal ],
    exports:      [ FavoritesPipe, CommonModule, FormsModule, Btn, Top20, Favorite, ByDecade, Poster, Spinner, Modal ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ BackendService, ErrorHandler, UrlBuilderService, DataStorage ]
        };
    }
}