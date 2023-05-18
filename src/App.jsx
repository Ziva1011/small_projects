
import './App.css';
import {useState} from "react"
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";


function App() {
  const [todos, setTodos] = useState([]);


  const onAdd = (input) =>{
    setTodos(currentTodos =>{
    return [...currentTodos, {id: crypto.randomUUID(), title: input, completed: false}]
    })
}

  const deleteTodo=(id) =>{
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }
  
  return (
    <>
    <div className="App App-header ">
      <div className="p-4 container">
        <h1 className="mt-4">Today's goals</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        <TodoForm onAdd={onAdd}/>
        
      </div>
    </div>
    
    </>
  );
}

export default App;
