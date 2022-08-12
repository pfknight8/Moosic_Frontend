import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <h1 id='title'>Moosic</h1>
      <nav id='navBarLinks'>
        <Link to='/' >Home</Link>
        <Link to='/searchSongs'>Search Songs</Link>
      </nav>
    </header>
  )
}

export default NavBar

// Do we want 'sign in' and 'sign up' to both be in the nav, and, if so, do we want each of their pages to refer to the othel (such as having "Already have an accont? Sign In" on the 'sign up' page).