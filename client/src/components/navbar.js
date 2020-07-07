import React, { useContext } from "react"
import { Link } from "react-router-dom"
import AuthService from "../services/authService"
import { AuthContext } from "../context/authContext"

const Navbar = props => {

    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext)

    const unauthenticatedNavbar = () => {
        return(
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/todos">
                    Todos
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    Register
                </Link>
            </div>
        )
    }

    const authenticatedNavbar = () => {
        return(
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/todos">
                    Todos
                </Link>
                {
                    user.role === "admin" ?
                    <Link to="/admin">
                        Admin
                    </Link>
                    : null
                }
                <button onClick={onClickLogoutHandler}>Logout</button>

            </div>
        )
    }

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success) {
                setUser(data.user)
                setIsAuthenticated(false)
            }
        })
    }


    return (
        <div>
            <Link to="/">TayTay</Link>
            {
                !isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()
            }
        </div>
    );
};

export default Navbar