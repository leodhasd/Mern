import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Getdata = () => {

    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/5492-662f-4043-b804")
        .then((res)=>{setData(res.data)})
    },[])

  return (
    <>
    <table>
        <thead>
            <tr>
                <b>
                <td>Name</td>
                <td>Email</td>
                <td>Id</td>
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
                    <td>{i.email}</td>
                    <td>{i.id}</td>
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
