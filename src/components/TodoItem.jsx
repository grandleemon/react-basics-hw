import React from 'react';
import './TodoItem.css'

const TodoItem = ({name, id, completed, deleteTodo, finishTodo}) => {

    return (
        <li className="todo-item">
            <span style={{textDecoration: completed ? "line-through" : "none"}}>{name}</span>
            <div className="todo-item__actions">
                <button onClick={() => finishTodo(id)}>{completed ? "Start" : "Finish"}</button>
                <button onClick={() => deleteTodo(id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;