import Button from "./Button";
const Student = ({ student, removeStudent, updateDetails, isAdmin }) => {
  return (
    isAdmin?<tr className="table-row">
    <td>{student.name}</td>
    <td>{student.age}</td>
    <td>{student.major}</td>
    <td>{student.university}</td>
    <td>{student.averageGrade}</td>
    {/* <td><button className="btn-delete" onClick={()=>removeStudent(student.id)}>Remove Student</button></td> */}
    <td>
      <Button
        onClick={() => removeStudent(student.id)}
        className="btn-delete"
      >
        Remove
      </Button>
      <Button onClick={() => updateDetails(student.id)} className="btn-edit">
        Edit Student
      </Button>
    </td>
  </tr>:<tr className="table-row">
    <td>{student.name}</td>
    <td>{student.age}</td>
    <td>{student.major}</td>
    <td>{student.university}</td>
    <td>{student.averageGrade}</td></tr>
  );
};

export default Student;
