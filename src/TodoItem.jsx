import React from 'react'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function TodoItem({todo, toggleTodo, deleteTodo}) {
    return (
       <>
       <li key={todo.id}>
           <div className="checkbox-wrapper">
            <label className="checkbox-wrapper">
                <input checked={todo.completed} onChange={(e)=>toggleTodo(todo.id, e.target.checked)}type="checkbox"/>
                <span className="checkmark"></span>
            {todo.title}
            <button type="button" onClick = {()=> deleteTodo(todo.id)} className="btn btn-danger ms-3"><FontAwesomeIcon icon={faTrash} /></button>

            </label>
            </div>

          </li>
       </>

    )
}


