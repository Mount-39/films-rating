import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MoviesModel} from "../../../models/movies.model";

@Component({
    selector: 'poster',
    styleUrls: ['app/components/dummy/poster/poster.css'],
    template: `
<div>
    <img [src]="movie?.urlPoster || 'app/assets/img/poster.jpg'" [alt]="movie?.title"/>
    <div class="movieinfo">
        <span class="favorite" [class.active]="false" (click)="favorite(movie)"></span>
        <h3>{{movie?.title}}</h3>
        <p>year: {{movie?.year}}</p>
        <p>rating: {{movie?.rating}}</p>
        <p>genre: 
            <span *ngFor="let genre of movie?.genres">
            {{genre}}</span>
        </p>
         <p>country: 
            <span *ngFor="let country of movie?.countries">
            {{country}}</span>
        </p>
         <p>director: 
            <span *ngFor="let director of movie?.directors">
            {{director.name}}</span>
        </p>
        <!--<p>With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony...</p>-->
        <a title="movie?.title" >More info</a>
    </div>
</div>
`
})
export class Poster{
    @Input() movie:MoviesModel;
    @Output() addFavorite: EventEmitter<any> = new EventEmitter();

    private favorite(movie:MoviesModel):void {
        this.addFavorite.emit(movie);
    }
}


