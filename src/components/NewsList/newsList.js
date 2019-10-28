import { NewsItem } from "./NewsItem/index";
import { NEWS_CLASSES } from "../../constants/constants";

export class NewsList {
  constructor(news) {
    this.news = news;
  }

  renderNews = () => {
    const cardsWrapperElement = document.querySelector(`.${NEWS_CLASSES.NEWS_CARDS_WRAPPER}`);
    cardsWrapperElement.innerHTML = "";

    this.news.map(newsItem => {
      const resultNewsItem = new NewsItem(newsItem);
      const newsItemForRender = resultNewsItem.render();
      cardsWrapperElement.appendChild(newsItemForRender);
    });
  };
}
