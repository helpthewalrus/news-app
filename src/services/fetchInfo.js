import { RequestFactory } from "./requestFactory";

export class FetchInfo {
  /**
   * Fetch info accroding to provided url
   */
  static fetchInfo = async (...urlParams) => {
    const [url, method] = urlParams;

    const requestFactory = new RequestFactory().create(url, method);
    const fetchedInfo = await fetch(...requestFactory);
    const info = await fetchedInfo.json();
    return info;
  };
}
