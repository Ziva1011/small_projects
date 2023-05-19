
import './App.css';
import {useState, useEffect} from "react"
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";


function App() {
  const [quote, setQuote]= useState("test");
  const [quotes, setQuotes]= useState("test");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[3]);
      });
  }, []);

  function fetchNewQuote(){
    setQuote(quotes[Math.floor(Math.random() *quotes.length)])
  }
  return (
    <>
    <div className="App App-header ">
      <div className="p-4 container">
        <h1 className="mt-4">Quotes generator</h1>
        <button className="generator-button mt-4" onClick={()=>fetchNewQuote()}>New quote</button>
        <div className="quote mt-4">
          <span>"</span>
          <b>{quote.text}</b>
          <span>"</span>
          
          <p>{quote.author}</p>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
