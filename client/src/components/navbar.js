import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { StateContext } from "../context/stateContext"
import Logo from "../images/cogsur.png"
import { User, ShoppingBag, Search } from "react-feather"

const Navbar = props => {

    const { isAuthenticated, user, showCart, setShowCart } = useContext(StateContext)

    const unauthenticatedNavbar = () => {
        return(
            <div className="navbar">
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
                    <Link className="navbar-element" to="/login">
                        <User />
                    </Link>
                    <div className="navbar-element">
                        <Search />
                    </div>
                    <div className="navbar-element">
                        <ShoppingBag />
                    </div>
                </div>
            </div>
        )
    }

    const authenticatedNavbar = () => {
        return(
            <div className="navbar">
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
                    <Link className="navbar-element" to="/account">
                        <User />
                    </Link>
                    <div className="navbar-element">
                        <Search />
                    </div>
                    <div onClick={ () => setShowCart(!showCart)} className="navbar-element">
                        <ShoppingBag />
                    </div>
                    {
                    user.role === "admin" ?
                    <Link className="navbar-element" to="/admin">
                        Admin
                    </Link>
                    : null
                    }
                </div>
            </div>
        )
    }




    return (
        <div>
            {
                !isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()
            }
        </div>
    );
};

export default Navbar