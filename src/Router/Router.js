import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Bookings from "../Pages/Bookings";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Packages from "../Pages/Packages";
import Register from "../Pages/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/packages", element: <Packages /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/bookings', element: <Bookings /> },
            { path: "*", element: <h1>404</h1> },
        ]
    },
]);


export default routes;