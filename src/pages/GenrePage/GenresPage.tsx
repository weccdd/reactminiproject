import React, {useEffect, useState} from "react";
import {IMovie} from "../../interface/MovieInterface";
import {useParams, useSearchParams} from "react-router-dom";
import {genresService} from "../../service/genresService";
import {GenresMovies} from "../../components/GenersComponent/Genres/GenresMovies";
import css from './GenresPage.module.css'
import {Pagination, Stack} from "@mui/material";

const GenresPage = () => {
    const [genresMovies, setGenresMovies]= useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({with_genres: null})
    const [queryPage, setQueryPage] = useSearchParams({page: `1`})

    const withGenres = query.get('with_genres');
    const page = queryPage.get('page');

    const {id} = useParams()

    useEffect(() => {
        setQuery({with_genres: id, page: page});
    }, [id]);

    useEffect(()=>{
        genresService.getMoviesGenre((id), page)
            .then(({data}) => setGenresMovies(data.results))
    },[id ,  page])
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery((page) => {
            page.set(`page`, value.toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return page;
        });
    };
    return (
        <div className={css.MoviesPage}>
            {genresMovies.map(genreMovie => <GenresMovies key={genreMovie.id} genreMovie={genreMovie}/>)}
            <div className={css.Pagination}>
                <Stack spacing={2}>
                    <Pagination count={500} variant="text" defaultPage={1} siblingCount={0} boundaryCount={2} onChange={handleChange}/>
                </Stack>
            </div>
        </div>
    );
};

export {GenresPage};