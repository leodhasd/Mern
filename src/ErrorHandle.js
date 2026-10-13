import React from 'react'
import { useState } from 'react'
import './ErrorHandle.css'
import image from './Assert/IMAGE.jpeg';

function ErrorHandle( data) {

    console.log(data);

    
    const [value,setValue]= useState({
        name:"",
        fathername:"",
        email:"",
        number:"",
        address:"",
        hometown:"",
        district:"",
        referredby:""



    })

    const[error,setError]=useState(
        {
            nameError:"",
            fathernameError:"",
            emailError:"",
            numberError:"",
            addressError:"",
            hometownError:"",
            districtError:"",
            referredbyError:""
        }
    )
    

    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
        if(error.nameError != ""){
                setError({...error,nameError:""})
        }

    }

    

    function handleSumbit(event){

        event.preventDefault();
        if(value.name=="")
        {
           // console.log("field is Empty");
           setError(
            {
                ...error,
                nameError:"The Field is Required"
            }
           )
        }
        else if(value.name.length<3){
           // alert("NAME SHOULD BE MORE THAN 3 LETTER")
           setError(
            {
                ...error,
                nameError:" MORE THAN 3 LETTER"
            }
           )
        }
       
        
        

    }
  return (
    <>
    <div style={{backgroundImage:`url(${image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
    <div className='back1'>
        <div className='display'>
          <div>
            <h3 className='learn'> LEARN & DISCOVER </h3>
            </div>
            <div className='form'>
            <form className='detail'onSubmit={handleSumbit}>
            <input type="text" placeholder='Enter your name' name="name" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.nameError}</span>
            <input type="text" placeholder='Enter your father name' name="fathername" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.fathernameError}</span>
            <input type="email" placeholder='Enter email'name="email" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.emailError}</span>
            <input type="number" placeholder='Enter number'name="number" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.numberError}</span>
            <input type="text" placeholder='Enter Address'name="address" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.addressError}</span>
            <input type="text" placeholder='Enter Home 'name="hometown" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.hometownError}</span>
            <input type="text" placeholder='Enter Districk'name="district" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.districtError}</span>
            <input type="text" placeholder='Enter detail'name="referredby" onChange={change}/><br/><br/>
            <span style={{color:'red'}}>{error.referredbyError}</span>
            <button className='mit'type='submit'> SUBMIT </button>
            <h4 className='one'>One or more fields have an error. Please check and try again.</h4>
            </form>
            </div>
        </div>
    
    
    </div>
    </div>
    </>

  )
}

export default ErrorHandle