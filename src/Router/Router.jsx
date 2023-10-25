import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'
import Services from "../components/Services/Services";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/", 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/services'),
                // errorElement: <Error></Error>,
            },
            {
                path: "/about",
                element: <div>About</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services",
                loader: ()=> fetch('http://localhost:5000/services'),
                element: <Services></Services>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/blog",
                element: <div>Blog</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/contact",
                element: <div>Contact</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services/:id",
                loader: () => fetch(""),
                element: <div>4</div>,
                // errorElement: <Error></Error>,
            },

        ],

    },
    {
        path: '/user',
        element: <div>user section</div>,
        // errorElement: <Error></Error>,
        childrenL: [
            {
                path: "/", 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/services'),
                // errorElement: <Error></Error>,
            },
            {
                path: "/about",
                element: <div>About</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services",
                loader: ()=> fetch('http://localhost:5000/services'),
                element: <Services></Services>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/about",
                element: <div>About</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services",
                loader: ()=> fetch('http://localhost:5000/services'),
                element: <Services></Services>,
                // errorElement: <Error></Error>,
            },
        ]
    }

]);

export default router;