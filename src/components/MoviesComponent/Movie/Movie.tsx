import {IMovie} from "../../../interface/MovieInterface";
import {FC} from "react";


interface IProps{
    movie: IMovie;
}
interface IText{
    title: string
}
const Movie: FC<IProps> = ({movie}) => {
    console.log(movie);
    return (
        <div>
            <div>{movie.title}</div>

        </div>
    );
};

export {Movie};