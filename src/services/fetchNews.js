import { CONSTANTS_FOR_SEARCH } from "../constants/constants";

/**
 * Fetches latest news from chosen news agency
 *
 * @param sourceId - news agency id
 */
export const fetchNews = async sourceId => {
  // https://newsapi.org/v1/articles?source=bbc-news&apiKey=1f0882f6c475413d8ac8df78882256dd
  const fetchedNews = await fetch(
    `${CONSTANTS_FOR_SEARCH.URL_ARTICLES}?source=${sourceId}&apiKey=${CONSTANTS_FOR_SEARCH.API_KEY}`
  );
  const news = await fetchedNews.json();
  return news;
};
