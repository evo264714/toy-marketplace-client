import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;