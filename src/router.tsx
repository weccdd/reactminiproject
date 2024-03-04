import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetails} from "./pages/DetailMoviePage/MovieDetails";
import {GenresPage} from "./pages/GenrePage/GenresPage";
import React from "react";
import {SearchPage} from "./pages/SearchPage/Search";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={'/movies'}/>},
            {path: `/movies`, element:<MoviesPage/>},
            {path: `/movie/:id`, element:<MovieDetails/>},
            {path: `/genre/:id`, element: <GenresPage/>},
            {path: '/search', element: <SearchPage/>}
        ]},

])







export {
    router
}