import { useState } from "react"
import StudentList from "./StudentList"

const StudentApp=()=>{
    const [student,setStudent]=useState([])
    const addStudent=(name,age,major,university,averageGrade)=>{
        const newStudent={
            id:1,
            name,
            age,
            major,
            university,
            averageGrade
        }

        setStudent((prev)=>[newStudent,...prev])
    }
    return(
        <>
        <StudentList/>
        </>
    )
}

export default StudentApp