import {FC, useEffect, useState} from "react";
import {IMovie} from "../../../interface/MovieInterface";
import {SetURLSearchParams, useParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";
import css from './MoviesComponent.module.css'
import {movieService} from "../../../service/movieService";

interface IProps {
    movies: IMovie[];
    page: string;
    setQuery: SetURLSearchParams;
}

const Movies: FC<IProps> = ({ movies, setQuery, page }) => {
    console.log(movies);
    const Characters = () => {
        const {id}= useParams()
        const [characters, setCharacters] = useState([])
        console.log(characters);

        useEffect(() => {
            movieService.getById(id)
                .then(({data}) => setCharacters(data))
        }, [id])
    return (
        <div className={css.MoviesPage}>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export { Movies };