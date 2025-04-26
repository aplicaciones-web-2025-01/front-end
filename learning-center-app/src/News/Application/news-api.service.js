import axios from "axios";

export class NewsApiService {

    async getArticles() {
        var response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fecf4feeffa64e4da682e7d268612ce5')
        return response.data.articles;
    }
}

