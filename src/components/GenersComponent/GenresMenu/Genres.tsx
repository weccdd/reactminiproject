import {useEffect, useState} from "react";
import {IGenres} from "../../../interface/MovieInterface";
import {genresService} from "../../../service/genresService";
import {Draw} from "../../../ui-kit/Draws/Draw";
import * as React from "react";




const Genres = () => {
        const [genres, setGenres] = useState<IGenres>(null)
    useEffect(()=>{
            genresService.getAll()
                .then(({data}) => setGenres(data))
        },[])

    return (
        <div>
            {genres && <Draw genre={genres}/>}
        </div>
    );
};

export {Genres};