import { fetchTodaysEphemerides } from "./modules/wikiApi";

async function todaysEvents() {
  const elTodaysEvents = document.querySelector("#todays-events");
  elTodaysEvents.innerHTML = "Give me a sec...";

  const todaysEphemerides = await fetchTodaysEphemerides();

  elTodaysEvents.innerHTML = "";

  const elTemplate = document.getElementById("event-template") as HTMLTemplateElement;

  for (let ev of todaysEphemerides) {
    let { year, text } = ev;
    let elEvent = elTemplate.content.cloneNode(true) as HTMLElement;
    elEvent.querySelector(".title").innerHTML = year;
    elEvent.querySelector(".content").innerHTML = text;
    elTodaysEvents.appendChild(elEvent);
  }
}

window.addEventListener("load", todaysEvents);
