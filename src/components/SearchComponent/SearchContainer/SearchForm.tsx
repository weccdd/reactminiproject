import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { SearchContainer } from "./SearchComponent";
import { ISearchWord } from "../../../interface/MovieInterface";

const SearchForm = () => {
    const { handleSubmit, reset, register } = useForm();
    const [word, setWord] = useState<string>('A');

    // const search: SubmitHandler<ISearchWord> = (data: ISearchWord) => {
    //     setWord(data.word);
    //     reset();
    // };

    function search(data:string) {
        setWord(data.word);
             reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="text" placeholder={'Movie'} {...register('word')} />
                <button>Search</button>
            </form>
            <SearchContainer word={word} />
        </div>
    );
};

export { SearchForm };