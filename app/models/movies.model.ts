export class MoviesModel{
    constructor(
        public title: string = "",
        public year: number = null,
        public releaseDate: number = null,
        public directors: Array<any> = [],
        public countries: Array<any> = [],
        public genres: Array<any> = [],
        public urlPoster: string = "",
        public idIMDB: string = "",
        public rating: string = "",
        public ranking: number = null
    ){ }
}