import { blogApi } from "../api/blogApi";


export const postEntrada = async (post)=>{
    const {data} = await blogApi.post('/posts', post);
}

export const getEntradas = async () => {
    const {data} = await blogApi.get('/posts');
    const result = data.data;
    return result;
}

export const getEntradaById = async (id) => {
    const {data} = await blogApi.get('/posts', {
        params: {
            id:  id
        }
    });
    const result = data.data;
    return result;
}


export const getEntradasATC = async (busqueda) => {

    const {data} = await blogApi.get('/posts',{
        params: busqueda
    });
    const result = data.data;
    return result;
}