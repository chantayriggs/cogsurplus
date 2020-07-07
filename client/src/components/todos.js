import React, { useState, useContext, useEffect } from 'react'
import TodoItem from "./todoItem"
import TodoService from "../services/todoService"
import Message from "../components/message"
import { AuthContext } from "../context/authContext"

const Todos = () => {
    const authContext = useContext(AuthContext)

    const [todo, setTodo] = useState({ name: "" })
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        })
    },[])

    const onChange = event => {
        setTodo({ name: event.target.value })
    }

    const resetForm = () => {
        setTodo({ name: "" })
    }

    const handleDelete = id => {
        TodoService.deleteTodo(id).then(data =>{
            console.log(data)
        })
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        TodoService.postTodo(todo).then(data => {
            const { message } = data
            resetForm()
            if(!message.msgError) {
                TodoService.getTodos().then(getData => {
                    setTodos(getData.todos)
                    setMessage(message)
                })
            }
            else if(message.msgBody === "UnAuthorized") {
                setMessage(message)
                authContext.setUser({ username: "", role: "" })
                authContext.setIsAuthenticated(false)
            }
            else    
                setMessage(message)
        })
    }


    return (
        <div>
            <ul>
                {
                    todos.map( todo => {
                        return <TodoItem key={todo._id} todo={todo} handleDelete={handleDelete} />
                    })
                }
            </ul>
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text" name="todo" value={todo.name} onChange={onChange} placeholder="Please enter todo" />
                <button type="submit">Submit</button>
            </form>
            { message ? <Message message={message} /> : null}
        </div>
    )
}

export default Todos