


import { useState } from "react";

import { supabase } from "./supabaseClient";

import Cabecalho1 from "./components/Cabecalho1"

import Rodape1 from "./components/Rodape1"

import "./Inscricao.css"


export default function Inscricao() {


    const [nomeResp, setNomeResp] = useState("");

    const [emailResp, setEmailResp] = useState("");

    const [telephoneResp, setTelephoneResp] = useState("");

    const [cidade, setCidade] = useState("");

    const [cep, setCep] = useState("");

    const [endereco, setEndereco] = useState("");

    const [numResResp, setNumResResp] = useState();

    const [nomeTime, setNomeTime] = useState("");

    const [categoria, setCategoria] = useState("");

    const [numIntegrantes, setNumIntegrantes] = useState();

    const [nomeTitular, setNomeTitular] = useState("");

    const [cpfTitular, setCpfTitular] = useState("");

    const [nascTitular, setNascTitular] = useState("");

    const [nomeReserva, setNomeReserva] = useState("");

    const [cpfReserva, setCpfReserva] = useState("");

    const [nascReserva, setNascReserva] = useState("");

    const [nomeTecnico, setNomeTecnico] = useState("");

    const [cpfTecnico, setCpfTecnico] = useState("");

    const [nascTecnico, setNascTecnico] = useState("");

    const [nomeMassagista, setNomeMassagista] = useState("");

    const [cpfMassagista, setCpfMassagista] = useState("");

    const [nascMassagista, setNascMassagista] = useState("");


    const [isSubmitting, setIsSubmitting] = useState(false);


    async function addInscricao(e) {

        e?.preventDefault();

        if (!nomeResp.trim() && !emailResp.trim() && !telephoneResp.trim() && !cidade.trim() && !cep.trim() && !endereco.trim() && !numResResp.trim() && !nomeTime.trim() && !categoria.trim() && !numIntegrantes.trim() && !nomeTitular.trim() && !cpfTitular.trim() && !nascTitular.trim() && !nomeReserva.trim() && !cpfReserva.trim() && !nascReserva.trim() && !nomeTecnico.trim() && !cpfTecnico.trim() && !nascTecnico.trim() && !nomeMassagista.trim() && !cpfMassagista.trim() && !nascMassagista.trim()) {

            alert('Por favor, preencha todos os campos!');

            return;
        }

        if (!nomeResp.trim()) {

            alert('Por favor, preencha o seguinte campo: nome do responsável');

            return;
        }

        if (!emailResp.trim()) {

            alert('Por favor, preencha o seguinte campo: email do responsável');

            return;
        }


        if (!telephoneResp.trim()) {
            
            alert('Por favor, preencha o seguinte campo: telefone do responsável');

            return;
        }


        if (!cidade.trim()) {
            
            alert('Por favor, preencha o seguinte campo: cidade de residência do responsável');

            return;
        }


        if (!cep.trim()) {
            
            alert('Por favor, preencha o seguinte campo: CEP do responsável');

            return;
        }


        if (!endereco.trim()) {
            
            alert('Por favor, preencha o seguinte campo: endereço do responsável');

            return;
        }


        
        if (!numResResp.trim()) {
            
            alert('Por favor, preencha o seguinte campo: número da residência do responsável');

            return;
        }


        if (!nomeTime.trim()) {
            
            alert('Por favor, preencha o seguinte campo: nome do time');

            return;
        }


        if (!categoria.trim()) {
            
            alert('Por favor, preencha o seguinte campo: categoria do time');

            return;
        }



        if (!numIntegrantes.trim()) {
            
            alert('Por favor, preencha o seguinte campo: número de integrantes do time');

            return;
        }


        if (!nomeTitular.trim()) {
            
            alert('Por favor, preencha o seguinte campo: nome da jogadora titular');

            return;
        }



        if (!cpfTitular.trim()) {
            
            alert('Por favor, preencha o seguinte campo: CPF ds jogadora titular');

            return;
        }


        if (!nascTitular.trim()) {
            
            alert('Por favor, preencha o seguinte campo: data de nascimento da jogadora titular');

            return;
        }


        if (!nomeReserva.trim()) {
            
            alert('Por favor, preencha o seguinte campo: nome da jogadora reserva');

            return;
        }


        if (!cpfReserva.trim()) {
            
            alert('Por favor, preencha o seguinte campo: CPF da jogadora reserva');

            return;
        }


        if (!nascReserva.trim()) {
            
            alert('Por favor, preencha o seguinte campo: data de nascimento da jogadora reserva');

            return;
        }


        if (!nomeTecnico.trim()) {
            
            alert('Por favor, preencha o seguinte campo: nome do técnico');

            return;
        }


        if (!cpfTecnico.trim()) {
            
            alert('Por favor, preencha o seguinte campo: CPF do técnico');

            return;
        }


        if (!nascTecnico.trim()) {
            
            alert('Por favor, preencha o seguinte campo: data de nascimento do técnico');

            return;
        }


        if (!nomeMassagista.trim()) {
            
            alert('Por favor, preencha o seguinte campo: nome do massagista');

            return;
        }


        if (!cpfMassagista.trim()) {
            
            alert('Por favor, preencha o seguinte campo: CPF do massagista');

            return;
        }


        if (!nascMassagista.trim()) {
            
            alert('Por favor, preencha o seguinte campo: data de nascimento do massagista');

            return;
        }








        try {

            setIsSubmitting(true);

            const { error } = await supabase

                .from('inscricoes')

                .insert([{ nomeResponsavel: nomeResp, emailResponsavel: emailResp, telefoneResponsavel: telephoneResp, cidadeResponsavel: cidade, cepResponsavel: cep, enderecoResponsavel: endereco, numEndResponsavel: numResResp, nomeTime: nomeTime, categoriaTime: categoria, numIntegrantesTime: numIntegrantes, nomeTitular: nomeTitular, cpfTitular: cpfTitular, nascTitular: nascTitular, nomeReserva: nomeReserva, cpfReserva: cpfReserva, nascReserva: nascReserva, nomeTecnico: nomeTecnico, cpfTecnico: cpfTecnico, nascTecnico: nascTecnico, nomeMassagista: nomeMassagista, cpfMassagista: cpfMassagista, nascMassagista: nascMassagista }]);

            if (error) {

                throw error;
            }

            else if (!error) {

                alert("Inscrição realizada com sucesso!");

                setNomeResp("");

                setEmailResp("");

                setTelephoneResp("");
            
                setCidade("");
            
                setCep("");
            
                setEndereco("");
            
                setNumResResp();
            
                setNomeTime("");
            
                setCategoria("");
            
                setNumIntegrantes();
            
                setNomeTitular("");
            
                setCpfTitular("");
            
                setNascTitular("");
            
                setNomeReserva("");
            
                setCpfReserva("");
            
                setNascReserva("");
            
                setNomeTecnico("");
            
                setCpfTecnico("");
            
                setNascTecnico("");
            
                setNomeMassagista("");
            
                setCpfMassagista("");
            
                setNascMassagista("");

            }

        } catch (error) {

            console.error(error.message);

        } finally {

            setIsSubmitting(false);

        }

    }




    return (

        <div className="flex flex-col items-center w-full h-full bg-[#E3E0DC]">

            <Cabecalho1 />

            <div id="content-inscricao" className="m-0 flex flex-col items-center justify-center w-full">

                <img src="/assets/imgs/divisoria1.png" alt="" className='absolute -mt-1350 h-[25px] md:-mt-1390 h-[250px] lg:-mb-[450px] h-[500px] w-full' />

                <div id="secao1-inscricao" className="pt-35 h-full w-full flex flex-row items-center p-4 m-0 md:w-100 lg:pt-50">

                    <img src="/assets/imgs/jogadora2.svg" alt="" className="w-50 -mr-[20px] md:w-100 lg:w-250 -mr-[45px]" />

                    <img src="/assets/imgs/voceTambemPodeSeTornarUmaCampea.png" alt="" className="w-35 h-full -mt-[50px] md:w-80 mt-[0px] ml-[0px] lg:w-150 mr-[200px] mb-[250px]" />

                </div>

                <div className="pt-35 flex flex-col items-center justify-around h-150">

                    <img src="/assets/imgs/conhecaOCampeonatoDoPab.png" alt="Conheça o Campeonato do PAB" className="w-125" />

                    <p>O Campeonato Passa a Bola é mais do que um torneio — é um movimento que impulsiona o futebol feminino e dá visibilidade a novas jogadoras, equipes e histórias inspiradoras. Criado para fortalecer a comunidade e ampliar o espaço das mulheres no esporte, o campeonato reúne times de diferentes regiões em partidas cheias de energia, talento e emoção. Além da disputa em campo, o evento promove integração, representatividade e oportunidades reais para quem vive o futebol com paixão. Quer fazer parte dessa história? Monte seu time, inscreva-se e venha jogar com a gente!</p>

                </div>

                <div className="pt-35 flex flex-col items-center justify-around mt-50 h-150 lg:mt-0">

                    <img src="/assets/imgs/inscrevase.png" alt="Inscreva-se" className="w-65" />

                    <p>Está pronta para entrar em campo? A inscrição para o Campeonato do Passa a Bola é simples e rápida! Preencha as informações pessoais do responsável pela equipe e, em seguida, adicione os dados do seu time, com o nome e as jogadoras que farão parte da competição. Depois, informe as titulares e reservas, além do/a técnico/a e do/a massagista, garantindo que toda a equipe esteja registrada corretamente. Reúna seu grupo, envie suas informações e prepare-se para viver a experiência única de fazer parte do campeonato que celebra o futebol feminino em sua essência!</p>

                </div>

                <div className="pt-35 w-10/9 flex flex-col items-center justify-around h-full mt-50 lg:mt-0">

                    <h2>Informações Pessoais</h2>

                    <div id="card-inscricao" className="h-200 w-6/7 flex flex-col">

                        <div className="h-50 flex flex-col justify-around">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Nome do responsável</label>

                                <input type="text" value={nomeResp} disabled={isSubmitting} onChange={(e) => setNomeResp(e.target.value)}  placeholder="Insira o nome do responsável" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />


                            </div>


                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Email</label>

                                <input type="text" value={emailResp} disabled={isSubmitting} onChange={(e) =>  setEmailResp(e.target.value)} placeholder="Insira o email do responsável" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            </div>

                        </div>

                        <div className="h-full flex flex-col justify-around">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Telefone</label>

                                <input type="text" value={telephoneResp} disabled={isSubmitting} onChange={(e) =>  setTelephoneResp(e.target.value)} placeholder="(00) 00000 - 0000" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            </div>


                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Cidade</label>

                                <select id="cidade" value={cidade} disabled={isSubmitting} onChange={(e) => setCidade(e.target.value)} className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full">

                                    <option value="" disabled>Selecione uma cidade</option>

                                    <option value="São Paulo">São Paulo</option>

                                    <option value="Campinas">Campinas</option>

                                    <option value="Santos">Santos</option>

                                    <option value="Santo André">Santo André</option>

                                    <option value="São Bernardo do Campo">São Bernardo do Campo</option>

                                    <option value="São Caetano">São Caetano</option>

                                    <option value="São José dos Campos">São José dos Campos</option>

                                    <option value="Ribeirão Preto">Ribeirão Preto</option>

                                    <option value="Sorocaba">Sorocaba</option>

                                    <option value="Santo André">Santo André</option>

                                    <option value="Osasco">Osasco</option>

                                    <option value="Guarulhos">Guarulhos</option>

                                    <option value="Bauru">Bauru</option>

                                    <option value="Mogi das Cruzes">Mogi das Cruzes</option>

                                    <option value="Piracicaba">Piracicaba</option>

                                    <option value="Jundiaí">Jundiaí</option>

                                    <option value="Marília">Marília</option>

                                    <option value="Taubaté">Taubaté</option>

                                    <option value="Presidente Prudente">Presidente Prudente</option>

                                    <option value="Franca">Franca</option>

                                    <option value="São Caetano do Sul">São Caetano do Sul</option>

                                    <option value="Araraquara">Araraquara</option>

                                </select>




                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">CEP</label>

                                <input type="text" value={cep} disabled={isSubmitting} onChange={(e) => setCep(e.target.value)} name="" id="" placeholder="00000 - 000" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            </div>

                        </div>

                        <div className="h-50 flex flex-col justify-around">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Endereço</label>

                                <input type="text" value={endereco} disabled={isSubmitting} onChange={(e) => setEndereco(e.target.value)} name="" id="" placeholder="Insira o endereço do responsável" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Número</label>

                                <input type="text" value={numResResp} disabled={isSubmitting} onChange={(e) => setNumResResp(e.target.value)} name="" id="" placeholder="Número da residência" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            </div>

                        </div>

                    </div>

                    <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />

                    <div className="flex flex-col items-center">

                        <h2>Informações Time</h2>

                        <div id="card-inscricao" className="h-100 w-85 flex flex-col items-center md:w-190 lg:w-[1425px]">

                            <label htmlFor="">Nome do time</label>

                            <input type="text" value={nomeTime} disabled={isSubmitting} onChange={(e) => setNomeTime(e.target.value)} placeholder="Insira o nome do time" className="bg-[#E3E0DC] rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                            <div className="h-full flex flex-col justify-around items-center">

                                <div className="h-15 flex flex-col justify-around items-center">

                                    <label htmlFor="">Categoria</label>

                                    <select id="categoria" value={categoria} disabled={isSubmitting} onChange={(e) => setCategoria(e.target.value)} className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" >

                                        <option value="" disabled>Selecione a categoria</option>

                                        <option value="Sub-18">Sub-18</option>

                                        <option value="Adulto">Adulto</option>

                                    </select>


                                </div>

                                <div className="h-15 flex flex-col justify-around items-center">

                                    <label htmlFor="">Número de integrantes</label>

                                    <select id="numeroJogadoras" value={numIntegrantes} disabled={isSubmitting} onChange={(e) => setNumIntegrantes(e.target.value)} className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" >

                                        <option disabled selected>Selecione o número de jogadoras</option>

                                        <option value={11}>11</option>

                                        <option value={12}>12</option>

                                        <option value={13}>13</option>

                                        <option value={14}>14</option>

                                        <option value={15}>15</option>

                                        <option value={16}>16</option>

                                        <option value={17}>17</option>

                                        <option value={18}>18</option>

                                        <option value={19}>19</option>

                                        <option value={20}>20</option>

                                        <option value={21}>21</option>

                                        <option value={22}>22</option>

                                        <option value={23}>23</option>

                                    </select>

                                </div>

                            </div>

                        </div>

                    </div>

                    <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />

                    <h2>Titulares</h2>

                    <div id="card-inscricao" className="h-100 w-6/7 flex flex-col">

                        <div className="h-15 flex flex-col justify-around items-center">

                            <label htmlFor="">Nome completo</label>

                            <input type="text" value={nomeTitular} disabled={isSubmitting} onChange={(e) => setNomeTitular(e.target.value)} placeholder="Insira um nome" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                        </div>

                        <div className="h-50 flex flex-col justify-around items-center">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">CPF</label>

                                <input type="text" value={cpfTitular} disabled={isSubmitting} onChange={(e) => setCpfTitular(e.target.value)} placeholder="000.000.000 - 00" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Data de nascimento</label>

                                <input type="text" value={nascTitular} disabled={isSubmitting} onChange={(e) => setNascTitular(e.target.value)} placeholder="dd/mm/aaaa" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                        </div>

                    </div>


                    <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />

                    <h2>Reservas</h2>

                    <div id="card-inscricao" className="h-100 w-6/7 flex flex-col">

                        <div className="h-15 flex flex-col justify-around items-center">

                            <label htmlFor="">Nome completo</label>

                            <input type="text" value={nomeReserva} disabled={isSubmitting} onChange={(e) => setNomeReserva(e.target.value)} placeholder="Insira um nome" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                        </div>

                        <div className="h-50 flex flex-col justify-around items-center">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">CPF</label>

                                <input type="text" value={cpfReserva} disabled={isSubmitting} onChange={(e) => setCpfReserva(e.target.value)} placeholder="000.000.000 - 00" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Data de nascimento</label>

                                <input type="text" value={nascReserva} disabled={isSubmitting} onChange={(e) => setNascReserva(e.target.value)} placeholder="dd/mm/aaaa" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                        </div>

                    </div>

                    <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />

                    <h2>Técnino(a)</h2>

                    <div id="card-inscricao" className="h-100 w-6/7 flex flex-col">

                        <div className="h-15 flex flex-col justify-around items-center">

                            <label htmlFor="">Nome completo</label>

                            <input type="text" value={nomeTecnico} disabled={isSubmitting} onChange={(e) => setNomeTecnico(e.target.value)} placeholder="Insira um nome" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                        </div>

                        <div className="h-50 flex flex-col justify-around items-center">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">CPF</label>

                                <input type="text" value={cpfTecnico} disabled={isSubmitting} onChange={(e) => setCpfTecnico(e.target.value)} placeholder="000.000.000 - 00" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Data de nascimento</label>

                                <input type="text" value={nascTecnico} disabled={isSubmitting} onChange={(e) => setNascTecnico(e.target.value)} placeholder="dd/mm/aaaa" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                        </div>

                    </div>

                    <img src="/assets/imgs/divisoria3.png" alt="" className='w-4/5 m-10' />

                    <h2>Massagista</h2>

                    <div id="card-inscricao" className="h-100 w-6/7 flex flex-col">

                        <div className="h-15 flex flex-col justify-around items-center">

                            <label htmlFor="">Nome completo</label>

                            <input type="text" value={nomeMassagista} disabled={isSubmitting} onChange={(e) => setNomeMassagista(e.target.value)} placeholder="Insira um nome" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-full" />

                        </div>

                        <div className="h-50 flex flex-col justify-around items-center">

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">CPF</label>

                                <input type="text" value={cpfMassagista} disabled={isSubmitting} onChange={(e) => setCpfMassagista(e.target.value)} placeholder="000.000.000 - 00" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                            <div className="h-15 flex flex-col justify-around items-center">

                                <label htmlFor="">Data de nascimento</label>

                                <input type="text" value={nascMassagista} disabled={isSubmitting} onChange={(e) => setNascMassagista(e.target.value)} placeholder="dd/mm/aaaa" className="bg-[#E3E0DC] w-55 rounded-full p-3 placeholder:font-[neubau] text-[#4B1970]/50 md:w-165 lg:w-332.5" />

                            </div>

                        </div>

                    </div>

                </div>

                <button id="button-inscricao" onClick={addInscricao} className="m-30 flex items-center justify-center p-5 w-55 rounded-full text-[30px] font-[placard] hover:scale-110 ">Enviar</button>

            </div>

            <Rodape1 />

        </div>

    );

}