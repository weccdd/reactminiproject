import React, { FC, useState } from "react";
import { SetURLSearchParams } from "react-router-dom";

import css from './MoviesComponent.module.css';
import { Pagination, Stack} from "@mui/material";
import {IMovie} from "../../../interface";
import {Movie} from "../Movie";


interface IProps {
    movies: IMovie[];
    page: string;
    setQuery: SetURLSearchParams;
}

const Movies: FC<IProps> = ({ movies, setQuery, page }) => {
    const [value, setValue] = useState('');

    const filteredMovies = movies.filter(movie => {
        return movie.original_title.toLowerCase().startsWith(value.toLowerCase())
    });
    const prev = () => {
        setQuery((page) => {
            page.set(`page`, (+page.get(`page`) - 1).toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return page;
        });
    };

    const next = () => {
        setQuery((page) => {
            page.set(`page`, (+page.get(`page`) + 1).toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return page;
        });
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery((page) => {
            page.set(`page`, value.toString());
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return page;
        });
    };

    return (
        <div className={css.Movies_block}>
            <div>
                <div className={css.Movies}>
                    {filteredMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
                <div className={css.Pagination}>
                    <Stack spacing={2}>
                        <Pagination count={500} variant="text" onChange={handleChange}/>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export { Movies };