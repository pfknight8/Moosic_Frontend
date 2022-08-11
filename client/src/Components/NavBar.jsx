import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <h1 id='title'>Moosic</h1>
      <nav id='navBarLinks'>
        <Link to='/' >Home</Link>
      </nav>
    </header>
  )
}

export default NavBar