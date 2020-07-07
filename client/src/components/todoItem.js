import React, { useState } from 'react';

const TodoItem = props => {

    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState("")

    const handleEdit = () => {
        setShowForm(true)
    }

    const onSubmit = event => {
        event.preventDefault()
        props.handleEditSubmission(props.todo._id, name)
        setShowForm(false)
    }

    const onChange = event => {
        setName({ ...name, [event.target.name] : event.target.value })
    }


    return (
        <div>
            <li>{props.todo.name}</li>
            <button onClick={ () => props.handleDelete(props.todo._id)}>Delete</button>
            <button onClick={ () => handleEdit()}>Edit</button>
            {
                showForm ? 
                <div>
                    

                    <form onSubmit={onSubmit}>
                        <h3>Please edit todo</h3>

                        <input type="text" name="name" onChange={onChange} placeholder="Enter updated todo" />

                        <button type="submit">Submit</button>
                    </form>


                </div> : null
            }
        </div>
    );
};

export default TodoItem;