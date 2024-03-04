import {apiService} from "./apiService";
import {IRes} from "../type";
import {IData} from "../interface";
import {urls} from "../constants";




const searchService={
    getBySearch:(query:string, page:string):IRes<IData>=>apiService.get(urls.search, {params:{query, page}})
}
export {searchService}