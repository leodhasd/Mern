import React, { useState } from 'react'

function Acco2() {
    const[val,setVal]=useState(null)

    const acco=[
    {id :1, title : "Accordion 1", para :"Paragraph1"},
    {id :2, title : "Accordion 2", para :"Paragraph2"}
    ]

    function handle(id){
        setVal(val===null ? id : null)
    }
  return (
    <>
    {
        acco.map((i)=>{
            return(
            <>
            <p onClick={()=>handle(i.id)}>{i.title}</p>
            {val===i.id?<p>{i.para}</p>:" "}
            </>
            )
        })
    }
      
    </>
  )
}

export default Acco2
