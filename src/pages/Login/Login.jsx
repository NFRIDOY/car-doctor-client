import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const { user, setUser, createUser, logIn, googleLogin, logOut } = useContext(AuthContext)

    const navigate = useNavigate()

    const URL = `http://localhost:5000/`

    // get Access Token
    const getToken = () => {
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true})
        .then( res => {
            console.log(res.data)
            if(res.data?.success) {
                console.log("Success ::> True")
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email)
        console.log(password)
        logIn(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                console.log("log In")
                alert("Sign In")
                // jwt
                // fetch('')
                getToken()

                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("log In Faild")
                alert("Sign In Faild")
            });

    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user)
                alert("Google Sign In")
                getToken()
                navigate(location?.state ? location?.state : '/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode)
                alert("Google Sign In Faild")
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 space-y-6">
                                    <button className="btn btn-primary" type='submit'>Log In</button>

                                </div>
                            </form>
                            <div >
                                <button className="btn btn-success w-full" onClick={handleGoogle}>Google</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
