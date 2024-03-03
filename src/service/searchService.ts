import {apiService} from "./apiService";
import {IData} from "../interface/MovieInterface";
import {urls} from "../constants/urls";
import {IRes} from "../type/responseType";



const searchService={
    getBySearch:(query:string, page:string):IRes<IData>=>apiService.get(urls.search, {params:{query, page}})
}
export {searchService}