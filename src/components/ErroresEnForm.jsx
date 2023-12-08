import React from 'react'

export const ErroresEnForm = ({errors}) => {
  console.log('Mis errorres');
  return (
    <div className='container_errores'>
      <ul className='container_li'>
        {
          (errors.length > 0 ) && (
            errors.map( (error, index) => ( <li className='item_error' key={index}> * {error.msg} </li>))
          )
        }
      </ul>
    </div>
  )
}
