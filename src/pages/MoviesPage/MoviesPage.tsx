import { useEffect, useState} from "react";
import {movieService} from "../../service/movieService";
import {IMovie} from "../../interface/MovieInterface";
import {useSearchParams} from "react-router-dom";
import {Movies} from "../../components/MoviesComponent/Movies/Movies";
import css from './Movies.module.css'

const MoviesPage = () => {
    const [movies, setMovies]= useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const page = query.get('page')


    useEffect(()=>{
        movieService.getAll(page)
            .then(({data}) => {
                setMovies(data.results)

            })


    }, [page])
    return (
        <div className={css.MoviesPage}>
            <Movies movies={movies} setQuery={setQuery} page={page}/>
        </div>
    );
};

export {MoviesPage};