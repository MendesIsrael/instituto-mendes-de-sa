import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <nav>
      <li><NavLink to="/">home</NavLink></li>
      <li><NavLink to="/Vigor">vigor</NavLink></li>
      <li><NavLink to="/seaside">seaside</NavLink></li>
    </nav>
  )
}