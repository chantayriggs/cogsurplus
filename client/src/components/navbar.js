import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { StateContext } from "../context/stateContext"
import Logo from "../images/cogsur.png"
import { User, ShoppingBag, Search, Menu } from "react-feather"

const Navbar = () => {

    const { 
        isAuthenticated, 
        user, 
        showCart, 
        setShowCart, 
        showSideMenu, 
        setShowSideMenu 
    } = useContext(StateContext)

    return (
        <div className="navbar">
            <div onClick={ () => setShowSideMenu(!showSideMenu) } className="menu navbar-element">
                <Menu />
            </div>
            <div className="left">
                <div className="navbar-element">
                    Disciplines
                </div>
                <div className="navbar-element">
                    Collections
                </div>
                <div className="navbar-element">
                    Sale
                </div>
            </div>
            <div className="center">
                <Link to="/">
                    <img src={Logo} />
                </Link>
            </div>
            <div className="right">
                {
                    isAuthenticated ? 
                    <div className="for-admin">
                        {
                            user.role === "admin" ?
                            <Link className="navbar-element" to="/admin">
                                Admin
                            </Link> : null
                        }
                        <Link className="navbar-element" to="/account">
                            <User />
                        </Link>
                    </div>
                    :
                    <Link className="navbar-element user" to="/login">
                        <User />
                    </Link>
                }
    
                <div className="navbar-element">
                    <Search />
                </div>
                <div onClick={ () => setShowCart(!showCart)} className="navbar-element">
                    <ShoppingBag />
                </div>
            </div>
        </div>
    )
}

export default Navbar