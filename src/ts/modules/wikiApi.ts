/**
 * Wikipedia API module - fetches historical events that occurred on today's date
 * @module wikiApi
 */

const wikiApi = 'https://en.wikipedia.org/api/rest_v1/feed/onthisday/events';

/**
 * Represents a historical event from Wikipedia
 */
export interface Ephemeris {
  year: string;
  text: string;
  pages: unknown[];
}

/**
 * Sorts ephemerides by year in ascending order
 * @param a - First ephemeris to compare
 * @param b - Second ephemeris to compare
 * @returns Negative if a is earlier, positive if b is earlier, 0 if equal
 */
const reverseSortByYear = (a: Ephemeris, b: Ephemeris): number => {
  return Number(a.year) - Number(b.year);
};

/**
 * Fetches historical events that occurred on today's date from Wikipedia API
 * @returns A promise that resolves to an array of historical events sorted by year
 * @throws {Error} If the Wikipedia API request fails
 */
export const fetchTodaysEphemerides = async (): Promise<Ephemeris[]> => {
  const today = new Date();

  const wikiResponse = await fetch(`${wikiApi}/${today.getMonth()}/${today.getDay()}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const wikiJson = await wikiResponse.json();
  const wikiEvents: Ephemeris[] = wikiJson.events;
  return wikiEvents.sort(reverseSortByYear);
};
