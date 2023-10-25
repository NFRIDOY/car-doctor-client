import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function UserNavbar() {
    return (
        <div>
            <div className="navbar h-fit bg-base-100">
                <div className="flex-1">
                    {/* <a className="btn btn-ghost normal-case text-xl"> */}
                    <img src={logo} className="object-cover" alt="" />
                    {/* </a> */}
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li>
                            <NavLink
                                to="/user/order"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/orderReview"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Order Review
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/manageInventory"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Manage Inventory 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/signup"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        {/* <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
