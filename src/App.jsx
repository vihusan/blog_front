import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { VerEntrada } from './pages/VerEntrada'
import { NuevaEntrada } from './pages/NuevaEntrada'
import logo from './assets/images/logoblog.png'

export const App = () => {
  return (
    <>
      <header className="container_header">
          <img src={logo} width={'20%'}/>
          <div className="container_titulo_text">
              <h1 className="titulo">BloggerTI</h1>
          </div>
      </header>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/entrada/:id' element={<VerEntrada/>} />
          <Route path='/nuevo' element={<NuevaEntrada />}/>
      </Routes>
    </>
  )
}

export default App;