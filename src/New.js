import React,{ useState } from "react";



function New(){
const[roll,setRoll]=useState(1);
      return(
        <>
          {roll*3}
        </>
      )
}


export default New