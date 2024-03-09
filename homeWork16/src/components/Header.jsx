import App from "../App"
const Header=({loggedInUser,handleLogout})=>{
    return(
        <header>
            <h2>Students</h2>
            <div className="user-info">
                {loggedInUser?(
                    <>
                    <h4>welcome, {loggedInUser.username}</h4>
                    <button className="logout-btn" onClick={()=>{handleLogout()}}>Logout</button>
                    </>
                ):(null)}
            </div>
        </header>
    )
}



export default Header