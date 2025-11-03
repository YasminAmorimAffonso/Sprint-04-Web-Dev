

import Cabecalho2 from "./Cabecalho2";

import Rodape1 from "./Rodape1";

import "./PaginaReforma.css";

export default function PaginaReforma() {

    return (

        <div className="flex flex-col items-center w-full h-full bg-[#E3E0DC]">

            <Cabecalho2 />

            <div className="h-[775px] w-7/8 p-20 pt-50 flex flex-col justify-center items-center">

                <h1 id="txt-reforma" className="p-10 font-[placard] text-[50px]">Oops!</h1>

                <h2 id="txt-reforma" className="text-center font-[neubau] font-extrabold text-[25px]">Parece que esta página está passando por reformas, por favor, volte novamente mais tarde</h2>

            </div>

            <Rodape1 />

        </div>

    );

}