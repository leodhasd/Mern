import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
          
// useEffect(()=>{
//    document.title="count"
// },[])

// useEffect(()=>{
//     document.title=count
// },[count])

// useEffect(()=>{
//     setCount(42)
// })

function Timeout(){
      setTimeout(()=>{
          console.log("test")
      },3000)
}

function Intervel(){
      setInterval(()=>{
        console.log("inter")
      },1000)
}
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={Timeout}>Time</button>
      <button onClick={Intervel}>Intervel</button>
    </div>
  )
}

export default Counter
