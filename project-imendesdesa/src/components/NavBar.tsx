import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export function NavBar() {
  return (
    <section>
      
      <nav>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/Vigor">vigor</NavLink></li>
        <li><NavLink to="/seaside">seaside</NavLink></li>
        <div className={styles.contato}>
          <a href="#" target="_blank">
            <img src="../img/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="https://www.instagram.com/institutomendesa/" target="_blank">
            <img src="../img/instagram.png" alt="instagram" />
          </a>
          <a href="#" target="_blank">
            <img src="../img/facebook.png" alt="facebook" />
          </a>
          <a href="mailto:institutomendesa@outlook.com" target="_blank">
            <img src="../img/email.png" alt="email" />
          </a>
          <a href="#" target="_blank">
            <img src="../img/youtube.png" alt="youtube" />
          </a>
        </div>
      </nav>
    </section>
  )
}