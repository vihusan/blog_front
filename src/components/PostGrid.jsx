
import { getPosts } from "../helpers/getPost";
import { useEffect, useState } from "react";
import { PostCard } from "./postCard";

export const PostGrid = ({busqueda}) => {
    const [posts, setPost] = useState([]);

    useEffect(()=>{
        getPosts(busqueda).then( (lista) => {
            setPost(lista);
        });
    }, [busqueda]);

    return (
        <div className="card-grid">
            { 
                posts.map( (post) => (
                    <PostCard value = {post} />
                ))
            }
        </div>
    )
}
