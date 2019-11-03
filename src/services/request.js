export class Request {
  constructor(requestMethod) {
    this.requestMethod = requestMethod;
    this.mode = "cors";
    this.cache = "default";
  }
}
