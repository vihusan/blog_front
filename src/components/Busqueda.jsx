import { useEffect, useState } from "react"

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
        <div>
            <h5>Busqueda</h5>
            <form className='busquedaContainer' onSubmit={ onSubmit }>
                <select value={opcionSeleccionada} onChange={handleSelectChange}>
                    <option value="titulo">Titulo</option>
                    <option value="contenido">Contenido</option>
                    <option value="autor">Autor</option>
                </select>
                
                <input 
                    type="text"
                    placeholder="Buscar Post"
                    onChange={ onInputChange }
                />
            </form>
        </div>
    )
}
