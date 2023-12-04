import { useParams } from "react-router-dom";
import { getEntradaById } from "../helpers/serviceBlog";
import { useEffect, useState } from "react";

export const DetailsPost = () => {
  const [ post , setPost] = useState({});
  const {id} = useParams();

  useEffect( () => {
    getEntradaById(id).then((data) => {
      setPost(data);
    });
  }, []);

  const fecha = new Date(post.createdAt);
  const dia = fecha.getDay();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear(); 

  const creacionDate = `${dia}/${mes}/${anio}`;
 
  return (
    <div className="detailsContainer">
      <h1 className="tituloDetail"> {post.titulo}</h1>
      <p className="autorDetail"> Autor: {post.autor}</p>
      <p className="contenidoDetail"> {post.contenido}</p>
      <p className="fechaDetail"> {creacionDate}</p>
    </div>
  )
}
