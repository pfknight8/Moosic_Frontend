import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/userLogin')
  }
  return (
    <div id="signUpPage">
      <div className="signUp">
        <form onSubmit={handleSubmit}>
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
          <div>
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
          <div>
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
          <div>
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
  )
}

export default SignUp
