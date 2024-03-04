import React, {useEffect, useState} from "react";
import { useSearchParams} from "react-router-dom";

import css from './Movies.module.css'
import {IMovie} from "../../interface";
import {movieService} from "../../service";
import {Movies} from "../../components/MoviesComponent/Movies";





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
            <div>{movies && <Movies movies={movies} setQuery={setQuery} page={page}/>}</div>
        </div>
    );
};

export {MoviesPage};