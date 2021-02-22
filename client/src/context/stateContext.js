import { use } from "passport"
import React, { createContext, useState, useEffect } from "react"
import AuthService from "../services/authService"
import mockProducts from "../mockProducts"

// StateContext gives us provider and consumer, form of global state
export const StateContext = createContext()

// children meaning the components 
export default ({ children }) => {

    // DROPDOWN
    const [showCollectionDropdown, setShowCollectionDropdown] = useState(false)

    // AUTH
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    // PRODUCTS

    const [allProducts, setAllProducts] = useState(null)
    const [collections, setCollections] = useState([])
    const [disciplines, setDisciplines] = useState([])
    const [broadTypes, setBroadTypes] = useState([])

    // CART
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    //SIDE MENU
    const [showSideMenu, setShowSideMenu] = useState(false)

    //  Detail Pages

    const [currentType, setCurrentType] = useState(null)
    const [currentDiscipline, setCurrentDiscipline] = useState(null)
    const [currentSale, setCurrentSale] = useState(null)

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuthenticated(data.isAuthenticated)
            setIsLoaded(true)
        })
        setAllProducts(mockProducts)
        mockProducts.map( product => {
            if (!collections.includes(product.collection)) collections.push(product.collection)
        })
        mockProducts.map( product => {
            if (!broadTypes.includes(product.collection.broadType)) broadTypes.push(product.collection.broadType)
        })
        mockProducts.map( product => {
            if (!disciplines.includes(product.discipline)) disciplines.push(product.discipline)
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
                    setShowCart,
                    showSideMenu,
                    setShowSideMenu,
                    cartItems,
                    setCartItems,
                    total,
                    setTotal,
                    allProducts,
                    setAllProducts,
                    showCollectionDropdown,
                    setShowCollectionDropdown,
                    collections,
                    setCollections,
                    disciplines,
                    setDisciplines,
                    broadTypes,
                    setBroadTypes,
                    currentType,
                    setCurrentType,
                    currentDiscipline,
                    setCurrentDiscipline,
                    currentSale,
                    setCurrentSale

                }}>
                    { children }
                </StateContext.Provider>
            }
        </div>
    )
}