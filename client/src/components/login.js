import React, { useState, useContext } from 'react'
import AuthService from "../services/authService"
import { Link } from "react-router-dom"
import Message from "../components/message"
import { StateContext} from "../context/stateContext"

const Login = props => {
    const stateContext = useContext(StateContext)

    const [user, setUser] = useState({username: "", password: ""})
    const [message, setMessage] = useState(null)



    // IF THERE ARE BUGS WITH THIS LATER ON, ADD PREVENT DEFAULT 
    const onChange = event => {
        setUser({ ...user, [event.target.name] : event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data
            if(isAuthenticated) {
                stateContext.setUser(user)
                stateContext.setIsAuthenticated(isAuthenticated)
                // history comes from Router, pushes to chosen URL
                props.history.push("/")
            }
            else setMessage(message)
        })

    }


    return (
        <div className="form-wrapper">
            <div className="content-wrapper">
            <div className="header">LOGIN</div>
            <div className="subheader">Please enter your e-mail and password:</div>
            { message === null ?  null : 
                <div className="errorMessage">{message}</div>
            }
            <form className="login-form" onSubmit={onSubmit}>
                <input id="email" type="text" name="username" onChange={onChange} placeholder="Email" />
                <input type="password" name="password" onChange={onChange} placeholder="Password" />
                <button type="submit">LOGIN</button>
            </form>
            <div className="register-wrapper">
                <div className="account">Don't have an account?</div>
                <Link to="/register">Create one</Link>
            </div>
            {message ? <Message message={message} /> : null }
            </div>
        </div>
    )
}

export default Login