import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './StyleReset.css'
import './Style.css'

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <body>
      <App />
    </body>
  </BrowserRouter>,
)
