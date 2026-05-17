import { createBrowserRouter,Navigate } from "react-router-dom";
import Main from '../pages/main';
import Home from '../pages/home';
import Mall from "../pages/mall";
import User from "../pages/user";
import PageOne from "../pages/other/pageOne";
import PageTwo from "../pages/other/pageTwo";

const routes = createBrowserRouter([
    {
        path:"/",
        Component:Main,
        children:[
            //访问/management-platform重定向/management-platform/home
            {
                path:"/",
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
            {
                path:'other',
                children:[
                    {
                        path:'pageOne',
                        Component:PageOne
                    },
                    {
                        path:"pageTwo",
                        Component:PageTwo
                    }
                ]
            }
        ]
    }
],{basename:"/management-platform"});
export default routes;