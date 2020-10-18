import React, { useContext } from 'react'
import AuthService from "../services/authService"
import { AuthContext } from "../context/authContext"

const Account = () => {

    const { setIsAuthenticated, setUser, user } = useContext(AuthContext)

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success) {
                setUser(data.user)
                setIsAuthenticated(false)
            }
        })
    }

    return (
        <div className="account-wrapper">
            <div className="content-wrapper">
                <div className="greeting">
                    <div className="logout" onClick={onClickLogoutHandler}>Logout</div>
                    <h3>My account</h3>
                    <div className="welcome">{`Welcome back, ${user.username} `}</div>
                </div>
            </div>
            <div className="orders-addresses-wrapper">
                <div className="orders">
                    <div className="header">My orders</div>
                    <div className="subheader">You haven't placed any orders yet</div>
                </div>
                <div className="addresses for-space">
                    <div className="header ">My addresses</div>
                    <div className="subheader">No addresses are currently saved</div>
                    <button>Manage addresses</button>
                </div>
            </div>
        </div>
    )
}

export default Account