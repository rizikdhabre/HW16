import React from "react";
import Student from "./Student";

const StudentList = ({ students , removeStudent  , updateStudent}) => {
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
              <Student key={student.id} student={student} removeStudent={removeStudent}  />
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
