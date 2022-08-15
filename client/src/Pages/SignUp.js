import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignUpUser } from '../services/Auth'

const SignUp = () => {
  const initialFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignUpUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/userLogin')
  }
  const handleReset = () => {
    setFormValues(initialFormValues)
  }
  return (
    <div className="signUpPage">
      <p>Sign up</p>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="signUpField">
          {/* <div>
            <label htmlFor="name">Name </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Dottie Moo"
              value={formValues.name}
              required
              />
          </div> */}
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
          <div className="signUpField">
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
          <div className="signUpField">
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
          <div className="signUpField">
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
        </div>
        <div className='btnHolder'>
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
          <button type="reset">Reset Form</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
