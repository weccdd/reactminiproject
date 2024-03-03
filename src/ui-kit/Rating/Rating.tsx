import ReactStars from "react-rating-stars-component";
import React, {FC} from "react";
import css from './Rating.module.css'

interface IRatingProps {
    activeColor?: string;
    count?: number;
    size?: number;
    value?: number; // Замінено vote_average на value
    edit?: boolean;
    vote_average?:number;
}

const Rating: FC<IRatingProps> = ({activeColor,count,size,value,edit,vote_average}) => {
    const maxRating = 10;
    const minRating = 0;
    const starCount = 5;

    const normalizedRating = (vote_average - minRating) / (maxRating - minRating) * starCount;
    return (
        <div className={css.Rating}>
            <ReactStars
                count={starCount}
                size={size}
                value={normalizedRating}
                edit={false}
                activeColor={activeColor}
                isHalf={true}
            />
        </div>
    );
};

export default Rating;