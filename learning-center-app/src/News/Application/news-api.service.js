import axios from "axios";

export class NewsApiService {

    getArticles() {
        return axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fecf4feeffa64e4da682e7d268612ce5')
    }
}