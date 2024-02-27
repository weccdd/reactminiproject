import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.MainBlockHeader}>
            <div className={css.LogoBlockHeader}>
                <h1>PROJECT MOVIE</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export {Header};