

import { useEffect, useState } from 'react';

import "./Cabecalho2.css"

import { Link } from 'react-router-dom'

function Cabecalho2() {

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

            <nav id='nav-cabecalho2' className='fixed z-100 m-4 h-30 flex flex-row justify-around bg-[#6F3892] w-80 p-15 rounded-3xl py-3 px-6 shadow-[0_10px_25px_0px_#E26E8780]  md:w-189 ml-6 justify-evenly lg:w-375 justify-around ml-2 w-70' >

                <img src="/assets/imgs/logoBranca.svg" alt="Logo Branca" className='w-12 md:w-16 lg:w-24' />

                <div id='div-cabecalho2' className='flex flex-col md:justify-evenly lg:justify-evenly flex-row' >

                    <div id='divButtons-cabecalho2' className='flex flex-col justify-between items-center w-full md:w-100 justify-evenly lg:w-150 justify-around' >

                        <div className='flex flex-row justify-around w-full'>

                            <Link to="/" id="Link-cabecalho2" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#EAE8E2]"><p className='p-cabecalho2'>Home</p></Link>

                            <Link to="/estamospassandoporreformas" id="Link-cabecalho2" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#EAE8E2] "><p className='p-cabecalho2'>Loja</p></Link>

                        </div>

                        <div className='flex flex-row justify-around w-full'>

                            <Link to="/inscricao" id="Link-cabecalho2" className="text-[10px] ease-in-out duration-300 p-2 rounded-2xl md:text-[15px] p-2 rounded-3xl hover:bg-[#EAE8E2] "><p className='p-cabecalho2'>Campeonatos</p></Link>

                            <Link to="/estamospassandoporreformas" id="Link-cabecalho2" className="text-[10px] ease-in-out duration-300 p-2  duration-300 md:text-[15px] p-2 rounded-3xl rounded-2xl hover:bg-[#EAE8E2] "><p className='p-cabecalho2'>Sobre Nós</p></Link>

                        </div>

                    </div>


                    <div className='flex flex-row justify-end items-center w-15 md:w-25 lg:w-75'>


                        <Link to={path} className='w-3 h-3 mb-3 md:w-5 h-5 lg:mr-25'><img src="/assets/imgs/vetorSelfCreme.png" alt="Vetor Self" /></Link>

                        <Link to="/estamospassandoporreformas" className='w-6 h-6 md:w-10 h-10 mt-2'><img src="/assets/imgs/vetorCarrinhoCreme.png" alt="Vetor Carrinho" /></Link>

                    </div>


                </div>

            </nav>

        </>
    )
}

export default Cabecalho2
