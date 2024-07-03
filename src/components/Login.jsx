import React, { useState } from 'react'

const Login = () => {

  const [user,setUser] = useState({});
  const inputHandler = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }   
  return (
    <div style={{display:'flex',flexDirection:"column",gap:"10px", padding:"20px"}}>
      <input type="text" name='email' placeholder='email'  onChange={inputHandler} /> 
      <input type="text" name='password' placeholder='password'   onChange={inputHandler}/>
      <input type="submit"  placeholder='Login' onClick={()=>{
                  
                  fetch("https://book-app-g0al.onrender.com/user/login",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    credentials:"include",
                    body:JSON.stringify(user)
                  }).then(d=>d.json()).then(d=>alert(d))
      }} />

    </div>
  )
}

export default Login