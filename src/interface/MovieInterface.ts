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
    total_pages: number;
    total_result: number;

}