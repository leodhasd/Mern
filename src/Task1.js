import React from 'react';
import { useState } from 'react';

const Task1=()=>{
const[value,setValue]=useState(false);
const[task,setTask]=useState(0);
const[comtask,setComtask]=useState(0);
const[pndtask,setPndtask]=useState(0);

function pndtasknum(){
    setPndtask(pndtask+1)
}

function comtasknum(){
    setComtask(comtask+1)
}

function tasknum(){
    setTask(task+1)
}


function inc(){
    setValue(!value)
}

    return(
        <>
        <div style={{backgroundColor:value?"black":"white",height:'100vh'}}>
            <h1 style={{color:"gray"}}>Hi,Welcome</h1>
            <span style={{cursor:"pointer"}} onClick={inc}>{value?"☀️":"🌙"}</span>
            
            <input type="text" placeholder='Enter your task'/>
            <button onClick={tasknum}>Add Task</button><br/>
            <button onClick={comtasknum}>Completed Task</button>
            <button onClick={pndtasknum}>Pending Task</button>
            <h1 style={{color:"gray"}}>You have {task} tasks</h1>
            <h1 style={{color:"gray"}}>You have completed {comtask} tasks</h1>
            <h1 style={{color:"gray"}}>You have pending {pndtask} tasks</h1>
        </div>
        </>
    )
}

export default Task1;