import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import UserDropDown from "../UserDropDown/UserDropDown"

export default function UserNavbar() {
    const { user, setUser, createUser, logIn, googleLogin, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.")
            setUser(null)
            alert("Sign-out successful")
        }).catch((error) => {
            // An error happened.
            console.log("Sign-out Not successful.")
            console.log(error)
        });
    }
    return (
        <div>
            <div className="navbar h-fit bg-base-300">
                <div className="flex-1">
                    {/* <a className="btn btn-ghost normal-case text-xl"> */}
                    <Link to={'/'}>
                        <img src={logo} className="object-cover" alt="" />
                    </Link>
                    {/* </a> */}
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li>
                            <NavLink
                                to="/user/orders"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/ordersReview"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Orders Review
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
                        {/* Login */}


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
                {
                    user && <UserDropDown user={user} handlelogOut={handlelogOut}></UserDropDown>
                }
            </div>
        </div>
    )
}
