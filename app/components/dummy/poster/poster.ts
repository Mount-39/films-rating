import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MoviesModel} from "../../../models/movies.model";

@Component({
    selector: 'poster',
    styleUrls: ['app/components/dummy/poster/poster.css'],
    template: `
<div>
    <img [src]="movie?.urlPoster || 'app/assets/img/poster.jpg'" [alt]="movie?.title"/>
    <div class="movieinfo">
        <span class="favorite" [class.active]="isActive" (click)="favorite(movie.idIMDB)"></span>
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
         <div>director: 
            <a *ngFor="let director of movie?.directors" [href]="'http://www.imdb.com/name/' + director.id">
            {{director.name}}</a>
         </div>
        <a class="trailers" *ngIf="movie?.trailers.length">Trailers</a>
    </div>
</div>
`
})
export class Poster{
    @Input() movie:MoviesModel;
    @Input() isActive:boolean;
    @Output() addFavorite: EventEmitter<any> = new EventEmitter();

    private favorite(id:MoviesModel):void {
        this.addFavorite.emit(id);
    }
}


