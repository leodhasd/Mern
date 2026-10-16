import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Test3 = () => {
     const[data,setData]=useState({})

     const[msg,setMsg]=useState({
      usernameval:"",
      passwordval:""
     });

     useEffect(() => {
       axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
         .then((res) => {
             setData(res.data);
         })
}, []);

    const[error,setError]=useState({
      usernameError:""
    })


function handleSumbit(event){

        event.preventDefault();
        if(data.username=="")
        {
           setError(
            {
                ...error,
                usernameError:"The Field is Required"
            }
           )
        }
      }
      
function validation(event){

        event.preventDefault();
        if(data.username===data.username)
        {
          setMsg({
            ...msg,
            usernameval:"Sucssesful"
            })
            
        }
        else if(data.password===data.password){
          setMsg({
            ...msg,
            passwordval:"Not Success"
          })
        }
      }


  return (
    <div>
    <form onSubmit={{handleSumbit}}>
      <input placeholder='Enter Your Username' type='text'/>
      <span style={{color:'red'}}>{error.usernameError}</span>
      <input placeholder='Enter Your Password' type='password'/>
      <button type='submit'>Submit</button>
      <span onSubmit={validation}>{msg}</span>
    </form>
    
    </div>
  )
}

export default Test3
