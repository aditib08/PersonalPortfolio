import './App.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navBar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
        Experience
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
        Projects
      </NavLink>
      <NavLink to="/writing" className={({ isActive }) => isActive ? 'navLink navLinkActive' : 'navLink'}>
        Writing
      </NavLink>
    </nav>
  )
}

export default NavBar
