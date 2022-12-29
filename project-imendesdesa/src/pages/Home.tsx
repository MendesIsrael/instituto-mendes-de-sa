import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import styles from './Home.module.css';

export function Home() {
  return (
    <section>

      <div className={styles.title}>
        <video src="../img/video-principal.mp4" autoPlay loop muted></video>
        <img src="../img/logo-3.png" alt="instituto" />
      </div> 

      <div className={styles.carrocel}>
        <h1>NOTÍCIAS</h1>
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

      <div className={styles.quemSomos}>
        <h1>QUEM SOMOS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident, velit voluptatem laborum aspernatur debitis quae deserunt accusamus accusantium harum dolorem quisquam, libero sapiente! Nemo asperiores molestiae assumenda iure architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempora voluptate quidem at natus, maiores distinctio eveniet perferendis doloremque officia laborum dignissimos eum unde tempore! Accusantium cupiditate quidem aliquam distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi ratione temporibus autem aut officia deserunt ad, quas distinctio modi, aliquam vero? Earum, possimus in itaque quae nisi temporibus fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officia accusamus totam doloribus obcaecati. Cupiditate qui earum, sequi corrupti dolor animi sit iure libero omnis? Ad pariatur eaque quod facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque ducimus sunt pariatur maxime porro itaque ratione quas quisquam minima aspernatur minus, sed natus dolore sapiente facilis libero laboriosam fuga?</p>
        <div className={styles.missaoVisao}>
          <div className={styles.visao}>
            <h1>Visão</h1>
            <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
          </div>
          <div className={styles.missao}>
            <h1>Missão</h1>
            <p>A missão do Studio Crescer é Contribuir para que as pessoas alcancem uma melhor qualidade nos mais diversos aspectos da vida, utilizando serviços especializados e diferenciados com o método de Pilates, hidroginástica, funcional e lutas.</p>
          </div>
        </div>
      </div>

      <div className={styles.servicos}>
        <h1>SERVIÇOS</h1>
        <h6>PREPARAÇÃO DO CORPO E MENTE DAS PESSOAS.</h6>
        <div className={styles.acesso}>
          <div className={styles.botaoVigorSeaside}>
            <a href="/Vigor">
              <img src="../img/logo-vigor-preto.png" alt="body training" />
            </a>
            <p>A Vigor Body Training te ajudará na preparação do seu corpo para você alcançar os seus objetivos. Utilizaremos as modalidades de Pilates, funcional, hidroginástica e lutas para promover o seu desenvolvimento corporal.</p>
          </div>
          <div className={styles.botaoVigorSeaside}>
            <a href="/Seaside">
              <img src="../img/logo-branca-seaside.png" alt="educacional" />
            </a>
            <p>A Seaside te ajudará na preparação da sua mente para você alcançar os seus objetivos. Utilizaremos as modalidades de palestras presenciais e cursos online para promover a sua capacitação intelectual.</p>
          </div>
        </div>
      </div>

      <div className={styles.idealizadores}>
        <div className={styles.israel}>
          <h1>Israel Mendes</h1>
          <div className={styles.imgText}>
            <img src="../img/israel.png" alt="israel" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a eaque consequuntur quas nobis totam ut aliquid dolorem labore quos ex velit maxime aspernatur, recusandae ipsa voluptatem illo numquam officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta inventore atque repudiandae vero voluptas fuga voluptate. Amet impedit numquam consequatur corrupti, aut incidunt, deleniti, odit voluptatibus natus nulla accusantium.</p>
          </div>
        </div>
        <div className={styles.rafaela}>
          <h1>Rafaela de Sá</h1>
          <div className={styles.imgText}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi similique, delectus maxime nam illum amet incidunt dolor quia nemo quo. Possimus doloribus eligendi tempore iure dicta quos doloremque harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis saepe quis distinctio dicta accusamus repellat tenetur aperiam, tempore necessitatibus, nulla fuga. Quibusdam nemo repudiandae atque voluptatem rerum ipsum molestias enim!</p>
            <img src="../img/rafaela.png" alt="rafaela" />
          </div>
        </div>
      </div>

      <div className={styles.local}>
        <h1>LOCAL</h1>
        <p>O Instituto Mendes de Sá se encontra na rua Carlos Benedete, 106 - Nova Cidade, Nilópolis </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0966151485627!2d-43.415389685365575!3d-22.79888363976063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966af6560f63d%3A0xf12ceb47d0853ded!2sR.%20Carlos%20Benedete%2C%20106%20-%20Nova%20Cidade%2C%20Nil%C3%B3polis%20-%20RJ%2C%2026535-020!5e0!3m2!1spt-BR!2sbr!4v1672312307494!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
      </div>

      <div className={styles.parceiros}>
        <h1>PARCEIROS</h1>
      </div>
    </section>
  )
}