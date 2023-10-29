import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UserLayout from "../Layout/UserLayout";
import Error from '../pages/Error/Error'

import Home from '../pages/home/Home'
import Services from "../components/Services/Services";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Orders from "../pages/Orders/Orders";
import OrdersReview from "../pages/OrdersReview/OrdersReview"
import ManageInventory from "../pages/ManageInventory/ManageInventory"
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/services'),
                // errorElement: <Error></Error>,
            },
            {
                path: "/about",
                element: <About></About>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services",
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
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
                path: "/cart",
                // loader: ({params}) => fetch(`http://localhost:5000/services/${params}`),
                element: <Cart></Cart>,
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