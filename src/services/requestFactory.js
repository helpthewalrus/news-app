import { Request } from "./request";

export class RequestFactory {
  create(requestMethod) {
    let request;
    switch (requestMethod) {
      case "GET":
        request = new Request("GET");
        break;
      case "POST":
        request = new Request("POST");
        break;
      case "PUT":
        request = new Request("PUT");
        break;
      case "DELETE":
        request = new Request("DELETE");
        break;

      default:
        request = new Request("GET");
        break;
    }
    return request;
  }
}
