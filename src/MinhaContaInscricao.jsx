

import Cabecalho2 from "./components/Cabecalho2";


import Rodape1 from "./components/Rodape1";


import { Link, useNavigate } from 'react-router-dom'


import "./MinhaContaInscricao.css"

import { supabase } from "./supabaseClient";

import { useEffect, useState } from "react";



export default function MinhaContaInscrição() {

    const [infos, setInfos] = useState([]);

    const [nome, setNome] = useState("");

    const infosFetch = JSON.parse(localStorage.getItem("infosLogin") || "{}");

    const navigate = useNavigate();

    useEffect(() => {

        nomeFetch();

        fetchInscricao();

    }, []);

    useEffect(() => {

        console.log(infos);


    }, [infos]);


    async function nomeFetch() {

        const { data } = await supabase

            .from("users")

            .select("name,lastName")

            .eq("id", infosFetch.id)

            .single();

        const nomeComp = data.name + " " + data.lastName;

        setNome(nomeComp);


    }


    async function fetchInscricao() {

        const { data, error } = await supabase

            .from("inscricoes")

            .select("*")

            .or(`nomeTitular.ilike.%${nome}%,nomeReserva.ilike.%${nome}%`);

        if (error) {

            console.error("Erro ao buscar inscrição:", error);

        }

        else {

            setInfos(data);
        }


    }



    function Logoff() {

        const infosLocalStorage = JSON.parse(localStorage.getItem("infosLogin"));

        if (infosLocalStorage) {

            infosLocalStorage.id = null;

            infosLocalStorage.email = "";

            infosLocalStorage.senha = "";

            infosLocalStorage.isLogged = false;


            localStorage.setItem("infosLogin", JSON.stringify(infosLocalStorage));

            navigate("/login");

        }

    }


    return (


        <div className="flex flex-col items-center w-full h-full bg-[#E3E0DC]">

            <Cabecalho2 />

            <div id="content-MCInscricao" className="m-0 h-250 pt-45 flex flex-col items-center justify-center w-full">


                <div id="menu-MCInscricao" className="h-35 flex flex-col justify-around items-center lg:-mt-[450px]">


                    <h1 id="tituloRoxo-MCInscricao" className="text-[35px] font-[placard]">Minha Conta</h1>

                    <div id="submenu-MCInscricao" className="w-[350px] flex flex-row justify-around items-center">

                        <Link to="/minhaconta/" id="regular-MCInscricao" className="font-[placard] text-[25px] hover:scale-110">Meus Dados</Link>

                        <Link to="/minhaconta/inscricoes" id="selected-MCInscricao" className="font-[placard] p-4 rounded-full  text-[25px] hover:scale-110">Inscrições</Link>

                    </div>

                    <button onClick={Logoff} id="buttonSair-MCInscricao" className="flex flex-row justify-center items-center lg:mt-25 hover:cursor-pointer"><img src="/assets/imgs/logoff.png" alt="" className="w-20 pt-3" /> <p className="font-[placard] text-[25px]">Sair</p></button>

                </div>

                <img src="/assets/imgs/divisoria3.png" alt="" id="divisoria-MCInscricao" className="w-4/5 m-10" />

                <div id="secaoCard-MCInscricao" className="h-4/5 w-full -mb-[100px] p-10 flex flex-col items-center">

                    <h1 id="tituloRosa-MCInscricoes" className="text-[35px] mb-[100px] font-[placard]">Informações da Inscrição</h1>

                    <div className="h-4/5 w-full -mb-[200px] p-10 flex flex-col items-center overflow-y-auto shadow-[inset_0_4px_8px_rgba(0,0,0,0.25)] rounded-2xl">

                        {!infos ? <p>Você não está inscrito(a) em nenhum campeonato!</p> : infos.map((info) => (

                            <div id="cardVerde-MCInscricao" className="rounded-2xl h-2/8 p-10 flex flex-col justify-around items-center m-10">


                                <h1 id="txt-MCInscricao" className="text-[30px]">{info.nomeTime}</h1>

                                <div className="flex flex-row justify-around w-full">

                                    <div className="flex flex-col items-center">

                                        <h2 id="txt-MCInscricao">Categoria</h2>

                                        <p id="txt-MCInscricao">{info.categoriaTime}</p>

                                    </div>

                                    <div className="flex flex-col items-center">

                                        <h2 id="txt-MCInscricao">Posição</h2>

                                        <p id="txt-MCInscricao">{info.nomeTitular == nome ? "Titular" : "Reserva"}</p>

                                    </div>

                                </div>

                            </div>



                        ))}


                    </div>

                </div>


            </div>

            <Rodape1 />

        </div>



    );

}