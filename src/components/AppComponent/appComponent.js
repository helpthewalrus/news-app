import { fetchSources } from "../../services/index";
import { NewsSourcesList } from "../NewsSourcesList/index";

export class AppComponent {
  init = async () => {
    const sources = await fetchSources();

    const newsSourcesList = new NewsSourcesList();
    newsSourcesList.render(sources);
  };
}
