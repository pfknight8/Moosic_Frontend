import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div id="loginPage">
      <div className="loginCard">
        <form className="username" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username </label>
            <input
              onChange={handleChange}
              name="username"
              type="username"
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
    </div>
  )
}

export default Login
