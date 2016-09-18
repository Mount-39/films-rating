import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    styleUrls: ['app/pages/menu/menu.css'],
    template: `
<div>
    <ul>
        <li routerLink="/top20" routerLinkActive="active">Top 20</li>
        <li routerLink="/by-decade" routerLinkActive="active">Films by decade</li>
        <li routerLink="/favorite" routerLinkActive="active">Favorite</li>
    </ul>
</div>

<ng-content></ng-content>
`
})
export class Menu {
}