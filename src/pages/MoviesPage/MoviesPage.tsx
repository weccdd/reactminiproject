import {useEffect, useState} from "react";
import {movieService} from "../../service/movieService";
import {IAllPage, IMovie} from "../../interface/MovieInterface";
import { useSearchParams} from "react-router-dom";
import {Movies} from "../../components/MoviesComponent/Movies/Movies";
import css from './Movies.module.css'




const MoviesPage = () => {
    const [movies, setMovies]= useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(()=>{
        movieService.getAll(page)
            .then(({data}) => {
                setMovies(data.results)
            })


    }, [page])

    console.log(movies);
    return (
        <div className={css.MoviesPage}>
            {movies && <Movies movies={movies} setQuery={setQuery} page={page}/>}
        </div>
    );
};

export {MoviesPage};