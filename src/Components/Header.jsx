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
      <nav>
        <div className="logoHeader">
          <Link to="/">
            <img className="logoH" src={url} alt=""></img>
          </Link>
        </div>
        <div className="nav">
          <Link className="navBarLinks" to="/">
            Home
          </Link>
          <Link className="navBarLinks" to="/songs">
            Search
          </Link>
          {user ? (
            <Link className="navBarLinks" to="/profile">
              Profile
            </Link>
          ) : (
            <Link className="navBarLinks" to="/signUp">
              Sign Up
            </Link>
          )}
          {userButtonOpt}
        </div>
      </nav>
    </header>
  )
}
export default Header
