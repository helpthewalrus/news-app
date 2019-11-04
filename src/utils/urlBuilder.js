/**
 * Create search url according to input parameters
 */
export const urlBuilder = (...urlParams) => {
  const [baseUrl, queryUrl] = urlParams;
  const buildURLQuery = queryParams =>
    Object.entries(queryParams)
      .map(pair => pair.join("="))
      .join("&");

  return "".concat(`${baseUrl}?`, buildURLQuery(queryUrl));
};
