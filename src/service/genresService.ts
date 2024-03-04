import {apiService} from "./apiService";
import {urls} from "../constants";



const genresService = {
    getAll: () => apiService.get(urls.genre.base),
    getMoviesGenre:(with_genres: string, page:string = '1') => apiService.get(urls.genre.searchGenre, {params:{with_genres, page}})
}




export{
   genresService
}
