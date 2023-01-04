import { YinYang, Barbell, Check, ForkKnife, X, User, UserCircle } from 'phosphor-react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './Vigor.module.css';

export function Vigor() {
  return (
    <section>
      <div className={styles.titleVigor}>
        <video src="../img/video-principal-vigor.mp4" autoPlay loop muted></video>
        <img src="../img/logo-vigor.png" alt="vigor" />
        <a className={styles.login} href="loginVigor">LOGIN <UserCircle size={30}/></a>
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
              <button>saiba +</button>
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
          <h1>Planos</h1>
          <div className={styles.planos}>
            <div className={styles.itens}>
            <p className={styles.titlePacotes}></p><hr />
            <p>Sem taxas de matrícula</p><hr />
            <p>Acesso a todas as aulas coletivas</p><hr />
            <p>Sem restrição de horários</p><hr />
            <p>Aula experimental</p><hr />
            <p>Acompanhamento nutricional</p><hr />
            <p>Massagem de liberação mio facial</p><hr />
            <p className={styles.precoPacotes}></p>
            </div>
            <div className={styles.pacoteDireitos}>
            <p className={styles.titlePacotes}>PACOTE<br/>BRONZE</p><hr />
            <p><Check/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p className={styles.precoPacotes}>R$ 100,00/mês</p>
            </div>
            <div className={styles.pacoteDireitos}>
            <p className={styles.titlePacotes}>PACOTE<br/>PRATA</p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p><X color="red"/></p><hr />
            <p className={styles.precoPacotes}>R$ 300,00/mês</p>
            </div>
            <div className={styles.pacoteDireitos}>
            <p className={styles.titlePacotes}>PACOTE<br/>OURO</p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p><Check/></p><hr />
            <p className={styles.precoPacotes}>R$ 500,00/mês</p>
            </div>
          </div>
          <div className={styles.areaAdicionais}>
            <h1>SERVIÇOS ADICIONAIS</h1>
            <div className={styles.pacotesAdicionais}>
              <div className={styles.adicionais}>
                <ForkKnife size={50} color="white"/>
                <h2>Nutricionista</h2>
                <p className={styles.explicacaoAdicionais}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum architecto exercitationem laudantium aperiam quod similique? Dolorem quis magnam voluptates maxime saepe deleniti consequatur illum maiores, voluptatem, harum nihil!</p><hr />
                <div className={styles.precoAdicionais}>
                  <p>R$ 49,90/mês</p>
                </div>
              </div>
              <div className={styles.adicionais}>
                <YinYang size={50} color="white"/>
                <h2>Massagista</h2>
                <p className={styles.explicacaoAdicionais}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum architecto exercitationem laudantium aperiam quod similique? Dolorem quis magnam voluptates maxime saepe deleniti consequatur illum maiores, voluptatem, harum nihil!</p><hr />
                <div className={styles.precoAdicionais}>
                  <p>R$ 49,90/mês</p>
                </div>
              </div>
              <div className={styles.adicionais}>
                <Barbell size={50} color="white"/>
                <h2>Personal</h2>
                <p className={styles.explicacaoAdicionais}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum architecto exercitationem laudantium aperiam quod similique? Dolorem quis magnam voluptates maxime saepe deleniti consequatur illum maiores, voluptatem, harum nihil!</p><hr />
                <div className={styles.precoAdicionais}>
                  <p>R$ 49,90/mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.duvidas}>
          <div className={styles.carousel}>
          <Carousel pause="hover">
            <Carousel.Item interval={2500}>
              <img src="../img/Pavimento-1.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati officiis vel, similique eius praesentium blanditiis doloremque ducimus harum earum, ullam provident, adipisci reprehenderit fugit suscipit! Nemo libero sapiente laboriosam?</p>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img src="../img/Pavimento-2.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati officiis vel, similique eius praesentium blanditiis doloremque ducimus harum earum, ullam provident, adipisci reprehenderit fugit suscipit! Nemo libero sapiente laboriosam?</p>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img src="../img/Pavimento-3.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati officiis vel, similique eius praesentium blanditiis doloremque ducimus harum earum, ullam provident, adipisci reprehenderit fugit suscipit! Nemo libero sapiente laboriosam?</p>
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}