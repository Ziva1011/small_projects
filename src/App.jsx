
import './App.css';
import {useState, useEffect} from "react"
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";


function App() {
  const [quote,setQuote]= useState("test");
  const [quotes,setQuotes]= useState("test");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function fetchNewQuote(){
    setQuote()
  }
  return (
    <>
    <div className="App App-header ">
      <div className="p-4 container">
        <h1 className="mt-4">Quotes generator</h1>
        <button onClick={()=>fetchNewQuote()}>New quote</button>
        <div>
          <span>"</span>
          {quote}
          <span>"</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
