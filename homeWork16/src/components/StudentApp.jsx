import { useEffect, useState } from "react"
import StudentList from "./StudentList"
import AddStudent from "./AddStudent"
import initialStudents  from "../data/students"
import { storageService } from "../services/storageService"
import { utilService } from "../services/utilService"
import Admin from "./Admin"

const StudentApp=()=>{
    const [students,setStudents]=useState(initialStudents)
    const [isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
        const user=storageService.getLoggedInUser()
        if(user.isAdmin){
            setIsAdmin(true)
        }
    })
    const addStudent=(name,age,major,university,averageGrade)=>{
        const newStudent={
            id:utilService.generateId(),
            name,
            age,
            major,
            university,
            averageGrade,
        }
        const updatedStudents = [...students, newStudent];
        setStudents(updatedStudents);
    }

    const removeStudent=(studentId)=>{
        const updatedStudents=students.filter((student)=>student.id!==studentId)
        setStudents(updatedStudents)
    }
      
    return(
        <>
        <StudentList students={students} removeStudent={removeStudent} setStudents={setStudents} isAdmin={isAdmin}/>
        <AddStudent addStudent={addStudent}/>
        {isAdmin && <Admin/>}
        </>
    )
}

export default StudentApp