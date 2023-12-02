import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlogApp } from './BlogApp.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <body>
      
      <BlogApp />
    </body>
  </BrowserRouter>,
)
