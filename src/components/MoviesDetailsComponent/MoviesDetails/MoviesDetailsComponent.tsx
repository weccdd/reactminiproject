import React, {FC, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Badge} from "@mui/material";

import css from "./MoviesDetails.module.css"
import Rating from "../../../ui-kit/Rating/Rating";
import {IInfo} from "../../../interface";


interface IProps{
    infoMovie: IInfo
}
const MoviesDetailsComponent: FC<IProps> = ({infoMovie}) => {
    const {
        poster_path,
        genres ,
        original_title,
        overview,
        vote_average,
        release_date,
        runtime
    } = infoMovie;
    return (
        <div className={css.Movie_details}>
            <div className={css.Movie_details_img_block} >
                {poster_path ?
                <img src={`http://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} className={css.Movie_details_img} />:
                <img src={`http://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`} alt={original_title} className={css.Movie_details_img} />
            }

            </div>
            <div className={css.Movie_all_info}>
                <div className={css.Movie_details_text}>
                    <h1 className={css.MovieTextDetails}>{original_title}</h1>
                    <p>Run Time: {runtime} min</p>
                    <p className={css.MovieTextDetails}>Date Release: {release_date}</p>
                    <p className={css.MovieTextDetails}>{overview}</p>
                </div>
                {/*<div className={css.Movie_details_genre}>*/}
                {/*    {genres.map((genre: IInfoGenres) => (*/}
                {/*        <p key={genre.id} className={css.MovieTextDetails}>{genre.name}</p>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <Box sx={{ color: 'action.active' }}>
                    <Badge color="secondary" variant="dot">
                        <div className={css.text}>{genres.map((genre, index) => <p className={css.Genre}>{genre.name}</p>)}</div>
                    </Badge>
                </Box>

                <div className={css.Movie_details_rating}>

                    <Rating size={30} vote_average={vote_average}/>
                    <div className={css.Movie_details_rating_value}>{vote_average}</div>
                </div>

            </div>
        </div>
    );
};

export {MoviesDetailsComponent};