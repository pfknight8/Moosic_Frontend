import { Link } from 'react-router-dom'
const url = require('../Components/Moosic.png')
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={url} alt=""></img>
      </Link>
      <nav className="navBarLinks">
        <Link className="navBarLinks" to="/">
          Home
        </Link>
        <Link className="navBarLinks" to="/songs">
          Search Songs
        </Link>
        <Link className="navBarLinks" to="/profile">
          Profile
        </Link>
        <Link className="navBarLinks" to="/signUp">
          Sign Up
        </Link>
        <Link className="navBarLinks" to="/userLogin">
          Login
        </Link>
      </nav>
    </header>
  )
}
export default Header
