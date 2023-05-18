import React from 'react'
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
       <>
       <ul className="list">
          {todos.map(todo =>{
            return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          })}
        </ul>
       </>

    )
}

