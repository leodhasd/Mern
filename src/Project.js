import { React , useState} from "react";
import './Project.css';

const Project=()=>{
   
    const[value,setValue]=useState({
        name:"Sathish",
        age:20,
        department :"CSE",
        marks : 90
    })

    const[form,setForm]=useState({
        name:"",
        age:0,
        department :"",
        marks : 0
    })

    function change(e){
        setValue({
            ...value,
            [e.target.name]:e.target.value
    })  
    }
    function submit(e){
        e.preventDefault();
        setForm({
            ...form,
            name:value.name,
            age:value.age
    })
    }


    return(
        <div>
        {form.name}
        {form.age}
        <form onSubmit={submit}>
            Name <input onChange={change} name={"name"}></input><br/>
            Dept<input></input><br/>
            Age<input onChange={change} name={"age"}></input><br/>
            <button type="submit">Submit</button>
            
        </form>
        
        </div>
    )
}

export default Project;