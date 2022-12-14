import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '../services/Auth'
import swal from 'sweetalert'

const Login = ({ setUser, toggleAuthenticated }) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    if (payload.msg) {
      swal('Username or password are incorrect', 'Click OK to return!', 'error')
    } else {
      setFormValues({ username: '', password: '' })
      setUser(payload.user)
      toggleAuthenticated(true)
      navigate('/')
    }
  }

  return (
    <div className="loginCard">
      <p className="loginHeader">LOGIN</p>
      <form onSubmit={handleSubmit}>
        <div className="loginField">
          <label htmlFor="username">USERNAME </label>
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
          <label htmlFor="password">PASSWORD </label>
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
          <p className="bottomQ">
            Don't have an account? Sign up{' '}
            <a className="here" href="/signUp">
              here
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
