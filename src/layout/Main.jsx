import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;