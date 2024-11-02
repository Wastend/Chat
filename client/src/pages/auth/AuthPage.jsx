import React, { useRef, useState } from 'react'
import { authHandle } from '../../scripts/api'
import { Link } from 'react-router-dom'
import './AuthPage.css'

export default function AuthPage(props) {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function submitHandle(e) {
    e.preventDefault()
    props.setIsAuth(true)
  }

  return (
    <div className='auth-page'>
      <form onSubmit={submitHandle}>
        <h3>Authorization</h3>
        <input value={name} type="text" placeholder='Name' minLength="1" maxLength={255} onChange={(e) => setName(e.target.value)} />
        <button id='auth-button' type='submit'>Enter</button>
      </form>
    </div>
  )
}