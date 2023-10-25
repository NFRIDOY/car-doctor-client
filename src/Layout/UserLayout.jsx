import { Outlet } from "react-router-dom";
import UserNavbar from "../components/Navbar/UserNavbar";

export default function UserLayout() {
    return (
        <div>
            <UserNavbar></UserNavbar>
            <Outlet></Outlet>
        </div>
    )
}
