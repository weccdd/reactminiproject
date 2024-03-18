import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

import css from './SearchForm.module.css'
import {SearchComponent} from "./SearchComponent";
import {ISearchWord} from "../../../interface";




const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()
    const [word, setWord] = useState<string>('A')

    const search: SubmitHandler<any>= (query) => {
        setWord(query.word)
        reset()
    };

    return (
        <div>
           <div>
               <form onSubmit={handleSubmit(search)} className={css.MainForm}>
                   <input  type="text" placeholder={'Movie'} {...register('word')} className={css.Input_form}/>
                   <button className={css.Button_form}>Search</button>
               </form>
           </div>
            <SearchComponent word={word}/>
        </div>
    );
};

export {SearchForm};
