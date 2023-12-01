import { blogApi } from "../api/blogApi";


export const getPosts = async (busqueda)=>{
    let result = [];

    if (busqueda.cb!=='') {
        const {data} = await blogApi.get('/posts',{
            params: busqueda
        });
        result = data.data;
    }else {
        const {data} = await blogApi.get('/posts');
        result = data.data;
    }

    return result;
}