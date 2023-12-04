
import { useEffect, useState } from "react";
import { PostCard } from "./postCard";
import { getEntradas, getEntradasATC} from "../helpers/serviceBlog";

export const PostGrid = ({busqueda}) => {
    const [arrayEntradas, setArrayEntradas] = useState([]);

    useEffect(()=>{
        if(busqueda && busqueda.cb !== '') {
            getEntradasATC(busqueda).then( (data) => {
                setArrayEntradas(data);
            });
        }else{
            getEntradas().then( (data) => {
                setArrayEntradas(data);
            });
        }
    }, [busqueda]);


    return (
        <div className="card-grid">
            { 
                arrayEntradas.map( (post) => (
                    <PostCard key={post.id} value= {post} />  
                ))
            }
        </div>
    )
}
