import { Key, User } from 'phosphor-react'
import styles from './LoginVigor.module.css'

export function LoginVigor() {
  return (
    <main>
      <section className={styles.login}>
        <div className={styles.formulario}>
          <div className={styles.titleFormulario}>
            <h1>login</h1>
            <p>Seja bem-vindo</p>
          </div>
          <form action="login.php" method="post" autoComplete='on'>
            <div className={styles.campo}>
            <User/>
              <input type="email" name="login" id="ilogin" placeholder='Seu e-mail' autoComplete='email' required maxLength={40}/>
              <label htmlFor="ilogin">Login</label>
            </div>
            <div className={styles.campo}>
              <Key/>
              <input type="password" name="senha" id="isenha" placeholder='Sua senha' autoComplete='current-password' required minLength={8} maxLength={20}/> 
              <label htmlFor="isenha">Senha</label> 
            </div>
            <input type="submit" value="Entrar" />
            <a href="#" className={styles.botao}>Esqueci a senha</a>
          </form>
        </div>
      </section>
    </main>
  )
}