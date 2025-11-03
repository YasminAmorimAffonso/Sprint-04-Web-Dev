
import { useEffect, useState } from 'react';

import './Cabecalho1.css'

import { Link } from 'react-router-dom'

export default function Cabecalho1() {

  const [path, setPath] = useState("");

  const logged = localStorage.getItem("infosLogin");

  useEffect(() => {

    alternateLink();

  }, []);

  function alternateLink() {

    if (logged == true) {

      setPath("/minhaconta/");

    }

    else {

      setPath("/login")

    }

  }


  return (
    <>

      <nav className='fixed z-100 m-4 flex flex-row justify-around bg-[#EAE8E2] w-80 p-15 rounded-3xl py-3 px-6 shadow-[0_10px_25px_0px_#E26E8780]  md:w-189 ml-6 justify-evenly lg:w-375 justify-around ml-2 w-70' id='nav-cabecalho1'>

        <img src="/assets/imgs/logoColoridoSvg.svg" alt="Logo Colorido" className='w-12 md:w-16 lg:w-24' />

        <div className='flex flex-col md:justify-evenly lg:justify-evenly flex-row' id='div-cabecalho1'>

          <div className='flex flex-col justify-between items-center w-full md:w-100 justify-evenly lg:w-150 justify-around' id='divButtons-cabecalho1'>

            <div className='flex flex-row justify-around w-full'>

              <Link to="/" id="Link-cabecalho1" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#7F5DBD]"><p className='p-cabecalho1'>Home</p></Link>

              <Link to="/estamospassandoporreformas" id="Link-cabecalho1" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#7F5DBD] "><p className='p-cabecalho1'>Loja</p></Link>

            </div>

            <div className='flex flex-row justify-around w-full'>

              <Link to="/inscricao" id="Link-cabecalho1" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#7F5DBD] "><p className='p-cabecalho1'>Campeonatos</p></Link>

              <Link to="/estamospassandoporreformas" id="Link-cabecalho1" className="text-[10px] ease-in-out duration-300 p-2  duration-300 md:text-[15px] p-2 rounded-3xl rounded-2xl hover:bg-[#7F5DBD] "><p className='p-cabecalho1'>Sobre Nós</p></Link>

            </div>

          </div>


          <div className='flex flex-row justify-end items-center w-15 md:w-25 lg:w-75'>

            <Link to={path} className='w-3 h-3 mb-3 md:w-5 h-5 lg:mr-25'><img src="/assets/imgs/vetorSelfRoxo.png" alt="Vetor Self" /></Link>

            <Link to="/estamospassandoporreformas" className='w-6 h-6 md:w-10 h-10 mt-2'><img src="/assets/imgs/vetorCarrinhoRoxo.png" alt="Vetor Carrinho" /></Link>

          </div>


        </div>

      </nav>

    </>
  )
}


