import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UserLayout from "../Layout/UserLayout";

import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'
import Services from "../components/Services/Services";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Orders from "../pages/Orders/Orders";
import OrdersReview from "../pages/OrdersReview/OrdersReview"
import ManageInventory from "../pages/ManageInventory/ManageInventory"
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services'),
                // errorElement: <Error></Error>,
            },
            {
                path: "/about",
                element: <Signup></Signup>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services",
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
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

        ]

    },
    {
        path: '/user',
        element: <UserLayout></UserLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/user/orders",
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Orders></Orders>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/user/ordersReview",
                // loader: () => fetch('http://localhost:5000/services'),
                element: <OrdersReview></OrdersReview>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/user/manageInventory",
                element: <ManageInventory></ManageInventory>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/user/signup",
                element: <Signup></Signup>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/user/login",
                element: <Login></Login>,
                // loader: () => fetch('http://localhost:5000/users'),
                // errorElement: <Error></Error>,
            }

        ]
    },
]);

export default router;