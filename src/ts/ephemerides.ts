import { fetchTodaysEphemerides } from "./modules/wikiApi";

const todaysEvents = async () => {
  const elTodaysEvents = document.querySelector("#todays-events");
  elTodaysEvents.innerHTML = "Give me a sec...";

  const todaysEphemerides = await fetchTodaysEphemerides();

  elTodaysEvents.innerHTML = "";

  const elTemplate = document.getElementById("event-template") as HTMLTemplateElement;

  for (const ev of todaysEphemerides) {
    const { year, text } = ev;
    const elEvent = elTemplate.content.cloneNode(true) as HTMLElement;
    elEvent.querySelector(".title").innerHTML = year;
    elEvent.querySelector(".content").innerHTML = text;
    elTodaysEvents.appendChild(elEvent);
  }
};

window.addEventListener("load", todaysEvents);
