import { MDCSelect } from "@material/select";

import { FetchInfo } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NewsList } from "../NewsList/index";
import { renderError } from "../../utils/index";
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
    } catch (error) {
      return renderError(error);
    }
  };

  /**
   * When news source is chosen call function to fetch data
   * if current source is differennt from previously fetched
   */
  selectSourceHandler = async ({ detail: { value } }) => {
    const { API_KEY, URL_ARTICLES } = CONSTANTS_FOR_SEARCH;

    if (this.currentSource === value) {
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
    } catch (error) {
      return renderError(error);
    }
  };
}
