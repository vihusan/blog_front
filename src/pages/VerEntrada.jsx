import { useParams } from "react-router-dom";
import { getEntradaById } from "../helpers/serviceBlog";
import { useEffect, useState } from "react";
import { useFecha } from "../hooks/useFecha";
import { getGif } from "../helpers/serviceGiphy";
import BackImg from '../assets/images/arrow_back.png';
import { ButtonHome } from "../components/ButtonHome";

export const VerEntrada = () => {
  const [ post , setPost] = useState({});
  const [gifUri, setGifUri] = useState('https://media0.giphy.com/media/Zx1KzuQBR8wIbrm81t/giphy.gif?cid=110bf9da1gdl1qbycga82o9k7hk4scfr0kx0lw426wacbd2f&ep=v1_gifs_search&rid=giphy.gif&ct=g');
  const {id} = useParams();

  useEffect( () => {
    getEntradaById(id).then((data) => {
      setPost(data);
    });
  }, []);

  useEffect( () => {
    getGif(post.titulo)
    .then( (data) => {
      !(data.length == 0) && setGifUri(data[0].images.original.url);
    })
    .catch( error => {
      console.log(error);
    });

  }, [post]);

  const fecha = useFecha(post.createdAt);
  
 
  return (
    <div className="container_principal">
      <ButtonHome/>
      <div className="container_entrada">
        <div className="container_imagen">
          <img src={gifUri} alt="GIF" width={'100%'} height={'90%'}/>
        </div>

        <div className="container_informacion">
          <h1 className="tituloDetail"> {post.titulo}</h1>
          <p className="autorDetail"> Autor: {post.autor}</p>
          <p className="contenidoDetail"> {post.contenido}</p>
          <p className="fechaDetail"> {fecha}</p>
        </div>
      </div>
    </div>
  )
}
