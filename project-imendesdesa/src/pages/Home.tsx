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

      <div className={styles.noticias}>
        <div className={styles.carousel}>
          <h1>NOTÍCIAS</h1>
          <Carousel
          pause="hover" 
          fade 
          variant='dark'>
            <Carousel.Item interval={5000}>
              <img
                className='d-block w-100' 
                src="../img/noticias/1.jpg" alt="img 1" 
              />
              <Carousel.Caption>
                <h3 className={styles.titleCarousel}></h3>
                <p className={styles.texCarousel}></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className='d-block w-100' 
                src="../img/noticias/2.jpg" alt="img 2" 
              />
              <Carousel.Caption>
                <h3 className={styles.titleCarousel}></h3>
                <p className={styles.texCarousel}></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className='d-block w-100' 
                src="../img/noticias/3.jpg" alt="img 3" 
              />
              <Carousel.Caption>
                <h3 className={styles.titleCarousel}></h3>
                <p className={styles.texCarousel}></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> 
      </div>

      <div className={styles.quemSomos}>
        <h1>QUEM SOMOS</h1>
        <p>O Instituto Mendes de Sá é uma entidade brasileira privada criada com o propósito de levantar a bandeira do esporte e da educação como ferramenta de transformação, trabalhando o desenvolvimento humano, físico e cognitivo. Com foco no corpo e mente, oferece atividades coletivas, treinos, palestras e cursos com aulas teóricas e práticas nas áreas da saúde e meio ambiente, levando - de forma ética e responsável - a população Nilopolitana a dar novos passos através de domínios técnicos e científicos. Fundado em Maio de 2022, por Israel Mendes e Rafaela de Sá, atende crianças, jovens, adultos e idosos que buscam conhecimento, bem-estar ou melhora da performance.</p>
        <div className={styles.missaoVisao}>
          <div className={styles.visao}>
            <h1>Visão</h1>
            <p>Tornar-se referência por excelência, se estabelecendo como uma organização sólida, buscando preencher a lacuna acadêmica na Baixada Fluminense referente a Cursos livres e, além disso, suprir as necessidades do público que visa desenvolver o seu potencial máximo, melhorar o condicionamento físico, prevenir e reduzir os ricos de lesões e o alívio de dores crônicas.</p>
          </div>
          <div className={styles.missao}>
            <h1>Missão</h1>
            <p>A palavra “Instituto” vem do latim <em>“Statuere”</em>, que significa “colocar em pé” ou “firmar”. Desse modo, a nossa missão é estabelecer raízes profundas no município de Nilópolis, mantendo de pé os anseios de nossos alunos, seja aproximando-os do conhecimento científico ou promovendo o alcance da qualidade de vida.</p>
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
            <p>A Vigor Body Training está focada em aprimorar a consciência corporal e a coordenação motora, estimulando a melhora da performance de modo respeitoso e saudável, tendo como diferencial a estimulação da correção postural, a restauração do vigor físico e o fortalecimento muscular associado ao cuidado na prevenção de lesões. Utilizaremos as modalidades de Pilates, funcional, hidroginástica e lutas para promover o seu desenvolvimento corporal. Aqui te preparamos para superar os seus limites e alcançar seus objetivos!</p>
          </div>
          <div className={styles.botaoVigorSeaside}>
            <a href="/Seaside">
              <img src="../img/logo-branca-seaside.png" alt="educacional" />
            </a>
            <p>A Seaside Serviços Educacionais está focada na divulgação de conhecimentos técnicos e científicos, visando a capacitação intelectual e o enriquecimento de currículo. Através de um corpo docente especializado, oferece eventos, palestras e cursos de curta duração, abordando temas como Educação Ambiental, Ecologia de praias, Macroinvertebrados bentônicos, Biologia e Conservação de Tartarugas Marinhas,  Desenvolvimento Motor, Suporte Básico de Vida e Primeiros Socorros, destinados a qualquer pessoa interessada, seja estudantes, professores ou comunidade em geral. Aqui, a educação acolhe e desperta futuros!</p>
          </div>
        </div>
      </div>

      <div className={styles.idealizadores}>
        <div className={styles.israel}>
          <h1>Israel Mendes</h1>
          <div className={styles.imgText}>
            <a href="https://www.instagram.com/mendesisrael97/" target="_blank">
              <img src="../img/israel.png" alt="israel" />
            </a>
            <p>O idealizador Israel, formado em bacharel e licenciatura de educação física no Centro Universitário São José; está cursando o ensino superior de ciência da computação na Descomplica e formado nos cursos de excel básico; organização e produtividade; técnicas e ferramentas para gestão de projetos e produtos; introdução ao desenvolvimento web; desenvolvimento web HTML5 + CSS3; micro empreendedor individual; e, sargento do exécito brasileiro da brigada de infataria paraquedista, é casado com a Sr Rafaela de Sá.</p>
          </div>
        </div>
        <div className={styles.rafaela}>
          <h1>Rafaela de Sá</h1>
          <div className={styles.imgText}>
            <p>Bióloga (Bacharel e licenciatura), empresária, especialista em Ciências Ambientais em Áreas Costeiras, pós-graduanda em Biologia Marinha, mergulhadora certificada pela PADI com cursos em ecologia de organismos bentônicos, bioinvasão marinha e ameaças ao ecossistema de costão rochoso, macroinvertebrados bentônicos como ferramenta na avaliação da qualidade ambiental de ecossistemas costeiras, e educação ambiental em ecossistemas costeiros. Possui trabalhos publicados no campo da educação ambiental e ecossistema costeiro, com foco nos Manguezais da Baía de Guanabara. Já foi monitora no Herbário do Museu Nacional (UFRJ), monitora da disciplina de Poluição Marinha (FAMATH) e atuou no Coletivo Jovem durante a 3ª fase do Projeto UÇÁ. Atualmente, produz guias de campo e jogos didáticos, coordena a Seaside Serviços Educacionais e faz parte da Associação dos Protetores do Mar trabalhando como Educadora Ambiental, através do programa socioambiental da Petrobras.</p>
            <a href="https://www.instagram.com/rafaelasacoelho/" target="_blank">
              <img src="../img/rafaela.png" alt="rafaela" />
            </a>
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
        <a href="https://www.instagram.com/rc_arkhidesign/" target="_blank">
          <img src="../img/arkhi-design.png" alt="arkhi design" />
        </a>
      </div>
    </section>
  )
}