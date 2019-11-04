import { RequestFactory } from "./requestFactory";

export class FetchInfo {
  /**
   * Fetch info according to provided url
   */
  static fetchInfo = async (...urlParams) => {
    const [url, method] = urlParams;

    const handler = {
      apply: function(target, thisArg, argumentsList) {
        console.log(`
          METHOD: ${argumentsList[1]},
          URL: ${argumentsList[0]}
        `);
        return target(argumentsList[0], argumentsList[1]);
      }
    };
    const proxy = new Proxy(new RequestFactory().createRequest, handler);

    const requestFactory = proxy(url, method);
    const fetchedInfo = await fetch(...requestFactory);
    const info = await fetchedInfo.json();
    return info;
  };
}
