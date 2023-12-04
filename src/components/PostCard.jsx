import { Link } from "react-router-dom";

export const PostCard = ({value:post}) => {
  const fecha = new Date(post.createdAt);
  const dia = fecha.getDay();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear(); 

  const creacionDate = `${dia}/${mes}/${anio}`;
  return (
    <div key={post.id} className="cardContainer">
        <div className="header-card">
            <h2>{post.titulo}</h2>
            <p>{post.autor}</p>
        </div>
        <div className="infoContainer">
            <p>{post.contenido}</p>
        </div>
        <div className="footer-card">
            <Link className="link-vermas" to={`/detalles/${post.id}`}> Ver más </Link>
            <p>{ creacionDate }</p>
        </div>
    </div>
  )
}
