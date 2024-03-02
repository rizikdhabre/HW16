import { useState } from "react"
import StudentList from "./StudentList"
import AddStudent from "./AddStudent"
import initialStudents  from "../data/students"

const StudentApp=()=>{
    const [students,setStudents]=useState(initialStudents)
    const addStudent=(name,age,major,university,averageGrade)=>{
        const newStudent={
            id:1,
            name,
            age,
            major,
            university,
            averageGrade
        }
        const updatedStudents = [...students, newStudent];

        setStudents(updatedStudents);
    }
    return(
        <>
        <StudentList students={students }/>
        <AddStudent addStudent={addStudent}/>
        </>
    )
}

export default StudentApp