import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Home from './Home'
import Login from './Login'
import Cadastro from './Cadastro'
import Inscricao from './Inscricao'
import MinhaContaHome from './MinhaContaHome'
import MinhaContaInscrição from './MinhaContaInscricao'
import PaginaReforma from './components/paginaReforma'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/inscricao" element={<Inscricao />} />

        <Route path="/minhaconta/" element={<MinhaContaHome />} />

        <Route path="/minhaconta/inscricoes" element={<MinhaContaInscrição />} />

        <Route path="/estamospassandoporreformas" element={<PaginaReforma />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>,

)
