import { renderError } from "../../utils/index";

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
  }
}
