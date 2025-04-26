import {Article} from "@/News/Domain/article.entity.js"

export class ArticleAssembler {

    static toEntitiesFromResponse(response) {
        if (response.data.status !== "ok") {
            console.error(`${response.status},  ${response.code}, ${response.message}`);
            return [];
        }
        const articlesResponse = response.data;
        return articlesResponse["articles"].map((article) => {
            return this.toEntityFromResource(article);
        });
    }

    static toEntityFromResource(resource) {
        let article = new Article(resource);
        return article;
    }
}