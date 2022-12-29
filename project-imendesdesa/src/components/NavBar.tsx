import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <nav>
      <li><NavLink to="/">home</NavLink></li>
      <li><NavLink to="/Vigor">vigor</NavLink></li>
      <li><NavLink to="/seaside">seaside</NavLink></li>
      <div id='contato'>
      <img src="../img/whatsapp.png" alt="whatsapp" />
      <img src="../img/instagram.png" alt="instagram" />
      <img src="../img/facebook.png" alt="facebook" />
      <img src="../img/youtube.png" alt="youtube" />
      <img src="../img/email.png" alt="email" />
      </div>
    </nav>
  )
}