import { Link } from 'react-router-dom'
const url = require('../Components/Moosic.png')
const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="logo" src={url} alt=""></img>
      </Link>
    </footer>
  )
}
export default Footer
