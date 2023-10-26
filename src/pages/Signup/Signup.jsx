import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

export default function Signup() {
    const { user, setUser, createUser, logIn, googleLogin, logOut } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email)
        console.log(password)
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                console.log("Sign Up")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("Sign Up Faild")
            });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <form >
                <input type="text" name="name" id="" />
                <input type="text" name="email" id="" />
                <input type="text" name="password" id="" />
                <input type="submit" name="" id="" className="btn btn-success" />
            </form> */}
        </div>
    )
}
