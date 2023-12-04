import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogApp } from './BlogApp'
import { DetailsPost } from './Pages/DetailsPost'

export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<BlogApp/>} />
        <Route path='/detalles/:id' element={<DetailsPost/>} />
    </Routes>
  )
}

export default App;