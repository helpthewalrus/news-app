export class NewsList {
  constructor(news) {
    this.news = news;
  }

  extractArticles = () => {
    console.log(this.news);
  };
}
