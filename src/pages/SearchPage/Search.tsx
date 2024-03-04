import {SearchForm} from "../../components/SearchComponent/SearchContainer";


export interface ISearchWord{
    word:string
}
const SearchPage = () => {


    return (
        <div >
            <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}><SearchForm/></div>
        </div>
    );
};

export {SearchPage};