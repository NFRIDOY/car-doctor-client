import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    console.log(location.pathname)
    return <Navigate state={location.pathname} to={'/user/login'}></Navigate>
}
