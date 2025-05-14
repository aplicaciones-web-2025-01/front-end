import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
//const headLines = import.meta.env.VITE_TOP_ARTICLE_ENDPOINT_PATH;

const baseUrl ="http://localhost:4000/640";
const headLines ="articles";


const http = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
    }
})

export class ArticleService {
    async getAll() {
        console.log("newApi",newApi)
        var response = await http(`${headLines}`)
        return response;
    }

    async getById(id) {
        var response = await http(`${headLines}/${id}`)
        return response;
    }

    async createArticle(article) {
        var response = await http(`${headLines}`, article)
        return response;
    }

    async updateArticle(id, article) {
        var response = await http(`${headLines}/${id}`, article)
        return response;
    }

    async deleteArticle(id) {
        var response = await http(`${headLines}/${id}`)
        return response;
    }
}

