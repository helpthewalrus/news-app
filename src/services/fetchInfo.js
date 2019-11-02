import { CONSTANTS_FOR_SEARCH } from "../constants/constants";

export class FetchInfo {
  /**
   * Fetch info accroding to provided url
   */
  static fetchInfo = async (...urlParams) => {
    const url = FetchInfo.buildUrl(urlParams);

    const fetchedInfo = await fetch(url);
    const info = await fetchedInfo.json();
    return info;
  };

  /**
   * Create search url according to input parameters
   */
  static buildUrl = urlParams => {
    const baseUrl = urlParams[0];
    const queryUrl = urlParams[1];
    const buildURLQuery = queryParams =>
      Object.entries(queryParams)
        .map(pair => pair.join("="))
        .join("&");

    return "".concat(`${baseUrl}?`, buildURLQuery(queryUrl));
  };
}
