import { Outlet } from "react-router-dom";
import('preline')

const Main = () => {
    return (
        <div>
            this is main page
            <Outlet />
        </div>
    );
};

export default Main;