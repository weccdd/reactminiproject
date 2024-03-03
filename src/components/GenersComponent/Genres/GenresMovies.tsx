import {IMovie} from "../../../interface/MovieInterface";
import React, {FC} from "react";
import css from './GanresMovies.module.css'
import Rating from "../../../ui-kit/Rating/Rating";
import {useNavigate} from "react-router-dom";


interface IProps {
    genreMovie: IMovie
}
const GenresMovies: FC<IProps> = ({genreMovie}) => {

    const {
        poster_path,
        original_title,
        vote_average,
        id
    } = genreMovie;



    const navigator = useNavigate();
    const nav = () => {
        navigator(`/movie/${id}`)
    }
    return (
        <div>
            <div className={css.Movie_block}>
                <div className={css.Movie}>
                    <div className={css.Movie_img_main_block} onClick={nav}  >
                        <div className={css.Movie_img_block} >{poster_path ?
                            <img src={`http://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} className={css.Movie_img}/>:
                            <img src={`http://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`} alt={original_title} className={css.Movie_img}/>
                        }
                        </div>
                        <div className={css.Shadow_block}>
                            <img src={`https://cdn.icon-icons.com/icons2/1916/PNG/512/play_121777.png`} alt={''} className={css.Play_icon}/>
                        </div>
                    </div>
                    <h3 className={css.Movie_title}>{original_title}</h3>
                    <Rating vote_average={vote_average} size={20} edit={false}/>

                </div>
            </div>
        </div>
    );
};

export { GenresMovies };