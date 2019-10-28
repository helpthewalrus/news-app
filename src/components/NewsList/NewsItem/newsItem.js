import { NEWS_CLASSES, NO_IMAGE_FOUND } from "../../../constants/constants";

export class NewsItem {
  constructor(newsItem) {
    this.newsItem = newsItem;
  }

  render() {
    const {
      NEWS_CARD_CELL,
      NEWS_CARD,
      NEWS_CARD_CONTENT,
      NEWS_PRIMARY_ACTION,
      NEWS_MEDIA,
      NEWS_MEDIA_16_9,
      NEWS_IMAGE,
      NEWS_INFO,
      NEWS_TITLE,
      NEWS_AUTHOR,
      NEWS_DATE,
      NEWS_DESCRIPTION,
      NEWS_ACTIONS,
      NEWS_ACTIONS_BUTTONS,
      NEWS_BUTTON,
      NEWS_BUTTON_RAISED,
      NEWS_READ_BUTTON
    } = NEWS_CLASSES;

    const newsElement = document.createElement("div");
    newsElement.innerHTML = `
      <div class="${NEWS_PRIMARY_ACTION}" tabindex="0">
        <div
          class="${NEWS_MEDIA} ${NEWS_MEDIA_16_9} ${NEWS_IMAGE}"
          style='background-image: url("${
            this.newsItem.urlToImage ? this.newsItem.urlToImage : NO_IMAGE_FOUND
          }");'
        ></div>
        <div class="${NEWS_INFO}">
          <h2 class="${NEWS_TITLE}">
            ${this.newsItem.title}
          </h2>
          <h3 class="${NEWS_AUTHOR}">
            ${
              this.newsItem.author && !this.newsItem.author.includes("http")
                ? "by " + this.newsItem.author
                : ""
            }
          </h3>
          <h3 class="${NEWS_DATE}">
            ${
              this.newsItem.publishedAt
                ? new Date(this.newsItem.publishedAt).toLocaleDateString()
                : ""
            }
          </h3>
          <p class="${NEWS_DESCRIPTION}">
            ${this.newsItem.description}
          </p>
        </div>
      </div>
      <div class="${NEWS_ACTIONS}">
        <div class="${NEWS_ACTIONS_BUTTONS}">
          <a class="${NEWS_BUTTON} ${NEWS_BUTTON_RAISED} ${NEWS_READ_BUTTON}"
             href="${this.newsItem.url}"
             target="_blank">
            Read more
          </a>
        </div>
      </div>
   `;

    newsElement.classList.add(NEWS_CARD_CELL, NEWS_CARD, NEWS_CARD_CONTENT);
    return newsElement;
  }
}
