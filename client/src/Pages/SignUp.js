import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignUpUser } from '../services/Auth'

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.username]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignUpUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/userLogin')
  }
  return (
    <div className="signUpPage">
      <div className="signUp">
        <form onSubmit={handleSubmit}></form>
        <p>Sign up</p>
        <div>
          <label htmlFor="name">Name </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Dottie Moo"
            value={formValues.name}
            required
          />
        </div>
        <div className="signUp">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username </label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="DottieMoo3"
                value={formValues.username}
                required
              />
            </div>
            <div className="signUp">
              <label htmlFor="email">Email </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="dottiemoo@email.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="signUp">
              <label htmlFor="password">Password </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="*********"
                value={formValues.password}
                required
              />
            </div>
            <div className="signUp">
              <label htmlFor="confirmPassword">Confirm Password </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="*********"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <button
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
