import { MDCSelect } from "@material/select";

import { FetchInfo } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NewsList } from "../NewsList/index";
import { NEWS_SOURCES_CLASSES, CONSTANTS_FOR_SEARCH } from "../../constants/constants";

export class AppComponent {
  currentSource = undefined;

  /**
   * Initiate app, fetch news sources from API, catch errors if occured
   * and create event listener on them
   */
  init = async () => {
    const { SOURCES_SELECT_CLASS } = NEWS_SOURCES_CLASSES;
    const { API_KEY, URL_SOURCES } = CONSTANTS_FOR_SEARCH;

    try {
      const { sources } = await FetchInfo.fetchInfo(URL_SOURCES, { apiKey: API_KEY });
      if (!sources || !sources.length) throw new Error("No sources found");

      const newsSourcesList = new NewsSourcesList();
      newsSourcesList.render(sources);
      const select = new MDCSelect(document.querySelector(`.${SOURCES_SELECT_CLASS}`));
      select.listen("MDCSelect:change", this.selectSourceHandler);
    } catch (errorObject) {
      return this.errorHandler(errorObject);
    }
  };

  /**
   * When news source is chosen call function to fetch data
   * if current source is different from previously fetched or not empty
   */
  selectSourceHandler = async ({ detail: { value } }) => {
    const { API_KEY, URL_ARTICLES } = CONSTANTS_FOR_SEARCH;

    if (this.currentSource === value || !value) {
      return;
    }
    try {
      const { articles } = await FetchInfo.fetchInfo(URL_ARTICLES, {
        source: value,
        apiKey: API_KEY
      });
      if (!articles || !articles.length) throw new Error("No articles found");

      const newsList = new NewsList(articles);
      newsList.renderNews();
      this.currentSource = value;
    } catch (errorObject) {
      return this.errorHandler(errorObject);
    }
  };

  /**
   * Create lazy loaded chunk that create ErrorMessage singleton instance
   * and call its render error method
   *
   * @param errorObject - object that contains error message
   */
  errorHandler(errorObject) {
    return import(/* webpackChunkName: "errorMessage" */ "../ErrorMessage/errorMessage").then(
      module => {
        const ErrorMessage = module.ErrorMessage;
        const errorInstance = new ErrorMessage();
        errorInstance.render(errorObject);
      }
    );
  }
}
