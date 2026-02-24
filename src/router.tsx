import { createBrowserRouter } from "react-router-dom";
import Layout from "./ui/layout/layout";
import Home from "./ui/views/home";


export const Router = createBrowserRouter([
    {
        element: <Layout/>, 
        children :[
            {
                index: true,
                element: <Home/>,
            }
        ]
    }
])