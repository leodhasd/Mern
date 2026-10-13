import {useState,React} from 'react';

function Header(){
    const[status,setStatus]=useState("offline")

    const Ctime = new Date().toLocaleTimeString();
    if(Ctime>="16:05:00" && status!="gray"){
           console.log("offline");
           setStatus("gray")

    }
    return(
        <>
        <div style={{width:"100%" ,height:"100vh",backgroundColor:status}}>
        Header 
        {Ctime}
        {status}
        <button disabled={status=="gray"?true:false}>test</button>
        </div>
        </>
    )
}

export default Header;