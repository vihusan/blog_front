
import { useEffect, useState } from "react";

import { getEntradas, getEntradasATC} from "../helpers/serviceBlog";
import { TarjetaEntrada } from "./TarjetaEntrada";

export const ListadoEntradas = ({busqueda}) => {
    const [arrayEntradas, setArrayEntradas] = useState([]);

    useEffect(()=>{
        if(busqueda && busqueda.cb !== '') {
            getEntradasATC(busqueda).then( (data) => {
                setArrayEntradas(data.reverse());
            });
        }else{
            getEntradas().then( (data) => {
                setArrayEntradas(data.reverse());
            });
        }
    }, [busqueda]);


    return (
        <div className="container_listado">
            { 
                arrayEntradas.map( (post) => (
                    <TarjetaEntrada key={post.id} value= {post} />  
                ))
            }
        </div>
    )
}
