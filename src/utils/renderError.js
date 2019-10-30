import { NEWS_CLASSES } from "../constants/constants";

/**
 * Render text of the error
 *
 * @param error - error object used to depict error message
 */
export const renderError = error => {
  const errorText = error.message;

  const inputElement = document.querySelector(`.${NEWS_CLASSES.NEWS_CARDS_WRAPPER}`);
  inputElement.innerHTML = "";

  const element = document.createElement("div");
  element.classList.add(`mdc-layout-grid__cell--span-12`);
  element.innerText = errorText;
  element.setAttribute("style", "text-align: center; font-size: 2rem");

  inputElement.appendChild(element);
};
