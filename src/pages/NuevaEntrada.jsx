import { useEffect, useState, useRef} from "react";
import { postEntrada } from "../helpers/serviceBlog";
import { ButtonHome } from "../components/ButtonHome";
import { ErroresEnForm } from "../components/ErroresEnForm";
import { useNavigate } from "react-router-dom";

export const NuevaEntrada = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [contenido, setContenido] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (event)=>{
      event.preventDefault();
      const post = {titulo, autor, contenido};

      postEntrada(post).then(
        response => {
          navigate('/');
        }
      ).catch( error => {
        if(error.response.data.errors.length > 0){
          setErrors(error.response.data.errors);
        }
      });
  }


  const onTituloChange = ({target}) => {
      setTitulo(target.value)
  }

  const onAutorChange = ({target}) => {
      setAutor(target.value)
  }
  const onContenidoChange = ({target}) => {
      setContenido(target.value)
  }


  return (
    <div className="container_principal">
      <ButtonHome />
      <div  className="container_formulario">
        <h3> Nueva Entrada</h3>
        <div className={(errors.length ===0) ? 'ocultar_errores': ''}>
          <ErroresEnForm errors={errors}/>
        </div>
        <form className='formulario_entrada' onSubmit={ onSubmit }>
          <input 
              className="input_titulo"
              type="text"
              placeholder="Titulo *"
              onChange={ onTituloChange }
              ref={inputRef}
          /> 
          <input 
              className="input_autor"
              type="text"
              placeholder="Autor *"
              onChange={ onAutorChange }
          />
          <input 
              className="input_contenido"
              type="text"
              placeholder="Contenido *"
              onChange={ onContenidoChange }
          />

          <button className="button_crear">
            <p> Crear Entrada</p>  
          </button>  
        </form>
      </div>
    </div>
  )
}
