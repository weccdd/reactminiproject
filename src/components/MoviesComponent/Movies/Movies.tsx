import {FC} from "react";
import {IMovie} from "../../../interface/MovieInterface";
import {SetURLSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";


interface IProps {
    movies: IMovie[];
    page: string;
    setQuery: SetURLSearchParams;
}

const Movies: FC<IProps> = ({ movies, setQuery, page }) => {
    console.log(movies);
    return (
        <div>
            {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export { Movies };