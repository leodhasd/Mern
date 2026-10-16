import EmployeeSkills from "./EmployeeSkills";
import Badge from '@mui/material/Badge';

function EmployeeCard({ employee }) {
  return (
  <>
   <br/>
    <Badge badgeContent={99} color="primary">
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
      <EmployeeSkills skills={employee.skills} />
    </div>
    </Badge>
    </>
  );
}

export default EmployeeCard;