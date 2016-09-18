import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";

import {Btn} from "../components/dummy/btn/button";
import {Top20} from "./top20/top20.page";
import {Favorite} from "./favorite/favorite.page";
import {ByDecade} from "./byDecade/byDecade.page";
import {Poster} from "../components/dummy/poster/poster";


@NgModule({
    imports:      [ CommonModule, FormsModule, HttpModule, JsonpModule,],
    declarations: [ Btn, Top20, Favorite, ByDecade, Poster ],
    exports:      [ CommonModule, FormsModule, Btn, Top20, Favorite,
        ByDecade, Poster ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [  ]
        };
    }
}