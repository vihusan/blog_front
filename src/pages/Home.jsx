import React, { useState } from "react";
import { Busqueda } from "../components/Busqueda";
import { ListadoEntradas } from "../components/ListadoEntradas";
import { ButtonCrearEntrada } from "../components/ButtonCrearEntrada";

export const Home = ()  => {
    const [busqueda, setBusqueda] = useState("");
    const onAddBusqueda = (newBusqueda) => {
        setBusqueda(newBusqueda)
    }

    return (
        <div className="container_principal">
            <Busqueda onNewBusqueda={ (value) => onAddBusqueda(value) }/>
            <ButtonCrearEntrada />
            <ListadoEntradas busqueda={busqueda}/>
        </div>
    );
}