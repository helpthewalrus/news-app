import { NewsItem } from "./NewsItem/index";
import { NEWS_CLASSES } from "../../constants/constants";

export class NewsList {
  constructor(news) {
    this.news = news;
  }

  /**
   * Create grid layout with all news cards fetched data
   */
  renderNews = () => {
    const cardsWrapperElement = document.querySelector(`.${NEWS_CLASSES.NEWS_CARDS_WRAPPER}`);
    cardsWrapperElement.innerHTML = "";
    const fragment = document.createDocumentFragment();

    this.news.forEach(newsItem => {
      const resultNewsItem = new NewsItem(newsItem);
      const newsItemForRender = resultNewsItem.render();
      fragment.appendChild(newsItemForRender);
    });

    cardsWrapperElement.appendChild(fragment);
  };
}
