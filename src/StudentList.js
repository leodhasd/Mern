import React from 'react'
import StudentCard from './StudentCard'
function StudentList({student}) {
  return (
    <div>
        <center>
        <h1>Student List</h1>
        </center>
      <StudentCard student={student}/>
    </div>
  )
}

export default StudentList
