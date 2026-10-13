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
import axios from 'axios';
import Layout from './Layout';

import About_task from './Test/About_task';
import Contect_task from './Test/Contect_task';
import Accordion_task from './Test/Accordion_task';
import Projects_task from './Test/Projects_task';
import Skills_task from './Test/Skills_task';
import Login_task from './Test/Login_task';
import Test2 from './Test2';

function App() {
// const [data, setData] = useState([]);

// useEffect(() => {
//     axios.get('https://dummyjson.com/c/05dc-f8fa-46cc-9339')
//         .then((res) => {
//             setData(res.data);
//         })
// }, []);

return (
    <div className="App">
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
           <Test2/>
           {/*Rahul Siva sis*/}
 </div>
 );

}

  export default App;