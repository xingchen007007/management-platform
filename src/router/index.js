import { createBrowserRouter,Navigate } from "react-router-dom";
import Main from '../pages/main';
import Home from '../pages/home';
import Mall from "../pages/mall";
import User from "../pages/user";

const routes = createBrowserRouter([
    {
        path:"/management-platform",
        Component:Main,
        children:[
            //访问/management-platform重定向/management-platform/home
            {
                path:"/management-platform",
                element:<Navigate to='home' replace/>
            },
            {
                path:'home',
                Component:Home
            },
            {
                path:'mall',
                Component:Mall
            },
            {
                path:'user',
                Component:User
            },
            // {
            //     path:'other',
            //     Component:Home
            // }
        ]
    }
]);
export default routes;