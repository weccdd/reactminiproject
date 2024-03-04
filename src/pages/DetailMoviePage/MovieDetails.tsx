import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {MoviesDetailsComponent} from "../../components/MoviesDetailsComponent/MoviesDetails/MoviesDetailsComponent";
import {IInfo} from "../../interface";
import {movieService} from "../../service";

interface IProps {
    backdrop_patch: string;
}

const MovieDetails  = () => {
    const [infoMovie, setInfo] = useState<IInfo>(null)
    const {id} = useParams()
    useEffect(()=>{
            movieService.getById(+(id))
                .then(({data}) => setInfo(data))
    },[])
    return (
        <div>
            {infoMovie && <MoviesDetailsComponent infoMovie={infoMovie}/>}
        </div>
    );
};

export {MovieDetails};