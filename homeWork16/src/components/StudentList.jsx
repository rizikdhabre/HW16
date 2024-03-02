import React from "react";

const StudentList = ({ students }) => {
  return (
    <table className="students-table">
      <thead className="table-Head">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.major}</td>
            <td>{user.university}</td>
            <td>{user.averageGrade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
