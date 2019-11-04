import { Request } from "./request";

export class RequestFactory {
  createRequest(url, requestMethod) {
    let request;
    switch (requestMethod) {
      case "GET":
        request = new Request(url, "GET");
        break;
      case "POST":
        request = new Request(url, "POST");
        break;
      case "PUT":
        request = new Request(url, "PUT");
        break;
      case "DELETE":
        request = new Request(url, "DELETE");
        break;

      default:
        request = new Request(url, "GET");
        break;
    }
    return request;
  }
}
