import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/login'
import ListaEventos from './pages/ListaEventos/listaEventos'
import Homepage from './pages/Homepage/homepage'
import DetalhesEvento from './pages/DetalhesEvento/detalhesEvento'
import Contato from './pages/Contato/contato'

import Exercicios from './pages/Exercicios/exercicios'

import './index.css'
import AdicionaEvento from './pages/AdicionaEvento/AdicionarEvento'

function App() {
    return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ListaEventos />} />
          <Route path="/evento/:id" element={<DetalhesEvento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/exercicios"element={<Exercicios />} />
          <Route path= "/AdicionaEvento"element = {<AdicionaEvento/>}/>
        </Routes>
       </BrowserRouter>
    )
}

export default App