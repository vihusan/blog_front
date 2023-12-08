import { Link } from "react-router-dom"

export const ButtonCrearEntrada = () => {
  return (
    <Link className='link_nva_entrada' to="/nuevo"> 
        <div className="btn_nva_entrada">
            Crear nueva entrada
        </div>
    </Link>
  )
}
