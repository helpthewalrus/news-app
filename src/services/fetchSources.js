import { CONSTANTS_FOR_SEARCH } from "../constants/constants";

/**
 * Fetch list of news agencies
 */
export const fetchSources = async () => {
  const fetchedSources = await fetch(
    `${CONSTANTS_FOR_SEARCH.URL_SOURCES}?apiKey=${CONSTANTS_FOR_SEARCH.API_KEY}`
  );
  const sources = await fetchedSources.json();
  return sources;
};
