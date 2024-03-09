import Button from "./Button";
const Student = ({ student, removeStudent, updateStudent}) => {
  return (
    <tr className="table-row">
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.university}</td>
      <td>{student.averageGrade}</td>
      {/* <td><button className="btn-delete" onClick={()=>removeStudent(student.id)}>Remove Student</button></td> */}
      <td>
      <Button onClick={() => removeStudent(student.id)} className="btn-delete">
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default Student;
