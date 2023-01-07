import { YinYang, Barbell, Check, ForkKnife, X, User, UserCircle } from 'phosphor-react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './Vigor.module.css';
import * as AlertDialog from '@radix-ui/react-alert-dialog';


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
              <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
              <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <button className={styles.buttonViolet}>Saiba +</button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay className={styles.alertDialogOverlay} />
                  <AlertDialog.Content className={styles.alertDialogContent}>
                    <AlertDialog.Title className={styles.alertDialogTitle}>PILATES</AlertDialog.Title>
                    <AlertDialog.Description className={styles.alertDialogDescription}>
                    Pacote gold: 144 sessões em 6 meses, avaliação grátis = R$850,00<br />
                    Pacote platinum: 72 sessões em 3 meses, avaliação grátis = R$500,00 <br />
                    Pacote basic: 24 sessões em 2 meses, avaliação grátis = R$350,00<br />
                    Mensal 5x/semana: R$200,00<br />
                    Mensal 4x/semana: R$190,00<br />
                    Mensal 3x/semana: R$150,00<br />
                    Mensal 2x/semana: R$110,00<br />
                    Mensal 1x/semana: R$80,00<br />
                    Aula avulso: 100<br />
                    Taxa de matrícula: R$20,00
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                      <AlertDialog.Cancel asChild>
                        <button className={styles.buttonMauve}>Entendi</button>
                      </AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            </div>
            <div className={styles.atividades}>
                <img src="../img/hidroGinastica.jpg" alt="hidroginástica" />
                <h1>HIDROGINÁSTICA</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
                <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <button className={styles.buttonViolet}>Saiba +</button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay className={styles.alertDialogOverlay} />
                  <AlertDialog.Content className={styles.alertDialogContent}>
                    <AlertDialog.Title className={styles.alertDialogTitle}>HIDROGINÁSTICA</AlertDialog.Title>
                    <AlertDialog.Description className={styles.alertDialogDescription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi culpa voluptates officia sequi quia sint nihil libero vel, quos eligendi cum at. Explicabo ipsa obcaecati sequi, quia illo velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias amet perspiciatis eveniet similique deserunt dolores, error minus dolor excepturi voluptatibus mollitia in blanditiis officia nam voluptatem culpa eaque nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, iure aperiam doloribus recusandae qui adipisci ea, dolores corporis, cupiditate expedita perferendis consequatur molestiae voluptas pariatur cum ducimus tempora deserunt vitae.
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                      <AlertDialog.Cancel asChild>
                        <button className={styles.buttonMauve}>Entendi</button>
                      </AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            </div>
            <div className={styles.atividades}>
                <img src="../img/funcional.jpg" alt="funcional" />
                <h1>FUNCIONAL</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, a consciência corporal e a coordenação motora, prevenindo e reduzindo os ricos de lesões e o alívio de dores crônicas.</p>
                <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <button className={styles.buttonViolet}>Saiba +</button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay className={styles.alertDialogOverlay} />
                  <AlertDialog.Content className={styles.alertDialogContent}>
                    <AlertDialog.Title className={styles.alertDialogTitle}>FUNCIONAL</AlertDialog.Title>
                    <AlertDialog.Description className={styles.alertDialogDescription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi culpa voluptates officia sequi quia sint nihil libero vel, quos eligendi cum at. Explicabo ipsa obcaecati sequi, quia illo velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias amet perspiciatis eveniet similique deserunt dolores, error minus dolor excepturi voluptatibus mollitia in blanditiis officia nam voluptatem culpa eaque nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, iure aperiam doloribus recusandae qui adipisci ea, dolores corporis, cupiditate expedita perferendis consequatur molestiae voluptas pariatur cum ducimus tempora deserunt vitae.
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                      <AlertDialog.Cancel asChild>
                        <button className={styles.buttonMauve}>Entendi</button>
                      </AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            </div>
            <div className={styles.atividades}>
                <img src="../img/lutas.jpg" alt="lutas" />
                <h1>LUTAS</h1>
                <p>Buscamos sempre desenvolver o seu potencial máximo - melhorando o condicionamento físico geral, as técnicas de auto defesa e de combate e elevar o nome do atleta na região.</p>
                <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <button className={styles.buttonViolet}>Saiba +</button>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay className={styles.alertDialogOverlay} />
                  <AlertDialog.Content className={styles.alertDialogContent}>
                    <AlertDialog.Title className={styles.alertDialogTitle}>LUTAS</AlertDialog.Title>
                    <AlertDialog.Description className={styles.alertDialogDescription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi culpa voluptates officia sequi quia sint nihil libero vel, quos eligendi cum at. Explicabo ipsa obcaecati sequi, quia illo velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias amet perspiciatis eveniet similique deserunt dolores, error minus dolor excepturi voluptatibus mollitia in blanditiis officia nam voluptatem culpa eaque nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, iure aperiam doloribus recusandae qui adipisci ea, dolores corporis, cupiditate expedita perferendis consequatur molestiae voluptas pariatur cum ducimus tempora deserunt vitae.
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                      <AlertDialog.Cancel asChild>
                        <button className={styles.buttonMauve}>Entendi</button>
                      </AlertDialog.Cancel>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog.Root>
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
            <Carousel
              pause="hover" 
              fade 
              variant='dark'>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia01.jpg" alt="img 1" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel1}>PILATES</h3>
                  <p className={styles.texCarousel1}>Venha fazer parte dessa turma</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia02.jpg" alt="img 2" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel2}>FUNCIONAL</h3>
                  <p className={styles.texCarousel2}> Venha conhcer os nossos equipamentos de ponta</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia03.jpg" alt="img 3" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel3}>FUNCIONAL</h3>
                  <p className={styles.texCarousel3}>Turmas para homens e para mulheres</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia04.jpg" alt="img 4" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel4}>LUTA</h3>
                  <p className={styles.texCarousel4}>Venha treinar Muy-thay como o melhor lutador da história</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia05.jpg" alt="img 5" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel5}>LUTA</h3>
                  <p className={styles.texCarousel5}>Venha treinar até lenvantar o cinturão de campeão</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className='d-block w-100' 
                  src="../img/academia/academia06.jpg" alt="img 6" 
                />
                <Carousel.Caption>
                  <h3 className={styles.titleCarousel6}>FUCIONAL</h3>
                  <p className={styles.texCarousel6}>Se torne a pessoa que é  referência de vigor</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}