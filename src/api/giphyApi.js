import axios from "axios";

export const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs'
});