import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  const reset=()=>{
    setColor("white")
  }

  return (
    <>
    <h2 style={{color:color}}>Change background color</h2>
      <div className='border border-black' style={{ width :"500px",height : "500px" , backgroundColor: color}}></div>
      <button type='button' className='btn btn-outline-danger m-2' onClick={()=>setColor("red")}>Red</button>
      <button type='button' className='btn btn-outline-primary m-2' onClick={()=>setColor("blue")}>Blue</button>
      <button type='button' className='btn btn-outline-success m-2' onClick={()=>setColor("green")}>Green</button>
      <button type='button' className='btn btn-outline-warning m-2' onClick={()=>setColor("yellow")}>Yellow</button>
      <button type='button' className='btn btn-outline-dark m-2' onClick={()=>setColor("black")}>Black</button>
      <div>
        <button type='reset' className='btn btn-outline-light m-2' onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
