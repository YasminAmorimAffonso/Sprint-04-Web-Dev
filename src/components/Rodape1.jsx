
import './Rodape1.css'

import { Link } from 'react-router-dom'

function Rodape1() {


    return (
        <>

            <footer className='w-full flex flex-col justify-center items-center pb-10 pt-10 md:flex-' id='footer-rodape1'>

                <div id='cima-rodape' className='w-full flex flex-col justify-center items-center'>

                    <img src="/assets/imgs/logoBranca.svg" alt="" className='w-25' id='logo-rodape'/>

                    <div className='w-full h-75 flex flex-col justify-around items-center' id='meio-rodape1'>

                        <img src="/assets/imgs/divisoria3.png" alt="" className='w-75' id='divisoria-rodape' />

                        <div className='w-full flex flex-col justify-around items-center h-25' id='buttons-rodape'>

                            <div className='flex flex-row justify-around items-center w-68 '>

                                <Link to="/"><p id='p-rodape1' className='font-[neubau] text-[20px]'>Home</p></Link>

                                <Link><p id='p-rodape1' className='font-[neubau] text-[20px]'>Campeonatos</p></Link>

                            </div>

                            <div className='flex flex-row justify-around items-center w-75 '>

                                <Link to="/estamospassandoporreformas"><p id='p-rodape1' className='font-[neubau] text-[20px]'>Sobre Nós</p></Link>

                                <Link to="/estamospassandoporreformas"><p id='p-rodape1' className='font-[neubau] text-[20px]'>Loja</p></Link>

                            </div>

                        </div>

                        <img src="/assets/imgs/divisoria3.png" alt="" className='w-75'id='divisoria-rodape'/>

                    </div>

                    <div className='w-full h-75 flex flex-col justify-around items-center'>

                        <h2 id='titulo-rodape1' className='font-[placard] font-bold text-[30px]'>Nossas redes</h2>

                        <div id='icons-rodape' className='w-full h-75 flex flex-row justify-evenly items-center'>

                            <a href="https://www.instagram.com/passaabola/"><img src="/assets/imgs/vetorInstagram.png" alt="Instagram" className='w-20'/></a>

                            <a href="https://www.youtube.com/@passabola"><img src="/assets/imgs/vetorYoutube.png" alt="Youtube" className='w-25'/></a>

                        </div>

                        <div id='icons-rodape' className='w-full h-75 flex flex-row justify-evenly items-center mr-7'>

                            <a href="https://www.tiktok.com/@passabola"><img src="/assets/imgs/vetorTikTok.png" alt="Tik Tok" className='w-25'/></a>

                            <a href="https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr"><img src="/assets/imgs/vetorSpotify.png" alt="Spotify" className='w-17'/></a>

                        </div>

                    </div>

                </div>

                <img src="/assets/imgs/divisoria3.png" alt="" className='w-75' id='divisoriaBaixo-rodape'/>

                <p id='p-rodape1'className='p-4 font-[placard] text-[25px] font-extralight'>@2025 - Passa a Bola</p>


            </footer>

        </>
    )
}

export default Rodape1
