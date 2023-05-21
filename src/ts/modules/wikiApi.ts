export { fetchTodaysEphemerides };

const wikiApi = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/events";

interface Ephemeris {
  year: string;
  text: string;
  pages: object[];
}

const reverseSortByYear = (a: Ephemeris, b: Ephemeris): number => {
  return Number(a.year) - Number(b.year);
};

const fetchTodaysEphemerides = async (): Promise<Ephemeris[]> => {
  const today = new Date();

  const wikiResponse = await fetch(`${wikiApi}/${today.getMonth()}/${today.getDay()}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const wikiJson = await wikiResponse.json();
  let wikiEvents: Ephemeris[] = wikiJson.events;
  return wikiEvents.sort(reverseSortByYear);
};
