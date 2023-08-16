import './App.css';
import {useState} from 'react'


function App() {
  
  const [value, setValue]=useState("")

  const toggle =(event)=>{
    setValue(value.concat(event.target.value))
  }

  const clear = ()=>{
    setValue("")
  }

  const sum = ()=>{
    setValue(eval(value))
  }

  const sum2 = (event)=>{
    setValue(value.slice(0, value.length-1))
  }


  return (
    <div className="clac">

      
      <input type  = "text" placeholder="0" id="answer" value={value}/>
      <input type = "button" value="9" className="btn" onClick={toggle}  />
      <input type = "button" value="8" className="btn" onClick={toggle}/>
      <input type = "button" value="7" className="btn" onClick={toggle}/>
      <input type = "button" value="6" className="btn" onClick={toggle}/>
      <input type = "button" value="5" className="btn" onClick={toggle}/>
      <input type = "button" value="4" className="btn" onClick={toggle}/>
      <input type = "button" value="3" className="btn" onClick={toggle}/>
      <input type = "button" value="2" className="btn" onClick={toggle}/>
      <input type = "button" value="1" className="btn" onClick={toggle}/>
      <input type = "button" value="0" className="btn" onClick={toggle}/>
      <input type = "button" value="+" className="btn" onClick={toggle}/>
      <input type = "button" value="-" className="btn" onClick={toggle}/>
      <input type = "button" value="*" className="btn" onClick={toggle}/>
      <input type = "button" value="/" className="btn" onClick={toggle} />
      <input type = "button" value="%" className="btn" onClick={toggle}/>
      <input type = "button" value="clear" className="btn" onClick={clear} />
      <input type = "button" value="=" className="btn1" onClick={sum}/>
      <input type = "button" value="CE" className="btn1" onClick={sum2}/>

     
         


    
     
    </div>
  );
}

export default App;
