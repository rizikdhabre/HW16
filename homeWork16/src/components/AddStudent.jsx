import { useState } from "react";

const emptyStudent = {
  name: "",
  age: "",
  major: "",
  university: "",
  averageGrade: "",
};

const AddStudent = ({ addStudent }) => {
  const [newStudent, setNewStudent] = useState(emptyStudent);
  const handleAddStudent = (e) => {
    e.preventDefault();
    const { id, name, age, major, university, averageGrade } = newStudent;
    if (!name || !age || !major || !university || !averageGrade) return;
    addStudent(name, age, major, university, averageGrade);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="addStudent">
      <form onSubmit={handleAddStudent}>
        <input
          onChange={handleChange}
          value={newStudent.name}
          type="text"
          id="name"
          name="name"
          placeholder="Student Name"
          className="styleAdd"
        />
        <input
          onChange={handleChange}
          value={newStudent.age}
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          className="styleAdd"
        />
        <input
          onChange={handleChange}
          value={newStudent.major}
          type="text"
          id="major"
          name="major"
          placeholder="Student Major"
          className="styleAdd"
        />
        <input
          onChange={handleChange}
          value={newStudent.university}
          type="text"
          id="university"
          name="university"
          placeholder="Student university"
          className="styleAdd"
        />
        <input
          onChange={handleChange}
          value={newStudent.averageGrade}
          type="number"
          id="averageGrade"
          name="averageGrade"
          placeholder="Student average Grade"
          className="styleAdd"
        />
         <button className="btn add-student-btn">Add Student</button>
      </form>
    </section>
  );
};

export default AddStudent;
