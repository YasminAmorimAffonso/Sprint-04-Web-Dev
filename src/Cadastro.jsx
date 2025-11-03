
import Cabecalho2 from "./components/Cabecalho2"

import Rodape1 from "./components/Rodape1"

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { supabase } from "./supabaseClient";

import "./Cadastro.css"

export default function Cadastro() {

    const [error, setError] = useState(null);

    const [newName, setNewName] = useState('');

    const [newLastName, setNewLastName] = useState('');

    const [newEmail, setNewEmail] = useState('');

    const [newPassword, setNewPassword] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();



    async function handleAddItem(e) {

        e?.preventDefault();

        if (!newName.trim() || !newLastName.trim() || !newEmail.trim() || !newPassword.trim()) {

            alert('Por favor, preencha todos os campos!');

            return;
        }
        try {

            setIsSubmitting(true);

            setError(null);

            const { error } = await supabase

            .from('users')

            .insert([{ name: newName, lastName: newLastName, email: newEmail, password: newPassword, birthday: "", genero: "", telephone: "" }]);

            if (error) {

                throw error;
            }

            else if (!error) {

                alert("Cadastro realizado com sucesso! você agora será redirecionado(a) para a página de login");

                setNewName("");

                setNewLastName("");

                setNewEmail("");

                setNewPassword("");

                navigate("/login");

            }

        } catch (error) {

            setError(error.message);

        } finally {

            setIsSubmitting(false);

        }
    }


    return (

        <div className="flex flex-col items-center h-full bg-[#E3E0DC]">

            <Cabecalho2 />

            <div id="box-cadastro" className="m-5 mb-20 mt-40 p-10 h-225 flex flex-col justify-around items-center rounded-[20px] shadow-[inset_0_2px_4px_#00000040] md: w-4/5">

                <img src="/assets/imgs/logoBranca.svg" alt="" className="w-25" />

                <h1 id="txt-cadastro" className="font-[placard] text-3xl">É novo(a) por aqui?</h1>

                <h4 id="txt-cadastro" className="font-[neubau] text-xl">Crie uma conta</h4>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-cadastro" className="font-[placard] text-xl">Nome</label>

                    <input type="text" value={newName} disabled={isSubmitting} onChange={(e) => setNewName(e.target.value)} placeholder="Maria" className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                </div>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-cadastro" className="font-[placard] text-xl">Sobrenome</label>

                    <input type="text" value={newLastName} disabled={isSubmitting} onChange={(e) => setNewLastName(e.target.value)} placeholder="da Silva" className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                </div>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-cadastro" className="font-[placard] text-xl">Email</label>

                    <input type="text" value={newEmail} disabled={isSubmitting} onChange={(e) => setNewEmail(e.target.value)} placeholder="email@gmail.com" className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                </div>

                <div className="flex flex-col justify-around items-center h-1/5 m-5">

                    <label htmlFor="" id="txt-cadastro" className="font-[placard] text-xl">Senha</label>

                    <input type="password" value={newPassword} disabled={isSubmitting} onChange={(e) => setNewPassword(e.target.value)} placeholder="Insira sua senha" className="bg-[#E3E0DC] rounded-full shadow-[inset_0_2px_4px_#00000040] p-3 placeholder: font-[neubau] text-gray-500 md:w-125" />


                </div>

                <button type="submit" id="button-cadastro" className="m-5 p-3 w-30 rounded-full font-[placard] text-2xl hover:scale-110" onClick={handleAddItem}> Cadastrar </button>

                <p id="txt-cadastro" className="text-center font-[neubau] md: text-xl">Já possui uma conta? Faça <Link to="/login" id="Link-cadastro">login</Link></p>

            </div>

            <Rodape1 />

        </div>

    );

}