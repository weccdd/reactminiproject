import {Outlet} from "react-router-dom";

import {Header} from "../components/HeaderComponent";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};