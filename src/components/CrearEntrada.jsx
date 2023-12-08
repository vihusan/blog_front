import { useState } from "react";
import { postEntrada } from "../helpers/serviceBlog";

export const CreatePost = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [contenido, setContenido] = useState('');

    const onSubmit = (event)=>{
        const post = {titulo, autor, contenido};
        postEntrada(post);
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
        <div>

            <h5>Crear Post</h5>
            <form className='createContainer' onSubmit={ onSubmit }>
                <input 
                    className="tituloInput"
                    type="text"
                    placeholder="Titulo Post"
                    onChange={ onTituloChange }
                /> 
                <input 
                    className="autorInput"
                    type="text"
                    placeholder="Autor"
                    onChange={ onAutorChange }
                />
                <input 
                    className="contenidoInput"
                    type="text"
                    placeholder="Contenido"
                    onChange={ onContenidoChange }
                />

                <button className="createButton">Crear Post</button>
            </form>
        </div>
    )
}
