
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function StudentCard({ student }) {
  return (
    <div>
      {
        student.map((i)=>{
            return(
                <center>
            <Paper elevation={10} style={{margin:'5%'}}>
                <div>
               
               <h5>Name: {i.name}</h5>
                <h5>UserName: {i.username}</h5>
                <h5>Email: {i.email}</h5>
                </div>
                </Paper>
                </center>
            )
        })
      }
      <div>
        <Paper elevation={8} style={{width:"70%",backgroundColor:'gray',margin:'5%',marginLeft:'15%'}}>
        <form style={{backgroundColor:'lightgray'}}>
            <center>
            <h3>Student Form</h3>
            <input type='text' placeholder="Enter Your Name"/>
            <input type='age' placeholder="Enter Your Age"/><br/>
            <Button variant="contained">Submit</Button>
            </center>
        </form>
        </Paper>
      </div>
    </div>
  );
}

export default StudentCard;