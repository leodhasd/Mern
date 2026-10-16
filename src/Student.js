import Child from "./Child";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


function Student({ student }) {
  return (
    <center>
    <Paper elevation={10} style={{width:'50%'}}>
    <div style={{textAlign:"center"}}>
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>
      <Button variant="contained">Submit</Button>
    </div>
    
    </Paper>
    </center>
  );
}

export default Student;