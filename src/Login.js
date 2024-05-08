import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
           .then((authCredentials) => {
                console.log(authCredentials)
                navigate('/books')
            })
           .catch((error) => console.log(error))
           .catch((error) => {
            console.log(error)
            alert("Wrong credentials. Please try again")
          })
           
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Login to your account</h1>
            <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
            <Link to='/signup'><p>Don't have an account? Sign Up</p></Link>
           
        </form>
    </div>
  )
}

export default Login