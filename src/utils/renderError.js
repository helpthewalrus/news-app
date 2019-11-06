import {
  NEWS_CARDS_WRAPPER,
  NEWS_BUTTON,
  MDC_DIALOG,
  MDC_DIALOG_CONTAINER,
  MDC_DIALOG_SURFACE,
  MDC_DIALOG_TITLE,
  DIALOG_TITLE,
  MY_DIALOG_TITLE,
  MDC_DIALOG_ACTIONS,
  MDC_DIALOG_BUTTON,
  MDC_DIALOG_LABEL,
  MDC_DIALOG_SCRIM,
  ERROR_MESSAGE,
  ERROR_MESSAGE_GRID_LAYOUT
} from "../constants/constants";

/**
 * Render text of the error in a material dialog
 *
 * @param errorObject - error object used to depict error message
 */
export const renderError = errorObject => {
  const errorText = errorObject.message;

  const inputElement = document.querySelector(`.${NEWS_CARDS_WRAPPER}`);
  inputElement.innerHTML = "";

  const element = document.createElement("div");
  element.classList.add(ERROR_MESSAGE, ERROR_MESSAGE_GRID_LAYOUT);

  element.innerHTML = `
    <div
    class="${MDC_DIALOG}"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="${MY_DIALOG_TITLE}"
    >
      <div class="${MDC_DIALOG_CONTAINER}">
        <div class="${MDC_DIALOG_SURFACE}">
          <h2 class="${MDC_DIALOG_TITLE} ${DIALOG_TITLE}" id="${MY_DIALOG_TITLE}">${errorText}</h2>
          <footer class="${MDC_DIALOG_ACTIONS}">
            <button type="button" class="${NEWS_BUTTON} ${MDC_DIALOG_BUTTON}" data-mdc-dialog-action="cancel">
              <span class="${MDC_DIALOG_LABEL}">Cancel</span>
            </button>
          </footer>
        </div>
      </div>
      <div class="${MDC_DIALOG_SCRIM}"></div>
    </div>
  `;

  inputElement.appendChild(element);
};
