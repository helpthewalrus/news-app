export class Request {
  constructor(url, requestMethod) {
    this.url = url;
    this.requestMethod = requestMethod;
    this.mode = "cors";
    this.cache = "default";

    return [
      this.url,
      {
        method: this.requestMethod,
        mode: this.mode,
        cache: this.cache
      }
    ];
  }
}
