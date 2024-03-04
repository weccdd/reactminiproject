import {useEffect, useState} from "react";
import * as React from "react";

import {IGenres} from "../../../interface";
import {genresService} from "../../../service";
import {Draw} from "../../../ui-kit/Draws";






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