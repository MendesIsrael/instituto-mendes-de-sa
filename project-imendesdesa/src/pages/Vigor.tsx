import styles from './Vigor.module.css';

export function Vigor() {
  return (
    <section>
      <div className={styles.titleVigor}>
        <video src="../img/video-principal-vigor.mp4" autoPlay loop muted></video>
        <img src="../img/logo-vigor.png" alt="vigor" />
      </div>

      <div className={styles.body}>
        <h1>A sua melhor opção na hora de levar uma vida mais saudável</h1>

        <div className={styles.modalidades}>
          <h2>Conheça nossas modalidades</h2>
          <div className={styles.bodyModalidades}>
            <div className={styles.atividades}>
              <img src="../img/pilates.jpg" alt="pilates" />
              <h1>PILATES</h1>
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.
              </p>
            </div>
            <div className={styles.atividades}>
                <img src="../img/hidroGinastica.jpg" alt="hidroginástica" />
                <h1>HIDROGINÁSTICA</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.
                </p>
            </div>
            <div className={styles.atividades}>
                <img src="../img/funcional.jpg" alt="funcional" />
                <h1>FUNCIONAL</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.
                </p>
            </div>
            <div className={styles.atividades}>
                <img src="../img/lutas.jpg" alt="lutas" />
                <h1>LUTAS</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, as técnicas de auto defesa e de combate e elevar o nome do atleta na região.
                </p>
            </div>
          </div>
        </div>

        <div className={styles.pacotes}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa consequatur voluptate, libero distinctio recusandae ipsam accusantium suscipit aperiam? Neque ipsum non, praesentium dignissimos blanditiis sed quaerat eaque itaque delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores blanditiis eligendi saepe neque aliquam necessitatibus soluta rerum accusamus illum, consectetur magni repudiandae autem. Quis accusamus explicabo ab minus nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, expedita vel beatae voluptatem, deserunt harum sapiente illo vitae maiores quaerat, praesentium iure? Maiores eos vitae autem quia quod quo tenetur.</p>
        </div>
      </div>
    </section>
  )
}