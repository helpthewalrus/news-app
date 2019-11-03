import {
  NEWS_CARDS_WRAPPER,
  ERROR_MESSAGE,
  ERROR_MESSAGE_GRID_LAYOUT
} from "../constants/constants";

/**
 * Render text of the error
 *
 * @param errorObject - error object used to depict error message
 */
export const renderError = errorObject => {
  const errorText = errorObject.message;

  const inputElement = document.querySelector(`.${NEWS_CARDS_WRAPPER}`);
  inputElement.innerHTML = "";

  const element = document.createElement("div");
  element.classList.add(ERROR_MESSAGE, ERROR_MESSAGE_GRID_LAYOUT);
  element.innerText = errorText;

  inputElement.appendChild(element);
};
