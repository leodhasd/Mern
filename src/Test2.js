import React from "react"
import { useState,useEffect} from "react"
import axios from "axios"


function Test2() {
    const[num,setNum]=useState([])


    useEffect(()=>{
        axios.get("https://api.coinpaprika.com/v1/tickers")
        .then((res)=>{setNum(res.num)})
    },[])

    const[the,setThe]=useState(false)

    
function dynamic(){
     setThe(!the)
}


  return (
    <div style={{
            backgroundColor:the?"black":"white",
            color:the?"black":"white",
            height:"100vh"
        }}>
       <button onClick={dynamic}>{the?"Dark":"Light"}</button>
       {
        num.map((i)=>{
            return(
                <>
                <p>{i.id}</p>
                <p>{i.name}</p>
                <p>{i.rank}</p>
                <p>{i.max_supply}</p>
                </>
            )
        })
       }
    

    </div>
    
  )
}

export default Test2
