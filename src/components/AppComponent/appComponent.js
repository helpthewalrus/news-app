import { MDCSelect } from "@material/select";

import { FetchInfo } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NewsList } from "../NewsList/index";
import {
  SOURCES_SELECT_CLASS,
  API_KEY,
  URL_SOURCES,
  URL_ARTICLES
} from "../../constants/constants";
import { urlBuilder } from "../../utils/index";

export class AppComponent {
  currentSource = undefined;

  /**
   * Initiate app, fetch news sources from API, catch errors if occured
   * and create event listener on them
   */
  init = async () => {
    try {
      const url = urlBuilder(URL_SOURCES, { apiKey: API_KEY });
      const { sources } = await FetchInfo.fetchInfo(url, "GET");
      if (!sources || !sources.length) throw new Error("No sources found");

      const newsSourcesList = new NewsSourcesList();
      newsSourcesList.render(sources);
      const select = new MDCSelect(document.querySelector(`.${SOURCES_SELECT_CLASS}`));
      select.listen("MDCSelect:change", this.handleSourceSelect);
    } catch (errorObject) {
      return this.handleError(errorObject);
    }
  };

  /**
   * When news source is chosen call function to fetch data
   * if current source is different from previously fetched or not empty
   */
  handleSourceSelect = async ({ detail: { value } }) => {
    if (this.currentSource === value || !value) {
      return;
    }
    try {
      const url = urlBuilder(URL_ARTICLES, {
        source: value,
        apiKey: API_KEY
      });
      const { articles } = await FetchInfo.fetchInfo(url, "GET");
      if (!articles || !articles.length) throw new Error("No articles found");

      const newsList = new NewsList(articles);
      newsList.renderNews();
      this.currentSource = value;
    } catch (errorObject) {
      return this.handleError(errorObject);
    }
  };

  /**
   * Create lazy loaded chunk that create ErrorMessage singleton instance
   * and call its render error method
   *
   * @param errorObject - object that contains error message
   */
  handleError(errorObject) {
    return import(/* webpackChunkName: "errorMessage" */ "../ErrorMessage/errorMessage").then(
      module => {
        const ErrorMessage = module.ErrorMessage;
        const errorInstance = new ErrorMessage();
        errorInstance.render(errorObject);
      }
    );
  }
}
