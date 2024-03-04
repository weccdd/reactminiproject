import {apiService} from "./apiService";
import {IRes} from "../type";
import {IData} from "../interface";
import {urls} from "../constants";


const movieService = {
    getAll: (page:string = '1'): IRes<IData> => apiService.get(urls.movies, { params: { page } }),
    getById: (id:number) => apiService.get(urls.info.byId(id)),
}








export{
    movieService
}