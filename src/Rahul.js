import React from "react";
import { useState } from "react";

const Student = ()=>{
    
    const[theme,setTheme] = useState(false)
    function Toggle(){
        console.log("toggled")
        setTheme(!theme)
    }
    
    const[data,setData] = useState(
    {
     Name : "Rahul",
     Age : 19,
     Course : "CSE"
    })

    function change(event){
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    const[form,setForm] = useState({
        Name : " ",
        Age : 0,
        Course : " "
    })

    function submit(e){
        e.preventDefault()
        setForm({
            ...form,
            Name : data.Name,
            Age  : data.Age,
            Course : data.Course
        })
    }

    return(
        <>
       <h1 style={{backgroundColor:"grey", margin : 0, border : "2px solid"}}>Student Management</h1>
       <div style={{backgroundColor : theme ? "#1F2937" : "white",height: "100vh"}}>
        <span style={{cursor : "pointer", marginLeft : "90%"}} onClick={Toggle}>{theme ? " 🌞 Light" : "🌙 Dark "}</span>
       </div>
       
       {form.Name}
       {form.Age}
       {form.Course}
       <form onSubmit={submit}>
        <input onChange={change} name={"Name"} placeholder ="Enter your Name"></input>
        <input onChange={change} name={"Age"} placeholder = "Enter your Age"></input>
        <input onChange={change} name={"Course"} placeholder ="Enter your Course"></input>
        <button type="submit">Submit</button>
       
       </form>
        </>
    )
}

export default Student