import { Routes, RouterModule } from '@angular/router';
import {Top20} from "./pages/top20/top20.page";
import {ByDecade} from "./pages/byDecade/byDecade.page";
import {Favorite} from "./pages/favorite/favorite.page";

export const routes: Routes = [
    { path: '', component: Top20},
    { path: 'top20', component: Top20},
    { path: 'by-decade', component: ByDecade},
    { path: 'favorite', component: Favorite},
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
