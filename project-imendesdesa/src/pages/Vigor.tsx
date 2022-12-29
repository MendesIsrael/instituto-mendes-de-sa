import styles from './Vigor.module.css';

export function Vigor() {
  return (
    <section>
      <div className={styles.titleVigor}>
        <video src="../img/video-principal-vigor.mp4" autoPlay loop muted></video>
        <img src="../img/logo-vigor.png" alt="vigor" />
      </div>
      <div className={styles.body}>
        <h1>oioioioi</h1>
      </div>
    </section>
  )
}