import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '../services/Auth'

const Login = ({ setUser, toggleAuthenticated }) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ username: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }
  return (
    <div className="loginCard">
      <p>Login</p>
      <form className="username" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username </label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="username"
            value={formValues.username}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <button
          disabled={!formValues.username || !formValues.password}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
