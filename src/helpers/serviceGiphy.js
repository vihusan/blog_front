import { giphyApi } from "../api/giphyApi"

export const getGif= async (busqueda) => {

    const {data} = await giphyApi.get('/search',{
        params: {
            api_key:'gDf2RPLYC3vmAF1BqPTDbmVkjJdGU2n9',
            q: busqueda,
            limit: 1
        }
    });

    
    
    return data.data;
}