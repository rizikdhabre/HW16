import students from "../data/students"
const Dashboard=(props)=>{
    return(
        <table className="stuednts-table">
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
            {students.map((user)=>{
             return   <tr key={user.id}>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                    <th>{user.major}</th>
                    <th>{user.university}</th>
                    <th>{user.averageGrade}</th>
                </tr>
                
            })}
         </tbody>
        </table>
    )
}

export default Dashboard