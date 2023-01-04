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
        <div className={styles.socialContainer}>
          <p>Ou entre pelas suas redes sociais</p>
          <i className={styles.icon}><FacebookLogo size={30}/></i>
          <i className={styles.icon}><GoogleLogo size={30}/></i>
          <i className={styles.icon}><LinkedinLogo size={30}/></i>
        </div>
        <div className={styles.registrarContainer}>
          <p>Ainda não tem uma conta?</p>
          <a href="#">Registar</a>
        </div>
      </div>
    </section>
  )
}