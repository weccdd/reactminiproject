import { useEffect, useState} from "react";
import {movieService} from "../../service/movieService";
import {IMovie} from "../../interface/MovieInterface";
import {useSearchParams} from "react-router-dom";
import {Movies} from "../../components/MoviesComponent/Movies/Movies";


const MoviesPage = () => {
    const [movies, setMovies]= useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')
    console.log();

    useEffect(()=>{
        movieService.getAll(page)
            .then(({data: {results}}) => {setMovies(results)
            })

    }, [page])
    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} page={page}/>
        </div>
    );
};

export {MoviesPage};