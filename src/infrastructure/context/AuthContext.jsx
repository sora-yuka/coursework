import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    loginRequest,
    checkAuthRequest,
    refreshTokenRequest,
} from "@api/auth.api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await checkAuthRequest()

                if (response.status === 401) {
                    const refreshToken = localStorage.getItem("refresh_token")
                    const refreshResponse = await refreshTokenRequest(refreshToken)

                    if (!refreshResponse.ok) {
                        setIsAuthenticated(false)
                        navigate("/login")
                        return
                    }

                    const data = await refreshResponse.json()
                    localStorage.setItem("access_token", data.access)
                    setIsAuthenticated(true)
                } else if (response.ok) {
                    setIsAuthenticated(true)
                } else {
                    throw new Error("Auth failed")
                }
            } catch (err) {
                setIsAuthenticated(false)
                navigate("/login")
            }
        }

        checkAuth()
    }, [navigate])

    async function login(email, password) {
        const response = await loginRequest(email, password)

        if (!response.ok) {
            throw new Error("Invalid credentials")
        }

        const data = await response.json()
        localStorage.setItem("access_token", data.access)
        localStorage.setItem("refresh_token", data.refresh)
        setIsAuthenticated(true)
    }

    function logout() {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        setIsAuthenticated(false)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
