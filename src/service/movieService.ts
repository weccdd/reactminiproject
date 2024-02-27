import {IData, IMovie} from "../interface/MovieInterface";
import {IRes} from "../type/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page: string): IRes<IData> => apiService.get(urls.movies, {params:{page}})
}








export{
    movieService
}