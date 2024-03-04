import React from "react";
import {NavLink} from "react-router-dom";

import {Genres} from "../GenersComponent/GenresMenu";
import {ThemSwicher} from "../../ui-kit/Them";
import css from "./Header.module.css"




const Header = () => {
    return (
        <div className={css.Main_block_header}>
            <div className={css.Nav_Header}>
                <div className={css.Genres}><Genres/></div>
                <div className={css.Title} ><NavLink to={`/movies`} className={css.LogoLink}>MOVIE DB</NavLink></div>
                <div className={css.Inst}>
                    <div ><NavLink to={'/search'} className={css.Search}>Search</NavLink></div>
                    <div className={css.Them_block}>
                        <span className={css.Theme}>Theme</span>
                        <div className={css.Switcher}><ThemSwicher/></div>
                    </div>
                    <div >
                        <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user" className={css.Log}/>
                    </div>
                </div>
            </div>
        </div>
    )}


    export {Header};