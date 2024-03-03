import {IData, IId, IInfo} from "../interface/MovieInterface";
import {IRes} from "../type/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page:string = '1'): IRes<IData> => apiService.get(urls.movies, { params: { page } }),
    getById: (id:number) => apiService.get(urls.info.byId(id)),
}








export{
    movieService
}