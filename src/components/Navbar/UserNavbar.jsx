import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

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
                        <li>
                            <NavLink
                                to="/user/login"
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
                {
                    user && <div className="dropdown dropdown-end">
                        <label title={user?.email} tabIndex={0} className={user?.emailVerified ? "btn btn-ghost btn-circle avatar " : "avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"}>
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} /> : <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" />

                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" >
                                    {user?.displayName}
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handlelogOut}>Logout</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
