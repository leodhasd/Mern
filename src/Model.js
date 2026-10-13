import {React,useState} from 'react'
import './Model.css'
function Model() {
const[model,setModel]=useState(false)

  return (
    <>
    <div>
      {model?<div className='om'><span>Ok,are you sure to conmtinue?</span>
      <button onClick={()=>setModel(false)}>Ok</button></div>:""}

      <button onClick={()=>setModel(true)}>Confirm</button>
    </div>
    </>
  )
}

export default Model
