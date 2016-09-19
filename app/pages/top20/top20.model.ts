export class Top20Model{
    constructor(
        public title: string = "",
        public year: number = null,
        public urlPoster: string = "",
        public idIMDB: string = "",
        public rating: string = "",
        public ranking: number = null
    ){}
}