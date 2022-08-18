import { Link } from 'react-router-dom'
const url = require('../Components/Moosic.png')
const Header = ({ LogOut, user }) => {
  //
  let userButtonOpt
  if (user) {
    userButtonOpt = (
      <Link className="navBarLinks" onClick={LogOut} to="/">
        Log Out
      </Link>
    )
  } else {
    userButtonOpt = (
      <Link className="navBarLinks" to="/userLogin">
        Login
      </Link>
    )
  }
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
          Search
        </Link>
        <Link className="navBarLinks" to="/profile">
          Profile
        </Link>
        <Link className="navBarLinks" to="/signUp">
          Sign Up
        </Link>
        {userButtonOpt}
      </nav>
    </header>
  )
}
export default Header
