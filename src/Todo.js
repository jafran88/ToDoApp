import React from 'react'

export default function Todo({todo, hanldeCompleteClick}) {

    function handleCompleteToggle()
    {
        hanldeCompleteClick(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleCompleteToggle}/>
                {todo.task}
            </label>
        </div>
    )  
}