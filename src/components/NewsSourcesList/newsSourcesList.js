import { NEWS_SOURCES_CLASSES } from "../../constants/constants";

export class NewsSourcesList {
  /**
   * Generate layout with all news sources
   *
   * @param sources - array of data about news sources
   */
  render(sources) {
    const { SOURCES_UL_CLASS, SOURCE_LI_MAT_CLASS } = NEWS_SOURCES_CLASSES;

    const selectUl = document.querySelector(`.${SOURCES_UL_CLASS}`);

    sources.forEach(source => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(`${source.name}`));
      li.setAttribute("data-value", `${source.id}`);
      li.classList.add(`${SOURCE_LI_MAT_CLASS}`);

      selectUl.appendChild(li);
    });
  }
}
