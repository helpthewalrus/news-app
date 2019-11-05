import { renderError } from "../../utils/index";
import { MDCDialog } from "@material/dialog";

export class ErrorMessage {
  constructor() {
    if (typeof ErrorMessage.instance === "object") {
      return ErrorMessage.instance;
    }
    ErrorMessage.instance = this;
    return this;
  }

  render(errorObject) {
    renderError(errorObject);
    const dialog = new MDCDialog(document.querySelector(".mdc-dialog"));
    dialog.open();
  }
}
