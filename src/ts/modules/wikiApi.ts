/**
 * Wikipedia API module - fetches historical events that occurred on today's date
 * @module wikiApi
 */

const wikiApi = 'https://en.wikipedia.org/api/rest_v1/feed/onthisday/events';

/**
 * Represents a historical event from Wikipedia
 */
export interface Ephemeris {
  year: number;
  text: string;
  pages: unknown[];
}

/**
 * Sorts ephemerides by year, oldest first
 * @param a - First ephemeris to compare
 * @param b - Second ephemeris to compare
 * @returns Negative if a is earlier, positive if b is earlier, 0 if equal
 */
const sortByYear = (a: Ephemeris, b: Ephemeris): number => {
  return a.year - b.year;
};

/**
 * Builds the `MM/DD` path the feed expects, using local date components so the
 * day does not shift for anyone west of UTC.
 * @param date - The date to look up
 * @returns The zero padded month and day, e.g. '08/30'
 */
export const buildDatePath = (date: Date): string => {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${month}/${day}`;
};

/**
 * Fetches historical events that occurred on today's date from Wikipedia API
 * @returns A promise that resolves to an array of historical events sorted by year
 * @throws {Error} If the Wikipedia API request fails or returns no events
 */
export const fetchTodaysEphemerides = async (): Promise<Ephemeris[]> => {
  const wikiResponse = await fetch(`${wikiApi}/${buildDatePath(new Date())}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!wikiResponse.ok) {
    throw new Error(`HTTP error! status: ${wikiResponse.status}`);
  }

  const wikiJson = await wikiResponse.json();
  if (!Array.isArray(wikiJson.events)) {
    throw new Error('Wikipedia response had no events');
  }

  const wikiEvents: Ephemeris[] = wikiJson.events;
  return [...wikiEvents].sort(sortByYear);
};
