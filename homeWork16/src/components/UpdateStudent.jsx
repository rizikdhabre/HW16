import React from "react";
import Button from "./Button";

export const UpdateStudent = ({
  student,
  students,
  setStudents,
  setUpdateState,
}) => {
  const handleInput = (e) => {
    const newStudents = students.map((currStudent) => 
      currStudent.id === student.id
        ? {
            ...currStudent,
            [e.target.name]: e.target.value,
          }
        : currStudent
    );

    setStudents(newStudents);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateState(null);
  };

  return (
    <tr className="table-row">
      <td>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={student.name}
        />
      </td>
      <td>
        <input
          type="text"
          name="age"
          onChange={handleInput}
          value={student.age}
        />
      </td>
      <td>
        <input
          type="text"
          name="major"
          onChange={handleInput}
          value={student.major}
        />
      </td>
      <td>
        <input
          type="text"
          name="university"
          onChange={handleInput}
          value={student.university}
        />
      </td>
      <td>
        <input
          type="text"
          name="averageGrade"
          onChange={handleInput}
          value={student.averageGrade}
        />
      </td>
      <td>
        <Button onClick={handleSubmit} className="btn-update" type="submit">
          Update
        </Button>
      </td>
    </tr>
  );
};
