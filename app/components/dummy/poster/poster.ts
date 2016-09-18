import {Component} from '@angular/core';

@Component({
    selector: 'poster',
    styleUrls: ['app/components/dummy/poster/poster.css'],
    template: `
<div>
    <img [src]="'app/assets/img/poster.jpg'" alt="Iron Man 2"/>
    <div class="movieinfo">
        <h3>Iron Man 2</h3>
        <p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony...</p>
        <a title="Iron Man 2">More info</a>
    </div>
</div>
`
})
export class Poster{
}


