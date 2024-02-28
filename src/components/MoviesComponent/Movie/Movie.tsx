import {IMovie} from "../../../interface/MovieInterface";
import {FC} from "react";
import {baseURL} from "../../../constants/urls";
import {useNavigate} from "react-router-dom";
import css from './Movie.module.css'


interface IProps{
    movie: IMovie;
}
const Movie: FC<IProps> = ({movie:{title, poster_path,original_title,vote_average,id}}) => {

    const url ='http://image.tmdb.org/t/p/w200'
    const urlNotFound ='http://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'

    const navigate = useNavigate()
    const nav = ()=>{
        navigate(`/info/${id}`)
    }
    return (
        <div>
            <div className={css.Movie}>
                <div onClick={nav} className={css.Movie_img_main_block} >
                    <div className={css.Movie_img_block}>{poster_path ?
                        <img src={`http://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} className={css.Movie_img}/>:
                        <img src={`http://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`} alt={original_title} className={css.Movie_img}/>
                    }
                    </div>

                    <div className={css.Shadow_block}>
                        <img src={`https://cdn.icon-icons.com/icons2/1916/PNG/512/play_121777.png`} alt={''} className={css.Play_icon}/>
                    </div>
                </div>
                <h3 className={css.Movie_title} onClick={nav}>{original_title}</h3>

            </div>
        </div>
    );
};

export {Movie};