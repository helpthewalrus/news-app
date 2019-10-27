import { CONSTANTS_FOR_SEARCH } from "../constants/constants";

/**
 * Fetches list of news agencies
 */
export const fetchSources = async () => {
  // https://newsapi.org/v1/sources&apiKey=1f0882f6c475413d8ac8df78882256dd
  const fetchedSources = await fetch(
    `${CONSTANTS_FOR_SEARCH.URL_SOURCES}?apiKey=${CONSTANTS_FOR_SEARCH.API_KEY}`
  );
  const sources = await fetchedSources.json();
  return sources;
};
