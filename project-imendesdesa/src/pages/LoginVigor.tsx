import { FacebookLogo, GoogleLogo, LinkedinLogo } from 'phosphor-react'
import styles from './LoginVigor.module.css'

export function LoginVigor() {
  return (
    <section className={styles.bodyLoginVigor}>
      <div className={styles.loginContainerVigor}>
        <img src="../img/logo-vigor-preto.png" alt="seaside" />
        <form action="">
          <label className={styles.Vigor} htmlFor="email">E-mai</label>
          <input type="email" name='email' className={styles.emailVigor} placeholder='Digite o seu email' autoComplete='on'/>
          <label className={styles.Vigor} htmlFor="password">Senha</label>
          <input type="password" name='password' className={styles.passwordVigor} placeholder='Digite a sua senha'/>
          <a href="#" className={styles.forgotPassVigor}>Esqueceu a senha?</a>
          <input className={styles.Vigor} type="submit" value="Login" />
        </form>
        
      </div>
    </section>
  )
}