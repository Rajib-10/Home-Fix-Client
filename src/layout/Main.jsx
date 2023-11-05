import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            
            <div className="mx-auto max-w-7xl">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;