import { useState } from "react"

export const Busqueda = ({onNewBusqueda}) => {
    const [inputValue, setInputValue]    = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('titulo');

    const handleSelectChange = (event) => {
        setOpcionSeleccionada(event.target.value);
    };

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onNewBusqueda({
            tb: opcionSeleccionada,
            cb: inputValue.trim()
        });
        setInputValue('');
    }

    return (
        <div className="container_busqueda">
            <h3>Busqueda</h3>
            <form className="form_busqueda" onSubmit={ onSubmit }>
                <select className="select_busqueda" value={opcionSeleccionada} onChange={handleSelectChange}>
                    <option value="titulo">Titulo</option>
                    <option value="contenido">Contenido</option>
                    <option value="autor">Autor</option>
                </select>
                
                <input className="input_busqueda"
                    type="text"
                    placeholder="Buscar en BloggerTI"
                    onChange={ onInputChange }
                />
            </form>
        </div>
    )
}
