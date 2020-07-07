import React, { useState, useRef, useEffect } from 'react'
import AuthService from "../services/authService"
import Message from "../components/message"

const Register = props => {

    const [user, setUser] = useState({username: "", password: "", role: ""})
    const [message, setMessage] = useState(null)

    let timerID = useRef(null)

    useEffect(() => {
        // when u return a function in a useEffect, it works as a componentDidUnmount !
        return () => {
            clearTimeout(timerID)
        }
    }, [])


    const onChange = event => {
        setUser({ ...user, [event.target.name] : event.target.value })
    }

    const onSubmit = event =>{
        event.preventDefault()
        AuthService.register(user).then(data=>{
            const { message } = data
            setMessage(message)
            resetForm()
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login')
                },2000)
            }
        })
    }

    const resetForm = () => {
        setUser({ username: "", password: "", role: "" })
    }


    return (
        <div>
            <form className="register-form" onSubmit={onSubmit}>
                <h3>Please Register</h3>

                <label htmlFor="username">Username:</label>
                <input type="text" value={user.username} name="username" onChange={onChange} placeholder="Enter username" />

                <label htmlFor="password">Password:</label>
                <input type="password" value={user.password}  name="password" onChange={onChange} placeholder="Enter password" />

                <label htmlFor="role">Role:</label>
                <input type="text"  value={user.role} name="role" onChange={onChange} placeholder="Enter Role (admin or user)" />

                <button type="submit">Register</button>
            </form>
            {message ? <Message message={message} /> : null }
        </div>
    )
}

export default Register