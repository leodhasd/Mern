import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Getdata = () => {

    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/wheather")
        .then((res)=>{setData(res.data)})
    },[])

  return (
    <>
    <table>
        <thead>
            <tr>
                <b>
                <td>Name</td>
                <td>City</td>
                {/* <td>Id</td> */}
                </b>
            </tr>
        </thead>
    </table>
    <div>
      {
        data.map((i)=>{
            return(
                <>
                   <tbody>
                    <td>{i.name}</td>
                    <td>{i.city}</td>
                    {/* <td>{i.id}</td> */}
                   </tbody>
                </>
            )

        })
      }
    </div>
    </>
  )
}

export default Getdata
