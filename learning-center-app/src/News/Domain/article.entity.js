export class Article {
    constructor({title = '', description = '', url = '', urlToImage = '', source = null, publishedAt = ''}) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = new Date(publishedAt);
    }
}