import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

const Root = () => (
    <div className="bg-dark text-white w-full min-h-full">
        <Navbar />
        <Outlet/>
    </div>
)

export default Root
