import React from 'react';
import TodoService from "../services/todoService"

const TodoItem = props => {

    return (
        <div>
            <li>{props.todo.name}</li>
            <button onClick={ () => props.handleDelete(props.todo._id)}>Delete</button>
        </div>
    );
};

export default TodoItem;