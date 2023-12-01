export const PostCard = ({value:post}) => {
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
            <p>{post.createdAt}</p>
        </div>
    </div>
  )
}
