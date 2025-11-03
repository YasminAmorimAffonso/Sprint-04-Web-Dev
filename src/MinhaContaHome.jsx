


import Cabecalho2 from "./components/Cabecalho2";

import Rodape1 from "./components/Rodape1";

import { Link, useNavigate } from 'react-router-dom'

import "./MinhaContaHome.css"

import { supabase } from "./supabaseClient";

import { useEffect, useState } from "react";




export default function MinhaContaHome() {

    const [infos, setInfos] = useState({});

    const [name, setName] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [birthday, setBirthday] = useState("");

    const [genero, setGenero] = useState("");

    const [telephone, setTelephone] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [stateEye, setStateEye] = useState(false);

    const navigate = useNavigate();

    const infosFetch = JSON.parse(localStorage.getItem("infosLogin") || "{}");

 





    useEffect(() => {

        if (infosFetch && infosFetch.email) {

            verifyInfo();


        } else {

            console.error("Nenhum login encontrado, por favor, faça o login novamente.");

            localStorage.removeItem("infosLogin");

            navigate("/login");

        }

    }, []);


    useEffect(() => {

        if (infos) {

            if (infos?.name) {
                setName(infos.name);
            }

            if (infos?.lastName) {
                setLastName(infos.lastName);
            }

            if (infos?.email) {
                setEmail(infos.email);
            }

            if (infos?.password) {
                setPassword(infos.password);
            }

            if (infos?.birthday) {
                setBirthday(infos.birthday);
            }

            if (infos?.genero) {
                setGenero(infos.genero);
            }

            if (infos?.telephone) {
                setTelephone(infos.telephone);
            }




        }


    }, [infos]);


    async function verifyInfo() {

        try {

            const { data, error } = await supabase

                .from("users")

                .select("*")

                .eq("id", infosFetch.id)

                .single();

            if (error) {

                throw error;

            }

            setInfos(data);


        } catch (error) {

            console.error(error);

            alert("Erro em localizar as informações, por favor, reinicie a página.")

        }
    }


    const editInfo = async (e) => {

        e.preventDefault();

        if (!infosFetch?.id) {

            alert("Usuário não identificado. Faça login novamente.");

            return;

        }

        setIsSubmitting(true);


        try {

            const updates = {

                name: name || infos.name,

                lastName: lastName || infos.lastName,

                email: email || infos.email,

                password: password || infos.password,

                birthday: birthday || infos.birthday,

                genero: genero || infos.genero,

                telephone: telephone || infos.telephone,

            };

            const { data, error } = await supabase

                .from("users")

                .update(updates)

                .eq("id", infosFetch.id)

                .select();

            if (error) throw error;

            if (data && data.length > 0) {

                setInfos(data[0]);

                localStorage.setItem("infosLogin", JSON.stringify(data[0]));


                alert("Informações atualizadas com sucesso!");


                const novoNomeCompleto = `${updates.name} ${updates.lastName}`;

                const nomeAntigoCompleto = `${infos.name} ${infos.lastName}`;

                const novoAniversario = updates.birthday;

                const aniversarioAntigo = infos.birthday;

                const nomeMudou = novoNomeCompleto !== nomeAntigoCompleto;

                const aniversarioMudou = novoAniversario !== aniversarioAntigo;


                if (nomeMudou || aniversarioMudou) {

                    const { data: inscricoes, error: inscricoesError } = await supabase

                        .from("inscricoes")

                        .select("*")

                        .or(`nomeTitular.ilike.%${nomeAntigoCompleto}%,nomeReserva.ilike.%${nomeAntigoCompleto}%`);

                    if (inscricoesError) throw inscricoesError;

                    if (!inscricoes || inscricoes.length === 0) {

                        console.log("Nenhuma inscrição com o nome e/ou data de nascimento foi encontrada, tente novamente.");

                        return;
                    }


                    if (nomeMudou && !aniversarioMudou) {

                        for (const i of inscricoes) {

                            if (i.nomeTitular === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({ nomeTitular: novoNomeCompleto })

                                    .eq("id", i.id);

                            }


                            if (i.nomeReserva === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({ nomeReserva: novoNomeCompleto })

                                    .eq("id", i.id);

                            }

                        }

                    }


                    if (!nomeMudou && aniversarioMudou) {

                        for (const i of inscricoes) {

                            if (i.nomeTitular === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({ nascTitular: novoAniversario })

                                    .eq("id", i.id);

                            }

                            if (i.nomeReserva === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({ nascReserva: novoAniversario })

                                    .eq("id", i.id);

                            }

                        }

                    }


                    if (nomeMudou && aniversarioMudou) {

                        for (const i of inscricoes) {

                            if (i.nomeTitular === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({

                                        nomeTitular: novoNomeCompleto,

                                        nascTitular: novoAniversario,

                                    })

                                    .eq("id", i.id);

                            }


                            if (i.nomeReserva === nomeAntigoCompleto) {

                                await supabase

                                    .from("inscricoes")

                                    .update({

                                        nomeReserva: novoNomeCompleto,

                                        nascReserva: novoAniversario,

                                    })

                                    .eq("id", i.id);

                            }

                        }

                    }

                }


            }
            else {

                alert("Houve um erro ao enviar suas informações")

            }

        }

        catch (error) {

            console.error(error);

            alert("Erro ao atualizar informações. Tente novamente.");

        }

        finally {

            setIsSubmitting(false);

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

            <div id="content-MCHome" className="m-0 h-full pt-45 flex flex-col items-center justify-center w-full lg:w-full">

                <div id="menu-MCHome" className="h-35 flex flex-col justify-around items-center">

                    <h1 id="tituloRoxo-MCHOME" className="text-[35px] font-[placard]">Minha Conta</h1>

                    <div id="submenu-MCHome" className="w-[350px] flex flex-row justify-around items-center">

                        <Link to="/minhaconta/" id="selected-MCHOME" className="font-[placard] text-[25px] p-4 rounded-full hover:scale-110">Meus Dados</Link>

                        <Link to="/minhaconta/inscricoes" id="regular-MCHOME" className="font-[placard] text-[25px] hover:scale-110">Inscrições</Link>

                    </div>

                    <button onClick={Logoff} id="buttonSair-MCHome" className="flex flex-row justify-center items-center lg:mt-25 hover:cursor-pointer"><img src="/assets/imgs/logoff.png" alt="" className="w-20 pt-3" /> <p className="font-[placard] text-[25px]">Sair</p></button>

                </div>

                <img src="/assets/imgs/divisoria3.png" alt="" id="divisoria-MCHome" className="w-4/5 m-10" />


                <div className="h-full p-5 pb-20 flex flex-col justify-around items-center">


                    <h1 id="tituloRosa-MCHOME" className="font-[placard] text-[35px] m-10">Meus dados</h1>


                    <div id="cardVerde-MCHome" className="h-full p-20 rounded-2xl lg:w-[1000px] flex flex-col">

                        <div className="h-full flex flex-col justify-around items-center lg:-ml-7">

                            <div className="h-35 flex flex-col justify-around items-baseline lg:mr-3">

                                <label className="font-[placard] text-[30px]">Nome</label>

                                <input type="text" name="" id="" value={name}
                                    disabled={isSubmitting} onChange={(e) => setName(e.target.value)} className="rounded-[20px] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] md:w-[600px] lg:w-[300px]" />

                            </div>


                            <div className="h-35 flex flex-col justify-around items-baseline">

                                <label className="font-[placard] text-[30px]">Sobrenome</label>

                                <input type="text" name="" id="" value={lastName}
                                    disabled={isSubmitting} onChange={(e) => setLastName(e.target.value)} className="rounded-[20px] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] md:w-[600px]" />

                            </div>


                        </div>


                        <div id="campoEmail-MCHome" className="h-35 flex flex-col justify-around items-baseline lg:-ml-[30px]">

                            <label className="font-[placard] text-[30px]">Email</label>

                            <input type="text" name="" id="" value={email}
                                disabled={isSubmitting} onChange={(e) => setEmail(e.target.value)} className="rounded-[20px] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] md:w-[600px] lg:w-[915px]" />

                        </div>

                        <div className="flex flex-col justify-around items-baseline">

                            <div className="h-35 flex flex-col justify-around items-baseline lg:mr-3 -ml-[30px]">

                                <label className="font-[placard] text-[30px]">Senha</label>

                                <input type="password" name="" id="" value={password}
                                    disabled={isSubmitting} onChange={(e) => setPassword(e.target.value)} className="rounded-[20px] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] md:w-[600px] lg:w-[450px]" />

                                    <img src="/public/assets/imgs/" alt="" />

                            </div>


                            <div className="h-35 flex flex-col justify-around items-baseline">

                                <label className="font-[placard] text-[30px]">Data de Nascimento</label>

                                <input type="text" name="" id="" value={birthday}
                                    disabled={isSubmitting} onChange={(e) => setBirthday(e.target.value)} className="rounded-[20px] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] md:w-[600px] lg:w-[450px]" />

                            </div>

                        </div>

                        <div className="flex flex-col justify-around items-baseline">

                            <div className="h-35 flex flex-col justify-around items-baseline lg:mr-3 -ml-[30px]">

                                <label className="font-[placard] text-[30px]">Gênero</label>

                                <select value={genero} onChange={(e) => setGenero(e.target.value)} disabled={isSubmitting} className="bg-[#E3E0DC] bg-[#E3E0DC] shadow-[inset_0_2px_4px_#00000040] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-[600px] lg:w-[450px]">

                                    <option value="" disabled>Selecione o gênero</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>

                                    <option value="Prefiro não Informar">Prefiro não Informar</option>

                                </select>

                            </div>


                            <div className="h-35 flex flex-col justify-around items-baseline">

                                <label className="font-[placard] text-[30px]">Telefone</label>

                                <input type="text" name="" id="" value={telephone}
                                    disabled={isSubmitting} onChange={(e) => setTelephone(e.target.value)} className="rounded-[20px] bg-[#E3E0DC]  shadow-[inset_0_2px_4px_#00000040] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-[600px] lg:w-[450px]" />

                            </div>

                        </div>

                        <button id="botao-MCHome" onClick={editInfo} disabled={isSubmitting} className="m-5 p-5 rounded-full w-35 text-[20px] font-[placard] hover:scale-110 lg:ml-[750px]">{isSubmitting ? "Salvando..." : "Salvar"}</button>



                    </div>

                </div>

            </div>

            <Rodape1 />

        </div>

    );

}