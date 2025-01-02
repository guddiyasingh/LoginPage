
import React, { useState } from 'react'


import "./Login.css";
import { Link } from 'react-router-dom';
 import {auth} from './firebase'

 import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {


  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async(e) =>{
  e.preventDefault()
    try{
  await createUserWithEmailAndPassword( auth,email,password)

   console.log("Account Created")
    }catch(err){
      console.log(err)

    }
  
}
  return (

<div className="addUser">
      <h3>Login In</h3>
      <form action="" className="addUserForm" onSubmit={ handleSubmit}>
        <div className="inputGroup">
      
         <label htmlFor="email">Email:</label>
          <input 
       type="Email"
         id="Email" 
         autoComplete='off'
         placeholder='Enter your Email'
        onChange={(e) => setEmail(e.target.value)}
         />
         <label htmlFor="name">Password:</label>
          <input 
       type="Password"
         id="name" 
         autoComplete='off'
         placeholder='Enter your Password'

         onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit" class="btn btn-success">Login In</button>

        </div>
      </form>
      <div className="login">
        <p>Don't have account ?</p>
        <Link to="/" type='submit' className='btn btn-primary'>
         Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
