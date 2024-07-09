import React, {useState} from 'react'
import './RegisterPage.css'
import { registerHandle } from '../../scripts/api'
import { Link } from 'react-router-dom'

export default function RegisterPage(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function submitHandle(e){
        e.preventDefault()
        const res = await registerHandle(name, password)
        if (res) {
            localStorage.setItem('isAuth', true)
            props.setIsAuth(true)
        }   
    }

    return (
        <div className='auth-page'>
            <form onSubmit={submitHandle}>
                <h3>Register</h3>
                <input value={name} type="text" minLength="5" maxLength={255} onChange={(e)=>setName(e.target.value)} />
                <input value={password} type="password" minLength="4" maxLength={255} onChange={(e)=>setPassword(e.target.value)} />
                <button id='register-button' type='submit'>Enter</button>
                <p>Or you can <Link to='/'>authorization</Link></p>
            </form>
        </div>
    )
}
