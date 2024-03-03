export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_data: number;
    title:string;
    video:boolean;
    vote_average:  number;
    vote_count:number;
}
export interface IData {
    page: number;
    results: IMovie[];
    total_pages: IAllPage;
    total_result: number;
}
export interface IId{
    id:string
}
export interface IInfo{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: boolean;
    budget: number;
    genres: IInfoGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title:string;
    overview:string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompanies[];
    production_countries: IProductionCountries;
    release_date:string;
    revenue:number;
    runtime:number;
    spoken_languages: ISpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IGenres{
    genres: IInfoGenres[]
}
export interface IInfoGenres{
    id: number;
    name:string;
}
export interface IProductionCompanies{
    id: number;
    logo_path:string;
    name:string;
    origin_country:string;
}
export interface IProductionCountries{
    iso_3166_1: string;
    name: string;
}
export interface ISpokenLanguages{
    english_name: string;
    iso_639_1?: string;
    name: string;
}
export interface IGenreIds{
    id:number
}
export interface IAllPage{
    total_pages:number;
}
export interface ISearchWord{
    word: any
}
