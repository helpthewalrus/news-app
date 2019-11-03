import { RequestFactory } from "./requestFactory";

export class FetchInfo {
  /**
   * Fetch info accroding to provided url
   */
  static fetchInfo = async (...urlParams) => {
    const [, , method] = urlParams;
    const url = FetchInfo.buildUrl(urlParams);

    const requestFactory = new RequestFactory().create(method);
    const fetchedInfo = await fetch(url, requestFactory);
    const info = await fetchedInfo.json();
    return info;
  };

  /**
   * Create search url according to input parameters
   */
  static buildUrl = urlParams => {
    const [baseUrl, queryUrl] = urlParams;
    const buildURLQuery = queryParams =>
      Object.entries(queryParams)
        .map(pair => pair.join("="))
        .join("&");

    return "".concat(`${baseUrl}?`, buildURLQuery(queryUrl));
  };
}
