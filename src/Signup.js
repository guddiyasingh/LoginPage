 import React, { useState } from 'react'
import "./Sign-up.css";
import { Link } from 'react-router-dom';
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Signup = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [Name , setName] =useState('')


const handleSubmit = async(e) =>{
  e.preventDefault()
    try{
  await createUserWithEmailAndPassword( auth,email,password,Name)
  
   console.log("Account Created")
    }catch(err){
      console.log(err)

    }
  
}

  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form action="" className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
        <label htmlFor="name">Name:</label>
       <input 
       type="text"
         id="name" 
         autoComplete='off'
         placeholder='Enter your name'

        onChange={(e) => setName(e.target.value)}
         />
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
         <button type="submit" class="btn btn-success">Sign Up</button>

        </div>
      </form>
      <div className="login">
        <p>Already have an account ?</p>
        <Link to='/login' className='btn btn-primary'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Signup
