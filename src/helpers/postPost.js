import { blogApi } from "../api/blogApi";


export const postPosts = async (post)=>{
    const {data} = await blogApi.post('/posts', post);
    console.log(data);
    
    //return result;
}