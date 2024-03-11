import React, { useState } from "react";
import Student from "./Student";
import { UpdateStudent } from "./UpdateStudent";

const StudentList = ({ students , removeStudent , setStudents,isAdmin }) => {
  const [updateState,setUpdateState]=useState(null)
  const updateDetails=(studentId)=>{
    setUpdateState(studentId)
    
}
  return (
    <table  className="table-container">
      {students.length > 0 ? (
        <React.Fragment>
          <thead className="tHead-container">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Major</th>
              <th>University</th>
              <th>Average Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
             ( student && updateState===student.id)? <UpdateStudent key={student.id} student={student} students={students} setStudents={setStudents} setUpdateState={setUpdateState}/> :
              <Student key={student.id} student={student} removeStudent={removeStudent}  updateDetails={updateDetails} isAdmin={isAdmin} />
            ))}
          </tbody>
        </React.Fragment>
      ) : (
        <p>No Student Yet</p>
      )}
    </table>
  );
};

export default StudentList;
