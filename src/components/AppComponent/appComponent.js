import { MDCSelect } from "@material/select";

import { fetchSources } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";
import { NEWS_SOURCES_CLASSES } from "../../constants/constants";

export class AppComponent {
  init = async () => {
    const { SOURCES_SELECT_CLASS } = NEWS_SOURCES_CLASSES;

    const sources = await fetchSources();

    const newsSourcesList = new NewsSourcesList();
    newsSourcesList.render(sources);

    const select = new MDCSelect(document.querySelector(`.${SOURCES_SELECT_CLASS}`));
    select.listen("MDCSelect:change", this.selectSourceHandler);
  };

  selectSourceHandler = ({ detail: { value } }) => {
    console.log(value);
  };
}
