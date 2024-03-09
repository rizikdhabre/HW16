import React, { useState } from 'react'

const RegisterForm = ({setShowRegister,handleAuth}) => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const handleRegister=(e)=>{
            e.preventDefault()
    if(!username||!password||!email)return
    handleAuth(username,password,true,email)    
    }
  return (
    <section className="register-container">
    <h1>SignUp form</h1>
    <form onSubmit={handleRegister}>
      <div className="input-wrapper">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn-register">Register</button>
    </form>
    <div className="auth-switch">
      <p>already have an account?{"  "} 
      <button onClick={()=>setShowRegister()}>Sign in</button>
      </p>

    </div>
  </section>
  )
}

export default RegisterForm