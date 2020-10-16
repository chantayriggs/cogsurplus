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
        <div className="form-wrapper">
            <div className="content-wrapper">
                <div className="header">REGISTER</div>
                <div className="subheader">Please fill in the information below:</div>
                <form  onSubmit={onSubmit}>
                    

                    {/* <input type="text" value={user.firstname} name="firstname" onChange={onChange} placeholder="First Name" />
                    <input type="text" value={user.lastname} name="lastname" onChange={onChange} placeholder="Last Name" /> */}
                    <input type="text" value={user.username} name="username" onChange={onChange} placeholder="Email" />

   
                    <input type="password" value={user.password}  name="password" onChange={onChange} placeholder="Enter password" />

   
                    <input type="text"  value={user.role} name="role" onChange={onChange} placeholder="Enter Role (admin or user)" />

                    <button type="submit">CREATE MY ACCOUNT</button>
                </form>
                {message ? <Message message={message} /> : null }
            </div>
        </div>
    )
}

export default Register