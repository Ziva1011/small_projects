import React from 'react'
import {useState} from "react"

export function TodoForm({onAdd}) {
    const [input,setInput]= useState("");

    const onSubmit = (e) =>{
        e.preventDefault()
    
        onAdd(input)
        setInput("")
    }
    
    const onChange = (e)=>{
        setInput(e.target.value)
    }

    return (
    <form className="form-todo p-4" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="item">Next Todo</label>
          <input id="item" type="text" onChange={onChange} value={input}></input>
        </div>
        <button type="button" className="btn btn-info" >Add Todo</button>
      </form>
    )
}

