import { NEWS_CLASSES, ERROR_CLASSES } from "../constants/constants";

/**
 * Render text of the error
 *
 * @param errorObject - error object used to depict error message
 */
export const renderError = errorObject => {
  const { NEWS_CARDS_WRAPPER } = NEWS_CLASSES;
  const { ERROR_MESSAGE, ERROR_MESSAGE_GRID_LAYOUT } = ERROR_CLASSES;
  const errorText = errorObject.message;

  const inputElement = document.querySelector(`.${NEWS_CARDS_WRAPPER}`);
  inputElement.innerHTML = "";

  const element = document.createElement("div");
  element.classList.add(ERROR_MESSAGE, ERROR_MESSAGE_GRID_LAYOUT);
  element.innerText = errorText;

  inputElement.appendChild(element);
};
