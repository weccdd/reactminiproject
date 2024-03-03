import css from "./Header.module.css"
import React from "react";

import {Genres} from "../GenersComponent/GenresMenu/Genres";
import {ThemSwicher} from "../../ui-kit/Them/Them";





const Header = () => {
    return (
        <div className={css.Main_Block_header}>
            <div className={css.Block_header}>
                <nav>
                   <Genres/>
                </nav>
                <div className={css.Logo_block_header}>
                    <h1>PROJECT MOVIE</h1>
                </div>
                <div>
                    <span>Them</span>
                    <ThemSwicher/>
                </div>
            </div>
        </div>
    );
};

export {Header};