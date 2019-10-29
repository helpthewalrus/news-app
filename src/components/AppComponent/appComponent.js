import { MDCSelect } from "@material/select";

import { fetchSources, fetchNews } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NewsList } from "../NewsList/index";
import { NEWS_SOURCES_CLASSES } from "../../constants/constants";

export class AppComponent {
  /**
   * Initiate app, fetch news sources from API and create event listener on them
   */
  init = async () => {
    const { SOURCES_SELECT_CLASS } = NEWS_SOURCES_CLASSES;
    const sourcesObject = await fetchSources();
    const { sources } = sourcesObject;
    const newsSourcesList = new NewsSourcesList();
    newsSourcesList.render(sources);
    const select = new MDCSelect(document.querySelector(`.${SOURCES_SELECT_CLASS}`));
    select.listen("MDCSelect:change", this.selectSourceHandler);
  };

  /**
   * When news source is chosen call function to render news cards
   */
  selectSourceHandler = async ({ detail: { value } }) => {
    const { articles } = await fetchNews(value);

    const newsList = new NewsList(articles);
    newsList.renderNews();
  };
}
