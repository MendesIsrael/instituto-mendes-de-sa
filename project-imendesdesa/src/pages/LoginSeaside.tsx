import { FacebookLogo, GoogleLogo, LinkedinLogo } from 'phosphor-react'
import styles from './LoginSeaside.module.css'

export function LoginSeaside() {
  return (
    <section className={styles.bodyLogin}>
      <div className={styles.loginContainer}>
        <img src="../img/logo-branca-seaside.png" alt="seaside" />
        <form action="">
          <label htmlFor="email">E-mai</label>
          <input type="email" name='email' className={styles.email} placeholder='Digite o seu email' autoComplete='on'/>
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' className={styles.password} placeholder='Digite a sua senha'/>
          <a href="#" className={styles.forgotPass}>Esqueceu a senha?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  )
}