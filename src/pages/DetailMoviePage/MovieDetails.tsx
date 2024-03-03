import {useEffect, useState} from "react";
import {movieService} from "../../service/movieService";
import {useParams} from "react-router-dom";
import {IInfo} from "../../interface/MovieInterface";
import {MoviesDetailsComponent} from "../../components/MoviesDetailsComponent/MoviesDetails/MoviesDetailsComponent";

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