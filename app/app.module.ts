import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.router';

import {SharedModule} from './pages/shared.module';
import {AppComponent}  from './app.component';
import {Menu} from "./pages/menu/menu.component";

@NgModule({
    imports: [ BrowserModule, SharedModule.forRoot(),
        routing ],
    declarations: [ AppComponent, Menu ],
    providers: [ appRoutingProviders ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
