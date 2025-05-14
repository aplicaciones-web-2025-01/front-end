import axios from "axios";

const newApi = import.meta.env.VITE_NEWS_API_URL;
//const headLines = import.meta.env.VITE_TOP_ARTICLE_ENDPOINT_PATH;

const baseUrl ="http://localhost:4000";
const headLines ="login";

export class UserService {
    async login(user) {
        var response = await axios.post(`${baseUrl}/${headLines}`,user)
        return response;
    }


}

