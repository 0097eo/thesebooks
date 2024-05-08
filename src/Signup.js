import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
           .then((auth) => {
                console.log(auth)
                navigate('/login')
            })
           .catch((error) => console.log(error))
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signUp}>
            <h1>Create An Account</h1>
            <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Sign Up</button>
           
        </form>
    </div>
  )
}

export default SignUp