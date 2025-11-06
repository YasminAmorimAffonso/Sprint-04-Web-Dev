import './Home.css'
import Cabecalho1 from './components/Cabecalho1'
import Rodape1 from './components/Rodape1'
import { Link } from 'react-router-dom'

function Home() {


  return (
    <>

      <div className='flex flex-col items-center h-full bg-[#E3E0DC] overflow-hidden'>

        <Cabecalho1 />

        <div id='content-home' className='m-0 w-full flex flex-col items-center'>

          <img src="/assets/imgs/divisoria1.png" alt="" className='absolute mt-75 md:mt-105 lg:mt-190' />

          <div id='secUm-home' className='flex flex-row w-full pt-35 pb-10 items-center'>

            <img src="/assets/imgs/marta.png" alt="" className='w-40 md:w-80 lg:w-160' />

            <img src="/assets/imgs/oPassaABolaEstaDeCasaNova.png" alt="" className='w-45 h-full md:w-100 mb-[50px] lg:w-160' />

          </div>

        </div>

        <div id='secDois-home' className=' pt-15 p-4 flex'>

          <div className='flex flex-col justify-around h-75 lg:h-150'>

            <img id='tituloSecDois-home' src="/assets/imgs/paraosapaixonados.png" alt="" className='w-50' />

            <p className='font-[neubau] text-[15px] '>Se você respira futebol feminino, chegou ao lugar certo.Este é o espaço feito para quem vibra nas arquibancadas, joga nos campos e acredita no poder transformador desse esporte. Aqui, você encontra conteúdo pensado para aproximar ainda mais fãs, clubes e atletas, em um ambiente que celebra cada conquista e dá visibilidade ao que realmente importa: a paixão pelo futebol feminino.</p>

          </div>

          <img id="logo-home" src="/assets/imgs/logoColoridoSvg.svg" alt="" className='w-30' />

        </div>




        <img src="/assets/imgs/divisoria2.png" id='div2-home' alt="" className='opacity-70 -translate-x-15' />




        <div id='secTres-home' className='flex flex-col justify-around items-end text-right p-4 w-full'>


          <img id='tituloSecTres-home' src="/assets/imgs/lojaDoPab.png" alt="" className='w-30 mb-7' />

          <p className='font-[neubau] text-[15px] mb-7 md:text-[20px]'>A Loja do PAB, o espaço onde o futebol feminino ganha forma, cor e atitude. Aqui, você encontra produtos licenciados que celebram a força, a garra e a beleza das mulheres no esporte — com a qualidade e o estilo que só a Passa a Bola oferece.</p>

          <h4 className='font-[neubau] text-[20px] font-bold mb-7'>Conheça nossos produtos</h4>

          <div id='cardProduto-home' className='p-4 rounded-[15px] text-center w-40 h-80'>

            <Link href="/loja/CamisaSeleçãoBrasil25/26TorcedorProNikeFeminina">

              <img src="/assets/imgs/camiseta1.png" alt="" className='rounded-[10px] mb-4' />

              <h5 className='font-[neubau] font-bold text-[15px] mb-2'>Camisa da Seleção do Brasil CBF I 25/26 Torcedor Pro Nike Feminina</h5>

              <p className='font-[neubau] text-[15px]'>ou R$ 399,99 em 5x de R$ 80,00 sem juros</p>

            </Link>

          </div>

        </div>


        <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />


        <div id='secQuatro-home' className='flex flex-col items-center'>

          <div id='textImage-home' className='m-4 flex flex-col items-center'>

            <div>

              <img src="/assets/imgs/campeonatos.png" alt="" className='w-45 mb-7' />

              <p className='font-[neubau] text-[15px]'>O Campeonato Passa a Bola é a celebração do futebol feminino em sua forma mais vibrante e competitiva, reunindo atletas de todas as regiões para mostrar talento, garra e paixão pelo esporte. No nosso site, você encontra uma seção exclusiva dedicada ao campeonato, onde é possível realizar a inscrição, acompanhar o cronograma completo das partidas e se manter por dentro de todas as novidades e resultados. Seja participante ou torcedora, essa é a sua chance de fazer parte de uma experiência única que conecta comunidades, promove o futebol feminino e transforma cada jogo em um verdadeiro espetáculo.</p>

            </div>

            <img id='jogadora-home' src="/assets/imgs/jogadora2.svg" alt="" className='scale-x-[-1] w-50' />

          </div>

          <Link href="/inscricoes" id='buttonInscricao-home' className='p-5 rounded-full hover:scale-110'>Inscreva-se</Link>

        </div>


        <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />


        <div id='secCinco-home' className='m-4 flex flex-col justify-around items-end'>

          <img src="/assets/imgs/nossosQuadros.png" alt="" className='w-45 mb-10' />

          <div id='quadros-home' className='flex flex-col items-center'>

            <div id='linksQuadros-home' className='w-2/5 h-4/5 hover:h-full'>

              <a href="https://www.instagram.com/p/DHYvIwyufzx/" className='flex flex-col justify-center items-center'>

                <h3>Cortes do PAB</h3>

                <img src="/assets/imgs/cortesDoPab.png" alt="" className='w-30' />

                <p className='h-[148.75px] '>Os melhores momentos do Passa a Bola em vídeos curtos e cheios de energia.</p>

              </a>

            </div>

            <div id="linhaQuadros-home">

              <div className='flex flex-col items-center'>

                <div id='linksQuadros-home' className='w-4/5 h-4/5 flex flex-col justify-center items-center hover:h-full w-full'>

                  <a href="https://www.youtube.com/playlist?list=PLxa3TGtdFp-3wep26gKSmx-lM3Z8_ZWvw">

                    <h3>Chega mais - Youtube</h3>

                    <img src="/assets/imgs/chegaMais.png" alt="" className='md:w-50' />

                    <p className='h-29 pt-5 md:h-20 -pt-10 w-[175px] '>Bate-papo descontraído sobre futebol e muito mais, com convidados especiais e muita resenha.</p>

                  </a>

                </div>



                <div id='linksQuadros-home' className='w-4/5 h-4/5 flex flex-col justify-center items-center hover:h-full'>

                  <a href="https://www.youtube.com/playlist?list=PLxa3TGtdFp-3RMHdpDdcM10NAPG35wrCS">

                    <h3>Faz gol ou passa a bola?</h3>

                    <img src="/assets/imgs/fazGolOuPassaABola.png" alt="" className='md:w-50' />

                    <p className='h-29 pt-5'>Desafios e entrevistas com jogadoras, ex-jogadoras e influenciadoras, testando seus conhecimentos e habilidades.</p>

                  </a>

                </div>

              </div>

              <div className='flex flex-col items-center'>

                <div id='linksQuadros-home' className='w-4/5 h-4/5 hover:h-full'>

                  <a href="https://www.youtube.com/playlist?list=PLxa3TGtdFp-3kuhXMlQPI80_mSqAQu8qO">

                    <h3>FALA, BEBÊ</h3>

                    <img src="/assets/imgs/falaBebe.png" alt="" className='w-90 h-30' />

                    <p className='h-26.5 pt-5'>Podcast que vai além das quatro linhas, com histórias, risadas e muito futebol feminino.</p>

                  </a>

                </div>

                <div id='linksQuadros-home' className='w-2/5 h-4/5 flex flex-col justify-center items-center hover:h-full'>

                  <a href="https://www.instagram.com/p/DHb3oXgy677/">

                    <h3>Chega mais - Instagram</h3>

                    <img src="/assets/imgs/chegaMaisInsta.png" alt="" className='w-30' />

                    <p className='md:h-[150px]'>Conteúdo rápido e divertido sobre o universo do futebol feminino, com memes, bastidores e muito mais.</p>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div id='secUlt-home'>

          <img src="/assets/imgs/formatos.png" alt="" />

        </div>

        <Rodape1 />

      </div>

    </>
  )
}

export default Home
