import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
const headLines = import.meta.env.VITE_TOP_ARTICLE_ENDPOINT_PATH;
const key = import.meta.env.VITE_NEWS_API_KEY

export class ArticleService {
    async getAll() {
        var response = await axios.get(`${newApi}/${headLines}`)
        return response;
    }

    async getById(id) {
        var response = await axios.get(`${newApi}/${headLines}/${id}`)
        return response;
    }

    async createArticle(article) {
        var response = await axios.post(`${newApi}/${headLines}`, article)
        return response;
    }

    async updateArticle(id, article) {
        var response = await axios.put(`${newApi}/${headLines}/${id}`, article)
        return response;
    }
}

