

export default function UserDropDown({user, handlelogOut}) {
    return (
        <div className="dropdown dropdown-end">
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
    )
}
