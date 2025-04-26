import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
const headLines = import.meta.env.VITE_TOP_HEADLINES_ENDPOINT_PATH;
const key = import.meta.env.VITE_NEWS_API_KEY

export class NewsApiService {

    async getArticles() {
        var response = await axios.get(`${newApi}/${headLines}?country=us&apiKey=${key}`)
        return response.data.articles;
    }

}

