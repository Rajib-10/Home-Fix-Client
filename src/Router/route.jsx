import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home"
import Services from "../pages/Service/Services";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import AddServices from "../pages/AddServices/AddServices";

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
            element: <AddServices />
        }
    ],
  },
]);

export default route;
