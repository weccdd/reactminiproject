import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {urls} from "./constants/urls";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetails} from "./pages/DetailMoviePage/MovieDetails";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={'/movies'}/>},
            {path: `/movies`, element:<MoviesPage/>},
            {path: `/info:id`, element:<MovieDetails/>}
        ]},

])







export {
    router
}