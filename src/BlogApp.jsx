import React, { useState } from "react";
import { Busqueda } from "./components/Busqueda";
import { PostGrid } from "./components/PostGrid";
import { CreatePost } from "./components/CreatePost";


export const BlogApp = ()  => {
    const [busqueda, setBusqueda] = useState("");
    const onAddBusqueda = (newBusqueda) => {
        setBusqueda(newBusqueda)
    }

    return (
        <>
            {/* Titulo */}
            <h1 className="titulo">BlogerTI</h1>
            {/* Barra d busqueda */}
            <Busqueda onNewBusqueda={ (value) => onAddBusqueda(value) }/>
            {/* Barra de creacion de post */}
            <CreatePost />
            {/* Listado de post */}
            <PostGrid busqueda={busqueda}/>
        </>
    );
}