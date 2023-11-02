import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    function googleLogin() {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
                console.log(uid)
                console.log(user)
                setUser(user)
                setLoading(false)
            } else {
                // User is signed out
                // ...
            }
        })

        return () => {
            unsubscribe()
        }
    }, [user])



    const info = { user, setUser, createUser, logIn, googleLogin, logOut, loading }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
