import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home"
import Services from "../pages/Service/Services";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import AddServices from "../pages/AddServices/AddServices";
import UpdateService from "../pages/UpdateService/UpdateService";
import MyServices from "../pages/MyServices/MyServices";
import MySchedules from "../pages/MySchedules/MySchedules";
import SingleService from "../pages/SingleService/SingleService";
import PrivateRouter from "./PrivateRouter";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/add-services",
            element: <PrivateRouter><AddServices /></PrivateRouter>
        },
        {
            path: "/update-service/:id",
            element: <UpdateService />
        },
        {
            path:"/my-services",
            element: <PrivateRouter><MyServices /></PrivateRouter>
        },
        {
            path: "/my-schedules",
            element: <PrivateRouter><MySchedules /></PrivateRouter>
        },
        {
            path: "/single-service/:id",
            element: <PrivateRouter><SingleService /></PrivateRouter>
        }
    ],
  },
]);

export default route;
