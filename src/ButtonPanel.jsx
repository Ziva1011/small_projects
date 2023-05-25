import React from 'react'
import {useState} from "react"
import {Button} from "./Button"

export function ButtonPanel({setTotal,total}) {

    const [digits, setDigits] = useState([]);
    const [operation, setOperation] = useState("");

    const setClear=()=>{
      setTotal(0)
      setDigits([])
    }

    const onAdd=()=>{
      setOperation("+")
    }

    const onSubtraction=()=>{
      setOperation("-")
    }

    const onEqual=()=>{
      console.log(digits)
      let sum=total
      if (digits.length!=1){
        sum=0
      }
      if(operation=="+"){
        if (digits.length!=1){
          sum=0
        }
        digits.map(digit=>{
          sum+=digit
        })
      }
      else if (operation =="-"){
        if (digits.length!=1){
        digits.map(digit=>{
          sum-=digit
        })
      }
      setTotal(sum)
      setDigits([])
      setOperation("")
    }

    const setNumber=(number)=>{
      setDigits(currentDigits=>{
        return [...currentDigits, Number(number)]})
    }

    return (
    <div >
      <div className="button-row" >
        <Button name="7" onClick={setNumber}></Button>
        <Button name="8" onClick={setNumber}></Button>
        <Button name="9" onClick={setNumber}></Button>
        <Button name="AC" onClick={setClear}></Button>

      </div>
      <div className="button-row">
        <Button name="4" onClick={setNumber}></Button>
        <Button name="5" onClick={setNumber}></Button>
        <Button name="6" onClick={setNumber}></Button>
        <Button name="+" onClick={onAdd}></Button>

      </div>
      <div className="button-row">
        <Button name="1" onClick={setNumber}></Button>
        <Button name="2" onClick={setNumber}></Button>
        <Button name="3" onClick={setNumber}></Button>
        <Button name="-" onClick={onSubtraction}></Button>

      </div>
      <div className="button-row">
        <Button name="0" onClick={setNumber}></Button>
        <Button name="=" onClick={onEqual}></Button>
      </div>
    </div>
    )
}

