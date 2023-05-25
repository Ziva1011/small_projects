
import './App.css';
import {useState} from "react"
import { Display } from "./Display";
import { ButtonPanel } from "./ButtonPanel";


function App() {
  const [total, setTotal] = useState(2);

  const onClick = (input) =>{
    return console.log("clicked")
  }

  return (
    <>
    <div className="App App-header ">
      <div className="p-4 container">
        <h1 className="mt-4">Calculator</h1>
          <Display total={total}></Display>
          <ButtonPanel total={total} setTotal={setTotal}></ButtonPanel>
      </div>
    </div>
    
    </>
  );
}

export default App;
