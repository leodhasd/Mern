import logo from './logo.svg';
//import './App.css';
import Header from './Header'
import Object from './Object'
import New from './New'
import Project from './Project'
import Task1 from './Task1'
//import './Project.css'
import Accordian from './Accordian';
import Model from './Model';
import Spread from './Spread';
import Acco2 from './Acco2';
import Shopping from './Shopping';
import ErrorHandle from './ErrorHandle';
import Product from './Product';
import Home from './Home'
import { Routes,Route,Link } from 'react-router-dom';
import Admission from './Admission';
import { useState, useEffect } from 'react';
import Layout from './Layout';

import About_task from './Test/About_task';
import Contect_task from './Test/Contect_task';
import Accordion_task from './Test/Accordion_task';
import Projects_task from './Test/Projects_task';
import Skills_task from './Test/Skills_task';
import Login_task from './Test/Login_task';
import Test2 from './Test2';
import Getdata from './Getdata';
import Test3 from './Test3';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Parent from "./Parent";
import Student from './Student';
import Child from './Child';
import EmployeeCard from './EmployeeCard';
import EmployeeSkills from './EmployeeSkills';
 import axios from "axios";
 import UserList from "./UserList";
 import Rating from '@mui/material/Rating';
 import StudentList from './StudentList'


// function App() {
// const [data, setData] = useState([]);
// useEffect(() => {
//     axios.get('https://dummyjson.com/c/05dc-f8fa-46cc-9339')
//         .then((res) => {
//             setData(res.data);
//         })
// }, []);

// return (
    // <div className="App">
{/* //         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route path="about" element={<About_task data={data} />} />
//                 <Route path="contact" element={<Contect_task data={data} />} />
//                 <Route path="accordion" element={<Accordion_task data={data} />} />
//                 <Route path="projects" element={<Projects_task data={data} />} />
//                 <Route path="skills" element={<Skills_task data={data} />} />
//                 <Route path="login" element={<Login_task />} />
//             </Route>
//         </Routes> */}
{/* <div>
    <center>
<TextField id="outlined-basic" label="Outlined" variant="filled" onChange={(e)=>console.log(e.target.value)}/><br/>
<TextField id="filled-basic" label="Filled" variant="filled" /><br/>
<TextField id="standard-basic" label="Standard" variant="filled" />
</center>
</div>
<div style={{margin:'10%' }}>

<Paper elevation='7' style={{padding:"30%"}}>
    <Box sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'gray'
        }} style={{marginLeft:'25%',marginBottom:'30px',borderRadius:'60%'}}>
    <LockIcon style={{fontSize:'50px',marginLeft:'25px',marginBottom:"5%",marginTop:'20%'}}/><br/>
    </Box>
  <TextField id="outlined-basic" variant='outlined' lable='username' type='text' onChange={(e)=>console.log(e.target.value)} helperText='rahul'/><br/>
  <TextField id="filled-basic" variant='outlined' lable='username' type='password' helperText='pradeep'/><br/>
  <Button variant='contained' style={{marginLeft:'60px',marginBottom:'20%'}}>Sign in</Button>
</Paper>
</div> */}






     
  function App() {
  const [data, setData] = useState([]);
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setData(res.data);
        })
}, []);


  

  return (
    <div>
        <StudentList student={data}/>
      
    </div>
  );
}



export default App;