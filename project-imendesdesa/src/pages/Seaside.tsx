import styles from './Seaside.module.css'

export function Seaside() {
  return (
    <section>
      <div className={styles.titleSeaside}>
        <video src="../img/video-principal-seaside.mp4" autoPlay loop muted></video>
        <img src="../img/logo-preta-seaside.png" alt="seaside" />
      </div>
    </section>
  )
}