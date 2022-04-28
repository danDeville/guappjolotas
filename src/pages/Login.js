import React,{ useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userName = localStorage.getItem('email')
  ? localStorage.getItem('email')
  : 'admin@admin.com'

  const userPassword = localStorage.getItem('password')
  ? localStorage.getItem('password')
  : 'admin'

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email === userName && password === userPassword) {
      toast.success('Login Successful')
      navigate('/')
    }else {
      toast.error('Login Failed')
    }
  }

  return (
    <div className="Login">
      <div className="form-container">
        <form>
          <label htmlFor="username" className="label">Email Address</label>
          <input
            type="text"
            value={email}
            // name="Username"
            placeholder="dandeville@email.com"
            // required
            className="input input-email"
            onChange={({ target }) => setEmail(target.value)}
          />

          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            value={password}
            // name="Password"
            placeholder="*********"
            // required
            className="input input-password"
            onChange={({ target }) => setPassword(target.value)}
          />

          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log In
          </button>

          <a href="/">Forgot my password</a>
        </form>

        <button
          className="secondary-button signup-button"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Login
