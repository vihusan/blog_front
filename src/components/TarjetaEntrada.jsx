import { Link } from "react-router-dom";
import { useFecha } from "../hooks/useFecha";
import { useEffect, useState } from "react";
import { getGif } from "../helpers/serviceGiphy";
import logo from '../assets/images/logoblog.png'

export const TarjetaEntrada = ({value:post}) => {
  const fecha =  useFecha(post.createdAt);
  const [isHovered, setIsHovered] = useState(false);
  const [gifUri, setGifUri] = useState('https://media0.giphy.com/media/Zx1KzuQBR8wIbrm81t/giphy.gif?cid=110bf9da1gdl1qbycga82o9k7hk4scfr0kx0lw426wacbd2f&ep=v1_gifs_search&rid=giphy.gif&ct=g');

  useEffect( () => {
    getGif(post.titulo)
    .then( (data) => {
      !(data.length == 0) && setGifUri(data[0].images.original.url);
    })
    .catch( error => {
      console.log(error);
    });

  }, []);
  
  return (
    <Link className="link-vermas" to={`/entrada/${post.id}`}>
    <div key={post.id} className="container_tarjeta"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
        <div className="container_image_tajeta">
          <img src={gifUri} alt="GIF" width={'100%'} height={'100%'}/>
        </div>

        <div className="continer_cuerpo_tarjeta">
          <div className="contenido">
          <div className="header-card">
              <h3>{post.titulo}</h3>
              <p className="autor_entrada">Autor: {post.autor}</p>
          </div>
          <div className="infoContainer">
              <p>{post.contenido}</p>
          </div>
          <div className= {isHovered ? "footer-card-hover" : "footer-card-base"}>
              <p>{ fecha }</p>
          </div>
          </div>
        </div>
    </div>
    </Link>
  )
}
