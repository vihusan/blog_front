import React from 'react'
import BackImg from '../assets/images/arrow_back.png'
import { Link } from 'react-router-dom'
export const ButtonHome = () => {
  return (
    <Link to={'/'}>
      <div className="container_back">
          <img src={BackImg}/>  
      </div>
    </Link>
  )
}
