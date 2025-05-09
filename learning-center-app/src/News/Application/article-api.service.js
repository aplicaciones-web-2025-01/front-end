import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
//const headLines = import.meta.env.VITE_TOP_ARTICLE_ENDPOINT_PATH;

const baseUrl ="https://66f221c24153791915531f3c.mockapi.io";
const headLines ="articles";

export class ArticleService {
    async getAll() {
        console.log("newApi",newApi)
        var response = await axios.get(`${baseUrl}/${headLines}`)
        return response;
    }

    async getById(id) {
        var response = await axios.get(`${baseUrl}/${headLines}/${id}`)
        return response;
    }

    async createArticle(article) {
        var response = await axios.post(`${baseUrl}/${headLines}`, article)
        return response;
    }

    async updateArticle(id, article) {
        var response = await axios.put(`${baseUrl}/${headLines}/${id}`, article)
        return response;
    }

    async deleteArticle(id) {
        var response = await axios.delete(`${baseUrl}/${headLines}/${id}`)
        return response;
    }
}

