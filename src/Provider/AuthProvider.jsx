import { createContext } from "react"

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const info = { test: 10 }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
