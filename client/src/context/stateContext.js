import { use } from "passport"
import React, { createContext, useState, useEffect } from "react"
import AuthService from "../services/authService"

// StateContext gives us provider and consumer, form of global state
export const StateContext = createContext()

// children meaning the components 
export default ({ children }) => {
    // AUTH
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    // CART
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuthenticated(data.isAuthenticated)
            setIsLoaded(true)
        })
    }, [])

    return(
        <div>
            { 
                !isLoaded ? 
                <h1>loading...</h1> 
                : 
                <StateContext.Provider value={{ 
                    user, 
                    setUser, 
                    isAuthenticated, 
                    setIsAuthenticated,
                    showCart,
                    setShowCart
                }}>
                    { children }
                </StateContext.Provider>
            }
        </div>
    )
}