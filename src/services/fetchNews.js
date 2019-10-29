import { CONSTANTS_FOR_SEARCH } from "../constants/constants";

/**
 * Fetch latest news from chosen news agency
 *
 * @param sourceId - news agency id
 */
export const fetchNews = async sourceId => {
  const fetchedNews = await fetch(
    `${CONSTANTS_FOR_SEARCH.URL_ARTICLES}?source=${sourceId}&apiKey=${CONSTANTS_FOR_SEARCH.API_KEY}`
  );
  const news = await fetchedNews.json();
  return news;
};
