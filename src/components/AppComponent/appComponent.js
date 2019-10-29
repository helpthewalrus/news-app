import { MDCSelect } from "@material/select";

import { fetchSources, fetchNews } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NewsList } from "../NewsList/index";
import { renderError } from "../../utils/index";
import { NEWS_SOURCES_CLASSES } from "../../constants/constants";

export class AppComponent {
  currentSource = undefined;

  /**
   * Initiate app, fetch news sources from API, catch errors if occured
   * and create event listener on them
   */
  init = async () => {
    const { SOURCES_SELECT_CLASS } = NEWS_SOURCES_CLASSES;

    try {
      const sourcesObject = await fetchSources();
      const { sources } = sourcesObject;
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
    if (this.currentSource !== value || !this.currentSource) {
      try {
        const { articles } = await fetchNews(value);
        if (!articles || !articles.length) throw new Error("No articles found");

        const newsList = new NewsList(articles);
        newsList.renderNews();
        this.currentSource = value;
      } catch (error) {
        return renderError(error);
      }
    }
  };
}
