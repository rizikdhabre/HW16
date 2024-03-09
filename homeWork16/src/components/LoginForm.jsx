import React, { useState } from 'react'

const LoginForm = ({handleAuth,setShowRegister}) => {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        handleAuth(username, password)
    }

    return (
      <section className="login-container">
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder='enter your username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-login">Login</button>
        </form>
        <div className="auth-switch">
          <p>Dont have an account?{"  "} 
          <button onClick={()=>setShowRegister(true)}>Sign Up</button>
          </p>
  
        </div>
      </section>
    )

}

export default LoginForm