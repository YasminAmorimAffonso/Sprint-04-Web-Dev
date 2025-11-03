
import Cabecalho2 from "./components/Cabecalho2"

import Rodape1 from "./components/Rodape1"

import { Link, useNavigate } from "react-router-dom";

import { supabase } from "./supabaseClient";

import { useState, useEffect } from "react";

import "./Login.css"

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [logged, setLogged] = useState(false);

    const [stateEye, setStateEye] = useState(false);

    const [eyeType, setEyeType] = useState("password");

    const navigate = useNavigate();


    useEffect(() => {

        const infosSalvas = localStorage.getItem("infosLogin");

        if (infosSalvas) {

            const { isLogged } = JSON.parse(infosSalvas);

            if (isLogged === true) {

                navigate("/minhaconta/");

            }

        }

    }, []);


    async function Login() {

        console.log("Tentando login com:", email, password);


        try {

            const { data, error } = await supabase

                .from("users")

                .select("*")

                .eq("email", email)

                .eq("password", password)

                .maybeSingle();

            if (error || !data) {

                alert("Ops! Alguma das informações fornecidas não corresponde com nenhum dos perfis registrados, por favor, reavalie o email e senha fornecidos.");

                return;

            }

            setLogged(true);

            const infosUser = { id: data.id, email: data.email, senha: data.password, isLogged: true };

            localStorage.setItem("infosLogin", JSON.stringify(infosUser));

            navigate("/minhaconta/");

        }

        catch (error) {

            alert("Erro ao tentar fazer login, por favor, tente novamente.");

        }
    }


    function changeStateEye() {

        setStateEye(!stateEye)

        if (stateEye == false) {

            setEyeType("password");
            

        } 

        else {

            setEyeType("text");

        }

    }

    return (

        <div className="flex flex-col items-center h-full bg-[#E3E0DC]">

            <Cabecalho2 />

            <div id="box-login" className="m-5 mb-20 mt-40 p-10 h-175 flex flex-col justify-around items-center rounded-[20px] shadow-[inset_0_2px_4px_#00000040] md:w-4/5">

                <img src="/assets/imgs/logoBranca.svg" alt="" className="w-25" />

                <h1 id="txt-login" className="font-[placard] text-3xl">Bem-Vindo(a)</h1>

                <h4 id="txt-login" className="font-[neubau] text-xl">Faça login para continuar</h4>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-login" className="font-[placard] text-xl">Email</label>

                    <input type="text" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                </div>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-login" className="font-[placard] text-xl">Senha</label>

                    <input type={eyeType} placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                    <button onClick={changeStateEye} id="eyePassword-login" className="relative translate-x-12.5 -translate-y-8.5"><img src="/assets/imgs/olhoVerde.png" alt="button exibir senha" className="w-5"/></button>


                </div>

                <Link to="/redefinirSenha" id="txt-login" >Esqueci minha senha</Link>

                <button id="button-login" onClick={Login} className="m-5 p-3 w-30 rounded-full font-[placard] text-2xl">Login</button>

                <p id="txt-login" className="text-center font-[neubau] md: text-xl">Ainda não possui uma conta? <Link to="/cadastro" id="Link-login">Cadastre-se</Link></p>



            </div>


            <Rodape1 />

        </div>

    );

}