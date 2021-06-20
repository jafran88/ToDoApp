import React from 'react'
import "./css/main.css"

export default function Todo({todo, hanldeCompleteClick}) {

    function handleCompleteToggle()
    {
        hanldeCompleteClick(todo.id);
    }

    return (
        <div>
            <label id='todo-label'>
                <input type="checkbox" checked={todo.complete} onChange={handleCompleteToggle}/>
                {todo.task}
            </label>
        </div>
    )  
}