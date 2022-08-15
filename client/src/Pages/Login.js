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
      <p className="loginHeader">Login</p>
      <form onSubmit={handleSubmit}>
        <div className="loginField">
          <label htmlFor="username">Username </label>
          <input
            className="loginField"
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="username"
            value={formValues.username}
            required
          />
        </div>
        <div className="loginField">
          <label htmlFor="password">Password </label>
          <input
            className="loginField"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <div>
          <button
            className="buttonz"
            disabled={!formValues.username || !formValues.password}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
