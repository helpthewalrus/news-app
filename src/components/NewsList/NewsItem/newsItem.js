import {
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
  NEWS_READ_BUTTON,
  NO_IMAGE_FOUND
} from "../../../constants/constants";

export class NewsItem {
  /**
   * Create news card layout according to data in newsItem
   */
  render(newsItem) {
    const { urlToImage, title, author, publishedAt, description, url } = newsItem;

    const newsElement = document.createElement("div");
    newsElement.innerHTML = `
      <div class="${NEWS_PRIMARY_ACTION}" tabindex="0">
        <div
          class="${NEWS_MEDIA} ${NEWS_MEDIA_16_9} ${NEWS_IMAGE}"
          style='background-image: url("${urlToImage ? urlToImage : NO_IMAGE_FOUND}");'
        ></div>
        <div class="${NEWS_INFO}">
          <h2 class="${NEWS_TITLE}">
            ${title}
          </h2>
          <h3 class="${NEWS_AUTHOR}">
            ${author && !author.includes("http") ? "by " + author : ""}
          </h3>
          <h3 class="${NEWS_DATE}">
            ${publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
          </h3>
          <p class="${NEWS_DESCRIPTION}">
            ${description ? description : ""}
          </p>
        </div>
      </div>
      <div class="${NEWS_ACTIONS}">
        <div class="${NEWS_ACTIONS_BUTTONS}">
          <a class="${NEWS_BUTTON} ${NEWS_BUTTON_RAISED} ${NEWS_READ_BUTTON}"
            href="${url}"
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
