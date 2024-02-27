import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {urls} from "./constants/urls";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={`${urls.movies}`}/>},
            {path: `${urls.movies}`, element:<MoviesPage/>}
        ]},

])







export {
    router
}