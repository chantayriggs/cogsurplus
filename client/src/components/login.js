import React, { useState, useContext } from 'react'
import AuthService from "../services/authService"
import Message from "../components/message"
import { AuthContext} from "../context/authContext"

const Login = props => {
    const authContext = useContext(AuthContext)

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
                authContext.setUser(user)
                authContext.setIsAuthenticated(isAuthenticated)
                // history comes from Router, pushes to chosen URL
                props.history.push("/todos")
            }
            else setMessage(message)
        })

    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please sign in</h3>

                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={onChange} placeholder="Enter username" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChange} placeholder="Enter password" />

                <button type="submit">Log In</button>
            </form>
            {message ? <Message message={message} /> : null }
        </div>
    )
}

export default Login